import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import { Experience } from "./components/Experience.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { Marquee } from "./components/Marquee.jsx";
import { Portfolio } from "./components/Portfolio.jsx";
import { ScrollTop } from "./components/ScrollTop.jsx";
import { Services } from "./components/Services.jsx";
import { Skills } from "./components/Skills.jsx";
import { useApp } from "./context/AppContext.jsx";
import { useReveal } from "./hooks/useReveal.js";

export default function App() {
  const { lang } = useApp();
  useReveal([lang]);

  return (
    <>
      <a className="skip-link" href="#home">
        {lang === "fr" ? "Aller au contenu" : "Skip to content"}
      </a>
      <div className="page-glow" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
