export type Locale = "pt" | "en";

export const ui = {
  pt: {
    lang: "pt-BR",
    title: "myke matos",
    description:
      "full-stack developer que projeta, entrega e opera sistemas reais. prova via infra-examples.",
    heroName: "myke matos",
    heroStatement: "projeta, entrega e opera sistemas reais.",
    heroContext:
      "a arquitetura abaixo vem de infra-examples: recortes sanitizados de infraestrutura real. clique em qualquer sistema para ver as decisoes, os limites e a fonte.",
    skipToContent: "pular para o conteudo",
    primaryNav: "navegacao principal",
    graphNav: "arquitetura",
    limitsNav: "limites",
    contactNav: "contato",
    graphTitle: "como os sistemas se conectam",
    decisionsLabel: "decisoes",
    boundaryLabel: "limite",
    readSource: "ler fonte",
    closeDetail: "fechar",
    edgeLabels: {
      "bash-ops→github-actions": "bootstrap de runner",
      "bash-ops→docker-swarm": "opera deploy",
      "github-actions→docker-swarm": "publica imagem",
      "github-actions→playwright": "roda testes",
      "playwright→nextjs": "testa contrato",
      "nextjs→drizzle": "camada de dados",
    },
    limitsTitle: "o que esta pagina nao afirma",
    limitsIntro:
      "o repositorio foi preparado para uma superficie publica. ele explica padroes; nao transforma placeholders em acesso.",
    limitations: [
      {
        title: "sem topologia privada",
        text: "hosts internos, IPs, credenciais, dados de cliente e estado de runtime ficam fora do material publico.",
        sourceLabel: "SECURITY.md",
        sourceHref:
          "https://github.com/shishiv/infra-examples/blob/c0469a25a6602399ba2107cee5d42d48d12e4c31/SECURITY.md",
      },
      {
        title: "sem promessa de deploy",
        text: "os exemplos sao sanitizados e portaveis. uma configuracao real exige revisao do ambiente, seguranca e observabilidade.",
        sourceLabel: "README.md",
        sourceHref:
          "https://github.com/shishiv/infra-examples/blob/c0469a25a6602399ba2107cee5d42d48d12e4c31/README.md",
      },
      {
        title: "sem metrica inventada",
        text: "esta pagina nao adiciona escala, uptime, clientes ou resultado que o material publico nao demonstra.",
        sourceLabel: "README.md + SECURITY.md",
        sourceHref:
          "https://github.com/shishiv/infra-examples/blob/c0469a25a6602399ba2107cee5d42d48d12e4c31/README.md",
      },
    ],
    contactTitle: "vamos conversar sobre trabalho remoto",
    contactCopy:
      "o codigo esta no GitHub. para falar sobre uma posicao concreta, mande um e-mail.",
    emailLabel: "e-mail",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    sourceLabel: "infra-examples",
    footerNote: "conteudo factual ancorado em infra-examples, commit c0469a25.",
  },
  en: {
    lang: "en",
    title: "myke matos",
    description:
      "full-stack developer who designs, delivers and operates real systems. proof via infra-examples.",
    heroName: "myke matos",
    heroStatement: "designs, delivers and operates real systems.",
    heroContext:
      "the architecture below comes from infra-examples: sanitized excerpts from real infrastructure. click any system to see its decisions, boundaries and source.",
    skipToContent: "skip to content",
    primaryNav: "primary navigation",
    graphNav: "architecture",
    limitsNav: "limits",
    contactNav: "contact",
    graphTitle: "how the systems connect",
    decisionsLabel: "decisions",
    boundaryLabel: "boundary",
    readSource: "read source",
    closeDetail: "close",
    edgeLabels: {
      "bash-ops→github-actions": "runner bootstrap",
      "bash-ops→docker-swarm": "operates deploy",
      "github-actions→docker-swarm": "publishes image",
      "github-actions→playwright": "runs tests",
      "playwright→nextjs": "tests contract",
      "nextjs→drizzle": "data layer",
    },
    limitsTitle: "what this page does not claim",
    limitsIntro:
      "the repository was prepared for a public surface. it explains patterns; it does not turn placeholders into access.",
    limitations: [
      {
        title: "no private topology",
        text: "internal hosts, IPs, credentials, client data and runtime state stay outside the public material.",
        sourceLabel: "SECURITY.md",
        sourceHref:
          "https://github.com/shishiv/infra-examples/blob/c0469a25a6602399ba2107cee5d42d48d12e4c31/SECURITY.md",
      },
      {
        title: "no deployment promise",
        text: "the examples are sanitized and portable. a real configuration still needs environment, security and observability review.",
        sourceLabel: "README.md",
        sourceHref:
          "https://github.com/shishiv/infra-examples/blob/c0469a25a6602399ba2107cee5d42d48d12e4c31/README.md",
      },
      {
        title: "no invented metrics",
        text: "this page adds no scale, uptime, clients or outcome that the public material does not demonstrate.",
        sourceLabel: "README.md + SECURITY.md",
        sourceHref:
          "https://github.com/shishiv/infra-examples/blob/c0469a25a6602399ba2107cee5d42d48d12e4c31/README.md",
      },
    ],
    contactTitle: "let's talk about remote work",
    contactCopy:
      "the code is on GitHub. to talk about a concrete position, send an email.",
    emailLabel: "email",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    sourceLabel: "infra-examples",
    footerNote: "factual content anchored in infra-examples, commit c0469a25.",
  },
} as const;

export function useUi(locale: Locale) {
  return ui[locale];
}
