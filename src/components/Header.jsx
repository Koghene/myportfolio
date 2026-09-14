import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { profile } from "../data/portfolio.js";

export function Header() {
  const { t, theme, lang, toggleTheme, toggleLang } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = t.nav.map((i) => i.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          .slice(0, 1)
          .forEach((e) => setActive(`#${e.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [t]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="header-inner">
        <a className="logo" href="#home" onClick={() => setOpen(false)}>
          <span className="logo-mark">{profile.initials}</span>
          <span className="logo-text">{profile.name}</span>
        </a>

        <nav
          id="primary-nav"
          className={open ? "main-nav is-open" : "main-nav"}
          aria-label="Navigation principale"
        >
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={toggleLang}
            aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
            title={lang === "fr" ? "English" : "Français"}
          >
            <Languages size={17} />
            <span className="lang-code">{lang === "fr" ? "FR" : "EN"}</span>
          </button>

          <button
            className="icon-button"
            type="button"
            onClick={toggleTheme}
            aria-label={t.ui.theme}
            title={t.ui.theme}
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          <a className="button button-primary header-cta" href="#contact">
            {t.ui.hire}
          </a>

          <button
            className="icon-button nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}
    </header>
  );
}
