import { useUi, type Locale } from "@/i18n/ui";

function CaseIndexContent({ locale }: { locale: Locale }) {
  const t = useUi(locale);

  return (
    <>
      <section className="case-index-intro" aria-labelledby="case-index-title">
        <h1 className="founder-display-heading case-index-heading" id="case-index-title">
          <span>{t.caseIndexTitleFirst}</span>
          <span>{t.caseIndexTitleSecond}</span>
        </h1>
        <p>{t.caseIndexIntro}</p>
        <div className="case-method">
          <span>{t.caseMethodLabel}</span>
          <ol>
            {t.caseMethod.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>
      </section>

      <section className="case-index-list" aria-label={t.workTitle}>
        {t.workItems.map((item) => (
          <article key={item.title}>
            <div>
              <small>{item.label}</small>
              <h2>{item.title}</h2>
            </div>
            <div className="case-index-story">
              <p className="case-index-thesis">{item.headline}</p>
              <p>{item.narrative}</p>
            </div>
            <div className="case-index-architecture">
              <span>{t.caseArchitectureLabel}</span>
              <ol aria-label={t.caseArchitectureLabel}>
                {item.architecture.map((node) => <li key={node}>{node}</li>)}
              </ol>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export function CaseIndexPage({ locale }: { locale: Locale }) {
  const t = useUi(locale);
  const homeHref = locale === "pt" ? "/" : "/en/";

  return (
    <main className="case-index" lang={t.lang}>
      <header className="case-index-header">
        <a href={homeHref}>{t.backHome} ←</a>
        <span>{t.heroName}</span>
      </header>
      <CaseIndexContent locale={locale} />
    </main>
  );
}

export function CaseIndexSlide({ locale }: { locale: Locale }) {
  const t = useUi(locale);
  return (
    <section className="case-index case-index-embedded" lang={t.lang} aria-label={t.articlesNav}>
      <CaseIndexContent locale={locale} />
    </section>
  );
}
