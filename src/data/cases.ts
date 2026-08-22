import type { Locale } from "@/i18n/ui";

export type CaseSlug = "educa" | "inclusao-digital" | "infra-examples";

type LocalizedText = Record<Locale, string>;

export interface CaseEvidence {
  label: LocalizedText;
  href: string;
  kind: "live" | "source" | "receipt";
}

export interface PortfolioCase {
  slug: CaseSlug;
  featured: boolean;
  title: string;
  eyebrow: LocalizedText;
  status: LocalizedText;
  thesis: LocalizedText;
  summary: LocalizedText;
  role: LocalizedText;
  problem: LocalizedText;
  decision: LocalizedText;
  built: LocalizedText;
  observed: LocalizedText;
  limit: LocalizedText;
  architecture: Record<Locale, readonly string[]>;
  sourceHref: string;
  liveHref?: string;
  evidence: readonly CaseEvidence[];
}

export const portfolioCases: readonly PortfolioCase[] = [
  {
    slug: "educa",
    featured: true,
    title: "EDUCA",
    eyebrow: { pt: "produto open source", en: "open-source product" },
    status: { pt: "fundação de piloto sintético", en: "synthetic pilot foundation" },
    thesis: {
      pt: "tirar a gestão escolar da planilha sem fingir que um piloto já virou operação municipal.",
      en: "move school management beyond spreadsheets without pretending a pilot is already a municipal operation.",
    },
    summary: {
      pt: "gestão escolar para redes municipais pequenas, com domínio, segurança e limites de implantação tratados como parte do produto.",
      en: "school management for small municipal networks, with domain rules, safety and deployment limits treated as product work.",
    },
    role: {
      pt: "produto e engenharia ponta a ponta na implementação pública: fluxos, arquitetura, aplicação, dados, testes e proteções operacionais.",
      en: "end-to-end product and engineering across the public implementation: flows, architecture, application, data, tests and operational safeguards.",
    },
    problem: {
      pt: "matrícula, chamada, responsáveis e relatórios não cabem com segurança numa coleção de planilhas desconectadas.",
      en: "enrollment, attendance, guardians and reporting cannot safely live across disconnected spreadsheets.",
    },
    decision: {
      pt: "conter o primeiro uso em dados sintéticos e transformar isolamento por escola, papéis, histórico de frequência e gates de implantação em contratos verificáveis.",
      en: "contain the first use to synthetic data and turn school isolation, roles, attendance history and deployment gates into verifiable contracts.",
    },
    built: {
      pt: "uma aplicação Next.js e Supabase com escolas, pessoas, turmas, matrículas, chamada, diário, relatórios e um caminho determinístico de demonstração.",
      en: "a Next.js and Supabase application covering schools, people, classes, enrollment, attendance, diary, reports and a deterministic demo path.",
    },
    observed: {
      pt: "o código, o contexto técnico e a superfície pública podem ser abertos agora; o repositório registra testes e recibos locais datados.",
      en: "the code, technical context and public surface are available now; the repository records tests and dated local receipts.",
    },
    limit: {
      pt: "não prova uso com dados reais, implantação por prefeitura, conformidade legal nem prontidão de produção.",
      en: "does not prove real-data use, municipal deployment, legal compliance or production readiness.",
    },
    architecture: {
      pt: ["problema municipal", "modelo de domínio", "aplicação + RLS", "piloto sintético", "prova local"],
      en: ["municipal problem", "domain model", "application + RLS", "synthetic pilot", "local proof"],
    },
    sourceHref: "https://github.com/shishiv/EDUCA/tree/d01379325e25086ff36cccb8238bd2a30f01effc",
    liveHref: "https://geteduca.vercel.app/",
    evidence: [
      {
        label: { pt: "abrir produto", en: "open product" },
        href: "https://geteduca.vercel.app/",
        kind: "live",
      },
      {
        label: { pt: "ler código fixado", en: "read pinned source" },
        href: "https://github.com/shishiv/EDUCA/tree/d01379325e25086ff36cccb8238bd2a30f01effc",
        kind: "source",
      },
      {
        label: { pt: "ler limites e arquitetura", en: "read boundaries and architecture" },
        href: "https://github.com/shishiv/EDUCA/blob/d01379325e25086ff36cccb8238bd2a30f01effc/CONTEXT.md",
        kind: "receipt",
      },
    ],
  },
  {
    slug: "inclusao-digital",
    featured: true,
    title: "inclusão digital UEMG",
    eyebrow: { pt: "extensão universitária", en: "university extension" },
    status: { pt: "portal educacional público", en: "public educational portal" },
    thesis: {
      pt: "transformar material de apoio no lugar onde pessoas 60+ praticam tecnologia com autonomia.",
      en: "turn supporting material into a place where learners aged 60+ practice technology with autonomy.",
    },
    summary: {
      pt: "um portal que acompanha aulas presenciais com passos guiados, linguagem direta e acessibilidade como requisito de produto.",
      en: "a portal supporting in-person classes with guided steps, direct language and accessibility as a product requirement.",
    },
    role: {
      pt: "produto educacional e engenharia web do portal público; o programa, as aulas e os resultados institucionais são trabalho coletivo da UEMG.",
      en: "educational product and web engineering for the public portal; the program, classes and institutional outcomes are collective UEMG work.",
    },
    problem: {
      pt: "PDFs ajudam quem conduz a aula, mas não oferecem sozinhos um ambiente de prática acessível para quem está começando.",
      en: "PDFs support instructors, but alone they do not provide an accessible practice environment for beginners.",
    },
    decision: {
      pt: "organizar a trilha em tarefas reais, passos curtos, ajuda visível, tipografia ampla e estados que não dependem só de cor ou movimento.",
      en: "organize the path around real tasks, short steps, visible help, large type and states that do not depend on color or motion alone.",
    },
    built: {
      pt: "nove aulas, práticas guiadas e uma biblioteca visual em HTML, CSS e JavaScript, publicada como portal do aluno.",
      en: "nine lessons, guided practice and a visual library in HTML, CSS and JavaScript, published as a learner portal.",
    },
    observed: {
      pt: "o portal e o código estão públicos no commit fixado; ambos expõem a trilha, os padrões de acessibilidade e o contexto coletivo do programa.",
      en: "the portal and source are public at the pinned commit; both expose the learning path, accessibility patterns and the program's collective context.",
    },
    limit: {
      pt: "o portfólio não atribui a uma pessoa o trabalho coletivo do programa nem usa métricas do repositório como prova de aprendizagem.",
      en: "the portfolio does not assign collective program work to one person or treat repository metrics as proof of learning outcomes.",
    },
    architecture: {
      pt: ["aula presencial", "tarefa real", "passo guiado", "prática acessível", "autonomia"],
      en: ["in-person class", "real task", "guided step", "accessible practice", "autonomy"],
    },
    sourceHref: "https://github.com/shishiv/inclusao-digital-uemg/tree/9e4f2a40c1d5e5a4fe44ae7272e9cbf78c3d45ad",
    liveHref: "https://inclusao-digital-uemg.vercel.app/",
    evidence: [
      {
        label: { pt: "abrir portal", en: "open portal" },
        href: "https://inclusao-digital-uemg.vercel.app/",
        kind: "live",
      },
      {
        label: { pt: "ler código fixado", en: "read pinned source" },
        href: "https://github.com/shishiv/inclusao-digital-uemg/tree/9e4f2a40c1d5e5a4fe44ae7272e9cbf78c3d45ad",
        kind: "source",
      },
      {
        label: { pt: "ler contexto do produto", en: "read product context" },
        href: "https://github.com/shishiv/inclusao-digital-uemg/blob/9e4f2a40c1d5e5a4fe44ae7272e9cbf78c3d45ad/PRODUCT.md",
        kind: "receipt",
      },
    ],
  },
  {
    slug: "infra-examples",
    featured: true,
    title: "infra-examples",
    eyebrow: { pt: "provas operacionais públicas", en: "public operational proofs" },
    status: { pt: "contratos sanitizados", en: "sanitized contracts" },
    thesis: {
      pt: "mostrar decisões operacionais sem transformar um exemplo público em ficção de produção.",
      en: "show operational decisions without turning a public example into production fiction.",
    },
    summary: {
      pt: "uma biblioteca organizada por problemas, com decisões, testes reproduzíveis, mapas de fonte e limites explícitos.",
      en: "a problem-led library with decisions, reproducible tests, source maps and explicit boundaries.",
    },
    role: {
      pt: "arquitetura, implementação, sanitização e documentação das provas públicas.",
      en: "architecture, implementation, sanitization and documentation of the public proofs.",
    },
    problem: {
      pt: "diagramas e snippets isolados fazem uma escolha parecer comprovada mesmo quando não há ambiente, teste ou fonte para sustentá-la.",
      en: "isolated diagrams and snippets make a choice look proven even when no environment, test or source supports it.",
    },
    decision: {
      pt: "começar pela pergunta operacional e rotular cada evidência como decisão, contrato sintético, loopback, observação datada ou não afirmado.",
      en: "start with the operational question and label each item as a decision, synthetic contract, loopback, dated observation or not claimed.",
    },
    built: {
      pt: "provas para recuperação de staging e orquestração de agentes, além de módulos de Swarm, CI, Next.js, Drizzle, Playwright e Bash.",
      en: "proofs for staging recovery and agent orchestration, plus Swarm, CI, Next.js, Drizzle, Playwright and Bash modules.",
    },
    observed: {
      pt: "código, testes, ADRs, ledgers de claims e comandos de reprodução estão disponíveis no commit fixado.",
      en: "code, tests, ADRs, claim ledgers and reproduction commands are available at the pinned commit.",
    },
    limit: {
      pt: "não expõe topologia privada nem prova hosts, credenciais, tráfego, uptime ou estado atual de produção.",
      en: "does not expose private topology or prove hosts, credentials, traffic, uptime or current production state.",
    },
    architecture: {
      pt: ["pergunta", "decisão", "contrato", "fonte", "limite"],
      en: ["question", "decision", "contract", "source", "boundary"],
    },
    sourceHref: "https://github.com/shishiv/infra-examples/tree/305c7d0a26a92dd12c8f1156f8f6dee982ecee88",
    evidence: [
      {
        label: { pt: "abrir biblioteca", en: "open library" },
        href: "https://github.com/shishiv/infra-examples/tree/305c7d0a26a92dd12c8f1156f8f6dee982ecee88",
        kind: "source",
      },
      {
        label: { pt: "ler prova de staging", en: "read staging proof" },
        href: "https://github.com/shishiv/infra-examples/blob/305c7d0a26a92dd12c8f1156f8f6dee982ecee88/proofs/bounded-staging-recovery/README.md",
        kind: "receipt",
      },
      {
        label: { pt: "ler prova de orquestração", en: "read orchestration proof" },
        href: "https://github.com/shishiv/infra-examples/blob/305c7d0a26a92dd12c8f1156f8f6dee982ecee88/proofs/firstmate-orchestration/README.md",
        kind: "receipt",
      },
    ],
  },
] as const;

export function getCase(slug: string) {
  return portfolioCases.find((item) => item.slug === slug);
}

export function localized(text: LocalizedText, locale: Locale) {
  return text[locale];
}
