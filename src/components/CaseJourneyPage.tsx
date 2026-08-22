"use client";

import { useEffect, useRef, useState } from "react";
import { localized, portfolioCases, type PortfolioCase } from "@/data/cases";
import { useUi, type Locale } from "@/i18n/ui";

type Chapter = "idea" | "why" | "translation" | "system" | "proof" | "boundary";

const chapters: readonly Chapter[] = ["idea", "why", "translation", "system", "proof", "boundary"];

const journeyDepth = {
  educa: {
    pt: {
      idea: ["redes municipais e cidades pequenas", "matrícula, chamada e responsáveis no mesmo domínio", "open source como saída de dependência de fornecedor"],
      why: ["planilhas fragmentam estado e responsabilidade", "dados de estudantes exigem contenção antes de conveniência", "um piloto só é honesto quando seu limite aparece na interface e no deploy"],
      translation: ["piloto municipal reduzido a dados sintéticos", "papéis e escolas viraram fronteiras de acesso", "presença, diário e relatórios foram tratados como um fluxo, não telas isoladas"],
      system: ["Next.js organiza rotas e fluxos", "Supabase mantém schema, autenticação e RLS", "seed determinístico permite repetir a demonstração", "safety gates bloqueiam dados reais e deploy externo"],
      proof: ["aplicação pública e código podem ser inspecionados", "repositório documenta build, testes e validações locais", "receipts datados separam branch corrigida de runtime público antigo"],
      boundary: ["sem dados reais de alunos", "sem implantação municipal afirmada", "sem conformidade legal ou prontidão de produção inferida"],
    },
    en: {
      idea: ["municipal networks and small towns", "enrollment, attendance and guardians in one domain", "open source as an exit from vendor dependence"],
      why: ["spreadsheets fragment state and responsibility", "student data requires containment before convenience", "a pilot is honest only when its boundary is visible in UI and deployment"],
      translation: ["municipal pilot reduced to synthetic data", "roles and schools became access boundaries", "attendance, diary and reports became one flow rather than isolated screens"],
      system: ["Next.js organizes routes and flows", "Supabase holds schema, authentication and RLS", "deterministic seed makes the demo repeatable", "safety gates block real data and external deployment"],
      proof: ["the public application and source can be inspected", "the repository documents builds, tests and local validation", "dated receipts separate corrected code from the older public runtime"],
      boundary: ["no real student data", "no claimed municipal deployment", "no inferred legal compliance or production readiness"],
    },
  },
  "inclusao-digital": {
    pt: {
      idea: ["o portal como ambiente de prática, não depósito de PDFs", "pessoas 60+ como protagonistas capazes", "a aula presencial continua sendo a relação central"],
      why: ["material do monitor não substitui experiência do aluno", "ansiedade digital torna erro e navegação parte do problema", "acessibilidade precisa existir no comportamento, não numa declaração"],
      translation: ["conteúdo reorganizado em tarefas reais", "um passo por tela e ajuda sempre visível", "linguagem, tamanho, contraste e motion definidos pelo público"],
      system: ["HTML, CSS e JavaScript preservam simplicidade operacional", "nove aulas formam uma trilha ordenada", "simuladores em código permitem prática sem conta real", "PDF continua como material secundário do monitor"],
      proof: ["portal e código estão públicos", "trilha, assets e padrões de acessibilidade são inspecionáveis", "o repositório atribui o programa e resultados ao trabalho coletivo da UEMG"],
      boundary: ["sem atribuição individual do programa coletivo", "sem métricas de aprendizagem inferidas do portal", "sem afirmar conformidade só porque regras foram documentadas"],
    },
    en: {
      idea: ["the portal as a practice environment, not a PDF repository", "learners aged 60+ as capable protagonists", "the in-person class remains the central relationship"],
      why: ["instructor material does not replace the learner experience", "digital anxiety makes error and navigation part of the problem", "accessibility must exist in behavior, not a declaration"],
      translation: ["content reorganized around real tasks", "one step per screen with help always visible", "language, size, contrast and motion defined by the audience"],
      system: ["HTML, CSS and JavaScript preserve operational simplicity", "nine lessons form an ordered path", "code-based simulators enable practice without real accounts", "PDF remains secondary instructor material"],
      proof: ["the portal and source are public", "the path, assets and accessibility patterns are inspectable", "the repository attributes program outcomes to collective UEMG work"],
      boundary: ["no individual claim over collective work", "no learning metrics inferred from the portal", "no compliance claim from documented rules alone"],
    },
  },
  "infra-examples": {
    pt: {
      idea: ["publicar decisões operacionais sem expor sistemas privados", "começar pela pergunta, não pela ferramenta", "cada claim precisa carregar sua própria fronteira"],
      why: ["snippet sem contexto parece mais comprovado do que é", "mock, loopback e produção não são evidências equivalentes", "arquitetura futura não pode fingir comportamento atual"],
      translation: ["cada prova recebe um rótulo de maturidade", "código, teste, ADR e mapa de fonte ficam conectados", "o que não foi provado aparece ao lado da claim"],
      system: ["provas organizadas por problema operacional", "módulos de implementação sustentam cada narrativa", "testes sintéticos e loopback são reexecutáveis", "source maps preservam custódia"],
      proof: ["staging recovery possui scripts, ADRs e suíte local", "orquestração possui contrato sintético validável", "todos os caminhos de reprodução estão no commit fixado"],
      boundary: ["sem topologia ou credenciais privadas", "sem inferir uptime, tráfego ou runtime atual", "sem transformar contrato sintético em observação externa"],
    },
    en: {
      idea: ["publish operational decisions without exposing private systems", "start from the question, not the tool", "each claim carries its own boundary"],
      why: ["a context-free snippet looks more proven than it is", "mock, loopback and production are not equivalent evidence", "future architecture cannot pretend to be current behavior"],
      translation: ["each proof gets a maturity label", "code, tests, ADRs and source maps stay connected", "what was not proven appears beside the claim"],
      system: ["proofs organized by operational problem", "implementation modules support each narrative", "synthetic and loopback tests are reproducible", "source maps preserve custody"],
      proof: ["staging recovery includes scripts, ADRs and a local suite", "orchestration includes a verifiable synthetic contract", "all reproduction paths live at the pinned commit"],
      boundary: ["no private topology or credentials", "no inferred uptime, traffic or current runtime", "no synthetic contract presented as external observation"],
    },
  },
} as const;

