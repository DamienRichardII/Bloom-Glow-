/* =====================================================================
   BLOOM & GLOW — Maquette 1 "Luxury Pink Glow" — main.js
   Burger · langue FR/DE/EN (FR par défaut) · filtres galerie ·
   scroll reveal · active link · header scrolled
   ===================================================================== */
(function () {
  "use strict";

  /* ---------------- TRANSLATIONS (FR par défaut) ---------------- */
  const T = {
    fr: {
      nav_home: "Accueil", nav_prices: "Prix", nav_services: "Services",
      nav_info: "Info", nav_formation: "Formation",
      cta_book: "Prendre RDV", cta_shop: "Shop Bloom & Glow", cta_wa: "WhatsApp",
      cta_book_wa: "Réserver via WhatsApp", cta_wa_write: "Écrire sur WhatsApp",
      cta_see_prices: "Voir les prix", cta_all_prices: "Voir tous les prix", cta_more: "Plus d'infos",

      hero_eyebrow: "Lashes · Brows · Beauty",
      hero_sub: "Beauty starts with confidence. Lashes, brows & beauty care in Luzern.",
      hero_svc_title: "Nos services",

      svc_lash_ext: "Lash Extensions", svc_lash_lift: "Lash Lift",
      svc_brow_lam: "Brow Lamination", svc_brow_style: "Brow Styling",
      svc_products: "Lash Products", svc_care: "Beauty Care", svc_training: "Trainings",
      soon: "Coming Soon",

      home_book_title: "Prête à rayonner ?",
      home_book_text: "Réservez votre rendez-vous en ligne ou écrivez-nous directement sur WhatsApp.",
      home_shop_title: "Boutique Bloom & Glow",
      home_shop_text: "Découvrez nos produits cils dans la boutique officielle Bloom & Glow.",

      /* PRIX */
      prices_eyebrow: "Prix",
      prices_title: "Nos Prix",
      prices_sub: "Transparence & qualité",
      cat_lashes: "Lashes", cat_brows: "Brows", cat_lift: "Lash Lift", cat_combos: "Combos",
      from: "Dès",
      detail_title: "Le détail des prestations",
      d_classic: "Lash Extensions — Classic", d_classic_s: "Effet naturel",
      d_hybrid: "Lash Extensions — Hybrid", d_hybrid_s: "Entre naturel et volume",
      d_volume: "Lash Extensions — Volume", d_volume_s: "Effet dense et glamour",
      d_refill: "Refill", d_refill_s: "Remplissage des extensions",
      d_brow_lam: "Brow Lamination", d_brow_lam_s: "Sourcils définis & soignés",
      d_brow_style: "Brow Styling", d_brow_style_s: "Mise en forme & épilation",
      d_brow_tint: "Brow Tint", d_brow_tint_s: "Teinture des sourcils",
      price_note: "* Prix indicatifs — les tarifs définitifs seront confirmés lors de votre rendez-vous.",

      /* SERVICES */
      services_eyebrow: "Services & Galerie",
      services_title: "Nos Services",
      services_sub: "Des résultats sur mesure pour révéler votre beauté.",
      filter_all: "Tous", filter_lashes: "Lashes", filter_lift: "Lash Lift",
      filter_brows: "Brows", filter_care: "Beauty Care", filter_products: "Products",
      s_lashext_d: "Classic, Hybrid ou Volume — la technique idéale pour chaque regard.",
      s_lashlift_d: "Une courbe naturelle pour vos propres cils, jusqu'à 6 semaines.",
      s_browlam_d: "Des sourcils définis et plus fournis, à la finition soignée.",
      s_browstyle_d: "Forme, épilation et teinture pour un regard parfaitement dessiné.",
      s_products_d: "Des produits cils premium pour la maison — dans la boutique officielle.",
      s_care_d: "Conseils personnalisés et entretien pour des résultats durables.",
      cta_reserve: "Réserver",

      /* INFO */
      info_eyebrow: "Info",
      info_title_1: "À propos de", info_title_2: "Bloom & Glow",
      info_lede: "Un lieu pensé pour la beauté, le détail et la confiance.",
      info_f1_t: "Approche personnalisée", info_f1_d: "Chaque soin adapté à votre regard.",
      info_f2_t: "Produits premium", info_f2_d: "Une qualité sélectionnée avec soin.",
      info_f3_t: "Résultats durables", info_f3_d: "Un rendu qui tient dans le temps.",
      info_f4_t: "Conseils aftercare", info_f4_d: "Un accompagnement après chaque visite.",
      info_steps_title: "Comment ça se passe",
      step1_t: "Choose your style", step1_d: "Classic, Hybrid ou Volume.",
      step2_t: "Book your appointment", step2_d: "En ligne ou via WhatsApp.",
      step3_t: "Get your glow", step3_d: "Détendez-vous & rayonnez.",
      step4_t: "Follow aftercare", step4_d: "Des conseils pour durer.",
      info_wa_text: "Une question ? Écrivez-nous directement sur WhatsApp.",

      /* FORMATION */
      formation_badge: "Coming Soon",
      formation_title_1: "Formations",
      formation_text: "Devenez experte. Inspirez. Brillez. Nos formations professionnelles arrivent bientôt.",
      formation_wa: "Rejoindre la liste d'attente sur WhatsApp",

      /* RESERVATION */
      res_eyebrow: "Réservation",
      res_title_1: "Réservez facilement", res_title_2: "votre rendez-vous",
      res_sub: "Le moyen le plus rapide de réserver : écrivez-nous sur WhatsApp.",
      res_c1: "Réponse rapide", res_c2: "Conseils personnalisés", res_c3: "Créneaux flexibles",
      res_book_online: "Réserver en ligne",
      chat_name: "Bloom & Glow", chat_status: "en ligne",
      chat_in: "Bonjour ! Je souhaiterais réserver un rendez-vous.",
      chat_out: "Bonjour ✨ Avec plaisir ! Pour quel service êtes-vous intéressée ?",

      /* FOOTER */
      foot_tag: "Lashes, brows & beauty care in Luzern.",
      foot_addr_h: "Adresse", foot_hours_h: "Horaires", foot_contact_h: "Contact",
      foot_wa_avail: "WhatsApp disponible",
      h_monfri: "Lundi – Vendredi", h_sat: "Samedi", h_sun: "Dimanche", h_closed: "Fermé",
      foot_rights: "Tous droits réservés.",
      foot_privacy: "Politique de confidentialité", foot_terms: "Conditions générales",
      foot_designed: "Conçu avec", foot_in_luzern: "à Luzern",
      wa_aria: "Une question ? WhatsApp"
    },

    de: {
      nav_home: "Start", nav_prices: "Preise", nav_services: "Services",
      nav_info: "Infos", nav_formation: "Academy",
      cta_book: "Termin buchen", cta_shop: "Shop Bloom & Glow", cta_wa: "WhatsApp",
      cta_book_wa: "Via WhatsApp buchen", cta_wa_write: "Auf WhatsApp schreiben",
      cta_see_prices: "Preise ansehen", cta_all_prices: "Alle Preise ansehen", cta_more: "Mehr erfahren",

      hero_eyebrow: "Lashes · Brows · Beauty",
      hero_sub: "Beauty starts with confidence. Lashes, brows & beauty care in Luzern.",
      hero_svc_title: "Unsere Services",

      svc_lash_ext: "Lash Extensions", svc_lash_lift: "Lash Lift",
      svc_brow_lam: "Brow Lamination", svc_brow_style: "Brow Styling",
      svc_products: "Lash Products", svc_care: "Beauty Care", svc_training: "Trainings",
      soon: "Coming Soon",

      home_book_title: "Bereit zu strahlen?",
      home_book_text: "Buche deinen Termin online oder schreib uns direkt auf WhatsApp.",
      home_shop_title: "Bloom & Glow Shop",
      home_shop_text: "Entdecke unsere Lash-Produkte im offiziellen Bloom & Glow Shop.",

      prices_eyebrow: "Preise",
      prices_title: "Unsere Preise",
      prices_sub: "Transparenz & Qualität",
      cat_lashes: "Lashes", cat_brows: "Brows", cat_lift: "Lash Lift", cat_combos: "Combos",
      from: "Ab",
      detail_title: "Die Behandlungen im Detail",
      d_classic: "Lash Extensions — Classic", d_classic_s: "Natürlicher Effekt",
      d_hybrid: "Lash Extensions — Hybrid", d_hybrid_s: "Zwischen Natur & Volumen",
      d_volume: "Lash Extensions — Volume", d_volume_s: "Voller, glamouröser Look",
      d_refill: "Refill", d_refill_s: "Auffrischung der Extensions",
      d_brow_lam: "Brow Lamination", d_brow_lam_s: "Definierte, gepflegte Brauen",
      d_brow_style: "Brow Styling", d_brow_style_s: "Form & Zupfen",
      d_brow_tint: "Brow Tint", d_brow_tint_s: "Augenbrauen färben",
      price_note: "* Richtpreise — die definitiven Tarife werden beim Termin bestätigt.",

      services_eyebrow: "Services & Galerie",
      services_title: "Unsere Services",
      services_sub: "Massgeschneiderte Resultate, die deine Schönheit betonen.",
      filter_all: "Alle", filter_lashes: "Lashes", filter_lift: "Lash Lift",
      filter_brows: "Brows", filter_care: "Beauty Care", filter_products: "Products",
      s_lashext_d: "Classic, Hybrid oder Volume — die passende Technik für jeden Look.",
      s_lashlift_d: "Natürlicher Schwung für deine eigenen Wimpern, bis zu 6 Wochen.",
      s_browlam_d: "Definierte, voll wirkende Augenbrauen mit gepflegtem Finish.",
      s_browstyle_d: "Form, Zupfen und Färben für perfekt gerahmte Augen.",
      s_products_d: "Hochwertige Lash-Produkte für zuhause — im offiziellen Shop.",
      s_care_d: "Persönliche Beratung und Pflege für langanhaltende Resultate.",
      cta_reserve: "Buchen",

      info_eyebrow: "Infos",
      info_title_1: "Über", info_title_2: "Bloom & Glow",
      info_lede: "Ein Ort für Schönheit, Details und Vertrauen.",
      info_f1_t: "Persönliche Beratung", info_f1_d: "Jede Behandlung auf dich abgestimmt.",
      info_f2_t: "Premium-Produkte", info_f2_d: "Sorgfältig ausgewählte Qualität.",
      info_f3_t: "Langanhaltende Resultate", info_f3_d: "Ein Ergebnis, das bleibt.",
      info_f4_t: "Aftercare-Tipps", info_f4_d: "Begleitung nach jedem Besuch.",
      info_steps_title: "So läuft es ab",
      step1_t: "Choose your style", step1_d: "Classic, Hybrid oder Volume.",
      step2_t: "Book your appointment", step2_d: "Online oder via WhatsApp.",
      step3_t: "Get your glow", step3_d: "Entspann dich & strahle.",
      step4_t: "Follow aftercare", step4_d: "Tipps für lange Freude.",
      info_wa_text: "Noch Fragen? Schreib uns direkt auf WhatsApp.",

      formation_badge: "Coming Soon",
      formation_title_1: "Academy",
      formation_text: "Werde Expertin. Lass dich inspirieren. Strahle. Unsere professionellen Trainings kommen bald.",
      formation_wa: "Warteliste auf WhatsApp",

      res_eyebrow: "Termin",
      res_title_1: "Buche ganz einfach", res_title_2: "deinen Termin",
      res_sub: "Am schnellsten geht's über WhatsApp — schreib uns einfach.",
      res_c1: "Schnelle Antwort", res_c2: "Persönliche Beratung", res_c3: "Flexible Termine",
      res_book_online: "Online buchen",
      chat_name: "Bloom & Glow", chat_status: "online",
      chat_in: "Hallo! Ich möchte gerne einen Termin buchen.",
      chat_out: "Hallo ✨ Sehr gerne! Für welche Behandlung interessierst du dich?",

      foot_tag: "Lashes, brows & beauty care in Luzern.",
      foot_addr_h: "Adresse", foot_hours_h: "Öffnungszeiten", foot_contact_h: "Kontakt",
      foot_wa_avail: "WhatsApp verfügbar",
      h_monfri: "Montag – Freitag", h_sat: "Samstag", h_sun: "Sonntag", h_closed: "Geschlossen",
      foot_rights: "Alle Rechte vorbehalten.",
      foot_privacy: "Datenschutz", foot_terms: "AGB",
      foot_designed: "Mit Liebe gestaltet", foot_in_luzern: "in Luzern",
      wa_aria: "Fragen? WhatsApp"
    },

    en: {
      nav_home: "Home", nav_prices: "Prices", nav_services: "Services",
      nav_info: "Info", nav_formation: "Academy",
      cta_book: "Book now", cta_shop: "Shop Bloom & Glow", cta_wa: "WhatsApp",
      cta_book_wa: "Book via WhatsApp", cta_wa_write: "Message on WhatsApp",
      cta_see_prices: "See prices", cta_all_prices: "See all prices", cta_more: "Learn more",

      hero_eyebrow: "Lashes · Brows · Beauty",
      hero_sub: "Beauty starts with confidence. Lashes, brows & beauty care in Luzern.",
      hero_svc_title: "Our services",

      svc_lash_ext: "Lash Extensions", svc_lash_lift: "Lash Lift",
      svc_brow_lam: "Brow Lamination", svc_brow_style: "Brow Styling",
      svc_products: "Lash Products", svc_care: "Beauty Care", svc_training: "Trainings",
      soon: "Coming Soon",

      home_book_title: "Ready to glow?",
      home_book_text: "Book your appointment online or message us directly on WhatsApp.",
      home_shop_title: "Bloom & Glow Shop",
      home_shop_text: "Discover our lash products in the official Bloom & Glow shop.",

      prices_eyebrow: "Prices",
      prices_title: "Our Prices",
      prices_sub: "Transparency & quality",
      cat_lashes: "Lashes", cat_brows: "Brows", cat_lift: "Lash Lift", cat_combos: "Combos",
      from: "From",
      detail_title: "Treatments in detail",
      d_classic: "Lash Extensions — Classic", d_classic_s: "Natural effect",
      d_hybrid: "Lash Extensions — Hybrid", d_hybrid_s: "Between natural & volume",
      d_volume: "Lash Extensions — Volume", d_volume_s: "Full, glamorous look",
      d_refill: "Refill", d_refill_s: "Top-up of existing extensions",
      d_brow_lam: "Brow Lamination", d_brow_lam_s: "Defined, groomed brows",
      d_brow_style: "Brow Styling", d_brow_style_s: "Shaping & tweezing",
      d_brow_tint: "Brow Tint", d_brow_tint_s: "Brow tinting",
      price_note: "* Indicative prices — final rates confirmed at your appointment.",

      services_eyebrow: "Services & Gallery",
      services_title: "Our Services",
      services_sub: "Tailored results to reveal your natural beauty.",
      filter_all: "All", filter_lashes: "Lashes", filter_lift: "Lash Lift",
      filter_brows: "Brows", filter_care: "Beauty Care", filter_products: "Products",
      s_lashext_d: "Classic, Hybrid or Volume — the right technique for every look.",
      s_lashlift_d: "A natural curl for your own lashes, lasting up to 6 weeks.",
      s_browlam_d: "Defined, fuller-looking brows with a groomed finish.",
      s_browstyle_d: "Shaping, tweezing and tint for perfectly framed eyes.",
      s_products_d: "Premium lash products for home — in the official online shop.",
      s_care_d: "Personal advice and aftercare for long-lasting results.",
      cta_reserve: "Book",

      info_eyebrow: "Info",
      info_title_1: "About", info_title_2: "Bloom & Glow",
      info_lede: "A place made for beauty, detail and confidence.",
      info_f1_t: "Personal approach", info_f1_d: "Every treatment tailored to you.",
      info_f2_t: "Premium products", info_f2_d: "Quality selected with care.",
      info_f3_t: "Long-lasting results", info_f3_d: "A finish that lasts.",
      info_f4_t: "Aftercare advice", info_f4_d: "Guidance after every visit.",
      info_steps_title: "How it works",
      step1_t: "Choose your style", step1_d: "Classic, Hybrid or Volume.",
      step2_t: "Book your appointment", step2_d: "Online or via WhatsApp.",
      step3_t: "Get your glow", step3_d: "Relax & shine.",
      step4_t: "Follow aftercare", step4_d: "Tips to make it last.",
      info_wa_text: "Have a question? Message us directly on WhatsApp.",

      formation_badge: "Coming Soon",
      formation_title_1: "Academy",
      formation_text: "Become an expert. Get inspired. Glow. Our professional trainings are coming soon.",
      formation_wa: "Join the waiting list on WhatsApp",

      res_eyebrow: "Appointment",
      res_title_1: "Book your appointment", res_title_2: "with ease",
      res_sub: "The fastest way to book: message us on WhatsApp.",
      res_c1: "Quick reply", res_c2: "Personal advice", res_c3: "Flexible slots",
      res_book_online: "Book online",
      chat_name: "Bloom & Glow", chat_status: "online",
      chat_in: "Hi! I'd like to book an appointment.",
      chat_out: "Hi ✨ With pleasure! Which service are you interested in?",

      foot_tag: "Lashes, brows & beauty care in Luzern.",
      foot_addr_h: "Address", foot_hours_h: "Opening hours", foot_contact_h: "Contact",
      foot_wa_avail: "WhatsApp available",
      h_monfri: "Monday – Friday", h_sat: "Saturday", h_sun: "Sunday", h_closed: "Closed",
      foot_rights: "All rights reserved.",
      foot_privacy: "Privacy Policy", foot_terms: "Terms & Conditions",
      foot_designed: "Designed with", foot_in_luzern: "in Luzern",
      wa_aria: "Questions? WhatsApp"
    }
  };

  const FLAGS = { fr: "🇫🇷", de: "🇩🇪", en: "🇬🇧" };
  const LABEL = { fr: "FR", de: "DE", en: "EN" };
  const STORE_KEY = "bg2_lang";

  function getLang() {
    let l; try { l = localStorage.getItem(STORE_KEY); } catch (e) { l = null; }
    return T[l] ? l : "fr"; /* français par défaut */
  }
  function setLang(lang) {
    if (!T[lang]) return;
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    applyLang(lang);
  }
  function applyLang(lang) {
    const d = T[lang];
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const k = el.getAttribute("data-i18n"); if (d[k] != null) el.textContent = d[k];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const k = el.getAttribute("data-i18n-aria"); if (d[k] != null) el.setAttribute("aria-label", d[k]);
    });
    document.querySelectorAll(".lang-current-flag").forEach(function (el) { el.textContent = FLAGS[lang]; });
    document.querySelectorAll(".lang-current-label").forEach(function (el) { el.textContent = LABEL[lang]; });
    document.querySelectorAll("[data-lang]").forEach(function (el) {
      el.classList.toggle("active", el.getAttribute("data-lang") === lang);
    });
  }

  /* ---------------- DOM READY ---------------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getLang());

    const burger = document.querySelector(".burger");
    const mobile = document.querySelector(".mobile-menu");
    function closeMenu() {
      if (!burger || !mobile) return;
      burger.classList.remove("open"); mobile.classList.remove("open");
      document.body.style.overflow = ""; burger.setAttribute("aria-expanded", "false");
    }

    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
        closeMenu();
        document.querySelectorAll(".lang").forEach(function (l) { l.classList.remove("open"); });
      });
    });
    document.querySelectorAll(".lang-toggle").forEach(function (tog) {
      tog.addEventListener("click", function (e) { e.stopPropagation(); tog.closest(".lang").classList.toggle("open"); });
    });
    document.addEventListener("click", function () {
      document.querySelectorAll(".lang").forEach(function (l) { l.classList.remove("open"); });
    });

    if (burger && mobile) {
      burger.addEventListener("click", function () {
        const open = burger.classList.toggle("open");
        mobile.classList.toggle("open", open);
        document.body.style.overflow = open ? "hidden" : "";
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });
      mobile.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
    }

    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll("[data-page]").forEach(function (a) {
      if (a.getAttribute("data-page") === path) a.classList.add("active");
    });

    const header = document.querySelector(".site-header");
    if (header) {
      const onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 12); };
      onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    }

    const filterBtns = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".g-card");
    if (filterBtns.length && cards.length) {
      filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
          filterBtns.forEach(function (b) { b.classList.remove("active"); });
          btn.classList.add("active");
          const f = btn.getAttribute("data-filter");
          cards.forEach(function (card) {
            const cat = card.getAttribute("data-cat") || "";
            const show = f === "all" || cat.split(" ").indexOf(f) !== -1;
            card.classList.toggle("is-hidden", !show);
          });
        });
      });
    }

    const reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && reveals.length) {
      const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      reveals.forEach(function (el) { io.observe(el); });
    } else { reveals.forEach(function (el) { el.classList.add("in"); }); }
  });
})();
