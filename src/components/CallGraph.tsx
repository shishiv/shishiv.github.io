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

export function CallGraph({ locale, edgeLabels, onNodeSelect, activeNode }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const hasAnimated = useRef(false);

  // Entrance animation with anime.js v4
  useEffect(() => {
    if (hasAnimated.current || !svgRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      svgRef.current.querySelectorAll(".edge-label").forEach((el) => {
        el.classList.add("visible");
      });
      hasAnimated.current = true;
      return;
    }

    hasAnimated.current = true;
    const svg = svgRef.current;

    // Set initial states
    const edgePaths = svg.querySelectorAll<SVGPathElement>(".graph-edge");
    edgePaths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    const nodeGroups = svg.querySelectorAll<SVGGElement>(".graph-node");
    nodeGroups.forEach((g) => {
      g.style.opacity = "0";
    });

    const labels = svg.querySelectorAll<SVGTextElement>(".edge-label");

    // Create timeline for orchestrated entrance
    const tl = createTimeline({
      defaults: { ease: "outQuart" },
    });

    // 1. Nodes fade in with stagger
    tl.add(nodeGroups, {
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 450,
      delay: stagger(90),
    }, 100);

    // 2. Edges draw themselves
    tl.add(edgePaths, {
      strokeDashoffset: 0,
      duration: 700,
      delay: stagger(100),
    }, 400);

    // 3. Labels fade in
    tl.add(labels, {
      opacity: [0, 1],
      duration: 350,
      delay: stagger(50),
      onBegin: () => labels.forEach((l) => l.classList.add("visible")),
    }, 900);
  }, []);

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
      role="img"
      aria-label="architecture graph"
    >
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" className="graph-arrowhead" />
        </marker>
        <marker id="ah-active" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" className="graph-arrowhead highlighted" />
        </marker>
      </defs>

      {/* Edges */}
      {edges.map((edge) => {
        const mid = getMidpoint(edge.from, edge.to);
        const label = edgeLabels[edge.id] || "";
        const isHighlighted = activeNode ? edge.id.includes(activeNode) : false;
        return (
          <g key={edge.id}>
            <path
              className={`graph-edge ${isHighlighted ? "highlighted" : ""}`}
              d={buildPath(edge.from, edge.to)}
              markerEnd={isHighlighted ? "url(#ah-active)" : "url(#ah)"}
            />
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
