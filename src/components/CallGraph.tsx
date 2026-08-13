"use client";

import { useEffect, useRef, useCallback } from "react";
import { animate } from "animejs";
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
  const prevActive = useRef<string | null>(null);

  // Animate on node activation change - the ONE authored moment
  useEffect(() => {
    if (!svgRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const svg = svgRef.current;

    if (activeNode && activeNode !== prevActive.current) {
      // Pulse the active node's rect: brief scale bump
      const nodeEl = svg.querySelector(`[data-node-id="${activeNode}"] rect`);
      if (nodeEl) {
        animate(nodeEl, {
          strokeWidth: [1.5, 3, 2],
          duration: 350,
          ease: "outExpo",
        });
      }

      // Connected edges: quick stroke-width pulse showing flow
      const connectedEdges = svg.querySelectorAll(
        `[data-edge-from="${activeNode}"], [data-edge-to="${activeNode}"]`
      );
      if (connectedEdges.length) {
        animate(connectedEdges, {
          strokeWidth: [1.5, 3, 2.5],
          duration: 400,
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

      {/* Edges - visible from the start, with subtle flow animation via CSS */}
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

      {/* Nodes - always visible, no entrance animation */}
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
