import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { profile, socials } from "../data/portfolio.js";
import { SectionHeader } from "./SectionHeader.jsx";

export function Contact() {
  const { t } = useApp();
  const [status, setStatus] = useState("");
  const labels = t.contact.labels;

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio — ${data.get("service")} — ${data.get("name")}`
    );
    const body = encodeURIComponent(
      [
        `${labels.name}: ${data.get("name")}`,
        `${labels.email}: ${data.get("email")}`,
        `${labels.phone}: ${data.get("phone") || "-"}`,
        `${labels.service}: ${data.get("service")}`,
        `${labels.budget}: ${data.get("budget") || "-"}`,
        "",
        `${data.get("details")}`,
      ].join("\n")
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus(t.ui.sent);
  }

  return (
    <section className="section-shell" id="contact">
      <SectionHeader
        title={t.sections.contact.title}
        subtitle={t.sections.contact.subtitle}
      />

      <div className="contact-grid">
        <aside className="card contact-info" data-reveal>
          <h3>{t.contact.infoTitle}</h3>
          <p>{t.contact.infoText}</p>

          <ul className="contact-list">
            <li>
              <span className="card-icon small">
                <Mail size={16} aria-hidden="true" />
              </span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span className="card-icon small">
                <Phone size={16} aria-hidden="true" />
              </span>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            </li>
            <li>
              <span className="card-icon small">
                <MapPin size={16} aria-hidden="true" />
              </span>
              <span>{profile.location}</span>
            </li>
          </ul>

          <div className="social-row">
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
        </aside>

        <form className="card contact-form" onSubmit={handleSubmit} data-reveal>
          <div className="field">
            <label htmlFor="name">{labels.name}</label>
            <input id="name" name="name" required autoComplete="name" />
          </div>

          <div className="field">
            <label htmlFor="email">{labels.email}</label>
            <input id="email" name="email" type="email" required autoComplete="email" />
          </div>

          <div className="field">
            <label htmlFor="phone">{labels.phone}</label>
            <input id="phone" name="phone" autoComplete="tel" />
          </div>

          <div className="field">
            <label htmlFor="service">{labels.service}</label>
            <select id="service" name="service" defaultValue={t.contact.serviceOptions[0]}>
              {t.contact.serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="field field-full">
            <label htmlFor="budget">{labels.budget}</label>
            <input id="budget" name="budget" />
          </div>

          <div className="field field-full">
            <label htmlFor="details">{labels.details}</label>
            <textarea id="details" name="details" rows="6" required />
          </div>

          <button className="button button-primary form-submit" type="submit">
            <Send size={16} aria-hidden="true" />
            {labels.send}
          </button>

          <p className="form-status" role="status">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
