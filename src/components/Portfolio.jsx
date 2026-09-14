import { ExternalLink, Github } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { SectionHeader } from "./SectionHeader.jsx";

export function Portfolio() {
  const { t } = useApp();
  const allLabel = t.projectCategories[0];
  const [activeCategory, setActiveCategory] = useState(allLabel);

  useEffect(() => {
    setActiveCategory(allLabel);
  }, [allLabel]);

  const filtered = useMemo(() => {
    if (activeCategory === allLabel) return t.projects;
    return t.projects.filter((p) => p.category === activeCategory);
  }, [activeCategory, allLabel, t.projects]);

  return (
    <section className="section-shell" id="portfolio">
      <SectionHeader
        title={t.sections.portfolio.title}
        subtitle={t.sections.portfolio.subtitle}
      />

      <div className="filter-row" data-reveal>
        {t.projectCategories.map((category) => (
          <button
            className={category === activeCategory ? "is-active" : ""}
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filtered.map((project, index) => (
          <article
            className="card project-card"
            key={`${project.title}-${index}`}
            data-reveal
            style={{ transitionDelay: `${index * 55}ms` }}
          >
            <div className="project-media">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-overlay">
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${t.ui.viewProject} — ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
                {project.code && project.code !== "#" && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${t.ui.code} — ${project.title}`}
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>

            <div className="project-body">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tag-list">
                {project.tags?.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
