import { useApp } from "../context/AppContext.jsx";
import { profile, socials } from "../data/portfolio.js";

export function Footer() {
  const { t } = useApp();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="logo" href="#home">
          <span className="logo-mark">{profile.initials}</span>
          <span className="logo-text">{profile.name}</span>
        </a>

        <nav className="footer-nav" aria-label="Navigation secondaire">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="social-row">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {year} {profile.name}. {t.ui.rights}
        </p>
        <p>{t.ui.builtWith}</p>
      </div>
    </footer>
  );
}
