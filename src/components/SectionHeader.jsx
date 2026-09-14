export function SectionHeader({ title, subtitle, align = "center" }) {
  return (
    <div className={`section-header align-${align}`} data-reveal>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
