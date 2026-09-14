import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { content } from "../data/portfolio.js";

const AppContext = createContext(null);

function readStored(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(() => readStored("theme", "light"));
  const [lang, setLang] = useState(() => readStored("lang", "fr"));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const toggleTheme = useCallback(
    () => setTheme((v) => (v === "light" ? "dark" : "light")),
    []
  );
  const toggleLang = useCallback(
    () => setLang((v) => (v === "fr" ? "en" : "fr")),
    []
  );

  const value = useMemo(
    () => ({ theme, lang, toggleTheme, toggleLang, t: content[lang] }),
    [theme, lang, toggleTheme, toggleLang]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
