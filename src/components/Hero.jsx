import { Download, MapPin } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";
import { profile, socials } from "../data/portfolio.js";

export function Hero() {
  const { t } = useApp();

  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy" data-reveal>
        {profile.available && (
          <span className="availability">
            <i className="dot" aria-hidden="true" />
            {t.ui.available}
          </span>
        )}

        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1>
          <span className="hero-name">{profile.name}</span>
          <span className="hero-role">{t.hero.role}</span>
        </h1>
        <p className="hero-tagline">{t.hero.tagline}</p>

        <p className="hero-location">
          <MapPin size={15} aria-hidden="true" /> {profile.location}
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            {t.ui.hire}
          </a>
          <a className="button button-ghost" href={profile.cvUrl} download>
            <Download size={16} aria-hidden="true" />
            {t.ui.cv}
          </a>
        </div>

        <div className="social-row" aria-label="Réseaux sociaux">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        <div className="stats-grid">
          {t.stats.map((stat) => (
            <article key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="hero-visual" data-reveal>
        <div className="hero-photo">
          <img src={profile.photo} alt={profile.name} loading="eager" />
        </div>
      </div>
    </section>
  );
}
