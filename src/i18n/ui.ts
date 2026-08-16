export type Locale = "pt" | "en";

export const ui = {
  pt: {
    lang: "pt-BR",
    title: "myke matos",
    description:
      "founder e cto que leva problemas reais da restrição à operação.",
    heroName: "myke matos",
    rolePrimary: "founder / cto",
    roleSecondary: "product engineer",
    founderHeroTitleFirst: "construir é",
    founderHeroTitleSecond: "só metade.",
    founderHeroLead:
      "eu assumo problemas reais e confusos pelo ciclo inteiro: encontro a restrição, mudo o sistema, testo o caminho e coloco para funcionar.",
    trajectoryNav: "sobre",
    workNav: "home",

    articlesNav: "cases",
    caseIndexTitleFirst: "cases,",
    caseIndexTitleSecond: "restrições e sistemas.",
    caseIndexIntro:
      "cada artigo parte de um problema real e segue o mesmo ciclo: restrição, mudança no sistema, teste em uso, operação e limites da evidência. a arquitetura aparece como consequência dessas decisões.",
    caseMethodLabel: "cada case será lido por",
    caseMethod: ["problema real", "restrição", "mudança", "teste", "operação", "limites"],
    backHome: "voltar para a home",

    brandsLabel: "tecnologias relacionadas na stack de produto e operação",
    stackFocusLabel: "stack em foco",
    stackFocusNote: "ferramentas mudam. o ciclo permanece.",
    stackSelectedLabel: "selecionada",
    stackRelatedLabel: "tecnologia relacionada",
    workTitle: "trabalhos e evidências",
    caseArchitectureLabel: "arquitetura do case",
    workItems: [
      {
        label: "empresa",
        title: "triangulotec",
        copy: "produto, engenharia e operação.",
        headline: "produto do contexto à operação.",
        narrative: "a triangulotec é onde produto, engenharia e operação fazem parte da mesma responsabilidade.",
        architecture: ["contexto", "produto", "operação"],
      },
      {
        label: "cliente",
        title: "scapola comunica",
        copy: "produto e engenharia aplicados a uma operação real.",
        headline: "presença digital com continuidade.",
        narrative: "produto e engenharia trabalham juntos para que a entrega continue útil depois da publicação.",
        architecture: ["contexto", "produto web", "operação"],
      },
      {
        label: "produto próprio",
        title: "gastei",
        copy: "uma aposta própria para aproximar construção e distribuição.",
        headline: "construção e distribuição no mesmo produto.",
        narrative: "o gastei reúne experiência web, serviço de aplicação e dados num produto próprio em evolução.",
        architecture: ["web", "api", "dados + filas"],
      },
      {
        label: "ensino e pesquisa",
        title: "inclusão digital uemg",
        copy: "tecnologia construída com pessoas e contextos reais.",
        headline: "tecnologia que acompanha o ensino.",
        narrative: "o portal organiza conteúdo e acesso sem substituir o trabalho de quem conduz a aprendizagem.",
        architecture: ["conteúdo", "portal", "aprendizagem"],
      },
    ],
    trajectoryTitleFirst: "continuar não é",
    trajectoryTitleSecond: "repetir.",
    trajectoryCopy:
      "gosto de entender como as coisas funcionam e acompanhar uma ideia até ela encontrar pessoas de verdade. estudo sistemas de informação, pesquiso o uso de ia em análise qualitativa e construo produtos na triangulotec.",
    trajectoryNotes: [
      {
        label: "curiosidade",
        text: "gosto de abrir sistemas, entender por que funcionam e encontrar a restrição real.",
      },
      {
        label: "continuidade",
        text: "prefiro acompanhar uma ideia depois do primeiro lançamento e aprender com o uso.",
      },
      {
        label: "encontro",
        text: "produto, pesquisa e ensino me mantêm perto de pessoas e contextos diferentes.",
      },
    ],
    trajectoryNotesLabel: "o que atravessa meu trabalho",

    founderContactTitleFirst: "vamos",
    founderContactTitleSecond: "conversar.",
    founderContactCopy:
      "para trabalho, produto ou pesquisa.",
    directContactTitle: "conversa direta",
    pagesTitle: "trabalho público",
    contactEmailNote: "propostas, projetos e conversas com contexto.",
    contactLinkedinNote: "trajetória e rede profissional.",
    contactGithubNote: "código e projetos públicos.",
    contactLattesNote: "pesquisa, ensino e produção acadêmica.",
    contactCasesNote: "decisões, sistemas e limites.",
    heroStatement: "documenta decisões, trade-offs e limites.",
    heroContext:
      "a arquitetura abaixo vem de infra-examples: padrões, exemplos e mocks sanitizados. clique em qualquer sistema para ver decisões, limites e fontes — não uma topologia de produção.",
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
      "founder and cto taking real problems from constraint to operation.",
    heroName: "myke matos",
    rolePrimary: "founder / cto",
    roleSecondary: "product engineer",
    founderHeroTitleFirst: "building is",
    founderHeroTitleSecond: "only half.",
    founderHeroLead:
      "i take messy real-world problems through the whole loop: find the constraint, change the system, test the path, and make it run.",
    trajectoryNav: "about",
    workNav: "home",

    articlesNav: "cases",
    caseIndexTitleFirst: "cases,",
    caseIndexTitleSecond: "constraints and systems.",
    caseIndexIntro:
      "each article starts with a real problem and follows the same loop: constraint, system change, testing in use, operation and evidence limits. architecture appears as a consequence of those decisions.",
    caseMethodLabel: "each case will be read through",
    caseMethod: ["real problem", "constraint", "change", "test", "operation", "limits"],
    backHome: "back to home",

    brandsLabel: "related technologies across the product and operations stack",
    stackFocusLabel: "stack in focus",
    stackFocusNote: "tools change. the loop remains.",
    stackSelectedLabel: "selected",
    stackRelatedLabel: "related technology",
    workTitle: "work and evidence",
    caseArchitectureLabel: "case architecture",
    workItems: [
      {
        label: "company",
        title: "triangulotec",
        copy: "product, engineering and operations.",
        headline: "product from context to operations.",
        narrative: "triangulotec is where product, engineering and operations are part of the same responsibility.",
        architecture: ["context", "product", "operations"],
      },
      {
        label: "client",
        title: "scapola comunica",
        copy: "product and engineering applied to a real operation.",
        headline: "a digital presence built for continuity.",
        narrative: "product and engineering work together so the delivery remains useful after publication.",
        architecture: ["context", "web product", "operations"],
      },
      {
        label: "own product",
        title: "gastei",
        copy: "an independent bet that brings building and distribution closer.",
        headline: "building and distribution in one product.",
        narrative: "gastei brings together a web experience, application services and data in an evolving product of my own.",
        architecture: ["web", "api", "data + queues"],
      },
      {
        label: "teaching and research",
        title: "uemg digital inclusion",
        copy: "technology built with real people and contexts.",
        headline: "technology that supports teaching.",
        narrative: "the portal organizes content and access without replacing the work of the people guiding the learning experience.",
        architecture: ["content", "portal", "learning"],
      },
    ],
    trajectoryTitleFirst: "continuing is not",
    trajectoryTitleSecond: "repeating.",
    trajectoryCopy:
      "i like understanding how things work and following an idea until it meets real people. i study information systems, research the use of ai in qualitative analysis and build products at triangulotec.",
    trajectoryNotes: [
      {
        label: "curiosity",
        text: "i like opening systems up, understanding why they work and finding the real constraint.",
      },
      {
        label: "continuity",
        text: "i prefer following an idea beyond its first release and learning from use.",
      },
      {
        label: "encounter",
        text: "product, research and teaching keep me close to different people and contexts.",
      },
    ],
    trajectoryNotesLabel: "what runs through my work",

    founderContactTitleFirst: "let's",
    founderContactTitleSecond: "talk.",
    founderContactCopy:
      "for work, product or research.",
    directContactTitle: "direct conversation",
    pagesTitle: "public work",
    contactEmailNote: "proposals, projects and conversations with context.",
    contactLinkedinNote: "professional path and network.",
    contactGithubNote: "code and public projects.",
    contactLattesNote: "research, teaching and academic work.",
    contactCasesNote: "decisions, systems and boundaries.",
    heroStatement: "documents decisions, trade-offs and boundaries.",
    heroContext:
      "the architecture below comes from infra-examples: sanitized patterns, examples and mocks. click any system to see decisions, boundaries and sources — not a production topology.",
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
