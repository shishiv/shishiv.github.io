export type Locale = "pt" | "en";

export const ui = {
  pt: {
    lang: "pt-BR",
    title: "myke matos · infraestrutura e software",
    description:
      "um perfil público guiado por infra-examples: decisões de deploy, build, cache, dados, testes e operação, com fonte para cada registro.",
    eyebrow: "perfil público / infraestrutura",
    heroTitle: "infraestrutura que deixa o próximo passo claro.",
    heroCopy:
      "eu construo software e mantenho a operação legível: o manifesto limita a imagem, a configuração fica fora do código, o cache declara sua fronteira e a falha deixa evidência.",
    sourceIntro: "a fonte desta página é",
    sourceDescription: "infra-examples, recortes sanitizados derivados de infraestrutura real.",
    primaryNav: "navegação principal",
    mapNav: "mapa",
    limitsNav: "limites",
    contactNav: "contato",
    mapKicker: "registros / por ferramenta",
    mapTitle: "o que eu construo e mantenho",
    mapIntro:
      "não é uma lista de tecnologias. cada registro aponta para a ferramenta, a decisão e o limite que o código público consegue sustentar.",
    decisionsLabel: "decisões",
    boundaryLabel: "limite",
    readSource: "ler fonte",
    skipToContent: "pular para o conteúdo",
    limitsKicker: "escopo / sem atalho",
    limitsTitle: "o que esta página não afirma",
    limitsIntro:
      "o repositório foi preparado para uma superfície pública. ele explica padrões; não transforma placeholders em acesso à infraestrutura.",
    limitations: [
      {
        title: "sem topologia privada",
        text: "hosts internos, IPs operacionais, credenciais, dados de cliente e estado de runtime ficam fora do material público.",
        sourceLabel: "SECURITY.md",
        sourceHref:
          "https://github.com/shishiv/infra-examples/blob/c0469a25a6602399ba2107cee5d42d48d12e4c31/SECURITY.md",
      },
      {
        title: "sem promessa de deploy",
        text: "os exemplos são sanitizados e portáveis. uma configuração real ainda exige revisão do ambiente, segurança, legal copy e observabilidade.",
        sourceLabel: "README.md",
        sourceHref:
          "https://github.com/shishiv/infra-examples/blob/c0469a25a6602399ba2107cee5d42d48d12e4c31/README.md",
      },
      {
        title: "sem métrica inventada",
        text: "esta página não adiciona escala, uptime, clientes ou resultado que o material público não demonstra.",
        sourceLabel: "README.md + SECURITY.md",
        sourceHref:
          "https://github.com/shishiv/infra-examples/blob/c0469a25a6602399ba2107cee5d42d48d12e4c31/README.md",
      },
    ],
    contactKicker: "contato / leitura pública",
    contactTitle: "se quiser ler o recorte inteiro",
    contactCopy:
      "o código está no GitHub. para falar sobre um trabalho concreto, mande uma mensagem.",
    emailLabel: "e-mail",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    footerNote: "conteúdo factual ancorado em infra-examples.",
  },
  en: {
    lang: "en",
    title: "myke matos · infrastructure and software",
    description:
      "a public profile guided by infra-examples: deployment, build, cache, data, testing and operations decisions, with a source for every record.",
    eyebrow: "public profile / infrastructure",
    heroTitle: "infrastructure that makes the next step clear.",
    heroCopy:
      "i build software and keep its operation legible: the manifest constrains the image, configuration stays out of code, cache declares its boundary, and failure leaves evidence.",
    sourceIntro: "this page is sourced from",
    sourceDescription: "infra-examples, sanitized excerpts derived from real infrastructure.",
    primaryNav: "primary navigation",
    mapNav: "map",
    limitsNav: "limits",
    contactNav: "contact",
    mapKicker: "records / by tool",
    mapTitle: "what i build and maintain",
    mapIntro:
      "this is not a technology list. each record points to the tool, the decision and the boundary that the public code can support.",
    decisionsLabel: "decisions",
    boundaryLabel: "boundary",
    readSource: "read source",
    skipToContent: "skip to content",
    limitsKicker: "scope / no shortcut",
    limitsTitle: "what this page does not claim",
    limitsIntro:
      "the repository was prepared for a public surface. it explains patterns; it does not turn placeholders into infrastructure access.",
    limitations: [
      {
        title: "no private topology",
        text: "internal hosts, operational IPs, credentials, client data and runtime state stay outside the public material.",
        sourceLabel: "SECURITY.md",
        sourceHref:
          "https://github.com/shishiv/infra-examples/blob/c0469a25a6602399ba2107cee5d42d48d12e4c31/SECURITY.md",
      },
      {
        title: "no deployment promise",
        text: "the examples are sanitized and portable. a real configuration still needs environment, security, legal-copy and observability review.",
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
    contactKicker: "contact / public reading",
    contactTitle: "if you want to read the full excerpt",
    contactCopy: "the code is on GitHub. to talk about a concrete piece of work, send a message.",
    emailLabel: "email",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    footerNote: "factual content anchored in infra-examples.",
  },
} as const;

export function useUi(locale: Locale) {
  return ui[locale];
}