function SystemArtifact({ item, locale }: { item: PortfolioCase; locale: Locale }) {
  const labels = {
    educa: locale === "pt"
      ? ["secretaria", "escola", "professor", "Next.js", "Auth", "RLS por escola", "turmas", "matrículas", "frequência", "gate sintético"]
      : ["district", "school", "teacher", "Next.js", "Auth", "school RLS", "classes", "enrollment", "attendance", "synthetic gate"],
    "inclusao-digital": locale === "pt"
      ? ["aluno 60+", "portal", "9 aulas", "simuladores", "assets", "PDF do monitor"]
      : ["learner 60+", "portal", "9 lessons", "simulators", "assets", "instructor PDF"],
    "infra-examples": locale === "pt"
      ? ["pergunta", "case", "código", "teste", "ADR", "evidence ledger", "source map", "limite"]
      : ["question", "case", "code", "test", "ADR", "evidence ledger", "source map", "boundary"],
  }[item.slug];

  if (item.slug === "educa") {
    return (
      <svg className="journey-system-artifact" viewBox="0 0 900 360" role="img" aria-label={locale === "pt" ? "arquitetura do piloto sintético EDUCA" : "EDUCA synthetic pilot architecture"}>
        <g className="system-column system-actors">{labels.slice(0, 3).map((label, index) => <g key={label} transform={`translate(90 ${80 + index * 92})`}><rect x="-62" y="-25" width="124" height="50" rx="4"/><text textAnchor="middle" y="5">{label}</text></g>)}</g>
        <path d="M154 80H245M154 172H245M154 264H245" />
        <g transform="translate(330 172)"><rect x="-85" y="-64" width="170" height="128" rx="5"/><text textAnchor="middle" y="-12">{labels[3]}</text><text textAnchor="middle" y="18">{labels[4]}</text></g>
        <path d="M415 172H500" />
        <g transform="translate(590 172)"><rect x="-90" y="-64" width="180" height="128" rx="5"/><text textAnchor="middle" y="5">{labels[5]}</text></g>
        <path d="M680 172H752M590 236V302" />
        <g transform="translate(810 80)"><circle r="34"/><text textAnchor="middle" y="5">{labels[6]}</text></g>
        <g transform="translate(810 172)"><circle r="34"/><text textAnchor="middle" y="5">{labels[7]}</text></g>
        <g transform="translate(810 264)"><circle r="34"/><text textAnchor="middle" y="5">{labels[8]}</text></g>
        <g className="system-gate" transform="translate(590 320)"><rect x="-110" y="-22" width="220" height="44" rx="22"/><text textAnchor="middle" y="5">{labels[9]}</text></g>
      </svg>
    );
  }

  const xs = labels.map((_, index) => 70 + index * (760 / Math.max(labels.length - 1, 1)));
  return (
    <svg className="journey-system-artifact" viewBox="0 0 900 320" role="img" aria-label={locale === "pt" ? `arquitetura de ${item.title}` : `${item.title} architecture`}>
      <path d="M70 150H830" className="journey-system-line" />
      {labels.map((label, index) => <g key={label} transform={`translate(${xs[index]} ${index % 2 ? 112 : 188})`}><path d={`M0 ${index % 2 ? 38 : -38}V0`} className="journey-system-branch"/><circle r={index === 0 || index === labels.length - 1 ? 21 : 14}/><text y={index % 2 ? -34 : 44} textAnchor="middle">{label}</text></g>)}
    </svg>
  );
}

