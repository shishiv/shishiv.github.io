"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate } from "animejs";

interface GalaxyHeroProps {
  titleFirst: string;
  titleSecond: string;
  lead: string;
  brandsLabel: string;
  focusLabel: string;
  focusNote: string;
}

const stackNodes = [
  { id: "typescript", label: "TypeScript", src: "/stack/typescript.svg", color: "#3178c6", x: 520, y: 340 },
  { id: "react", label: "React", src: "/stack/react.svg", color: "#61dafb", x: 340, y: 185 },
  { id: "next", label: "Next.js", src: "/stack/nextdotjs.svg", color: "#f5f5f5", x: 660, y: 155 },
  { id: "nestjs", label: "NestJS", src: "/stack/nestjs.svg", color: "#e0234e", x: 715, y: 335 },
  { id: "postgresql", label: "PostgreSQL", src: "/stack/postgresql.svg", color: "#4169e1", x: 650, y: 530 },
  { id: "drizzle", label: "Drizzle", src: "/stack/drizzle.svg", color: "#c5f74f", x: 470, y: 555 },
  { id: "redis", label: "Redis", src: "/stack/redis.svg", color: "#ff4438", x: 820, y: 475 },
  { id: "docker", label: "Docker", src: "/stack/docker.svg", color: "#2496ed", x: 245, y: 485 },
  { id: "githubactions", label: "GitHub Actions", src: "/stack/githubactions.svg", color: "#2088ff", x: 205, y: 285 },
  { id: "go", label: "Go", src: "/stack/go.svg", color: "#00add8", x: 365, y: 385 },
] as const;

const stackEdges = [
  { from: "typescript", to: "react", bend: 22 },
  { from: "typescript", to: "nestjs", bend: -18 },
  { from: "react", to: "next", bend: 32 },
  { from: "nestjs", to: "drizzle", bend: 30 },
  { from: "nestjs", to: "redis", bend: -36 },
  { from: "drizzle", to: "postgresql", bend: 16 },
  { from: "githubactions", to: "docker", bend: -28 },
  { from: "githubactions", to: "next", bend: 68 },
  { from: "docker", to: "next", bend: 52 },
  { from: "docker", to: "nestjs", bend: 36 },
  { from: "docker", to: "go", bend: 18 },
] as const;

function buildCurve(
  start: { x: number; y: number },
  end: { x: number; y: number },
  bend: number,
) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const length = Math.hypot(dx, dy) || 1;
  const controlX = (start.x + end.x) / 2 + (-dy / length) * bend;
  const controlY = (start.y + end.y) / 2 + (dx / length) * bend;
  return `M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`;
}

