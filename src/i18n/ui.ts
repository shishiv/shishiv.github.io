export type Locale = "pt" | "en";

export const LOCALES: Locale[] = ["pt", "en"];

export const ui = {
  pt: {
    title: "myke matos · engenheiro full-stack e de plataforma",
    description:
      "linha de custódia do trabalho de myke matos: sistemas em produção, código aberto e cliente real. o que é público traz link conferível; o que é privado diz que é privado.",
    registry: "registro de sistemas",
    tally: (open: number, total: number) => `${total} · ${open} abríveis agora`,
    fray: "sem métrica de escala · sem depoimento · sem investimento",
    network: "um nó aberto · a rede inteira vive em /rede",
    education: "sistemas de informação · UEMG frutal · 6º período",
    training: "AWS Academy Cloud Foundations 2025",
    langLabel: "idioma",
    skipToRegistry: "pular para o registro de sistemas",
    spineLabel:
      "linha do tempo do trabalho de myke matos, de 2024 até hoje, com um nó expandido",
    privateCode: "código privado",
    spineTitle: "linha de custódia",
    posts: "escrita",
    postsEmpty: "primeiro post a caminho. é aqui que vão entrar extensão, pesquisa e nota de arquitetura.",
  },
  en: {
    title: "myke matos · full-stack and platform engineer",
    description:
      "chain of custody for myke matos's work: systems in production, open source and a real client. public work carries a checkable link; private work says it is private.",
    registry: "systems registry",
    tally: (open: number, total: number) => `${total} · ${open} openable right now`,
    fray: "no scale metrics · no testimonials · no funding",
    network: "one node expanded · the full network lives at /rede",
    education: "information systems · UEMG frutal · 6th semester",
    training: "AWS Academy Cloud Foundations 2025",
    langLabel: "language",
    skipToRegistry: "skip to the systems registry",
    spineLabel:
      "timeline of myke matos's work, from 2024 to today, with one node expanded",
    privateCode: "private codebase",
    spineTitle: "chain of custody",
    posts: "writing",
    postsEmpty: "first post on the way. university extension, research and architecture notes land here.",
  },
} as const;

export function useUi(locale: Locale) {
  return ui[locale];
}
