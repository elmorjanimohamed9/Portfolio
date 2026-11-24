"use strict";

/**
 * Lightweight FR / EN switcher.
 * The HTML is written in French (default). Each entry below maps the exact
 * French innerHTML of an element to its English version.
 */
(function () {
  const EN = {
    // sidebar
    "Développeur Front-End &amp; Mobile": "Front-End &amp; Mobile Developer",
    '<span class="status-dot"></span>Disponible immédiatement': '<span class="status-dot"></span>Available immediately',
    "Afficher les contacts": "Show contacts",
    "E-mail": "Email",
    "Téléphone": "Phone",
    "Localisation": "Location",
    "Rabat, Maroc · mobile sur Casablanca": "Rabat, Morocco · open to Casablanca",
    "Disponibilité": "Availability",
    "Immédiate · CDI": "Immediate · Full-time",
    "Télécharger mon CV": "Download my CV",

    // nav + titles
    "À propos": "About",
    "Parcours": "Resume",
    "Projets": "Projects",

    // about
    'Bonjour, je suis <strong>Mohamed El Morjani</strong>, développeur Front-End &amp; Mobile spécialisé en <strong>React, Next.js, TypeScript et React Native</strong>.':
      'Hi, I\'m <strong>Mohamed El Morjani</strong>, a Front-End &amp; Mobile developer specialised in <strong>React, Next.js, TypeScript and React Native</strong>.',
    "Avec près de 2 ans d'expérience chez Jump IT, j'ai conçu et livré des plateformes SaaS B2B de bout en bout : interfaces web (Next.js, Redux Toolkit, Tailwind CSS), applications mobiles (React Native / Expo) et APIs (NestJS, Laravel).":
      "With almost 2 years of experience at Jump IT, I have designed and delivered B2B SaaS platforms end to end: web interfaces (Next.js, Redux Toolkit, Tailwind CSS), mobile apps (React Native / Expo) and APIs (NestJS, Laravel).",
    "Tech Lead sur Stayzi, j'ai défini l'architecture, instauré les standards de code (TypeScript strict, ESLint, tests Jest, revues de code) et conduit la revue de sécurité du client mobile.":
      "As Tech Lead on Stayzi, I defined the architecture, set the code standards (strict TypeScript, ESLint, Jest tests, code reviews) and led the security review of the mobile client.",
    "Je porte une attention particulière à l'accessibilité (WCAG), à l'internationalisation (RTL) et à la performance, et j'aime travailler en équipe Agile avec les profils Back-End et Design.":
      "I pay particular attention to accessibility (WCAG), internationalisation (RTL) and performance, and I enjoy working in Agile teams with Back-End and Design profiles.",
    "<strong>Disponible immédiatement</strong> et mobile sur Casablanca : parlons de votre projet.":
      "<strong>Available immediately</strong> and open to working in Casablanca: let's talk about your project.",
    "≈ 2 ans": "≈ 2 years",
    "d'expérience professionnelle": "of professional experience",
    "plateformes SaaS en production": "SaaS platforms in production",
    "de temps de traitement des réservations (Rakib)": "booking processing time (Rakib)",
    "d'une équipe de 3 personnes": "of a team of 3",
    "CV Front-End React": "Front-End React CV",
    "CV Mobile React Native": "React Native Mobile CV",
    "M'écrire": "Email me",
    "Ce que je fais": "What I do",
    "Interfaces modernes, responsive et performantes : TypeScript, Redux Toolkit, Tailwind CSS, intégration de maquettes Figma, consommation d'API REST.":
      "Modern, responsive and fast interfaces: TypeScript, Redux Toolkit, Tailwind CSS, Figma-to-code integration, REST API consumption.",
    "Applications mobiles": "Mobile applications",
    "Apps React Native / Expo pour iOS et Android : architecture feature-first, authentification sécurisée, notifications et publication.":
      "React Native / Expo apps for iOS and Android: feature-first architecture, secure authentication, notifications and store release.",
    "API &amp; architecture": "APIs &amp; architecture",
    "NestJS, Laravel, Keycloak (RBAC), microservices et Kafka : des contrats d'API clairs et un socle technique maintenable.":
      "NestJS, Laravel, Keycloak (RBAC), microservices and Kafka: clear API contracts and a maintainable technical foundation.",
    "Qualité &amp; accessibilité": "Quality &amp; accessibility",
    "Tests Jest, ESLint, revues de code, accessibilité WCAG, interfaces multilingues avec support RTL.":
      "Jest tests, ESLint, code reviews, WCAG accessibility, multilingual interfaces with RTL support.",
    "Ce que disent mes collègues": "What my colleagues say",
    'Software Engineer · JavaScript, React.js, Next.js, Python, Flask<br><span>Collègue dans la même équipe · décembre 2025</span>':
      'Software Engineer · JavaScript, React.js, Next.js, Python, Flask<br><span>Teammate · December 2025</span>',
    'Java &amp; Angular Developer<br><span>Collaboration inter-équipes · novembre 2025</span>':
      'Java &amp; Angular Developer<br><span>Cross-team collaboration · November 2025</span>',
    'Software Engineer in Test<br><span>Collègue dans la même équipe · novembre 2025</span>':
      'Software Engineer in Test<br><span>Teammate · November 2025</span>',

    // resume
    "Expérience professionnelle": "Professional experience",
    "Développeur Web &amp; Mobile (React / Next.js / React Native)": "Web &amp; Mobile Developer (React / Next.js / React Native)",
    "05/2025 – Présent": "05/2025 – Present",
    "Développement d'applications web et mobiles SaaS pour clients externes, de la conception à la mise en production.":
      "Development of SaaS web and mobile applications for external clients, from design to production.",
    "(Tech Lead, équipe de 3)": "(Tech Lead, team of 3)",
    "Back-office web en <strong>Next.js 16</strong> (App Router, TypeScript) et application mobile <strong>React Native / Expo</strong> pour les agents sur le terrain.":
      "Web back-office in <strong>Next.js 16</strong> (App Router, TypeScript) and a <strong>React Native / Expo</strong> mobile app for field agents.",
    "Architecture feature-first de l'app mobile, une seule base de code avec rendu natif iOS et Android (@expo/ui).":
      "Feature-first architecture for the mobile app: a single codebase with native rendering on iOS and Android (@expo/ui).",
    "Authentification et RBAC avec Keycloak (5 rôles), connexion mobile en deux étapes, rafraîchissement de session single-flight.":
      "Authentication and RBAC with Keycloak (5 roles), two-step mobile login, single-flight session refresh.",
    "Revue de sécurité du client mobile : jetons liés à l'appareil, parsing durci des QR, scan de QR signé HMAC.":
      "Security review of the mobile client: device-bound tokens, hardened QR parsing, HMAC-signed QR scanning.",
    "Standards d'équipe : TypeScript strict, ESLint, Husky, commits conventionnels, tests Jest, revues de code.":
      "Team standards: strict TypeScript, ESLint, Husky, conventional commits, Jest tests, code reviews.",
    "Accessibilité WCAG, interface en 3 langues avec RTL, notifications WhatsApp en 6 langues, synchronisation iCal Airbnb / Booking.":
      "WCAG accessibility, 3-language interface with RTL, WhatsApp notifications in 6 languages, Airbnb / Booking iCal sync.",
    "Application mobile cross-platform (React Native / Expo) et API RESTful (Laravel / PHP).":
      "Cross-platform mobile app (React Native / Expo) and RESTful API (Laravel / PHP).",
    "Calendrier de disponibilité en temps réel, génération de contrats et signature électronique.":
      "Real-time availability calendar, contract generation and e-signature.",
    "<strong>-70 %</strong> de temps de traitement des réservations (20 à 6 minutes), <strong>95 %</strong> de satisfaction utilisateurs.":
      "<strong>-70 %</strong> booking processing time (20 down to 6 minutes), <strong>95 %</strong> user satisfaction.",
    "(responsable du front-end)": "(front-end lead)",
    "Application mobile <strong>React Native / Expo</strong> (Redux Toolkit) qui numérise les reçus et suit les commandes des artisans.":
      "<strong>React Native / Expo</strong> mobile app (Redux Toolkit) that digitises receipts and tracks craftspeople's orders.",
    "Pilotage du front-end et du back-office en partenariat étroit avec le développeur Back-End.":
      "Led the front-end and back-office in close partnership with the Back-End developer.",
    "Stage Développeur Full Stack": "Full Stack Developer Internship",
    "Maintenance et nouvelles fonctionnalités sur 2 projets clients (e-commerce, école) en équipe Agile (Scrum).":
      "Maintenance and new features on 2 client projects (e-commerce, school) in an Agile (Scrum) team.",
    "Intégration de maquettes Figma en code responsive et plus de 10 fonctionnalités backend Laravel.":
      "Figma mock-ups turned into responsive code and 10+ Laravel backend features.",
    "100 % des projets livrés dans les délais, sans régression critique.":
      "100 % of projects delivered on time, with no critical regression.",
    "Stage Graphiste": "Graphic Designer Internship",
    "Conception de supports de communication (flyers, brochures, carnets, stands) et suivi de l'impression : une première expérience UI / design qui nourrit aujourd'hui mon sens du détail en interface.":
      "Design of communication materials (flyers, brochures, notebooks, stands) and print follow-up: a first UI / design experience that still shapes my eye for detail in interfaces.",
    "Formation": "Education",
    "Développeur Web et Mobile · YouCode, UM6P": "Web and Mobile Developer · YouCode, UM6P",
    "Plus de 1400 heures de pratique : développement web et mobile, DevOps et méthodes Agiles. Plus de 10 applications complètes, de la conception au déploiement.":
      "1,400+ hours of hands-on practice: web and mobile development, DevOps and Agile methods. 10+ complete applications, from design to deployment.",
    "Licence Fondamentale en Sciences Physiques": "Bachelor's Degree in Physical Sciences",
    "Faculté des Sciences Chouaib Doukkali, El Jadida. Option Réseaux et Télécommunications.":
      "Chouaib Doukkali Faculty of Sciences, El Jadida. Networks and Telecommunications track.",
    "Baccalauréat en Sciences Physiques": "High School Diploma in Physical Sciences",
    "Lycée Ras El Ain.": "Ras El Ain High School.",
    "Compétences": "Skills",
    "Bases de données": "Databases",
    "Qualité &amp; outils": "Quality &amp; tools",
    "Méthodes &amp; gestion de projet": "Methods &amp; project management",
    "Accessibilité WCAG": "WCAG accessibility",
    "Langues": "Languages",
    "Arabe · langue maternelle": "Arabic · native",
    "Français · courant": "French · fluent",
    "Anglais · intermédiaire": "English · intermediate",

    // projects
    "Tous": "All",
    "SaaS B2B · Web &amp; Mobile · Tech Lead": "B2B SaaS · Web &amp; Mobile · Tech Lead",
    "Application mobile · SaaS": "Mobile app · SaaS",
    "Application mobile": "Mobile app",
    "Application web · React": "Web app · React",
    "Application web · Full Stack": "Web app · Full Stack",
    "Catégorie": "Category",
    "Technologies utilisées :": "Technologies used:",
    '<ion-icon name="globe-outline"></ion-icon> Voir le projet': '<ion-icon name="globe-outline"></ion-icon> View project',
    '<ion-icon name="logo-github"></ion-icon> Code source': '<ion-icon name="logo-github"></ion-icon> Source code',
    '<ion-icon name="logo-figma"></ion-icon> Maquette Figma': '<ion-icon name="logo-figma"></ion-icon> Figma design',

    "Stayzi · Plateforme SaaS B2B de gestion de conciergerie": "Stayzi · B2B SaaS concierge management platform",
    "Rakib · Plateforme SaaS de location de voitures": "Rakib · Car rental SaaS platform",
    "AjiSalit · Application de numérisation des reçus": "AjiSalit · Receipt digitisation app",

    // contact
    'Un poste, une mission ou une question ? Je réponds rapidement. <strong>Disponible immédiatement, mobile sur Casablanca.</strong>':
      'A job, a project or a question? I reply quickly. <strong>Available immediately, open to Casablanca.</strong>',
    "<b>Téléphone</b>+212 642 090 763": "<b>Phone</b>+212 642 090 763",
    "Formulaire de contact": "Contact form",
    "Envoyer le message": "Send message",
  };

  const PLACEHOLDERS = {
    "Nom complet": "Full name",
    "Adresse e-mail": "Email address",
    "Votre message": "Your message",
  };

  const PROJECT_DESC_EN = {
    "Stayzi": "Multi-tenant B2B SaaS platform for concierge services: a web back-office (Next.js) and a field mobile app (React Native / Expo) for agents. As Tech Lead of a team of 3, I defined the microservices architecture (8 services, DDD/CQRS, Kafka), authentication and RBAC with Keycloak, the mobile security review, and the 3-language RTL-ready interface. Client project: the source code is private.",
    "Rakib": "Mobile app and management platform for car rental agencies: real-time bookings, availability calendar, vehicle and contract tracking with e-signature, client history. Result: -70 % booking processing time and 95 % user satisfaction.",
    "AjiSalit": "Mobile app that digitises receipts and tracks orders for craftspeople: no more paper, everything is stored and managed digitally.",
    "WarehouseOps": "Warehouse inventory management app: product management, stock tracking, barcode scanning, authentication and a statistics dashboard.",
    "Spektra Gradient Generator": "CSS gradient generator: modern, fully responsive interface that feels smooth on every device.",
    "PeoplePerTask": "Freelance platform connecting professionals and clients: freelancer search, project management and an admin dashboard. Responsive interface following WCAG accessibility best practices.",
    "StadiumStream - CAN 2023": "Online ticket booking system for the Africa Cup of Nations: national team and stadium management, capacity control and e-ticket generation.",
    "Sahifat": "Online library management system: search, borrow and return books, user management.",
  };

  const TOASTS_EN = {
    "Erreur": "Error",
    "Succès": "Success",
    "Échec de l'envoi du message.": "Failed to send message.",
    "Service e-mail indisponible. Réessayez plus tard.": "Email service unavailable. Please try again later.",
    "Message envoyé avec succès !": "Message sent successfully!",
  };

  const META_EN = {
    title: "Mohamed El Morjani | Front-End React & React Native Mobile Developer",
    description: "Portfolio of Mohamed El Morjani, Front-End React / Next.js and React Native mobile developer (TypeScript). Almost 2 years of experience, Tech Lead on a B2B SaaS platform. Available immediately, open to Casablanca.",
  };

  const tmp = document.createElement("div");
  const collapse = (s) => s.replace(/\s+/g, " ").trim();
  const norm = (html) => { tmp.innerHTML = html; return collapse(tmp.innerHTML); };

  const dict = new Map(Object.entries(EN).map(([k, v]) => [norm(k), v]));
  const originals = new Map(); // element -> French innerHTML
  const SKIP = new Set(["SCRIPT", "STYLE", "SVG", "ION-ICON", "NOSCRIPT", "HEAD", "IFRAME"]);

  let translated = []; // elements that have an English version
  function scan() {
    translated = [];
    const walk = (el) => {
      if (SKIP.has(el.tagName.toUpperCase())) return;
      const key = collapse(el.innerHTML);
      if (key && dict.has(key)) { translated.push(el); return; }
      for (const child of el.children) walk(child);
    };
    walk(document.body);
  }

  const meta = (sel) => document.querySelector(sel);
  const frMeta = {
    title: document.title,
    description: meta('meta[name="description"]')?.content || "",
  };

  let lang = "fr";
  function setLang(next, persist) {
    lang = next === "en" ? "en" : "fr";
    document.documentElement.lang = lang;

    for (const el of translated) {
      if (!originals.has(el)) originals.set(el, el.innerHTML);
      const fr = originals.get(el);
      el.innerHTML = lang === "en" ? dict.get(collapse(fr)) : fr;
    }

    document.querySelectorAll("[placeholder]").forEach((el) => {
      if (!el.dataset.phFr) el.dataset.phFr = el.placeholder;
      el.placeholder = lang === "en" ? (PLACEHOLDERS[el.dataset.phFr] || el.dataset.phFr) : el.dataset.phFr;
    });

    const t = lang === "en" ? META_EN : frMeta;
    document.title = t.title;
    [['meta[name="description"]'], ['meta[property="og:description"]']].forEach(([s]) => { const m = meta(s); if (m) m.content = t.description; });
    const ogTitle = meta('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = lang === "en" ? "Mohamed El Morjani | Front-End React & Mobile Developer" : "Mohamed El Morjani | Développeur Front-End React & Mobile";

    document.querySelectorAll("[data-lang-toggle]").forEach((b) => {
      b.textContent = lang === "en" ? "FR" : "EN";
      b.setAttribute("aria-label", lang === "en" ? "Passer en français" : "Switch to English");
    });

    if (persist) { try { localStorage.setItem("lang", lang); } catch (_) {} }
  }

  window.i18n = {
    get lang() { return lang; },
    projectDescription(title, fr) { return lang === "en" ? (PROJECT_DESC_EN[title] || fr) : fr; },
    toast(s) { return lang === "en" ? (TOASTS_EN[s] || s) : s; },
  };

  document.addEventListener("DOMContentLoaded", () => {
    scan();
    document.querySelectorAll("[data-lang-toggle]").forEach((b) =>
      b.addEventListener("click", () => setLang(lang === "fr" ? "en" : "fr", true))
    );
    let saved = null;
    try { saved = localStorage.getItem("lang"); } catch (_) {}
    if (saved === "en") setLang("en", false);
  });
})();
