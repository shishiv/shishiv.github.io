/**
 * geometria da linha de custódia.
 *
 * duas regras de mundo vivem aqui, e as duas foram acordadas com o usuário:
 *
 * 1. o tempo comprime de forma não-linear. o período corrente ocupa mais fita
 *    que os anteriores, do jeito que uma linha de custódia de arquivo se
 *    comporta: o recente é denso, a origem é um traço.
 * 2. nenhum evento pode encostar no vizinho. compressão honesta produz
 *    sobreposição no começo da linha, então depois de posicionar por tempo a
 *    gente empurra os nós até respeitar um vão mínimo. a ordem cronológica
 *    nunca é violada; só a proporção cede, e só onde a leitura exigiria.
 */

export type Proof = "full" | "thin";

export type Localized = string | { pt: string; en: string };

export interface ClusterNode {
  id: string;
  title: Localized;
  tech: Localized;
  ring: number;
  lane: number;
  from?: string;
  checkable?: boolean;
  href?: string;
}

export interface PortfolioEvent {
  id: string;
  /** "YYYY-MM" */
  date: string;
  proof: Proof;
  open?: boolean;
  title: Localized;
  tech: Localized;
  meta?: Localized;
  href?: string;
  cluster?: ClusterNode[];
}

export interface PlacedEvent extends PortfolioEvent {
  /** posição vertical final, em unidades do viewBox */
  y: number;
  /** x da fita naquele y */
  x: number;
}

export interface SpineOptions {
  top: number;
  bottom: number;
  /** vão mínimo entre dois nós, em unidades do viewBox */
  minGap: number;
  /** vão mínimo reservado abaixo de um nó aberto, para o cluster caber */
  openGap: number;
  /** expoente da compressão. 1 = linear. acima de 1 comprime o passado. */
  curve: number;
}

export const SPINE_DEFAULTS: SpineOptions = {
  top: 52,
  bottom: 790,
  minGap: 62,
  openGap: 76,
  curve: 1.9,
};

/** "2025-07" -> 24307, em meses desde o ano 0. ordenável e subtraível. */
export function monthIndex(date: string): number {
  const [y, m] = date.split("-").map(Number);
  if (!Number.isFinite(y) || !Number.isFinite(m)) {
    throw new Error(`data inválida: "${date}". o formato é YYYY-MM.`);
  }
  return y * 12 + (m - 1);
}

/**
 * a fita não é reta: ela desvia duas vezes, e o desvio é suave.
 * x(y) é a fonte única da geometria, então nó, vinco e traçado nunca divergem.
 */
const JOGS = [
  { from: 150, to: 214, x: 86, next: 118 },
  { from: 540, to: 610, x: 118, next: 92 },
] as const;

const X_START = 86;
const X_END = 92;

function smoothstep(t: number): number {
  const c = Math.min(1, Math.max(0, t));
  return c * c * (3 - 2 * c);
}

export function ribbonX(y: number): number {
  if (y <= JOGS[0].from) return X_START;
  for (const jog of JOGS) {
    if (y < jog.from) return jog.x;
    if (y <= jog.to) {
      return jog.x + (jog.next - jog.x) * smoothstep((y - jog.from) / (jog.to - jog.from));
    }
  }
  return X_END;
}

/** traçado amostrado a partir de ribbonX, para o desenho seguir a mesma verdade. */
export function ribbonPath(top: number, bottom: number, step = 2): string {
  const points: string[] = [];
  for (let y = top; y <= bottom; y += step) {
    points.push(`${ribbonX(y).toFixed(2)},${y.toFixed(1)}`);
  }
  const last = bottom;
  points.push(`${ribbonX(last).toFixed(2)},${last.toFixed(1)}`);
  return `M${points.join(" L")}`;
}

/**
 * posiciona os eventos: compressão não-linear primeiro, vão mínimo depois.
 * lança se os eventos não couberem, em vez de empilhar em silêncio — um limite
 * que dá para encostar é um limite que precisa se anunciar.
 */
export function placeEvents(
  events: PortfolioEvent[],
  options: Partial<SpineOptions> = {},
): PlacedEvent[] {
  const opts = { ...SPINE_DEFAULTS, ...options };
  if (events.length === 0) return [];

  const sorted = [...events].sort((a, b) => monthIndex(a.date) - monthIndex(b.date));
  const first = monthIndex(sorted[0].date);
  const last = monthIndex(sorted[sorted.length - 1].date);
  const span = Math.max(1, last - first);
  const height = opts.bottom - opts.top;

  const gapAfter = (event: PortfolioEvent) => (event.open ? opts.openGap : opts.minGap);

  const required = sorted
    .slice(0, -1)
    .reduce((total, event) => total + gapAfter(event), 0);
  if (required > height) {
    throw new Error(
      `a fita não cabe: ${sorted.length} eventos exigem ${required}px de vão mínimo ` +
        `e a faixa disponível é ${height}px. aumente a altura do viewBox, ` +
        `reduza minGap (${opts.minGap}) ou mova eventos para dentro de um cluster.`,
    );
  }

  // 1. tempo comprimido
  const placed = sorted.map((event) => {
    const t = (monthIndex(event.date) - first) / span;
    return { event, y: opts.top + Math.pow(t, opts.curve) * height };
  });

  // 2. empurra para frente até respeitar o vão
  for (let i = 1; i < placed.length; i++) {
    const need = placed[i - 1].y + gapAfter(placed[i - 1].event);
    if (placed[i].y < need) placed[i].y = need;
  }

  // 3. se estourou o fim, desloca o conjunto uma vez e só depois aperta.
  //    deslocar dentro do mesmo laço que aperta desconta o vizinho duas vezes
  //    e joga os primeiros eventos para fora da folha.
  const overflow = placed[placed.length - 1].y - opts.bottom;
  if (overflow > 0) {
    for (const item of placed) item.y -= overflow;
    for (let i = placed.length - 1; i > 0; i--) {
      const ceiling = placed[i].y - gapAfter(placed[i - 1].event);
      if (placed[i - 1].y > ceiling) placed[i - 1].y = ceiling;
    }
    const lift = opts.top - placed[0].y;
    // tolerância de meio pixel: ponto flutuante não é motivo para quebrar build
    if (lift > 0.5) {
      // a capacidade já foi verificada acima, então isto não deveria ocorrer.
      // se ocorrer, o erro fala em vez de desenhar fora da folha.
      throw new Error(
        `a fita saiu da folha por ${lift.toFixed(1)}px depois do ajuste de transbordo. ` +
          `revise minGap (${opts.minGap}), openGap (${opts.openGap}) ou a faixa ${opts.top}–${opts.bottom}.`,
      );
    }
  }

  return placed.map(({ event, y }) => ({ ...event, y, x: ribbonX(y) }));
}

/**
 * o cluster de um nó aberto é uma grade, não um leque: x pelo anel, y pela
 * faixa. grade permite aresta em cotovelo, e cotovelo nunca cruza rótulo.
 */
export const CLUSTER = {
  ring: 152,
  lanes: [-32, 32],
} as const;

export function placeCluster(node: PlacedEvent, hubX: number, hubY: number) {
  return (node.cluster ?? []).map((item) => ({
    ...item,
    x: hubX + item.ring * CLUSTER.ring,
    y: hubY + (CLUSTER.lanes[item.lane] ?? 0),
  }));
}

/** resolve um campo bilíngue. */
export function t(value: Localized, locale: "pt" | "en"): string {
  return typeof value === "string" ? value : value[locale];
}
