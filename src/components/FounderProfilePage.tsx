import { FeaturedEvidence } from "./CaseIndexPage";
import { useUi, type Locale } from "@/i18n/ui";

function HeroArtifact({ locale }: { locale: Locale }) {
  const labels = locale === "pt"
    ? ["contexto", "sistema", "prova"]
    : ["context", "system", "proof"];
  return (
    <svg className="portfolio-hero-artifact" viewBox="0 0 680 520" aria-hidden="true">
      <ellipse cx="382" cy="255" rx="250" ry="146" transform="rotate(-13 382 255)" />
      <ellipse cx="382" cy="255" rx="166" ry="242" transform="rotate(29 382 255)" />
      <path d="M82 356C194 250 335 407 601 122" />
      <circle cx="188" cy="302" r="8" />
      <circle cx="382" cy="255" r="13" />
      <circle cx="548" cy="176" r="8" />
      <text x="153" y="333">{labels[0]}</text>
      <text x="346" y="292">{labels[1]}</text>
      <text x="520" y="207">{labels[2]}</text>
    </svg>
  );
}

function MethodArtifact() {
  return (
    <svg className="portfolio-method-artifact" viewBox="0 0 1200 130" aria-hidden="true">
      <path d="M40 68C220 6 312 122 502 67S798 10 970 67s148 25 190 0" />
      <circle cx="40" cy="68" r="9" />
      <circle cx="502" cy="67" r="9" />
      <circle cx="970" cy="67" r="9" />
      <path d="m1140 48 20 19-20 19" />
    </svg>
  );
}

export function FounderProfilePage({ locale }: { locale: Locale }) {
  const t = useUi(locale);
  const homeHref = locale === "pt" ? "/" : "/en/";
  const caseHref = locale === "pt" ? "/case/" : "/en/case/";

  return (
    <div className="portfolio-page" lang={t.lang}>
      <a className="skip-link portfolio-skip" href="#main-content">{t.skipToContent}</a>

      <header className="portfolio-header">
        <a className="portfolio-brand" href={homeHref}>
          <strong>{t.heroName}</strong>
          <span>{t.rolePrimary} · {t.roleSecondary}</span>
        </a>
        <nav aria-label={t.primaryNav}>
          <a href="#work">{t.articlesNav}</a>
          <a href="#approach">{t.approachNav}</a>
          <a href="#about">{t.trajectoryNav}</a>
          <a href="#contact">{t.contactNav}</a>
        </nav>
        <div className="portfolio-language" aria-label={t.languageLabel}>
          <a href="/" hrefLang="pt-BR" aria-current={locale === "pt" ? "page" : undefined}>pt</a>
          <span aria-hidden="true">/</span>
          <a href="/en/" hrefLang="en" aria-current={locale === "en" ? "page" : undefined}>en</a>
        </div>
      </header>

      <main id="main-content">
        <section className="portfolio-hero" aria-labelledby="portfolio-title">
          <p className="portfolio-eyebrow">{t.heroEyebrow}</p>
          <h1 id="portfolio-title">
            <span>{t.founderHeroTitleFirst}</span>
            <em>{t.founderHeroTitleSecond}</em>
          </h1>
          <div className="portfolio-hero-bottom">
            <p>{t.founderHeroLead}</p>
            <div className="portfolio-actions">
              <a className="portfolio-action-primary" href="#work">{t.featuredEvidenceJump} <span aria-hidden="true">↓</span></a>
              <a href="#contact">{t.contactAction} <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <HeroArtifact locale={locale} />
        </section>

        <div id="work" className="portfolio-work">
          <FeaturedEvidence locale={locale} />
        </div>

        <section className="portfolio-approach" id="approach" aria-labelledby="approach-title">
          <div>
            <p className="portfolio-eyebrow">{t.approachKicker}</p>
            <h2 id="approach-title">{t.approachTitle}</h2>
          </div>
          <MethodArtifact />
          <ol>
            {t.approachSteps.map((step, index) => (
              <li key={step.title}>
                <span>0{index + 1}</span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <a className="portfolio-inline-link" href={caseHref}>{t.featuredEvidenceAll} <span aria-hidden="true">→</span></a>
        </section>

        <section className="portfolio-about" id="about" aria-labelledby="about-title">
          <div>
            <p className="portfolio-eyebrow">{t.trajectoryNotesLabel}</p>
            <h2 id="about-title"><span>{t.trajectoryTitleFirst}</span> <em>{t.trajectoryTitleSecond}</em></h2>
            <svg className="portfolio-about-artifact" viewBox="0 0 360 230" aria-hidden="true">
              <path d="M22 42h304M22 94h242M22 146h276M22 198h180" />
              <path d="M58 18v205M294 18v205" />
              <circle cx="58" cy="94" r="7" /><circle cx="294" cy="146" r="7" />
            </svg>
          </div>
          <div className="portfolio-about-copy">
            <p>{t.trajectoryCopy}</p>
            <ul>
              {t.trajectoryNotes.map((note) => (
                <li key={note.label}><strong>{note.label}</strong><span>{note.text}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="portfolio-contact" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="portfolio-eyebrow">{t.directContactTitle}</p>
            <h2 id="contact-title"><span>{t.founderContactTitleFirst}</span> <em>{t.founderContactTitleSecond}</em></h2>
            <p>{t.founderContactCopy}</p>
            <svg className="portfolio-contact-artifact" viewBox="0 0 360 170" aria-hidden="true">
              <path d="M18 30h252v110H18zM18 30l126 78L270 30" />
              <path d="M291 53h50m-22-22 22 22-22 22" />
            </svg>
          </div>
          <div className="portfolio-contact-links">
            <a className="portfolio-contact-primary" href="mailto:myke@triangulotec.com.br">
              <strong>myke@triangulotec.com.br</strong><span>{t.contactEmailNote}</span>
            </a>
            <a href="https://github.com/shishiv" rel="me noopener noreferrer" target="_blank"><strong>GitHub ↗</strong><span>{t.contactGithubNote}</span></a>
            <a href="https://linkedin.com/in/mykematos" rel="me noopener noreferrer" target="_blank"><strong>LinkedIn ↗</strong><span>{t.contactLinkedinNote}</span></a>
            <a href="http://lattes.cnpq.br/8288109750417853" rel="me noopener noreferrer" target="_blank"><strong>Lattes ↗</strong><span>{t.contactLattesNote}</span></a>
          </div>
        </section>
      </main>

      <footer className="portfolio-footer">
        <span>myke matos · frutal, mg</span>
        <a href="#main-content">{t.backToTop} ↑</a>
      </footer>
    </div>
  );
}
