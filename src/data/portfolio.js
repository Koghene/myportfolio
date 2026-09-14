/* ============================================================================
   FICHIER UNIQUE À PERSONNALISER
   Remplace simplement les valeurs ci-dessous (elles sont marquées "À REMPLACER").
   Tout le site se met à jour automatiquement, en français et en anglais.
   ========================================================================== */

import {
  BadgeCheck,
  Brush,
  Code2,
  Database,
  Figma,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Monitor,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

/* --------------------------------------------------------------------------
   1. IDENTITÉ  (À REMPLACER)
   -------------------------------------------------------------------------- */
export const profile = {
  name: "Koghene Makeune Diane",
  initials: "KD",
  photo: "/images/photo.svg", // ta photo de profil (hero)
  aboutPhoto: "/images/photo-about.svg", // ta photo section "À propos"
  cvUrl: "/files/cv.pdf", // dépose ton CV dans public/files/
  email: "ton.email@exemple.com", // <<< À REMPLACER par ton vrai email
  phone: "+237 672 71 57 35",
  whatsapp: "237672715735", // format international sans "+"
  location: "Yaoundé, Cameroun",
  available: true, // affiche le badge "disponible"
};

export const socials = [
  { label: "GitHub", href: "https://github.com/Koghene", icon: Github },
  // Ajoute ton LinkedIn quand tu l'auras :
  // { label: "LinkedIn", href: "https://linkedin.com/in/ton-profil", icon: Linkedin },
  { label: "WhatsApp", href: `https://wa.me/${profile.whatsapp}`, icon: FaWhatsapp },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

/* --------------------------------------------------------------------------
   2. COMPÉTENCES (identiques dans les deux langues)
   -------------------------------------------------------------------------- */
export const skills = [
  { name: "React / JavaScript", level: 90, icon: Code2 },
  { name: "Spring Boot / Java", level: 85, icon: Rocket },
  { name: "Python", level: 80, icon: Database },
  { name: "Kotlin (Android)", level: 70, icon: Smartphone },
  { name: "Node.js / API REST", level: 75, icon: Server },
  { name: "JavaFX / Desktop", level: 70, icon: Monitor },
  { name: "Figma / UI Design", level: 65, icon: Figma },
];

export const techStack = [
  "React", "Vite", "JavaScript", "TypeScript", "Java", "Spring Boot",
  "Python", "Kotlin", "Node.js", "PostgreSQL", "MongoDB", "Docker",
  "Git", "Figma", "JavaFX", "Electron", "Tailwind",
];

/* --------------------------------------------------------------------------
   3. CONTENU BILINGUE
   -------------------------------------------------------------------------- */
export const content = {
  fr: {
    nav: [
      { label: "Accueil", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "À propos", href: "#about" },
      { label: "Parcours", href: "#experience" },
      { label: "Projets", href: "#portfolio" },
      { label: "Contact", href: "#contact" },
    ],
    ui: {
      hire: "Me contacter",
      cv: "Télécharger le CV",
      available: "Disponible pour de nouveaux projets",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      theme: "Changer de thème",
      viewProject: "Voir le projet",
      code: "Code source",
      backToTop: "Haut de page",
      rights: "Tous droits réservés.",
      builtWith: "Conçu et développé avec React & Vite.",
      sending: "Envoi...",
      sent: "Merci ! Ton client mail va s'ouvrir.",
    },
    hero: {
      eyebrow: "Bonjour, je suis",
      role: "Ingénieure en Génie Informatique — Développement Web, Mobile & Desktop",
      tagline:
        "Je conçois et développe des applications web, mobiles et desktop modernes, rapides et agréables à utiliser — du design de l'interface jusqu'au backend.",
    },
    stats: [
      { value: "3+", label: "Années d'expérience" },
      { value: "15+", label: "Projets réalisés" },
      { value: "10+", label: "Clients satisfaits" },
    ],
    sections: {
      services: { title: "Services", subtitle: "Ce que je peux faire pour vous." },
      about: { title: "À propos", subtitle: "Un peu plus sur mon parcours." },
      skills: { title: "Compétences", subtitle: "Les technologies que j'utilise au quotidien." },
      experience: { title: "Parcours", subtitle: "Expériences et formation." },
      portfolio: { title: "Projets", subtitle: "Une sélection de réalisations récentes." },
      contact: { title: "Contact", subtitle: "Une idée, un projet ? Écrivons-en les premières lignes." },
    },
    services: [
      {
        title: "Développement Web",
        description:
          "Sites vitrines, applications web et tableaux de bord performants avec React et une architecture propre.",
        icon: Code2,
      },
      {
        title: "Développement Mobile",
        description:
          "Applications Android natives (Kotlin/Java) fluides, avec une expérience utilisateur soignée.",
        icon: Smartphone,
      },
      {
        title: "Développement Desktop",
        description:
          "Logiciels de bureau multiplateformes (JavaFX, Electron) pour la gestion métier et le travail hors ligne.",
        icon: Monitor,
      },
      {
        title: "Backend & API",
        description:
          "APIs REST robustes et sécurisées avec Spring Boot ou Node.js, base de données bien modélisée.",
        icon: Rocket,
      },
      {
        title: "UI / UX Design",
        description:
          "Maquettes Figma, design systems et interfaces cohérentes, accessibles et responsive.",
        icon: Brush,
      },
      {
        title: "Design System",
        description:
          "Composants, couleurs et typographies réutilisables pour garder un produit cohérent dans la durée.",
        icon: Layers3,
      },
      {
        title: "Audit & Conseil",
        description:
          "Analyse technique et UX de votre produit, recommandations concrètes et priorisées.",
        icon: BadgeCheck,
      },
    ],
    about: {
      eyebrow: "Ingénieure en génie informatique basée à Yaoundé",
      paragraphs: [
        "Je suis Diane Koghene Makeune, ingénieure en génie informatique passionnée par la création de produits numériques utiles et bien faits. J'aime transformer une idée en une interface claire, rapide et agréable à utiliser.",
        "Mon travail couvre l'ensemble de la chaîne : conception de l'interface, développement web, mobile et desktop, mise en place du backend et déploiement. Je porte une attention particulière à la qualité du code, à la performance et à l'accessibilité.",
        "Curieuse et rigoureuse, je continue d'apprendre chaque jour et je cherche des projets ambitieux où je peux apporter de la valeur.",
      ],
      highlights: [
        { icon: Sparkles, label: "Code propre et maintenable" },
        { icon: Rocket, label: "Livraison rapide et fiable" },
        { icon: BadgeCheck, label: "Communication transparente" },
      ],
    },
    experience: [
      {
        period: "2024 — aujourd'hui",
        title: "Développeuse Fullstack Freelance",
        org: "Indépendant · Yaoundé",
        description:
          "Conception et développement d'applications web et mobiles pour des clients locaux : de la maquette à la mise en production.",
        type: "work",
      },
      {
        period: "2023 — 2024",
        title: "Développeuse Web (stage)",
        org: "Nom de l'entreprise",
        description:
          "Développement de fonctionnalités frontend en React et d'APIs REST, participation aux revues de code.",
        type: "work",
      },
      {
        period: "2020 — 2023",
        title: "Ingénierie en Génie Informatique",
        org: "Nom de l'établissement",
        description:
          "Algorithmique, génie logiciel, bases de données, développement web et mobile.",
        type: "study",
      },
    ],
    projectCategories: ["Tous", "Web", "Mobile", "Desktop", "Design"],
    projects: [
      {
        title: "Plateforme e-commerce",
        category: "Web",
        description:
          "Boutique en ligne complète : catalogue, panier, paiement et back-office d'administration.",
        tags: ["React", "Spring Boot", "PostgreSQL"],
        image: "/images/project-1.svg",
        demo: "#",
        code: "#",
      },
      {
        title: "Application de livraison",
        category: "Mobile",
        description:
          "Application Android de suivi de commandes en temps réel avec notifications push.",
        tags: ["Kotlin", "Firebase", "Maps"],
        image: "/images/project-2.svg",
        demo: "#",
        code: "#",
      },
      {
        title: "API d'authentification",
        category: "Web",
        description:
          "Service d'authentification sécurisé : JWT, rôles, rafraîchissement de token et documentation Swagger.",
        tags: ["Spring Boot", "JWT", "Docker"],
        image: "/images/project-3.svg",
        demo: "#",
        code: "#",
      },
      {
        title: "Dashboard analytique",
        category: "Web",
        description:
          "Tableau de bord de visualisation de données avec graphiques interactifs et export.",
        tags: ["React", "Charts", "Node.js"],
        image: "/images/project-4.svg",
        demo: "#",
        code: "#",
      },
      {
        title: "Refonte d'identité visuelle",
        category: "Design",
        description:
          "Design system complet : logo, palette, typographies et bibliothèque de composants Figma.",
        tags: ["Figma", "Design System"],
        image: "/images/project-5.svg",
        demo: "#",
        code: "#",
      },
      {
        title: "Logiciel de gestion de stock",
        category: "Desktop",
        description:
          "Application de bureau pour le suivi des entrées/sorties de stock, avec rapports imprimables et mode hors ligne.",
        tags: ["JavaFX", "Java", "SQLite"],
        image: "/images/project-7.svg",
        demo: "#",
        code: "#",
      },
      {
        title: "Application de gestion scolaire",
        category: "Web",
        description:
          "Gestion des élèves, notes et bulletins, avec espaces séparés pour l'administration et les parents.",
        tags: ["React", "Java", "MySQL"],
        image: "/images/project-6.svg",
        demo: "#",
        code: "#",
      },
    ],
    contact: {
      infoTitle: "Parlons de votre projet",
      infoText:
        "Je réponds généralement en moins de 24 heures. N'hésitez pas à écrire en français ou en anglais.",
      labels: {
        name: "Nom complet",
        email: "Email",
        phone: "Téléphone (facultatif)",
        service: "Type de projet",
        budget: "Budget estimé (facultatif)",
        details: "Décrivez votre projet...",
        send: "Envoyer le message",
      },
      serviceOptions: [
        "Développement Web",
        "Développement Mobile",
        "Développement Desktop",
        "Backend & API",
        "UI / UX Design",
        "Autre",
      ],
    },
  },

  en: {
    nav: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Résumé", href: "#experience" },
      { label: "Work", href: "#portfolio" },
      { label: "Contact", href: "#contact" },
    ],
    ui: {
      hire: "Hire me",
      cv: "Download CV",
      available: "Available for new projects",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      theme: "Toggle theme",
      viewProject: "View project",
      code: "Source code",
      backToTop: "Back to top",
      rights: "All rights reserved.",
      builtWith: "Designed and built with React & Vite.",
      sending: "Sending...",
      sent: "Thanks! Your mail client will open.",
    },
    hero: {
      eyebrow: "Hi, I'm",
      role: "Computer Engineer — Web, Mobile & Desktop Development",
      tagline:
        "I design and build modern, fast and delightful web, mobile and desktop applications — from the interface down to the backend.",
    },
    stats: [
      { value: "3+", label: "Years of experience" },
      { value: "15+", label: "Projects delivered" },
      { value: "10+", label: "Happy clients" },
    ],
    sections: {
      services: { title: "Services", subtitle: "What I can do for you." },
      about: { title: "About me", subtitle: "A little more about my background." },
      skills: { title: "Skills", subtitle: "The technologies I work with every day." },
      experience: { title: "Résumé", subtitle: "Experience and education." },
      portfolio: { title: "Work", subtitle: "A selection of recent projects." },
      contact: { title: "Contact", subtitle: "Got an idea? Let's write its first lines." },
    },
    services: [
      {
        title: "Web Development",
        description:
          "Landing pages, web apps and dashboards built with React and a clean, scalable architecture.",
        icon: Code2,
      },
      {
        title: "Mobile Development",
        description:
          "Smooth native Android apps (Kotlin/Java) with a carefully crafted user experience.",
        icon: Smartphone,
      },
      {
        title: "Desktop Development",
        description:
          "Cross-platform desktop software (JavaFX, Electron) for business management and offline work.",
        icon: Monitor,
      },
      {
        title: "Backend & APIs",
        description:
          "Robust and secure REST APIs with Spring Boot or Node.js, backed by well-modelled databases.",
        icon: Rocket,
      },
      {
        title: "UI / UX Design",
        description:
          "Figma mockups, design systems and consistent, accessible and responsive interfaces.",
        icon: Brush,
      },
      {
        title: "Design System",
        description:
          "Reusable components, colors and typography to keep your product consistent over time.",
        icon: Layers3,
      },
      {
        title: "Audit & Consulting",
        description:
          "Technical and UX review of your product, with concrete and prioritized recommendations.",
        icon: BadgeCheck,
      },
    ],
    about: {
      eyebrow: "Computer engineer based in Yaoundé",
      paragraphs: [
        "I'm Diane Koghene Makeune, a computer engineer passionate about building useful, well-crafted digital products. I love turning an idea into a clear, fast and enjoyable interface.",
        "My work spans the whole chain: interface design, web, mobile and desktop development, backend implementation and deployment. I care deeply about code quality, performance and accessibility.",
        "Curious and thorough, I keep learning every day and look for ambitious projects where I can add real value.",
      ],
      highlights: [
        { icon: Sparkles, label: "Clean, maintainable code" },
        { icon: Rocket, label: "Fast and reliable delivery" },
        { icon: BadgeCheck, label: "Transparent communication" },
      ],
    },
    experience: [
      {
        period: "2024 — present",
        title: "Freelance Fullstack Developer",
        org: "Self-employed · Yaoundé",
        description:
          "Designing and building web and mobile applications for local clients, from mockup to production.",
        type: "work",
      },
      {
        period: "2023 — 2024",
        title: "Web Developer (internship)",
        org: "Company name",
        description:
          "Built React frontend features and REST APIs, took part in code reviews.",
        type: "work",
      },
      {
        period: "2020 — 2023",
        title: "Computer Engineering degree",
        org: "School name",
        description:
          "Algorithms, software engineering, databases, web and mobile development.",
        type: "study",
      },
    ],
    projectCategories: ["All", "Web", "Mobile", "Desktop", "Design"],
    projects: [
      {
        title: "E-commerce platform",
        category: "Web",
        description:
          "Full online store: catalog, cart, checkout and an administration back-office.",
        tags: ["React", "Spring Boot", "PostgreSQL"],
        image: "/images/project-1.svg",
        demo: "#",
        code: "#",
      },
      {
        title: "Delivery app",
        category: "Mobile",
        description:
          "Android app with real-time order tracking and push notifications.",
        tags: ["Kotlin", "Firebase", "Maps"],
        image: "/images/project-2.svg",
        demo: "#",
        code: "#",
      },
      {
        title: "Authentication API",
        category: "Web",
        description:
          "Secure auth service: JWT, roles, token refresh and Swagger documentation.",
        tags: ["Spring Boot", "JWT", "Docker"],
        image: "/images/project-3.svg",
        demo: "#",
        code: "#",
      },
      {
        title: "Analytics dashboard",
        category: "Web",
        description:
          "Data visualization dashboard with interactive charts and exports.",
        tags: ["React", "Charts", "Node.js"],
        image: "/images/project-4.svg",
        demo: "#",
        code: "#",
      },
      {
        title: "Brand identity redesign",
        category: "Design",
        description:
          "Complete design system: logo, palette, typography and a Figma component library.",
        tags: ["Figma", "Design System"],
        image: "/images/project-5.svg",
        demo: "#",
        code: "#",
      },
      {
        title: "Inventory management software",
        category: "Desktop",
        description:
          "Desktop application tracking stock in and out, with printable reports and offline mode.",
        tags: ["JavaFX", "Java", "SQLite"],
        image: "/images/project-7.svg",
        demo: "#",
        code: "#",
      },
      {
        title: "School management app",
        category: "Web",
        description:
          "Students, grades and report cards, with separate spaces for staff and parents.",
        tags: ["React", "Java", "MySQL"],
        image: "/images/project-6.svg",
        demo: "#",
        code: "#",
      },
    ],
    contact: {
      infoTitle: "Let's talk about your project",
      infoText:
        "I usually reply within 24 hours. Feel free to write in English or French.",
      labels: {
        name: "Full name",
        email: "Email",
        phone: "Phone (optional)",
        service: "Project type",
        budget: "Estimated budget (optional)",
        details: "Tell me about your project...",
        send: "Send message",
      },
      serviceOptions: [
        "Web Development",
        "Mobile Development",
        "Desktop Development",
        "Backend & APIs",
        "UI / UX Design",
        "Other",
      ],
    },
  },
};