function ProofReceipt({ item, locale }: { item: PortfolioCase; locale: Locale }) {
  const receipts = {
    educa: {
      date: "2026-08-10",
      command: "pnpm typecheck · pnpm test · NEXT_PUBLIC_PILOT_MODE=true pnpm build",
      result: locale === "pt" ? "typecheck OK · 49 arquivos de teste passaram, 1 ignorado · 736 testes passaram, 17 ignorados · build concluído" : "typecheck OK · 49 test files passed, 1 skipped · 736 tests passed, 17 skipped · build completed",
      note: locale === "pt" ? "receipt local datado; não prova que o runtime público contém a branch corrigida" : "dated local receipt; does not prove the public runtime contains the corrected branch",
    },
    "inclusao-digital": {
      date: "2026-08-22",
      command: "GET inclusao-digital-uemg.vercel.app",
      result: locale === "pt" ? "HTTP 200 · portal público e trilha de nove aulas observados" : "HTTP 200 · public portal and nine-lesson path observed",
      note: locale === "pt" ? "alcance não mede aprendizagem nem atribui o trabalho coletivo a uma pessoa" : "reach does not measure learning or assign collective work to one person",
    },
    "infra-examples": {
      date: "commit 305c7d0",
      command: "./proofs/firstmate-orchestration/contracts/validate-events.sh",
      result: locale === "pt" ? "contrato sintético versionado com eventos atuais, planejados, autoridade humana e owners" : "versioned synthetic contract covering current/planned events, human authority and owners",
      note: locale === "pt" ? "comando reproduz narrativa e fronteira; não executa uma frota" : "command reproduces narrative and boundaries; it does not run a fleet",
    },
  }[item.slug];
  return <div className="case-proof-receipt"><span>{receipts.date}</span><code>{receipts.command}</code><strong>{receipts.result}</strong><small>{receipts.note}</small></div>;
}

function JourneyVisual({ chapter, item, locale }: { chapter: Chapter; item: PortfolioCase; locale: Locale }) {
  if (chapter === "system") return <SystemArtifact item={item} locale={locale} />;

  const labels = {
    idea: locale === "pt" ? ["contexto", "ideia"] : ["context", "idea"],
    why: locale === "pt" ? ["sintoma", "restrição", "porquê"] : ["symptom", "constraint", "why"],
    translation: locale === "pt" ? ["linguagem", "escolha", "contrato", "construção"] : ["language", "choice", "contract", "build"],
    proof: locale === "pt" ? ["artefato", "teste", "observação"] : ["artifact", "test", "observation"],
    boundary: locale === "pt" ? ["provado", "não afirmado"] : ["proven", "not claimed"],
  }[chapter];

  return (
    <svg className={`journey-artifact journey-artifact-${chapter}`} viewBox="0 0 900 360" aria-hidden="true">
      <path className="journey-path" d="M72 240C185 72 325 300 446 172S690 40 828 175" />
      {labels.map((label, index) => {
        const positions = labels.length === 2 ? [[176, 132], [690, 104]] : labels.length === 3 ? [[120, 194], [445, 172], [762, 116]] : [[90, 220], [325, 213], [560, 105], [810, 156]];
        const [x, y] = positions[index];
        return <g key={label} transform={`translate(${x} ${y})`}><circle r={index === labels.length - 1 ? 18 : 11} /><text y="42" textAnchor="middle">{label}</text></g>;
      })}
      {chapter === "boundary" ? <path className="journey-boundary" d="M450 38V322" /> : null}
    </svg>
  );
}

