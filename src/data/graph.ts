/**
 * Graph topology: real dependencies between infra-examples subsystems.
 * Each edge represents a concrete operational relationship.
 */
export interface GraphEdge {
  from: string;
  to: string;
  id: string;
}

export const edges: GraphEdge[] = [
  { from: "bash-ops", to: "github-actions", id: "bash-ops→github-actions" },
  { from: "bash-ops", to: "docker-swarm", id: "bash-ops→docker-swarm" },
  { from: "github-actions", to: "docker-swarm", id: "github-actions→docker-swarm" },
  { from: "github-actions", to: "playwright", id: "github-actions→playwright" },
  { from: "playwright", to: "nextjs", id: "playwright→nextjs" },
  { from: "nextjs", to: "drizzle", id: "nextjs→drizzle" },
];

/**
 * Node positions in the graph (percentage of container).
 * Layout optimized for reading flow: operations → CI → deploy/test → app → data.
 */
export interface NodePosition {
  id: string;
  x: number;
  y: number;
}

export const positions: NodePosition[] = [
  { id: "bash-ops", x: 14, y: 18 },
  { id: "github-actions", x: 50, y: 12 },
  { id: "docker-swarm", x: 86, y: 28 },
  { id: "playwright", x: 22, y: 52 },
  { id: "nextjs", x: 56, y: 56 },
  { id: "drizzle", x: 86, y: 66 },
];
