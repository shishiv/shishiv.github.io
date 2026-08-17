"use client";

import { useEffect, useRef, useState } from "react";
import { CaseIndexSlide } from "./CaseIndexPage";
import { GalaxyHero } from "./GalaxyHero";
import { useUi, type Locale } from "@/i18n/ui";

export function FounderProfilePage({ locale }: { locale: Locale }) {
  const t = useUi(locale);
  const slideRef = useRef<HTMLDivElement>(null);
  const slideAnimationRef = useRef<Animation | null>(null);
  const firstSectionRef = useRef(true);
  const [activeSection, setActiveSection] = useState<"trajectory" | "cases" | "articles" | "contact">("cases");
  const [sectionDirection, setSectionDirection] = useState<"forward" | "backward">("forward");
  const sectionOrder = { cases: 0, trajectory: 1, articles: 2, contact: 3 } as const;
  const showSection = (section: keyof typeof sectionOrder) => {
    setSectionDirection(sectionOrder[section] >= sectionOrder[activeSection] ? "forward" : "backward");
    setActiveSection(section);
  };

  useEffect(() => {
    if (firstSectionRef.current) {
      firstSectionRef.current = false;
      return;
    }
    const slide = slideRef.current;
    if (!slide) return;

    const previous = slideAnimationRef.current;
    let fromOpacity = 0;
    let fromTransform = `translateX(${sectionDirection === "forward" ? 18 : -18}px)`;
    if (previous && previous.playState === "running") {
      previous.commitStyles();
      const current = window.getComputedStyle(slide);
      fromOpacity = Number.parseFloat(current.opacity);
      fromTransform = current.transform === "none" ? "translateX(0)" : current.transform;
      previous.cancel();
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    slideAnimationRef.current = slide.animate(
      reducedMotion
        ? [{ opacity: fromOpacity }, { opacity: 1 }]
        : [
            { opacity: fromOpacity, transform: fromTransform },
            { opacity: 1, transform: "translateX(0)" },
          ],
      { duration: reducedMotion ? 160 : 180, easing: "cubic-bezier(0.23, 1, 0.32, 1)" },
    );
  }, [activeSection, sectionDirection]);

  useEffect(() => () => slideAnimationRef.current?.cancel(), []);

  return (
    <div className="founder-page" lang={t.lang}>
      <a className="skip-link founder-skip" href="#founder-content">
        {t.skipToContent}
      </a>

      <div className="founder-shell">
        <aside className="founder-rail">
          <a className="founder-identity" href={locale === "pt" ? "/" : "/en/"}>
            <strong>{t.heroName}</strong>
            <span>{t.rolePrimary}<br />{t.roleSecondary}</span>
          </a>

          <nav aria-label={t.primaryNav}>
            <button type="button" aria-current={activeSection === "cases" ? "page" : undefined} onClick={() => showSection("cases")}>{t.workNav}</button>
            <button type="button" aria-current={activeSection === "trajectory" ? "page" : undefined} onClick={() => showSection("trajectory")}>{t.trajectoryNav}</button>
            <button type="button" aria-current={activeSection === "articles" ? "page" : undefined} onClick={() => showSection("articles")}>{t.articlesNav}</button>
            <a href="/uemg/">{t.uemgNav}</a>
            <button type="button" aria-current={activeSection === "contact" ? "page" : undefined} onClick={() => showSection("contact")}>{t.contactNav}</button>
          </nav>

          <div className="founder-rail-footer">
            <span>frutal, mg</span>
            <span>
              <a href="/" hrefLang="pt-BR" aria-current={locale === "pt" ? "page" : undefined}>pt</a>
              {" / "}
              <a href="/en/" hrefLang="en" aria-current={locale === "en" ? "page" : undefined}>en</a>
            </span>
          </div>
        </aside>

        <main className="founder-main" id="founder-content" tabIndex={-1}>
          <div className={`founder-slide founder-slide-${activeSection}`} ref={slideRef}>
          {activeSection === "cases" ? <>
            <GalaxyHero
            titleFirst={t.founderHeroTitleFirst}
            titleSecond={t.founderHeroTitleSecond}
            lead={t.founderHeroLead}
            brandsLabel={t.brandsLabel}
            focusLabel={t.stackFocusLabel}
            focusNote={t.stackFocusNote}
            selectedLabel={t.stackSelectedLabel}
            relatedLabel={t.stackRelatedLabel}
          />
          </> : null}

          {activeSection === "trajectory" ? <section className="founder-about" id="trajectory" aria-labelledby="trajectory-title">
            <div className="founder-about-lead">
              <h2 className="founder-display-heading" id="trajectory-title">
                <span>{t.trajectoryTitleFirst}</span>
                <span>{t.trajectoryTitleSecond}</span>
              </h2>
              <p>{t.trajectoryCopy}</p>
            </div>
            <div className="founder-about-notes">
              <h3>{t.trajectoryNotesLabel}</h3>
              {t.trajectoryNotes.map((note) => (
                <article key={note.label}>
                  <span>{note.label}</span>
                  <p>{note.text}</p>
                </article>
              ))}
            </div>
          </section> : null}

          {activeSection === "articles" ? <CaseIndexSlide locale={locale} /> : null}

          {activeSection === "contact" ? <section className="founder-contact-slide" id="contact" aria-labelledby="contact-title">
            <div>
              <h2 className="founder-display-heading" id="contact-title">
                <span>{t.founderContactTitleFirst}</span>
                <span>{t.founderContactTitleSecond}</span>
              </h2>
              <p>{t.founderContactCopy}</p>
            </div>
            <div className="founder-contact-groups">
              <section aria-labelledby="direct-title">
                <h3 id="direct-title">{t.directContactTitle}</h3>
                <div className="founder-contact-links">
                  <a className="founder-contact-primary" href="mailto:myke@triangulotec.com.br">
                    <strong>e-mail</strong>
                    <span>myke@triangulotec.com.br</span>
                    <small>{t.contactEmailNote}</small>
                  </a>
                  <a href="https://linkedin.com/in/mykematos" rel="me noopener noreferrer" target="_blank">
                    <strong>LinkedIn ↗</strong>
                    <small>{t.contactLinkedinNote}</small>
                  </a>
                </div>
              </section>
              <section aria-labelledby="pages-title">
                <h3 id="pages-title">{t.pagesTitle}</h3>
                <div className="founder-contact-links">
                  <a href="https://github.com/shishiv" rel="me noopener noreferrer" target="_blank">
                    <strong>GitHub ↗</strong>
                    <small>{t.contactGithubNote}</small>
                  </a>
                  <a href="http://lattes.cnpq.br/0092223865139147" rel="me noopener noreferrer" target="_blank">
                    <strong>Lattes ↗</strong>
                    <small>{t.contactLattesNote}</small>
                  </a>
                  <button type="button" onClick={() => showSection("articles")}>
                    <strong>{t.articlesNav} →</strong>
                    <small>{t.contactCasesNote}</small>
                  </button>
                </div>
              </section>
            </div>
          </section> : null}
          </div>
        </main>
      </div>
    </div>
  );
}
