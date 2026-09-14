import { useApp } from "../context/AppContext.jsx";
import { SectionHeader } from "./SectionHeader.jsx";

export function Services() {
  const { t } = useApp();

  return (
    <section className="section-shell" id="services">
      <SectionHeader
        title={t.sections.services.title}
        subtitle={t.sections.services.subtitle}
      />

      <div className="cards-grid">
        {t.services.map(({ title, description, icon: Icon }, index) => (
          <article
            className="card service-card"
            key={title}
            data-reveal
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <span className="card-icon">
              <Icon size={22} aria-hidden="true" />
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
