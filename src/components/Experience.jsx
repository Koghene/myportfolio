import { Briefcase, GraduationCap } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";
import { SectionHeader } from "./SectionHeader.jsx";

export function Experience() {
  const { t } = useApp();

  return (
    <section className="section-shell" id="experience">
      <SectionHeader
        title={t.sections.experience.title}
        subtitle={t.sections.experience.subtitle}
      />

      <ol className="timeline">
        {t.experience.map((item, index) => {
          const Icon = item.type === "study" ? GraduationCap : Briefcase;
          return (
            <li
              key={`${item.title}-${index}`}
              data-reveal
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <span className="timeline-icon">
                <Icon size={16} aria-hidden="true" />
              </span>
              <div className="card timeline-card">
                <span className="timeline-period">{item.period}</span>
                <h3>{item.title}</h3>
                <p className="timeline-org">{item.org}</p>
                <p>{item.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
