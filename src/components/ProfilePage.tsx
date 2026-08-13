"use client";

import { useState } from "react";
import { CallGraph } from "./CallGraph";
import infra from "@/data/infra.json";
import { useUi, type Locale } from "@/i18n/ui";

export function ProfilePage({ locale }: { locale: Locale }) {
  const t = useUi(locale);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const edgeLabels = t.edgeLabels as Record<string, string>;
  const activeItem = activeNode ? infra.find((i) => i.id === activeNode) : null;

  return (
    <>
      <a className="skip-link" href="#graph">
        {t.skipToContent}
      </a>

      <header className="site-header">
        <div className="header-identity">
          <h1 className="header-name">{t.heroName}</h1>
          <p className="header-statement">{t.heroStatement}</p>
        </div>
        <nav className="site-nav" aria-label={t.primaryNav}>
          <a href="#graph">{t.graphNav}</a>
          <a href="#limits">{t.limitsNav}</a>
          <a href="#contact">{t.contactNav}</a>
          <span className="nav-sep" aria-hidden="true" />
          <a href="/" hrefLang="pt-BR" aria-current={locale === "pt" ? "page" : undefined}>
            pt
          </a>
          <a href="/en/" hrefLang="en" aria-current={locale === "en" ? "page" : undefined}>
            en
          </a>
        </nav>
      </header>

      <main id="graph" tabIndex={-1}>
        <section className="graph-section" aria-label={t.graphTitle}>
          <p className="graph-intro">{t.heroContext}</p>

          <div className="graph-container">
            <CallGraph
              locale={locale}
              edgeLabels={edgeLabels}
              onNodeSelect={setActiveNode}
              activeNode={activeNode}
            />
          </div>

          {/* Detail panel */}
          {infra.map((item) => {
            const isVisible = activeNode === item.id;
            return (
              <article
                key={item.id}
                className={`node-detail ${isVisible ? "visible" : ""}`}
                aria-live="polite"
                aria-hidden={!isVisible}
              >
                <div className="detail-header">
                  <h2 className="detail-name">{item.name}</h2>
                  <button
                    className="detail-close"
                    onClick={() => setActiveNode(null)}
                    aria-label={t.closeDetail}
                  >
                    {t.closeDetail} &times;
                  </button>
                </div>
                <p className="detail-summary">
                  {(item.summary as Record<string, string>)[locale]}
                </p>
                <div className="detail-decisions">
                  <h4>{t.decisionsLabel}</h4>
                  <ul>
                    {(item.decisions as Record<string, string[]>)[locale].map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div className="detail-boundary">
                  <strong>{t.boundaryLabel}</strong>
                  <br />
                  {(item.boundary as Record<string, string>)[locale]}
                </div>
                <a
                  className="detail-source"
                  href={item.source.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {t.readSource}: {item.source.label} ↗
                </a>
              </article>
            );
          })}
        </section>

        <section className="limits-section" id="limits" aria-labelledby="limits-heading">
          <div className="limits-header">
            <h2 id="limits-heading">{t.limitsTitle}</h2>
            <p>{t.limitsIntro}</p>
          </div>
          <div className="limits-grid">
            {t.limitations.map((lim, i) => (
              <article key={i} className="limit-card">
                <h3>{lim.title}</h3>
                <p>{lim.text}</p>
                <a href={lim.sourceHref} rel="noopener noreferrer" target="_blank">
                  {lim.sourceLabel} ↗
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-grid">
          <div className="footer-copy">
            <h2>{t.contactTitle}</h2>
            <p>{t.contactCopy}</p>
          </div>
          <div className="footer-links">
            <a href="mailto:myke@triangulotec.com.br">{t.emailLabel}</a>
            <a href="https://github.com/shishiv" rel="me noopener noreferrer" target="_blank">
              {t.githubLabel}
            </a>
            <a href="https://linkedin.com/in/mykematos" rel="me noopener noreferrer" target="_blank">
              {t.linkedinLabel}
            </a>
          </div>
          <div className="footer-meta">
            <span>{t.footerNote}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
