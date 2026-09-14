import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext.jsx";

export function ScrollTop() {
  const { t } = useApp();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={visible ? "scroll-top is-visible" : "scroll-top"}
      type="button"
      aria-label={t.ui.backToTop}
      title={t.ui.backToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp size={18} />
    </button>
  );
}
