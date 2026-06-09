/* =====================================================================
   BLOOM & GLOW — Maquette 3 "Social Beauty Brand" — main.js
   Burger · langue FR/DE/EN (DE par défaut) · filtres galerie ·
   carousel hero + dots · price tabs · scroll reveal · active link
   ===================================================================== */
(function () {
  "use strict";

  /* ---------------- TRANSLATIONS (DE par défaut) ---------------- */
  const T = {
    de: {
      nav_home: "Start", nav_prices: "Preise", nav_services: "Services",
      nav_info: "Info", nav_formation: "Academy",
      cta_book: "Prendre RDV", cta_shop: "Shop Bloom & Glow", cta_wa_chat: "WhatsApp Chat",
      cta_wa_chat_short: "Chat WhatsApp", cta_wa_book: "Chat auf WhatsApp", ext_link: "External Link",

      hero_script: "Born to Bloom,", hero_title: "Made to Glow",
      hero_sub: "Beauty starts with confidence.",
      hero_note: "Professionelle Produkte",
      badge1_t: "Loved by 1000+", badge1_s: "clients",
      badge2_t: "5.0 Rating", badge2_s: "on Google",
      badge3_t: "Premium Products", badge3_s: "& Care",

      promo_shop_t: "Shop Bloom & Glow Product Line",
      promo_shop_d: "Professionelle Produkte für Lashes & Brows.",
      promo_shop_cta: "Zum Shop",
      promo_wa_t: "WhatsApp Chat",
      promo_wa_d: "Jetzt schreiben und schnell antworten!",
      promo_wa_cta: "Chat starten",

      svc_title: "Nos Services",
      svc_lash_ext: "Lash Extensions", svc_lash_lift: "Lash Lift",
      svc_brow_lam: "Brow Lamination", svc_brow_style: "Brow Styling",
      svc_products: "Lash Products", svc_care: "Beauty Care",
      training_soon: "Trainings Coming Soon",

      /* PREISE */
      prices_eyebrow: "Preise",
      prices_title: "Preise",
      tab_lashes: "Lashes", tab_brows: "Brows", tab_beauty: "Beauty", tab_packages: "Packages",
      p_classic: "Lash Extensions — Classic", p_classic_s: "Natürlicher Effekt",
      p_volume: "Lash Extensions — Volume", p_volume_s: "Voller Look",
      p_mega: "Lash Extensions — Mega Volume", p_mega_s: "Maximales Volumen",
      p_lift: "Lash Lift inkl. Keratin", p_lift_s: "Natürlicher Schwung",
      p_tint: "Wimpern färben", p_tint_s: "Mehr Tiefe & Definition",
      p_brow_lam: "Brow Lamination", p_brow_lam_s: "Definierte Brauen",
      p_brow_style: "Brow Styling", p_brow_style_s: "Form & Zupfen",
      p_brow_tint: "Augenbrauen färben", p_brow_tint_s: "Farbe & Tiefe",
      p_consult: "Beauty Beratung", p_consult_s: "Persönliche Analyse",
      p_aftercare: "Pflege & Aftercare", p_aftercare_s: "Tipps für zuhause",
      p_combo1: "Lash & Brow Combo", p_combo1_s: "Lashes + Brows",
      p_combo2: "Full Glow Package", p_combo2_s: "Komplett-Behandlung",
      price_foot: "Alle Preise inkl. Beratung & Pflegehinweise ✨",

      /* SERVICES */
      services_eyebrow: "Services & Galerie",
      services_title: "Services / Galerie",
      services_sub: "Tauche ein in die Welt von Bloom & Glow.",
      filter_all: "All", filter_lashes: "Lashes", filter_brows: "Brows",
      filter_beauty: "Beauty", filter_products: "Products",
      cat_lashes: "Lashes", cat_brows: "Brows", cat_beauty: "Beauty", cat_products: "Products",
      cta_book_wa: "Book on WhatsApp", cta_shop_short: "Zum Shop",
      ig_discover: "Mehr entdecken auf Instagram",

      /* INFO */
      info_eyebrow: "Info",
      info_title: "About Bloom & Glow — Ilen",
      info_p1: "Das Herz hinter Bloom & Glow Luzern. Für mich ist Beauty mehr als ein Beruf — es ist eine Leidenschaft, mit der ich Menschen dabei helfe, sich schön, selbstbewusst und wohl in ihrer Haut zu fühlen.",
      info_p2: "Ich freue mich, dich kennenzulernen und deine natürliche Schönheit zum Strahlen zu bringen.",
      edu_t: "Beauty. Education.",
      edu_d: "Tipps, Pflege & Wissen für Lashes, Brows & Skincare. Folge uns auf Instagram & TikTok!",
      info_wa_cta: "Chat auf WhatsApp",

      /* FORMATION */
      formation_badge: "Coming Soon",
      formation_title: "Trainings & Kurse",
      formation_text: "Professionelle Ausbildungen für deine Zukunft im Beauty-Bereich. Bleibe dran — Großes kommt bald!",
      formation_more: "Mehr erfahren",
      formation_wa: "Join waiting list on WhatsApp",

      /* RESERVATION */
      res_eyebrow: "Réservation",
      res_title: "Dein Termin in 3 einfachen Schritten",
      res_s1: "Schreib uns auf WhatsApp",
      res_s2: "Wunschzeit & Service angeben",
      res_s3: "Termin bestätigt — Fertig! 🎉",
      res_wa_cta: "Chat auf WhatsApp",
      res_or: "oder",
      res_book_cta: "Jetzt Prendre RDV",
      res_secure: "Schnell · Einfach · Sicher",
      chat_name: "Bloom & Glow", chat_online: "online",
      chat_in: "Hallo! Ich möchte gerne einen Termin buchen.",
      chat_out: "Hallo ✨ Sehr gerne! Welcher Service & welche Wunschzeit?",

      /* FOOTER */
      foot_slogan: "Born to Bloom, Made to Glow",
      foot_addr_h: "Adresse", foot_hours_h: "Öffnungszeiten", foot_contact_h: "Kontakt", foot_follow_h: "Folge uns",
      h_monfri: "Mo – Fr", h_sat: "Sa", h_sun: "So", h_closed: "Geschlossen",
      foot_rights: "Alle Rechte vorbehalten.",
      wa_aria: "WhatsApp Chat"
    },

    fr: {
      nav_home: "Accueil", nav_prices: "Prix", nav_services: "Services",
      nav_info: "Info", nav_formation: "Formation",
      cta_book: "Prendre RDV", cta_shop: "Shop Bloom & Glow", cta_wa_chat: "WhatsApp Chat",
      cta_wa_chat_short: "Chat WhatsApp", cta_wa_book: "Chat sur WhatsApp", ext_link: "Lien externe",

      hero_script: "Born to Bloom,", hero_title: "Made to Glow",
      hero_sub: "Beauty starts with confidence.",
      hero_note: "Produits professionnels",
      badge1_t: "Loved by 1000+", badge1_s: "clientes",
      badge2_t: "5.0 Rating", badge2_s: "sur Google",
      badge3_t: "Produits premium", badge3_s: "& soin",

      promo_shop_t: "Shop Bloom & Glow Product Line",
      promo_shop_d: "Produits professionnels pour cils & sourcils.",
      promo_shop_cta: "Vers la boutique",
      promo_wa_t: "WhatsApp Chat",
      promo_wa_d: "Écrivez-nous, réponse rapide !",
      promo_wa_cta: "Démarrer le chat",

      svc_title: "Nos services",
      svc_lash_ext: "Lash Extensions", svc_lash_lift: "Lash Lift",
      svc_brow_lam: "Brow Lamination", svc_brow_style: "Brow Styling",
      svc_products: "Lash Products", svc_care: "Beauty Care",
      training_soon: "Formations — Bientôt",

      prices_eyebrow: "Prix",
      prices_title: "Prix",
      tab_lashes: "Lashes", tab_brows: "Brows", tab_beauty: "Beauty", tab_packages: "Packages",
      p_classic: "Lash Extensions — Classic", p_classic_s: "Effet naturel",
      p_volume: "Lash Extensions — Volume", p_volume_s: "Effet fourni",
      p_mega: "Lash Extensions — Mega Volume", p_mega_s: "Volume maximal",
      p_lift: "Lash Lift avec kératine", p_lift_s: "Courbe naturelle",
      p_tint: "Teinture des cils", p_tint_s: "Plus de profondeur",
      p_brow_lam: "Brow Lamination", p_brow_lam_s: "Sourcils définis",
      p_brow_style: "Brow Styling", p_brow_style_s: "Forme & épilation",
      p_brow_tint: "Teinture des sourcils", p_brow_tint_s: "Couleur & profondeur",
      p_consult: "Conseil beauté", p_consult_s: "Analyse personnalisée",
      p_aftercare: "Entretien & aftercare", p_aftercare_s: "Conseils maison",
      p_combo1: "Combo Lash & Brow", p_combo1_s: "Cils + sourcils",
      p_combo2: "Package Full Glow", p_combo2_s: "Soin complet",
      price_foot: "Tous les prix incluent conseil & entretien ✨",

      services_eyebrow: "Services & Galerie",
      services_title: "Services / Galerie",
      services_sub: "Plongez dans l'univers Bloom & Glow.",
      filter_all: "Tous", filter_lashes: "Lashes", filter_brows: "Brows",
      filter_beauty: "Beauty", filter_products: "Products",
      cat_lashes: "Lashes", cat_brows: "Brows", cat_beauty: "Beauty", cat_products: "Products",
      cta_book_wa: "Réserver sur WhatsApp", cta_shop_short: "Vers la boutique",
      ig_discover: "Découvrir plus sur Instagram",

      info_eyebrow: "Info",
      info_title: "À propos de Bloom & Glow — Ilen",
      info_p1: "Le cœur derrière Bloom & Glow Luzern. Pour moi, la beauté est plus qu'un métier — c'est une passion qui m'aide à aider les autres à se sentir belles, confiantes et bien dans leur peau.",
      info_p2: "J'ai hâte de faire ta connaissance et de révéler ta beauté naturelle.",
      edu_t: "Beauty. Education.",
      edu_d: "Conseils, soin & savoir pour cils, sourcils & skincare. Suis-nous sur Instagram & TikTok !",
      info_wa_cta: "Chat sur WhatsApp",

      formation_badge: "Bientôt",
      formation_title: "Formations & Cours",
      formation_text: "Des formations professionnelles pour ton avenir dans la beauté. Reste connectée — du grand arrive bientôt !",
      formation_more: "En savoir plus",
      formation_wa: "Rejoindre la liste d'attente sur WhatsApp",

      res_eyebrow: "Réservation",
      res_title: "Ton rendez-vous en 3 étapes simples",
      res_s1: "Écris-nous sur WhatsApp",
      res_s2: "Indique ton créneau & service",
      res_s3: "Rendez-vous confirmé — Terminé ! 🎉",
      res_wa_cta: "Chat sur WhatsApp",
      res_or: "ou",
      res_book_cta: "Prendre RDV maintenant",
      res_secure: "Rapide · Simple · Sûr",
      chat_name: "Bloom & Glow", chat_online: "en ligne",
      chat_in: "Bonjour ! Je souhaiterais réserver un rendez-vous.",
      chat_out: "Bonjour ✨ Avec plaisir ! Quel service & quel créneau ?",

      foot_slogan: "Born to Bloom, Made to Glow",
      foot_addr_h: "Adresse", foot_hours_h: "Horaires", foot_contact_h: "Contact", foot_follow_h: "Suis-nous",
      h_monfri: "Lun – Ven", h_sat: "Sam", h_sun: "Dim", h_closed: "Fermé",
      foot_rights: "Tous droits réservés.",
      wa_aria: "WhatsApp Chat"
    },

    en: {
      nav_home: "Home", nav_prices: "Prices", nav_services: "Services",
      nav_info: "Info", nav_formation: "Academy",
      cta_book: "Book now", cta_shop: "Shop Bloom & Glow", cta_wa_chat: "WhatsApp Chat",
      cta_wa_chat_short: "Chat WhatsApp", cta_wa_book: "Chat on WhatsApp", ext_link: "External Link",

      hero_script: "Born to Bloom,", hero_title: "Made to Glow",
      hero_sub: "Beauty starts with confidence.",
      hero_note: "Professional products",
      badge1_t: "Loved by 1000+", badge1_s: "clients",
      badge2_t: "5.0 Rating", badge2_s: "on Google",
      badge3_t: "Premium Products", badge3_s: "& Care",

      promo_shop_t: "Shop Bloom & Glow Product Line",
      promo_shop_d: "Professional products for lashes & brows.",
      promo_shop_cta: "To the shop",
      promo_wa_t: "WhatsApp Chat",
      promo_wa_d: "Message us and get a fast reply!",
      promo_wa_cta: "Start chat",

      svc_title: "Our services",
      svc_lash_ext: "Lash Extensions", svc_lash_lift: "Lash Lift",
      svc_brow_lam: "Brow Lamination", svc_brow_style: "Brow Styling",
      svc_products: "Lash Products", svc_care: "Beauty Care",
      training_soon: "Trainings Coming Soon",

      prices_eyebrow: "Prices",
      prices_title: "Prices",
      tab_lashes: "Lashes", tab_brows: "Brows", tab_beauty: "Beauty", tab_packages: "Packages",
      p_classic: "Lash Extensions — Classic", p_classic_s: "Natural effect",
      p_volume: "Lash Extensions — Volume", p_volume_s: "Full look",
      p_mega: "Lash Extensions — Mega Volume", p_mega_s: "Maximum volume",
      p_lift: "Lash Lift incl. Keratin", p_lift_s: "Natural curl",
      p_tint: "Lash tint", p_tint_s: "More depth & definition",
      p_brow_lam: "Brow Lamination", p_brow_lam_s: "Defined brows",
      p_brow_style: "Brow Styling", p_brow_style_s: "Shaping & tweezing",
      p_brow_tint: "Brow tint", p_brow_tint_s: "Colour & depth",
      p_consult: "Beauty consultation", p_consult_s: "Personal analysis",
      p_aftercare: "Care & aftercare", p_aftercare_s: "Home tips",
      p_combo1: "Lash & Brow Combo", p_combo1_s: "Lashes + brows",
      p_combo2: "Full Glow Package", p_combo2_s: "Complete treatment",
      price_foot: "All prices include consultation & aftercare ✨",

      services_eyebrow: "Services & Gallery",
      services_title: "Services / Gallery",
      services_sub: "Step into the world of Bloom & Glow.",
      filter_all: "All", filter_lashes: "Lashes", filter_brows: "Brows",
      filter_beauty: "Beauty", filter_products: "Products",
      cat_lashes: "Lashes", cat_brows: "Brows", cat_beauty: "Beauty", cat_products: "Products",
      cta_book_wa: "Book on WhatsApp", cta_shop_short: "To the shop",
      ig_discover: "Discover more on Instagram",

      info_eyebrow: "Info",
      info_title: "About Bloom & Glow — Ilen",
      info_p1: "The heart behind Bloom & Glow Luzern. To me, beauty is more than a job — it's a passion that lets me help people feel beautiful, confident and at ease in their own skin.",
      info_p2: "I can't wait to meet you and bring out your natural beauty.",
      edu_t: "Beauty. Education.",
      edu_d: "Tips, care & knowledge for lashes, brows & skincare. Follow us on Instagram & TikTok!",
      info_wa_cta: "Chat on WhatsApp",

      formation_badge: "Coming Soon",
      formation_title: "Trainings & Courses",
      formation_text: "Professional trainings for your future in beauty. Stay tuned — big things are coming!",
      formation_more: "Learn more",
      formation_wa: "Join waiting list on WhatsApp",

      res_eyebrow: "Booking",
      res_title: "Your appointment in 3 easy steps",
      res_s1: "Message us on WhatsApp",
      res_s2: "Tell us your time & service",
      res_s3: "Appointment confirmed — Done! 🎉",
      res_wa_cta: "Chat on WhatsApp",
      res_or: "or",
      res_book_cta: "Book now",
      res_secure: "Fast · Easy · Secure",
      chat_name: "Bloom & Glow", chat_online: "online",
      chat_in: "Hi! I'd like to book an appointment.",
      chat_out: "Hi ✨ With pleasure! Which service & preferred time?",

      foot_slogan: "Born to Bloom, Made to Glow",
      foot_addr_h: "Address", foot_hours_h: "Opening hours", foot_contact_h: "Contact", foot_follow_h: "Follow us",
      h_monfri: "Mon – Fri", h_sat: "Sat", h_sun: "Sun", h_closed: "Closed",
      foot_rights: "All rights reserved.",
      wa_aria: "WhatsApp Chat"
    }
  };

  const FLAGS = { de: "🇩🇪", fr: "🇫🇷", en: "🇬🇧" };
  const LABEL = { de: "DE", fr: "FR", en: "EN" };
  const STORE_KEY = "bg3_lang";

  function getLang() {
    let l; try { l = localStorage.getItem(STORE_KEY); } catch (e) { l = null; }
    return T[l] ? l : "de"; /* allemand par défaut */
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

    /* Gallery filters */
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

    /* Price tabs */
    const tabBtns = document.querySelectorAll(".tab-btn");
    const panels = document.querySelectorAll(".tab-panel");
    if (tabBtns.length && panels.length) {
      tabBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
          tabBtns.forEach(function (b) { b.classList.remove("active"); });
          panels.forEach(function (p) { p.classList.remove("active"); });
          btn.classList.add("active");
          const tgt = document.getElementById("panel-" + btn.getAttribute("data-tab"));
          if (tgt) tgt.classList.add("active");
        });
      });
    }

    /* Hero carousel dots */
    const track = document.querySelector(".carousel-track");
    const dotsWrap = document.querySelector(".dots");
    if (track && dotsWrap) {
      const slides = Array.prototype.slice.call(track.querySelectorAll(".slide"));
      slides.forEach(function (s, i) {
        const b = document.createElement("button");
        b.setAttribute("aria-label", "Slide " + (i + 1));
        if (i === 0) b.classList.add("active");
        b.addEventListener("click", function () {
          s.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        });
        dotsWrap.appendChild(b);
      });
      const dotBtns = Array.prototype.slice.call(dotsWrap.children);
      let raf;
      track.addEventListener("scroll", function () {
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(function () {
          const center = track.scrollLeft + track.clientWidth / 2;
          let best = 0, bestD = Infinity;
          slides.forEach(function (s, i) {
            const c = s.offsetLeft + s.offsetWidth / 2;
            const dd = Math.abs(c - center);
            if (dd < bestD) { bestD = dd; best = i; }
          });
          dotBtns.forEach(function (d, i) { d.classList.toggle("active", i === best); });
        });
      }, { passive: true });
    }

    /* Scroll reveal */
    const reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && reveals.length) {
      const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      reveals.forEach(function (el) { io.observe(el); });
    } else { reveals.forEach(function (el) { el.classList.add("in"); }); }
  });
})();