export function GalaxyHero({
  titleFirst,
  titleSecond,
  lead,
  brandsLabel,
  focusLabel,
  focusNote,
}: GalaxyHeroProps) {
  const rootRef = useRef<HTMLElement>(null);
  const hasDrawnRef = useRef(false);
  const previousSelectedRef = useRef(0);
  const [selected, setSelected] = useState(0);
  const [preview, setPreview] = useState<number | null>(null);
  const [pinned, setPinned] = useState(false);
  const [visible, setVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const active = preview ?? selected;
  const activeNode = stackNodes[active];

  const nodeById = useMemo(() => new Map(stackNodes.map((node, index) => [node.id, { ...node, index }])), []);
  const relatedIds = useMemo(() => {
    const ids = new Set<string>([activeNode.id]);
    stackEdges.forEach(({ from, to }) => {
      if (from === activeNode.id) ids.add(to);
      if (to === activeNode.id) ids.add(from);
    });
    return ids;
  }, [activeNode.id]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sync = () => setPageVisible(document.visibilityState === "visible");
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  useEffect(() => {
    if (pinned || preview !== null || reducedMotion || !visible || !pageVisible) return;
    const timer = window.setInterval(() => setSelected((current) => (current + 1) % stackNodes.length), 3200);
    return () => window.clearInterval(timer);
  }, [pageVisible, pinned, preview, reducedMotion, visible]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const lines = root.querySelectorAll<SVGPathElement>(".stack-edge.active");
    const isAutomaticSelection = preview === null && !pinned && selected !== previousSelectedRef.current;
    const shouldDraw = !reducedMotion && preview === null && (!hasDrawnRef.current || isAutomaticSelection);

    previousSelectedRef.current = selected;

    if (!shouldDraw) {
      lines.forEach((line) => {
        line.style.strokeDasharray = "none";
        line.style.strokeDashoffset = "0";
      });
      return;
    }
    const animations: ReturnType<typeof animate>[] = [];
    lines.forEach((line, index) => {
      const length = line.getTotalLength();
      line.style.strokeDasharray = `${length}`;
      line.style.strokeDashoffset = `${length}`;
      animations.push(animate(line, {
        strokeDashoffset: [length, 0],
        opacity: [0.2, 1],
        delay: index * 45,
        duration: 420,
        ease: "outQuart",
      }));
    });
    hasDrawnRef.current = true;
    return () => animations.forEach((animation) => animation.pause());
  }, [active, pinned, preview, reducedMotion, selected]);

  return (
    <section className="founder-hero" ref={rootRef} aria-labelledby="founder-title">
      <div className="founder-hero-copy">
        <h1 className="founder-display-heading founder-hero-heading" id="founder-title">
          <span>{titleFirst}</span>
          <span>{titleSecond}</span>
        </h1>
        <p>{lead}</p>
      </div>

      <div
        className="founder-galaxy stack-galaxy"
        aria-label={brandsLabel}
      >
        <svg viewBox="0 0 900 700" role="group" aria-label={brandsLabel}>
          <ellipse className="founder-orbit founder-orbit-primary" cx="520" cy="340" rx="320" ry="210" transform="rotate(-18 520 340)" />
          <ellipse className="founder-orbit founder-orbit-secondary" cx="520" cy="340" rx="238" ry="310" transform="rotate(24 520 340)" />
          <ellipse className="founder-orbit founder-orbit-tertiary" cx="520" cy="340" rx="355" ry="118" transform="rotate(11 520 340)" />

          <g className="stack-edges" aria-hidden="true">
            {stackEdges.map(({ from, to, bend }) => {
              const start = nodeById.get(from)!;
              const end = nodeById.get(to)!;
              const isActive = from === activeNode.id || to === activeNode.id;
              return (
                <path
                  key={`${from}-${to}`}
                  className={`stack-edge ${isActive ? "active" : ""}`}
                  d={buildCurve(start, end, bend)}
                  style={isActive ? { stroke: activeNode.color, color: activeNode.color } : undefined}
                />
              );
            })}
          </g>

          <g className="stack-nodes">
            {stackNodes.map((node, index) => {
              const isActive = index === active;
              const isRelated = relatedIds.has(node.id);
              return (
                <g
                  key={node.id}
                  className={`stack-node ${isActive ? "active" : ""} ${isRelated ? "related" : "dimmed"}`}
                  transform={`translate(${node.x} ${node.y})`}
                  role="button"
                  tabIndex={0}
                  aria-label={`${node.label}: ${isActive ? "selecionada" : "tecnologia relacionada"}`}
                  onPointerEnter={() => setPreview(index)}
                  onPointerLeave={() => setPreview(null)}
                  onFocus={() => setPreview(index)}
                  onBlur={() => setPreview(null)}
                  onClick={() => {
                    setSelected(index);
                    setPinned(true);
                  }}
                  onKeyDown={(event) => {
                    if (event.key !== "Enter" && event.key !== " ") return;
                    event.preventDefault();
                    setSelected(index);
                    setPinned(true);
                  }}
                  style={{ color: node.color }}
                >
                  <circle className="stack-node-hit" r="52" />
                  <g className="stack-node-visual">
                    <circle className="stack-node-aura" r="42" />
                    <circle className="stack-node-orbit" r="31" />
                    <circle className="stack-node-dot" r="25" />
                    <image href={node.src} x="-16" y="-16" width="32" height="32" />
                  </g>
                  <text className="stack-node-label" y="45" textAnchor="middle">{node.label}</text>
                </g>
              );
            })}
          </g>
        </svg>
        <div className="stack-focus-readout" aria-hidden="true">
          <span>{focusLabel}</span>
          <strong>{activeNode.label}</strong>
          <small>{focusNote}</small>
        </div>
        <span className="visually-hidden" role="status" aria-live="polite">{activeNode.label}</span>
      </div>
    </section>
  );
}