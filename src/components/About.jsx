import { Download, Mail } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";
import { profile } from "../data/portfolio.js";
import { SectionHeader } from "./SectionHeader.jsx";

export function About() {
  const { t } = useApp();

  return (
    <section className="section-shell" id="about">
      <SectionHeader
        title={t.sections.about.title}
        subtitle={t.sections.about.subtitle}
      />

      <div className="about-grid">
        <div className="about-visual" data-reveal>
          <img src={profile.aboutPhoto} alt={profile.name} loading="lazy" />
        </div>

        <div className="about-copy" data-reveal>
          <p className="eyebrow">{t.about.eyebrow}</p>
          {t.about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <ul className="about-highlights">
            {t.about.highlights.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon size={16} aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              <Mail size={16} aria-hidden="true" />
              {profile.email}
            </a>
            <a className="button button-ghost" href={profile.cvUrl} download>
              <Download size={16} aria-hidden="true" />
              {t.ui.cv}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
