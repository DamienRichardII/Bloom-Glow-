/* =====================================================================
   BLOOM & GLOW LUZERN — main.js
   Burger menu · langue FR/DE/EN (DE par défaut) · filtres galerie ·
   scroll reveal · active link · header scrolled
   ===================================================================== */
(function () {
  "use strict";

  /* ---------------- 1. TRANSLATIONS (DE par défaut) ---------------- */
  const T = {
    de: {
      nav_home: "Start", nav_prices: "Preise", nav_services: "Services",
      nav_info: "Infos", nav_about: "About Me", nav_formation: "Academy",
      about_wa: "Chat auf WhatsApp",
      cta_book: "Termin buchen", cta_shop: "Shop", cta_shop_full: "Shop Bloom & Glow", cta_wa: "WhatsApp", cta_wa_contact: "WhatsApp Kontakt",
      res_fresha_text: "Unsere Termine werden bequem über Fresha gebucht.", res_fresha_btn: "Termin auf Fresha buchen",
      cta_book_wa: "Auf WhatsApp buchen", cta_visit_shop: "Shop besuchen", cta_reserve: "Reservieren",
      cta_explore: "Services entdecken",

      hero_eyebrow: "Lashes · Brows · Beauty — Luzern",
      hero_lede: "Wimpern, Augenbrauen & Beauty Care in Luzern. Blühe und strahle – auf deine ganz eigene Art.",

      home_intro_eyebrow: "Willkommen bei Bloom & Glow",
      home_intro_title: "Lashes, Brows & Beauty",
      home_intro_text: "Ein Herzensort in Luzern für natürliche Schönheit, feine Details und ein gutes Gefühl. Hochwertige Behandlungen, individuell auf dich abgestimmt.",

      svc_eyebrow: "Unsere Services",
      svc_title: "Was wir anbieten",
      svc_sub: "Lash- & Brow-Behandlungen, mit Liebe zum Detail.",
      svc_lash_ext: "Lash Extensions", svc_lash_ext_d: "Classic, Hybrid & Volume",
      svc_lash_lift: "Lash Lift", svc_lash_lift_d: "Natürlicher Schwung",
      svc_brow_lam: "Brow Lamination", svc_brow_lam_d: "Definiert & gepflegt",
      svc_brow_style: "Brow Styling", svc_brow_style_d: "Form & Färben",
      svc_products: "Lash Products", svc_products_d: "Im offiziellen Shop",
      svc_care: "Beauty Care", svc_care_d: "Beratung & Pflege",
      svc_training: "Academy", svc_training_d: "Trainings",
      soon: "Coming Soon",

      gallery_eyebrow: "Galerie",
      gallery_title: "Looks, die strahlen",
      gallery_sub: "Ein Einblick in unsere Behandlungen.",
      looks_eyebrow: "Lashes", looks_title: "Lash Looks",
      looks_sub: "Finde den Look, der zu dir passt.",
      cta_book_look: "Diesen Look buchen",

      /* ABOUT ME */
      about_eyebrow: "About Bloom & Glow",
      about_title: "Hey, ich bin Ilen",
      about_intro: "Das Herz hinter BLOOM & GLOW Woldegiorgish.",
      about_p1: "Was als kleine Leidenschaft neben dem Studium begonnen hat, ist für mich heute viel mehr: ein Herzensort, an dem ich zur Ruhe komme, kreativ sein darf und anderen ein gutes Gefühl schenke.",
      about_p2: "Meine Begeisterung für Beauty und Kreativität begleitet mich schon seit vielen Jahren. Es hat mir immer Freude gemacht, mit kleinen Details etwas Schönes zu erschaffen und Menschen damit zum Strahlen zu bringen.",
      about_quote: "Blühe & strahle – auf deine ganz eigene Art.",
      about_meet: "Ich freue mich, dich kennenzulernen.",

      /* SERVICES (Karten) */
      srv_ext_t: "Wimpernverlängerung",
      srv_ext_d: "Einzeln applizierte Extensions für längere und dichtere Wimpern. Wähle deinen Wunsch-Look von natürlich bis voluminös.",
      srv_style_t: "Wimpernstyling",
      srv_style_d: "Lifting und Färben deiner Naturwimpern für mehr Schwung und Tiefe.",
      srv_brow_t: "Augenbrauenstyling",
      srv_brow_d: "Formen, färben und liften für definierte Brauen und einen frischen Ausdruck.",

      /* LASH LOOKS (Beschreibungen) */
      look_classic_d: "1:1 Technik für einen natürlichen Look.",
      look_premium_d: "1:1 Technik mit ultraleichten Premium-Wimpern.",
      look_yy_d: "Zwei Y-förmige Wimpern pro Naturwimper für voluminösen Look mit extra Definition.",
      look_light_d: "Leichte 3D-Fächer für natürliche Fülle.",
      look_volumen_d: "5D-Fächer für einen volleren, ausdrucksstarken Look.",
      look_russian_d: "Maximale Fülle für einen glamourösen Effekt.",
      look_wetlight_d: "Geschlossene, schmale Fächer für einen definierten und natürlichen Wet-Look.",
      look_wetvol_d: "Geschlossene Fächer mit mehr Dichte für einen intensiven Wet-Look.",
      look_signature_d: "Einzigartige Kombination aus Wispy- und Wet-Look.",
      look_wispy_d: "Der Wispy-Look entsteht, indem einzelne längere Wimpern als kleine Spikes zwischen kürzeren Wimpern gesetzt werden.",

      /* PREISE — Lifting & andere Services (Bezeichnungen) */
      li_aug_lff: "Lifting + Färben + Formen",
      li_aug_lf: "Lifting (inkl. Formen)",
      li_aug_ff: "Formen & Färben",
      li_formen: "Formen",
      li_korean_f: "Korean Lash Lift + Färben",
      li_korean: "Korean Lash Lift",
      li_faerben: "Färben",
      li_kombi: "Korean Lash Lift & Brow Lifting",
      li_inkl: "inkl. Färben, Formen",

      book_cta_title: "Bereit zum Strahlen?",
      book_cta_text: "Buche deinen Termin ganz einfach online.",

      shop_title: "Bloom & Glow Shop",
      shop_text: "Entdecke unsere Lash-Produkte im offiziellen Bloom & Glow Online-Shop.",

      /* PREISE */
      prices_eyebrow: "Preisliste",
      prices_title: "Preise & Behandlungen",
      prices_sub: "Wimpernverlängerung, Lifting & Augenbrauen – transparente Preise.",
      block_extensions: "Wimpernverlängerung", block_lifting: "Lifting & andere Services",
      cat_augenbrauen: "Augenbrauen", cat_wimpern_lift: "Wimpern", cat_kombi: "Kombi-Angebot",
      price_extensions_h: "Extensions", price_extras_h: "Extras",
      col_service: "Service", col_neuset: "Neuset",
      col_refill3: "Auffüllen bis 3 Wochen", col_refill4: "Auffüllen bis 4 Wochen",
      na_refill: "Auffüllen nicht geeignet",
      e_wispy: "Wispy Look", e_extra_note: "zusätzlich",
      e_remove: "Entfernen", e_remove_new: "Entfernen mit anschliessendem Neuset",
      e_clean: "Übermässige Reinigung", e_clean_d: "Bei viel Kleberesten, Mascara etc.",
      cat_lashes: "Lashes", cat_brows: "Brows", cat_care: "Beauty Care",
      d_classic: "Natürlicher Look, eine Wimper pro Naturwimper",
      d_hybrid: "Mix aus Classic & Volume",
      d_volume: "Voller, dichter Look",
      d_refill: "Auffrischung bestehender Extensions",
      d_brow_lam: "Definierte, gepflegte Brauen",
      d_brow_style: "Form, Zupfen & Styling",
      d_brow_tint: "Färben für mehr Tiefe",
      d_consult: "Persönliche Beratung",
      d_after: "Pflegeberatung für zuhause",
      products_block_text: "Entdecke unsere Lash-Produkte im offiziellen Bloom & Glow Shop.",
      price_note: "* Richtpreise – die definitiven Preise werden in Kürze ergänzt.",

      /* SERVICES */
      services_eyebrow: "Galerie & Services",
      services_title: "Entdecke unsere Behandlungen",
      services_sub: "Wähle deinen Look – buche bequem online.",
      filter_all: "Alle", filter_lashes: "Lashes", filter_brows: "Brows",
      filter_products: "Products", filter_care: "Care",
      s_lashext_d: "Classic, Hybrid oder Volume – für jeden Look die passende Technik.",
      s_lashlift_d: "Natürlicher Schwung für deine eigenen Wimpern, bis zu 6 Wochen.",
      s_browlam_d: "Definierte, voll wirkende Augenbrauen mit gepflegtem Finish.",
      s_browstyle_d: "Form, Zupfen und Färben für perfekt gerahmte Augen.",
      s_products_d: "Hochwertige Lash-Produkte für zuhause – im offiziellen Online-Shop.",
      s_care_d: "Persönliche Beratung und Pflegehinweise für lang anhaltende Resultate.",

      /* INFOS */
      info_eyebrow: "Infos",
      info_title: "Alles über deine Lashes",
      info_lede: "Schön, einfach und entspannt – so läuft dein Termin bei Bloom & Glow ab.",
      info_explain_title: "Wimpern, kurz erklärt",
      info_explain_text: "Wimpernextensions werden einzeln auf deine Naturwimpern aufgetragen und verleihen dir einen wachen, definierten Blick – ganz ohne Mascara. Je nach Wunsch natürlich oder voluminös.",
      step1_t: "Wähle deinen Style", step1_d: "Classic, Hybrid oder Volume.",
      step2_t: "Termin buchen", step2_d: "Online in wenigen Klicks.",
      step3_t: "Get your glow", step3_d: "Entspann dich & strahle.",
      step4_t: "Aftercare", step4_d: "Pflege für lange Freude.",
      prep_lash_t: "Vorbereitung Wimpern",
      prep_lash_1: "Komm am besten ungeschminkt – verzichte auf Mascara, Eyeliner und Augencreme.",
      prep_lash_2: "Vermeide vorher Wimpernzange und Wimpernserum.",
      prep_lash_3: "Koffein direkt vor dem Termin besser zurückhalten.",
      prep_lash_4: "Kontaktlinsen? Bitte eine Linsenbox mitbringen.",
      prep_brow_t: "Vorbereitung Augenbrauen",
      prep_brow_1: "Für Brow Lifting, Färben oder Henna Brows empfehlen wir einen Patch-Test mind. 24 h vorher.",
      prep_brow_2: "Melde dich gerne für einen kurzen Test-Termin.",
      after_t: "Pflegehinweise Extensions",
      after_1: "Wimpern täglich mit Wimpernshampoo reinigen.",
      after_2: "Keine ölhaltigen Produkte an den Augen.",
      after_3: "Nicht reiben oder zupfen, auch nicht beim Abschminken.",
      after_4: "Keine Mascara oder Wimpernzange verwenden.",
      after_5: "Täglich sanft mit sauberem Bürstchen bürsten.",
      after_6: "Am besten nicht auf dem Gesicht schlafen.",
      info_wa_text: "Noch Fragen? Wir sind gerne für dich da.",
      info_shop_text: "Aftercare-Produkte findest du im Bloom & Glow Shop.",

      /* FORMATION */
      formation_badge: "Coming Soon",
      formation_title: "Bloom & Glow Academy",
      formation_text: "Professionelle Lash- & Brow-Trainings kommen bald nach Luzern.",
      formation_wa: "Warteliste auf WhatsApp",

      /* RESERVATION */
      res_eyebrow: "Termin",
      res_title: "Buche deinen Glow-Termin",
      res_lede: "Wähle deine Behandlung und buche in wenigen Sekunden.",
      res_choose_title: "Wähle deine Behandlung",
      res_fast_text: "Buche deinen Termin in wenigen Schritten online.",
      res_shop_text: "Lieber Produkte? Besuche unseren Online-Shop.",

      /* FOOTER */
      foot_address_h: "Studio", foot_address: "Habsburgerstrasse 5 A<br>6003 Luzern, Schweiz",
      foot_hours_h: "Öffnungszeiten", foot_hours: "Mo – Fr: 09:00 – 19:00 Uhr<br>Sa: 09:00 – 17:00 Uhr<br>So: Geschlossen",
      foot_nav_h: "Navigation", foot_follow_h: "Folge uns", foot_shop_h: "Online-Shop",
      foot_shop_text: "Entdecke unsere Lash-Produkte.",
      foot_rights: "Alle Rechte vorbehalten.",
      wa_questions: "Fragen? WhatsApp"
    },

    en: {
      nav_home: "Home", nav_prices: "Prices", nav_services: "Services",
      nav_info: "Info", nav_about: "About Me", nav_formation: "Academy",
      about_wa: "Chat on WhatsApp",
      cta_book: "Book now", cta_shop: "Shop", cta_shop_full: "Shop Bloom & Glow", cta_wa: "WhatsApp", cta_wa_contact: "Chat on WhatsApp",
      res_fresha_text: "Our appointments are booked easily via Fresha.", res_fresha_btn: "Book on Fresha",
      cta_book_wa: "Book on WhatsApp", cta_visit_shop: "Visit shop", cta_reserve: "Book now",
      cta_explore: "Explore services",

      hero_eyebrow: "Lashes · Brows · Beauty — Luzern",
      hero_lede: "Lashes, brows & beauty care in Luzern. Bloom and glow — in your very own way.",

      home_intro_eyebrow: "Welcome to Bloom & Glow",
      home_intro_title: "Lashes, Brows & Beauty",
      home_intro_text: "A heartfelt place in Luzern for natural beauty, fine details and a feel-good moment. Premium treatments, tailored to you.",

      svc_eyebrow: "Our services",
      svc_title: "What we offer",
      svc_sub: "Lash & brow treatments, crafted with care.",
      svc_lash_ext: "Lash Extensions", svc_lash_ext_d: "Classic, Hybrid & Volume",
      svc_lash_lift: "Lash Lift", svc_lash_lift_d: "Natural curl",
      svc_brow_lam: "Brow Lamination", svc_brow_lam_d: "Defined & groomed",
      svc_brow_style: "Brow Styling", svc_brow_style_d: "Shape & tint",
      svc_products: "Lash Products", svc_products_d: "In the official shop",
      svc_care: "Beauty Care", svc_care_d: "Advice & care",
      svc_training: "Academy", svc_training_d: "Trainings",
      soon: "Coming Soon",

      gallery_eyebrow: "Gallery",
      gallery_title: "Looks that glow",
      gallery_sub: "A glimpse into our treatments.",
      looks_eyebrow: "Lashes", looks_title: "Lash Looks",
      looks_sub: "Find the look that suits you.",
      cta_book_look: "Book this look",

      /* ABOUT ME */
      about_eyebrow: "About Bloom & Glow",
      about_title: "Hey, I'm Ilen",
      about_intro: "The heart behind BLOOM & GLOW Woldegiorgish.",
      about_p1: "What began as a small passion alongside my studies is so much more to me today: a place close to my heart where I find calm, get creative and give others a good feeling.",
      about_p2: "My passion for beauty and creativity has been with me for many years. I've always loved creating something beautiful with small details and making people glow.",
      about_quote: "Bloom & glow — in your very own way.",
      about_meet: "I look forward to meeting you.",

      /* SERVICES (cards) */
      srv_ext_t: "Lash Extensions",
      srv_ext_d: "Individually applied extensions for longer, fuller lashes. Choose your desired look — from natural to voluminous.",
      srv_style_t: "Lash Styling",
      srv_style_d: "Lifting and tinting of your natural lashes for more curl and depth.",
      srv_brow_t: "Brow Styling",
      srv_brow_d: "Shaping, tinting and lifting for defined brows and a fresh expression.",

      /* LASH LOOKS (descriptions) */
      look_classic_d: "1:1 technique for a natural look.",
      look_premium_d: "1:1 technique with ultra-light premium lashes.",
      look_yy_d: "Two Y-shaped lashes per natural lash for a voluminous look with extra definition.",
      look_light_d: "Light 3D fans for natural fullness.",
      look_volumen_d: "5D fans for a fuller, expressive look.",
      look_russian_d: "Maximum fullness for a glamorous effect.",
      look_wetlight_d: "Closed, narrow fans for a defined and natural wet look.",
      look_wetvol_d: "Closed fans with more density for an intense wet look.",
      look_signature_d: "A unique combination of wispy and wet look.",
      look_wispy_d: "The wispy look is created by placing individual longer lashes as small spikes between shorter lashes.",

      /* PRICES — Lifting & other services (labels) */
      li_aug_lff: "Lift + Tint + Shape",
      li_aug_lf: "Lift (incl. shaping)",
      li_aug_ff: "Shaping & Tint",
      li_formen: "Shaping",
      li_korean_f: "Korean Lash Lift + Tint",
      li_korean: "Korean Lash Lift",
      li_faerben: "Tinting",
      li_kombi: "Korean Lash Lift & Brow Lifting",
      li_inkl: "incl. tint, shaping",

      book_cta_title: "Ready to glow?",
      book_cta_text: "Book your appointment easily online.",

      shop_title: "Bloom & Glow Shop",
      shop_text: "Discover our lash products in the official Bloom & Glow online shop.",

      prices_eyebrow: "Price list",
      prices_title: "Prices & Treatments",
      prices_sub: "Lash extensions, lifting & brows — transparent pricing.",
      block_extensions: "Lash Extensions", block_lifting: "Lifting & other services",
      cat_augenbrauen: "Brows", cat_wimpern_lift: "Lashes", cat_kombi: "Combo offers",
      price_extensions_h: "Extensions", price_extras_h: "Extras",
      col_service: "Service", col_neuset: "New set",
      col_refill3: "Refill up to 3 weeks", col_refill4: "Refill up to 4 weeks",
      na_refill: "Refill not suitable",
      e_wispy: "Wispy Look", e_extra_note: "additional",
      e_remove: "Removal", e_remove_new: "Removal with new set after",
      e_clean: "Intensive cleaning", e_clean_d: "For heavy glue residue, mascara, etc.",
      cat_lashes: "Lashes", cat_brows: "Brows", cat_care: "Beauty Care",
      d_classic: "Natural look, one lash per natural lash",
      d_hybrid: "Mix of Classic & Volume",
      d_volume: "Full, dense look",
      d_refill: "Refresh of existing extensions",
      d_brow_lam: "Defined, groomed brows",
      d_brow_style: "Shaping, tweezing & styling",
      d_brow_tint: "Tinting for more depth",
      d_consult: "Personal consultation",
      d_after: "Home aftercare advice",
      products_block_text: "Discover our lash products in the official Bloom & Glow shop.",
      price_note: "* Indicative prices — final pricing will be added shortly.",

      services_eyebrow: "Gallery & Services",
      services_title: "Explore our treatments",
      services_sub: "Choose your look — book easily online.",
      filter_all: "All", filter_lashes: "Lashes", filter_brows: "Brows",
      filter_products: "Products", filter_care: "Care",
      s_lashext_d: "Classic, Hybrid or Volume — the right technique for every look.",
      s_lashlift_d: "A natural curl for your own lashes, lasting up to 6 weeks.",
      s_browlam_d: "Defined, fuller-looking brows with a groomed finish.",
      s_browstyle_d: "Shaping, tweezing and tint for perfectly framed eyes.",
      s_products_d: "Premium lash products for home — in the official online shop.",
      s_care_d: "Personal advice and aftercare tips for long-lasting results.",

      info_eyebrow: "Info",
      info_title: "Everything about your lashes",
      info_lede: "Beautiful, easy and relaxed — here's how your appointment works.",
      info_explain_title: "Lashes, briefly explained",
      info_explain_text: "Lash extensions are applied individually to your natural lashes, giving you an awake, defined look — without mascara. Natural or voluminous, just as you wish.",
      step1_t: "Choose your style", step1_d: "Classic, Hybrid or Volume.",
      step2_t: "Book your appointment", step2_d: "Online in a few clicks.",
      step3_t: "Get your glow", step3_d: "Relax & shine.",
      step4_t: "Aftercare", step4_d: "Care for lasting results.",
      prep_lash_t: "Lash preparation",
      prep_lash_1: "Come with a bare face — avoid mascara, eyeliner and eye cream.",
      prep_lash_2: "Avoid lash curler and lash serum beforehand.",
      prep_lash_3: "Best to hold back on caffeine right before your appointment.",
      prep_lash_4: "Contact lenses? Please bring a lens case.",
      prep_brow_t: "Brow preparation",
      prep_brow_1: "For brow lifting, tinting or henna brows we recommend a patch test at least 24 h before.",
      prep_brow_2: "Feel free to reach out for a quick test appointment.",
      after_t: "Extension aftercare",
      after_1: "Cleanse lashes daily with lash shampoo.",
      after_2: "No oil-based products around the eyes.",
      after_3: "Don't rub or pull, even when removing makeup.",
      after_4: "No mascara or lash curler.",
      after_5: "Brush gently every day with a clean brush.",
      after_6: "Best not to sleep on your face.",
      info_wa_text: "Still have questions? We're happy to help.",
      info_shop_text: "Find aftercare products in the Bloom & Glow shop.",

      formation_badge: "Coming Soon",
      formation_title: "Bloom & Glow Academy",
      formation_text: "Professional lash & brow trainings are coming soon to Luzern.",
      formation_wa: "Join the waiting list on WhatsApp",

      res_eyebrow: "Appointment",
      res_title: "Book your glow appointment",
      res_lede: "Choose your treatment and book in just a few seconds.",
      res_choose_title: "Choose your treatment",
      res_fast_text: "Book your appointment online in a few steps.",
      res_shop_text: "Prefer products? Visit our online shop.",

      foot_address_h: "Salon", foot_address: "Habsburgerstrasse 5 A<br>6003 Luzern, Switzerland",
      foot_hours_h: "Opening hours", foot_hours: "Mon – Fri: 09:00 – 19:00<br>Sat: 09:00 – 17:00<br>Sun: Closed",
      foot_nav_h: "Navigation", foot_follow_h: "Follow us", foot_shop_h: "Online shop",
      foot_shop_text: "Discover our lash products.",
      foot_rights: "All rights reserved.",
      wa_questions: "Questions? WhatsApp"
    },

    fr: {
      nav_home: "Accueil", nav_prices: "Prix", nav_services: "Services",
      nav_info: "Infos", nav_about: "About Me", nav_formation: "Academy",
      about_wa: "Chat sur WhatsApp",
      cta_book: "Prendre RDV", cta_shop: "Shop", cta_shop_full: "Shop Bloom & Glow", cta_wa: "WhatsApp", cta_wa_contact: "Contact WhatsApp",
      res_fresha_text: "Nos rendez-vous se réservent facilement via Fresha.", res_fresha_btn: "Réserver sur Fresha",
      cta_book_wa: "Réserver sur WhatsApp", cta_visit_shop: "Visiter la boutique", cta_reserve: "Réserver",
      cta_explore: "Découvrir les services",

      hero_eyebrow: "Lashes · Brows · Beauty — Lucerne",
      hero_lede: "Cils, sourcils & soins beauté à Lucerne. Épanouis-toi et rayonne — à ta façon.",

      home_intro_eyebrow: "Bienvenue chez Bloom & Glow",
      home_intro_title: "Cils, Sourcils & Beauté",
      home_intro_text: "Un lieu de cœur à Lucerne pour une beauté naturelle, des détails soignés et un vrai moment pour soi. Des soins premium, pensés pour toi.",

      svc_eyebrow: "Nos services",
      svc_title: "Ce que nous proposons",
      svc_sub: "Des soins cils & sourcils, réalisés avec soin.",
      svc_lash_ext: "Lash Extensions", svc_lash_ext_d: "Classic, Hybrid & Volume",
      svc_lash_lift: "Lash Lift", svc_lash_lift_d: "Courbe naturelle",
      svc_brow_lam: "Brow Lamination", svc_brow_lam_d: "Définis & soignés",
      svc_brow_style: "Brow Styling", svc_brow_style_d: "Forme & teinture",
      svc_products: "Lash Products", svc_products_d: "Dans la boutique officielle",
      svc_care: "Beauty Care", svc_care_d: "Conseils & soin",
      svc_training: "Academy", svc_training_d: "Formations",
      soon: "Bientôt",

      gallery_eyebrow: "Galerie",
      gallery_title: "Des regards qui rayonnent",
      gallery_sub: "Un aperçu de nos soins.",
      looks_eyebrow: "Lashes", looks_title: "Lash Looks",
      looks_sub: "Trouve le look qui te ressemble.",
      cta_book_look: "Réserver ce look",

      /* ABOUT ME */
      about_eyebrow: "À propos de Bloom & Glow",
      about_title: "Hey, moi c'est Ilen",
      about_intro: "Le cœur derrière BLOOM & GLOW Woldegiorgish.",
      about_p1: "Ce qui a commencé comme une petite passion à côté de mes études est aujourd'hui bien plus pour moi : un lieu de cœur où je trouve le calme, je peux être créative et offrir aux autres un vrai bien-être.",
      about_p2: "Ma passion pour la beauté et la créativité m'accompagne depuis de nombreuses années. J'ai toujours aimé créer quelque chose de beau avec de petits détails et faire rayonner les gens.",
      about_quote: "Épanouis-toi & rayonne — à ta façon.",
      about_meet: "J'ai hâte de te rencontrer.",

      /* SERVICES (cartes) */
      srv_ext_t: "Extensions de cils",
      srv_ext_d: "Extensions posées une à une pour des cils plus longs et plus fournis. Choisis ton look — du naturel au volumineux.",
      srv_style_t: "Rehaussement de cils",
      srv_style_d: "Rehaussement et teinture de tes cils naturels pour plus de courbe et de profondeur.",
      srv_brow_t: "Stylisme des sourcils",
      srv_brow_d: "Forme, teinture et lifting pour des sourcils définis et un regard frais.",

      /* LASH LOOKS (descriptions) */
      look_classic_d: "Technique 1:1 pour un effet naturel.",
      look_premium_d: "Technique 1:1 avec des cils premium ultra-légers.",
      look_yy_d: "Deux cils en forme de Y par cil naturel pour un look volumineux avec plus de définition.",
      look_light_d: "Éventails 3D légers pour une densité naturelle.",
      look_volumen_d: "Éventails 5D pour un look plus fourni et expressif.",
      look_russian_d: "Densité maximale pour un effet glamour.",
      look_wetlight_d: "Éventails fermés et fins pour un wet look défini et naturel.",
      look_wetvol_d: "Éventails fermés plus denses pour un wet look intense.",
      look_signature_d: "Une combinaison unique de wispy et de wet look.",
      look_wispy_d: "Le wispy look se crée en plaçant des cils plus longs comme de petits spikes entre des cils plus courts.",

      /* PRIX — Lifting & autres services (libellés) */
      li_aug_lff: "Lifting + Teinture + Forme",
      li_aug_lf: "Lifting (forme incl.)",
      li_aug_ff: "Forme & Teinture",
      li_formen: "Forme",
      li_korean_f: "Korean Lash Lift + Teinture",
      li_korean: "Korean Lash Lift",
      li_faerben: "Teinture",
      li_kombi: "Korean Lash Lift & Brow Lifting",
      li_inkl: "teinture & forme incl.",

      book_cta_title: "Prête à rayonner ?",
      book_cta_text: "Réserve ton rendez-vous en ligne en quelques clics.",

      shop_title: "Boutique Bloom & Glow",
      shop_text: "Découvre nos produits cils dans la boutique en ligne officielle Bloom & Glow.",

      prices_eyebrow: "Tarifs",
      prices_title: "Prix & Soins",
      prices_sub: "Extensions de cils, lifting & sourcils — prix transparents.",
      block_extensions: "Extensions de cils", block_lifting: "Lifting & autres services",
      cat_augenbrauen: "Sourcils", cat_wimpern_lift: "Cils", cat_kombi: "Offres combinées",
      price_extensions_h: "Extensions", price_extras_h: "Extras",
      col_service: "Service", col_neuset: "Nouvelle pose",
      col_refill3: "Remplissage jusqu'à 3 semaines", col_refill4: "Remplissage jusqu'à 4 semaines",
      na_refill: "Remplissage non adapté",
      e_wispy: "Wispy Look", e_extra_note: "en supplément",
      e_remove: "Dépose", e_remove_new: "Dépose avec nouvelle pose ensuite",
      e_clean: "Nettoyage intensif", e_clean_d: "En cas de résidus de colle, mascara, etc.",
      cat_lashes: "Lashes", cat_brows: "Brows", cat_care: "Beauty Care",
      d_classic: "Effet naturel, un cil par cil naturel",
      d_hybrid: "Mélange Classic & Volume",
      d_volume: "Effet dense et fourni",
      d_refill: "Remplissage des extensions existantes",
      d_brow_lam: "Sourcils définis et soignés",
      d_brow_style: "Mise en forme, épilation & styling",
      d_brow_tint: "Teinture pour plus de profondeur",
      d_consult: "Consultation personnalisée",
      d_after: "Conseils d'entretien à la maison",
      products_block_text: "Découvre nos produits cils dans la boutique officielle Bloom & Glow.",
      price_note: "* Prix indicatifs — les tarifs définitifs seront ajoutés très bientôt.",

      services_eyebrow: "Galerie & Services",
      services_title: "Découvre nos soins",
      services_sub: "Choisis ton look — réserve facilement en ligne.",
      filter_all: "Tous", filter_lashes: "Lashes", filter_brows: "Brows",
      filter_products: "Products", filter_care: "Care",
      s_lashext_d: "Classic, Hybrid ou Volume — la bonne technique pour chaque regard.",
      s_lashlift_d: "Une courbe naturelle pour tes propres cils, jusqu'à 6 semaines.",
      s_browlam_d: "Des sourcils définis et plus fournis, finition soignée.",
      s_browstyle_d: "Forme, épilation et teinture pour un regard parfaitement dessiné.",
      s_products_d: "Des produits cils premium pour la maison — dans la boutique en ligne.",
      s_care_d: "Conseils personnalisés et entretien pour des résultats durables.",

      info_eyebrow: "Infos",
      info_title: "Tout savoir sur tes cils",
      info_lede: "Beau, simple et détendu — voici comment se déroule ton rendez-vous.",
      info_explain_title: "Les cils, en bref",
      info_explain_text: "Les extensions de cils sont posées une à une sur tes cils naturels, pour un regard éveillé et défini — sans mascara. Naturel ou volumineux, selon ton envie.",
      step1_t: "Choisis ton style", step1_d: "Classic, Hybrid ou Volume.",
      step2_t: "Réserve ton RDV", step2_d: "En ligne en quelques clics.",
      step3_t: "Get your glow", step3_d: "Détends-toi & rayonne.",
      step4_t: "Aftercare", step4_d: "Un entretien pour durer.",
      prep_lash_t: "Préparation cils",
      prep_lash_1: "Viens de préférence sans maquillage — évite mascara, eyeliner et crème pour les yeux.",
      prep_lash_2: "Évite le recourbe-cils et le sérum avant le rendez-vous.",
      prep_lash_3: "Limite la caféine juste avant le rendez-vous.",
      prep_lash_4: "Lentilles de contact ? Apporte un étui à lentilles.",
      prep_brow_t: "Préparation sourcils",
      prep_brow_1: "Pour le brow lifting, la teinture ou le henné, un patch test 24 h avant est recommandé.",
      prep_brow_2: "Contacte-nous pour un court rendez-vous test.",
      after_t: "Entretien des extensions",
      after_1: "Nettoie les cils chaque jour avec un shampooing à cils.",
      after_2: "Aucun produit à base d'huile autour des yeux.",
      after_3: "Ne pas frotter ni tirer, même en démaquillant.",
      after_4: "Pas de mascara ni de recourbe-cils.",
      after_5: "Brosse doucement chaque jour avec une brosse propre.",
      after_6: "Évite de dormir sur le visage.",
      info_wa_text: "Encore des questions ? Nous sommes là pour toi.",
      info_shop_text: "Retrouve les produits d'entretien dans la boutique Bloom & Glow.",

      formation_badge: "Bientôt",
      formation_title: "Bloom & Glow Academy",
      formation_text: "Des formations professionnelles cils & sourcils arrivent bientôt à Lucerne.",
      formation_wa: "Rejoindre la liste d'attente sur WhatsApp",

      res_eyebrow: "Rendez-vous",
      res_title: "Réserve ton rendez-vous glow",
      res_lede: "Choisis ton soin et réserve en quelques secondes.",
      res_choose_title: "Choisis ton soin",
      res_fast_text: "Réserve ton rendez-vous en ligne en quelques étapes.",
      res_shop_text: "Plutôt des produits ? Visite notre boutique en ligne.",

      foot_address_h: "Salon", foot_address: "Habsburgerstrasse 5 A<br>6003 Lucerne, Suisse",
      foot_hours_h: "Horaires", foot_hours: "Lun – Ven : 09:00 – 19:00<br>Sam : 09:00 – 17:00<br>Dim : Fermé",
      foot_nav_h: "Navigation", foot_follow_h: "Suivez-nous", foot_shop_h: "Boutique en ligne",
      foot_shop_text: "Découvre nos produits cils.",
      foot_rights: "Tous droits réservés.",
      wa_questions: "Une question ? WhatsApp"
    }
  };

  const FLAGS = { de: "🇩🇪", en: "🇬🇧", fr: "🇫🇷" };
  const LABEL = { de: "DE", en: "EN", fr: "FR" };
  const STORE_KEY = "bg_lang";

  function getLang() {
    let l;
    try { l = localStorage.getItem(STORE_KEY); } catch (e) { l = null; }
    return T[l] ? l : "de"; /* allemand par défaut */
  }
  function setLang(lang) {
    if (!T[lang]) return;
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    applyLang(lang);
  }
  function applyLang(lang) {
    const dict = T[lang];
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const k = el.getAttribute("data-i18n-html");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const k = el.getAttribute("data-i18n-aria");
      if (dict[k] != null) el.setAttribute("aria-label", dict[k]);
    });
    /* price table : labels mobiles synchronisés avec la langue */
    const ptLabels = [dict.col_service, dict.col_neuset, dict.col_refill3, dict.col_refill4];
    document.querySelectorAll(".price-table tbody tr").forEach(function (tr) {
      const tds = tr.children;
      for (let i = 0; i < tds.length; i++) {
        if (ptLabels[i] != null) tds[i].setAttribute("data-label", ptLabels[i]);
      }
    });
    /* refresh selectors */
    document.querySelectorAll(".lang-current-flag").forEach(function (el) { el.textContent = FLAGS[lang]; });
    document.querySelectorAll(".lang-current-label").forEach(function (el) { el.textContent = LABEL[lang]; });
    document.querySelectorAll("[data-lang]").forEach(function (el) {
      el.classList.toggle("active", el.getAttribute("data-lang") === lang);
    });
    /* notifie les composants dynamiques (parcours de reservation) */
    try { document.dispatchEvent(new CustomEvent("bg:lang", { detail: lang })); } catch (e) {}
  }

  /* ---------------- 2. DOM READY ---------------- */
  document.addEventListener("DOMContentLoaded", function () {

    /* Langue */
    applyLang(getLang());
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
        closeMenu();
        document.querySelectorAll(".lang").forEach(function (l) { l.classList.remove("open"); });
      });
    });
    /* Dropdown langue (desktop) */
    document.querySelectorAll(".lang-toggle").forEach(function (tog) {
      tog.addEventListener("click", function (e) {
        e.stopPropagation();
        const parent = tog.closest(".lang");
        parent.classList.toggle("open");
      });
    });
    document.addEventListener("click", function () {
      document.querySelectorAll(".lang").forEach(function (l) { l.classList.remove("open"); });
    });

    /* Burger / mobile menu */
    const burger = document.querySelector(".burger");
    const mobile = document.querySelector(".mobile-menu");
    function closeMenu() {
      if (!burger || !mobile) return;
      burger.classList.remove("open"); mobile.classList.remove("open");
      document.body.style.overflow = "";
      burger.setAttribute("aria-expanded", "false");
    }
    window.__bgCloseMenu = closeMenu;
    if (burger && mobile) {
      burger.addEventListener("click", function () {
        const open = burger.classList.toggle("open");
        mobile.classList.toggle("open", open);
        document.body.style.overflow = open ? "hidden" : "";
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });
      mobile.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", closeMenu);
      });
    }

    /* Active link selon la page */
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll("[data-page]").forEach(function (a) {
      if (a.getAttribute("data-page") === path) a.classList.add("active");
    });

    /* Header scrolled shadow */
    const header = document.querySelector(".site-header");
    if (header) {
      const onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 12); };
      onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    }

    /* Filtres galerie (services) */
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

    /* Scroll reveal */
    const reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && reveals.length) {
      const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add("in"); });
    }
  });
})();