export function CaseJourneyPage({ locale, slug }: { locale: Locale; slug: PortfolioCase["slug"] }) {
  const t = useUi(locale);
  const item = portfolioCases.find((candidate) => candidate.slug === slug)!;
  const [active, setActive] = useState<Chapter>("idea");
  const panelRef = useRef<HTMLElement>(null);
  const currentIndex = chapters.indexOf(active);
  const detail = journeyDepth[slug][locale][active];
  const homeHref = locale === "pt" ? "/" : "/en/";
  const casesHref = locale === "pt" ? "/case/" : "/en/case/";
  const chapterCopy = {
    idea: { title: t.journeyIdea, body: localized(item.thesis, locale) },
    why: { title: t.journeyWhy, body: localized(item.problem, locale) },
    translation: { title: t.journeyTranslation, body: localized(item.decision, locale) },
    system: { title: t.journeySystem, body: localized(item.built, locale) },
    proof: { title: t.journeyProof, body: localized(item.observed, locale) },
    boundary: { title: t.journeyBoundary, body: localized(item.limit, locale) },
  } as const;

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.slice(1) as Chapter;
      if (chapters.includes(hash)) setActive(hash);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const selectChapter = (chapter: Chapter) => {
    setActive(chapter);
    window.history.replaceState(null, "", `#${chapter}`);
    panelRef.current?.focus({ preventScroll: true });
  };

  const move = (direction: -1 | 1) => {
    const next = chapters[Math.max(0, Math.min(chapters.length - 1, currentIndex + direction))];
    selectChapter(next);
  };

  return (
    <main className={`case-journey case-journey-${slug} case-journey-chapter-${active}`} lang={t.lang}>
      <header className="case-journey-header">
        <a href={casesHref}>{t.backCases} ←</a>
        <a href={homeHref}>{t.heroName}</a>
        <a href={item.sourceHref} rel="noopener noreferrer" target="_blank">GitHub ↗</a>
      </header>

      <section
        className="case-journey-stage"
        id="case-panel"
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
      >
        <div className="case-journey-copy">
          <p className="case-journey-status">{localized(item.eyebrow, locale)} · {localized(item.status, locale)}</p>
          <p className="case-journey-count">0{currentIndex + 1} / 0{chapters.length}</p>
          <h1>{item.title}</h1>
          <p className="case-journey-chapter">{chapterCopy[active].title}</p>
          <p className="case-journey-body">{chapterCopy[active].body}</p>
          <ul className="case-journey-details">
            {detail.map((line) => <li key={line}>{line}</li>)}
          </ul>
          {active === "idea" ? <p className="case-journey-role"><strong>{t.caseRoleLabel}:</strong> {localized(item.role, locale)}</p> : null}
          {active === "proof" && item.liveHref ? <a className="case-journey-live" href={item.liveHref} rel="noopener noreferrer" target="_blank">{t.openArtifact} ↗</a> : null}
        </div>
        <div className="case-journey-visual">
          <JourneyVisual chapter={active} item={item} locale={locale} />
          {active === "proof" ? <ProofReceipt item={item} locale={locale} /> : null}
        </div>
      </section>

      <nav className="case-journey-nav" aria-label={t.journeyNavigation}>
        <button type="button" onClick={() => move(-1)} disabled={currentIndex === 0} aria-label={t.previousChapter}>←</button>
        <div role="tablist" aria-label={t.journeyNavigation}>
          {chapters.map((chapter) => (
            <button
              key={chapter}
              id={`tab-${chapter}`}
              type="button"
              role="tab"
              aria-controls="case-panel"
              aria-selected={active === chapter}
              tabIndex={active === chapter ? 0 : -1}
              onClick={() => selectChapter(chapter)}
              onKeyDown={(event) => {
                if (!(["ArrowLeft", "ArrowRight", "Home", "End"] as string[]).includes(event.key)) return;
                event.preventDefault();
                const direction = event.key === "ArrowRight" ? 1 : -1;
                const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? chapters.length - 1 : (chapters.indexOf(chapter) + direction + chapters.length) % chapters.length;
                const next = chapters[nextIndex];
                selectChapter(next);
                const nextTab = document.getElementById(`tab-${next}`);
                nextTab?.focus();
                nextTab?.scrollIntoView({ block: "nearest", inline: "nearest" });
              }}
            >{chapterCopy[chapter].title}</button>
          ))}
        </div>
        <button type="button" onClick={() => move(1)} disabled={currentIndex === chapters.length - 1} aria-label={t.nextChapter}>→</button>
      </nav>

      <section ref={panelRef} tabIndex={-1} className="case-journey-evidence" aria-label={t.primarySourceLabel}>
        <span>{t.primarySourceLabel}</span>
        <a href={item.sourceHref} rel="noopener noreferrer" target="_blank">GitHub · {item.title} ↗</a>
      </section>
    </main>
  );
}
