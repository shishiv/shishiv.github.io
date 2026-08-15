"use client";

import { useEffect, useRef, useCallback } from "react";
import { animate, stagger, createTimeline } from "animejs";
import { edges, positions } from "@/data/graph";
import infra from "@/data/infra.json";
import type { Locale } from "@/i18n/ui";

interface Props {
  locale: Locale;
  edgeLabels: Record<string, string>;
  onNodeSelect: (id: string | null) => void;
  activeNode: string | null;
}

function getCenter(id: string) {
  const pos = positions.find((p) => p.id === id);
  if (!pos) return { x: 0, y: 0 };
  return { x: pos.x * 10, y: pos.y * 6.2 };
}

function buildPath(fromId: string, toId: string) {
  const from = getCenter(fromId);
  const to = getCenter(toId);
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  const ox = (-dy / len) * 18;
  const oy = (dx / len) * 18;
  const cx = (from.x + to.x) / 2 + ox;
  const cy = (from.y + to.y) / 2 + oy;
  return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
}

function getMidpoint(fromId: string, toId: string) {
  const from = getCenter(fromId);
  const to = getCenter(toId);
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  const ox = (-dy / len) * 18;
  const oy = (dx / len) * 18;
  const mx = 0.25 * from.x + 0.5 * ((from.x + to.x) / 2 + ox) + 0.25 * to.x;
  const my = 0.25 * from.y + 0.5 * ((from.y + to.y) / 2 + oy) + 0.25 * to.y;
  return { x: mx, y: my };
}

/**
 * Topological order for the reveal animation.
 * Systems appear in dependency order: foundation first, dependents after.
 */
const REVEAL_ORDER = [
  { nodeId: "bash-ops", delay: 0 },
  { nodeId: "github-actions", delay: 400 },
  { nodeId: "docker-swarm", delay: 700 },
  { nodeId: "playwright", delay: 900 },
  { nodeId: "nextjs", delay: 1200 },
  { nodeId: "drizzle", delay: 1500 },
];

