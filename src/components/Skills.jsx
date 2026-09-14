import { useApp } from "../context/AppContext.jsx";
import { skills } from "../data/portfolio.js";
import { SectionHeader } from "./SectionHeader.jsx";

export function Skills() {
  const { t } = useApp();

  return (
    <section className="section-shell" id="skills">
      <SectionHeader
        title={t.sections.skills.title}
        subtitle={t.sections.skills.subtitle}
      />

      <div className="skills-grid">
        {skills.map(({ name, level, icon: Icon }, index) => (
          <article
            className="card skill-card"
            key={name}
            data-reveal
            style={{ transitionDelay: `${index * 55}ms` }}
          >
            <div className="skill-top">
              <span className="card-icon small">
                <Icon size={18} aria-hidden="true" />
              </span>
              <h3>{name}</h3>
              <strong>{level}%</strong>
            </div>
            <div
              className="progress"
              role="progressbar"
              aria-valuenow={level}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={name}
            >
              <span style={{ "--level": `${level}%` }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
