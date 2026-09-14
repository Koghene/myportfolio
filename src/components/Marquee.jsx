import { techStack } from "../data/portfolio.js";

export function Marquee() {
  const items = [...techStack, ...techStack];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