export function CallGraph({ locale, edgeLabels, onNodeSelect, activeNode }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const hasAnimated = useRef(false);
  const prevActive = useRef<string | null>(null);

  // Topology-ordered reveal animation
  useEffect(() => {
    if (hasAnimated.current || !svgRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      hasAnimated.current = true;
      return;
    }
    hasAnimated.current = true;
    const svg = svgRef.current;

    // Hide everything initially
    const nodeEls = svg.querySelectorAll<SVGGElement>(".graph-node");
    const edgeEls = svg.querySelectorAll<SVGPathElement>(".graph-edge");
    const labelEls = svg.querySelectorAll<SVGTextElement>(".edge-label");
    const particleEls = svg.querySelectorAll<SVGCircleElement>(".flow-particle");

    nodeEls.forEach((n) => { n.style.opacity = "0"; });
    edgeEls.forEach((e) => {
      const len = e.getTotalLength();
      e.style.strokeDasharray = `${len}`;
      e.style.strokeDashoffset = `${len}`;
    });
    labelEls.forEach((l) => { l.style.opacity = "0"; });
    particleEls.forEach((p) => { p.style.opacity = "0"; });

    // Reveal nodes in topological order
    REVEAL_ORDER.forEach(({ nodeId, delay }) => {
      const node = svg.querySelector(`[data-node-id="${nodeId}"]`) as SVGGElement;
      if (!node) return;

      animate(node, {
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 400,
        delay,
        ease: "outExpo",
      });

      // Draw outgoing edges when the source node appears
      const outEdges = svg.querySelectorAll<SVGPathElement>(
        `[data-edge-from="${nodeId}"]`
      );
      outEdges.forEach((edge, i) => {
        animate(edge, {
          strokeDashoffset: [edge.getTotalLength(), 0],
          duration: 600,
          delay: delay + 200 + i * 100,
          ease: "outQuart",
        });
      });
    });

    // Labels fade in after structure is built
    animate(labelEls, {
      opacity: [0, 1],
      duration: 300,
      delay: stagger(40, { start: 1800 }),
      ease: "outCubic",
    });

    // Start flow particles after reveal completes
    setTimeout(() => {
      particleEls.forEach((p) => { p.style.opacity = "1"; });
      startFlowParticles(svg);
    }, 2200);
  }, []);

  // Interaction animation on node activation
  useEffect(() => {
    if (!svgRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const svg = svgRef.current;

    if (activeNode && activeNode !== prevActive.current) {
      // Pulse connected edges
      const connected = svg.querySelectorAll(
        `[data-edge-from="${activeNode}"], [data-edge-to="${activeNode}"]`
      );
      animate(connected, {
        strokeWidth: [1.5, 3.5, 2.5],
        duration: 450,
        ease: "outExpo",
      });

      // Scale pulse on active node
      const nodeRect = svg.querySelector(`[data-node-id="${activeNode}"] rect`);
      if (nodeRect) {
        animate(nodeRect, {
          strokeWidth: [1.5, 3, 2],
          duration: 350,
          ease: "outExpo",
        });
      }
    }
    prevActive.current = activeNode;
  }, [activeNode]);

  const handleNodeClick = useCallback(
    (id: string) => {
      onNodeSelect(activeNode === id ? null : id);
    },
    [activeNode, onNodeSelect]
  );

  const w = 160;
  const h = 56;

  return (
    <svg
      ref={svgRef}
      className="callgraph"
      viewBox="0 0 1000 480"
      preserveAspectRatio="xMidYMid meet"
      role="group"
      aria-label="architecture graph"
    >
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" className="graph-arrowhead" />
        </marker>
        <marker id="ah-active" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" className="graph-arrowhead highlighted" />
        </marker>
      </defs>

      {/* Edges */}
      {edges.map((edge) => {
        const mid = getMidpoint(edge.from, edge.to);
        const label = edgeLabels[edge.id] || "";
        const isHighlighted = activeNode
          ? edge.from === activeNode || edge.to === activeNode
          : false;
        return (
          <g key={edge.id}>
            <path
              className={`graph-edge ${isHighlighted ? "highlighted" : ""}`}
              d={buildPath(edge.from, edge.to)}
              markerEnd={isHighlighted ? "url(#ah-active)" : "url(#ah)"}
              data-edge-from={edge.from}
              data-edge-to={edge.to}
            />
            {/* Flow particle - travels along the edge path */}
            <circle
              className="flow-particle"
              r="1.5"
              data-particle-edge={edge.id}
            >
              <animateMotion
                dur={`${3 + Math.random() * 2}s`}
                repeatCount="indefinite"
                path={buildPath(edge.from, edge.to)}
              />
            </circle>
            {label && (
              <text
                className={`edge-label ${isHighlighted ? "highlighted" : ""}`}
                x={mid.x}
                y={mid.y - 6}
                textAnchor="middle"
              >
                {label}
              </text>
            )}
          </g>
        );
      })}

      {/* Nodes */}
      {positions.map((pos) => {
        const item = infra.find((i) => i.id === pos.id);
        const name = item?.name || pos.id;
        const title = (item?.title as Record<string, string>)?.[locale] || "";
        const cx = pos.x * 10;
        const cy = pos.y * 6.2;
        const isActive = activeNode === pos.id;

        return (
          <g
            key={pos.id}
            className={`graph-node ${isActive ? "active" : ""}`}
            data-node-id={pos.id}
            tabIndex={0}
            role="button"
            aria-expanded={isActive}
            aria-label={`${name}: ${title}`}
            onClick={() => handleNodeClick(pos.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleNodeClick(pos.id);
              }
            }}
          >
            <rect x={cx - w / 2} y={cy - h / 2} width={w} height={h} />
            <text className="node-name" x={cx} y={cy - 4} textAnchor="middle">
              {name}
            </text>
            <text className="node-title" x={cx} y={cy + 14} textAnchor="middle">
              {title.length > 28 ? title.slice(0, 26) + "\u2026" : title}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/**
 * Start continuous flow particles on all edges.
 * Each particle travels along its edge path showing data flow direction.
 */
function startFlowParticles(svg: SVGSVGElement) {
  // The SVG animateMotion handles continuous flow.
  // This function adds a second, offset particle per edge for density.
  const edgePaths = svg.querySelectorAll<SVGPathElement>(".graph-edge");
  edgePaths.forEach((path) => {
    const d = path.getAttribute("d");
    if (!d) return;
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", "1.2");
    circle.setAttribute("class", "flow-particle flow-particle-secondary");
    const motion = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
    motion.setAttribute("dur", `${4 + Math.random() * 2}s`);
    motion.setAttribute("repeatCount", "indefinite");
    motion.setAttribute("path", d);
    motion.setAttribute("begin", `${1 + Math.random()}s`);
    circle.appendChild(motion);
    path.parentElement?.appendChild(circle);
  });
}
