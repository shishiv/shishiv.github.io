import { localized, portfolioCases } from "@/data/cases";
import { useUi, type Locale } from "@/i18n/ui";

export function CaseIndexPage({ locale }: { locale: Locale }) {
  const t = useUi(locale);
  const homeHref = locale === "pt" ? "/" : "/en/";
  const journeyRoot = locale === "pt" ? "/case" : "/en/case";
  const proofTypes = {
    educa: locale === "pt" ? "código + contratos locais" : "source + local contracts",
    "inclusao-digital": locale === "pt" ? "portal + código público" : "portal + public source",
    "infra-examples": locale === "pt" ? "código + testes + ADRs" : "source + tests + ADRs",
  } as const;

  return (
    <main className="case-directory" lang={t.lang}>
      <header className="case-directory-header">
        <a href={homeHref}>{t.backHome} ←</a>
        <strong>{t.heroName}</strong>
        <span>{locale === "pt" ? "trabalho selecionado" : "selected work"}</span>
      </header>

      <section className="case-directory-intro" aria-labelledby="case-directory-title">
        <p>{locale === "pt" ? "cases" : "case studies"}</p>
        <h1 id="case-directory-title">{locale === "pt" ? "três travessias, sem resumo inflado." : "three journeys, without inflated summaries."}</h1>
        <span>{locale === "pt" ? "Escolha um projeto. A profundidade começa depois do clique." : "Choose a project. Depth starts after the click."}</span>
      </section>

      <ol className="case-directory-list">
        {portfolioCases.map((item, index) => (
          <li key={item.slug}>
            <a href={`${journeyRoot}/${item.slug}/`}>
              <span className="case-directory-index">0{index + 1}</span>
              <span className="case-directory-identity">
                <small>{localized(item.eyebrow, locale)}</small>
                <strong>{item.title}</strong>
              </span>
              <span className="case-directory-thesis">{localized(item.thesis, locale)}</span>
              <span className="case-directory-status">{localized(item.status, locale)}</span>
              <span className="case-directory-proof">{proofTypes[item.slug]}</span>
              <span className="case-directory-arrow" aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </ol>

      <footer className="case-directory-footer">
        <span>{locale === "pt" ? "fonte primária em cada jornada: GitHub" : "primary source in every journey: GitHub"}</span>
        <a href={homeHref}>{locale === "pt" ? "voltar ao portfólio" : "back to portfolio"} →</a>
      </footer>
    </main>
  );
}

export function FeaturedEvidence({ locale }: { locale: Locale }) {
  const t = useUi(locale);
  const caseHref = locale === "pt" ? "/case/" : "/en/case/";
  const journeyRoot = locale === "pt" ? "/case" : "/en/case";

  return (
    <section className="featured-evidence" id="featured-evidence" aria-labelledby="featured-evidence-title">
      <header className="featured-evidence-header">
        <div>
          <p className="featured-evidence-kicker">{t.featuredEvidenceKicker}</p>
          <h2 id="featured-evidence-title">{t.featuredEvidenceTitle}</h2>
        </div>
        <a className="featured-evidence-all" href={caseHref}>{t.featuredEvidenceAll} <span aria-hidden="true">→</span></a>
      </header>

      <ol className="featured-evidence-list">
        {portfolioCases.filter((item) => item.featured).map((item, index) => (
          <li key={item.slug}>
            <article className="featured-evidence-link">
              <a className="featured-evidence-main" href={`${journeyRoot}/${item.slug}/`}>
                <span className="featured-evidence-index" aria-hidden="true">0{index + 1}</span>
                <span className="featured-evidence-meta">{localized(item.eyebrow, locale)} · {localized(item.status, locale)}</span>
                <strong>{item.title}</strong>
                <span className="featured-evidence-thesis">{localized(item.thesis, locale)}</span>
              </a>
              <div className="featured-evidence-actions">
                <a href={`${journeyRoot}/${item.slug}/`}>{t.featuredEvidenceOpen} <span aria-hidden="true">→</span></a>
                <a href={item.sourceHref} rel="noopener noreferrer" target="_blank">GitHub ↗</a>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function CaseIndexSlide({ locale }: { locale: Locale }) {
  return <CaseIndexPage locale={locale} />;
}
