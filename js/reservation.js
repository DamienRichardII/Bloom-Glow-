/* =====================================================================
   BLOOM & GLOW — Parcours de reservation (vanilla JS, mobile-first, DE/EN/FR)
   Etapes : Service · Datum & Zeit · Deine Daten · [Karte] · Bestätigung
   L'etape "Karte" (Stripe SetupIntent) ne s'affiche que si
   STRIPE_PUBLISHABLE_KEY est configuree dans config.js.
   ===================================================================== */
(function () {
  "use strict";

  var CFG = window.BG_CONFIG || {};
  var API = CFG.API_BASE_URL || "http://localhost:4000/api";
  var WA = CFG.WHATSAPP_URL || "https://wa.me/message/JRDZLUSUA52AF1";
  var STRIPE_PK = CFG.STRIPE_PUBLISHABLE_KEY || "";
  var STRIPE_ON = !!STRIPE_PK && typeof window.Stripe === "function";

  var root = document.getElementById("reservation-app");
  if (!root) return;

  /* ---------- i18n ---------- */
  var LOCALE = { de: "de-CH", en: "en-GB", fr: "fr-CH" };
  var I18N = {
    de: {
      s_service: "Service", s_datetime: "Datum & Zeit", s_infos: "Deine Daten", s_card: "Karte", s_confirm: "Bestätigung",
      choose: "Wähle deine Behandlung", pick_cat: "Wähle zuerst eine Kategorie.", next: "Weiter", back: "Zurück",
      dt_title: "Datum & Uhrzeit", no_online: "Momentan sind keine Termine online verfügbar. Schreib uns auf",
      free_at: "Freie Zeiten am {date}", loading: "Lädt …", no_slots: "Keine freien Zeiten an diesem Tag. Bitte ein anderes Datum wählen.",
      vorname: "Vorname", nachname: "Nachname", phone: "Telefon", email: "E-Mail", note: "Bemerkung / Wunschlook",
      err_req: "Bitte Vorname, Nachname und Telefon ausfüllen.", err_email: "Bitte eine gültige E-Mail eingeben.",
      card_title: "Kartenhinterlegung", card_note: "Zur Sicherung deines Termins wird eine Kartenhinterlegung benötigt. Es erfolgt keine sofortige Abbuchung.",
      card_loading: "Sichere Zahlungsfelder werden geladen …", card_next: "Karte sichern & weiter", card_checking: "Prüfe Karte …",
      card_fail: "Karte konnte nicht gesichert werden.", pay_unavail: "Zahlung nicht verfügbar: ",
      r_treat: "Behandlung", r_price: "Preis", r_date: "Datum", r_time: "Uhrzeit", r_name: "Name", r_phone: "Telefon", r_email: "E-Mail", r_note: "Bemerkung", r_card: "Karte", card_saved: "hinterlegt ✓",
      submit: "Termin bestätigen", sending: "Wird gesendet …", oclock: "Uhr",
      thanks: "Danke, {name}!", received: "Deine Terminanfrage für {service} am {date} um {time} Uhr ist eingegangen.",
      soon: "Du erhältst in Kürze eine Bestätigung. Bei Fragen schreib uns auf", to_home: "Zur Startseite",
      send_fail: "Senden fehlgeschlagen.", or_wa: " — oder buche direkt auf WhatsApp.",
      unreachable: "Die Online-Buchung ist gerade nicht erreichbar.", try_later: "Bitte versuche es später erneut oder schreib uns direkt auf", book_wa: "Auf WhatsApp buchen",
    },
    en: {
      s_service: "Service", s_datetime: "Date & Time", s_infos: "Your details", s_card: "Card", s_confirm: "Confirmation",
      choose: "Choose your treatment", pick_cat: "Please select a category first.", next: "Next", back: "Back",
      dt_title: "Date & Time", no_online: "No appointments are available online right now. Message us on",
      free_at: "Available times on {date}", loading: "Loading …", no_slots: "No free times on this day. Please choose another date.",
      vorname: "First name", nachname: "Last name", phone: "Phone", email: "Email", note: "Note / desired look",
      err_req: "Please fill in first name, last name and phone.", err_email: "Please enter a valid email.",
      card_title: "Card on file", card_note: "To secure your appointment a card needs to be saved. No immediate charge will be made.",
      card_loading: "Loading secure payment fields …", card_next: "Save card & continue", card_checking: "Checking card …",
      card_fail: "Card could not be saved.", pay_unavail: "Payment unavailable: ",
      r_treat: "Treatment", r_price: "Price", r_date: "Date", r_time: "Time", r_name: "Name", r_phone: "Phone", r_email: "Email", r_note: "Note", r_card: "Card", card_saved: "saved ✓",
      submit: "Confirm appointment", sending: "Sending …", oclock: "",
      thanks: "Thank you, {name}!", received: "Your appointment request for {service} on {date} at {time} has been received.",
      soon: "You will receive a confirmation shortly. Any questions? Message us on", to_home: "Back to home",
      send_fail: "Sending failed.", or_wa: " — or book directly on WhatsApp.",
      unreachable: "Online booking is currently unavailable.", try_later: "Please try again later or message us directly on", book_wa: "Book on WhatsApp",
    },
    fr: {
      s_service: "Soin", s_datetime: "Date & Heure", s_infos: "Tes coordonnées", s_card: "Carte", s_confirm: "Confirmation",
      choose: "Choisis ton soin", pick_cat: "Choisis d'abord une catégorie.", next: "Suivant", back: "Retour",
      dt_title: "Date & Heure", no_online: "Aucun créneau n'est disponible en ligne pour le moment. Écris-nous sur",
      free_at: "Créneaux libres le {date}", loading: "Chargement …", no_slots: "Aucun créneau libre ce jour-là. Choisis une autre date.",
      vorname: "Prénom", nachname: "Nom", phone: "Téléphone", email: "E-mail", note: "Remarque / look souhaité",
      err_req: "Merci de remplir prénom, nom et téléphone.", err_email: "Merci d'entrer un e-mail valide.",
      card_title: "Empreinte bancaire", card_note: "Pour sécuriser ton rendez-vous, une empreinte bancaire est nécessaire. Aucun débit immédiat n'est effectué.",
      card_loading: "Chargement des champs de paiement sécurisés …", card_next: "Sécuriser la carte & continuer", card_checking: "Vérification de la carte …",
      card_fail: "La carte n'a pas pu être sécurisée.", pay_unavail: "Paiement indisponible : ",
      r_treat: "Soin", r_price: "Prix", r_date: "Date", r_time: "Heure", r_name: "Nom", r_phone: "Téléphone", r_email: "E-mail", r_note: "Remarque", r_card: "Carte", card_saved: "enregistrée ✓",
      submit: "Confirmer le rendez-vous", sending: "Envoi …", oclock: "",
      thanks: "Merci, {name} !", received: "Ta demande de rendez-vous pour {service} le {date} à {time} a bien été reçue.",
      soon: "Tu recevras une confirmation sous peu. Une question ? Écris-nous sur", to_home: "Retour à l'accueil",
      send_fail: "Échec de l'envoi.", or_wa: " — ou réserve directement sur WhatsApp.",
      unreachable: "La réservation en ligne est momentanément indisponible.", try_later: "Réessaie plus tard ou écris-nous directement sur", book_wa: "Réserver sur WhatsApp",
    },
  };
  function lang() { try { var l = localStorage.getItem("bg_lang"); return I18N[l] ? l : "de"; } catch (e) { return "de"; } }
  function t(k) { return (I18N[lang()] || I18N.de)[k]; }
  function tpl(k, vars) { return t(k).replace(/\{(\w+)\}/g, function (_, n) { return vars[n] != null ? vars[n] : ""; }); }

  var LABELS = { service: "s_service", datetime: "s_datetime", infos: "s_infos", card: "s_card", confirm: "s_confirm" };

  var state = {
    steps: ["service", "datetime", "infos"].concat(STRIPE_ON ? ["card"] : []).concat(["confirm"]),
    i: 0, success: false,
    catalog: [], weekly: [], blocked: [],
    category: null, service: null,
    date: null, time: null, slots: [], loadingSlots: false,
    customer: { firstname: "", lastname: "", phone: "", email: "", note: "" },
    submitting: false, error: null,
    stripe: null, elements: null, paymentEl: null,
    clientSecret: null, setupIntentId: null, customerId: null, cardReady: false,
  };
  function key() { return state.steps[state.i]; }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function pad(n) { return String(n).padStart(2, "0"); }
  function ymd(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function dt(s, opts) { return new Intl.DateTimeFormat(LOCALE[lang()] || "de-CH", opts).format(new Date(s + "T00:00:00")); }
  function fmtDateLong(s) { return dt(s, { weekday: "short", day: "numeric", month: "short", year: "numeric" }); }
  function api(path, opts) {
    return fetch(API + path, opts).then(function (r) {
      return r.json().then(function (b) { if (!r.ok) throw new Error(b && b.error ? b.error : "Fehler " + r.status); return b; });
    });
  }
  function scrollTop() { window.scrollTo({ top: root.offsetTop - 80, behavior: "smooth" }); }
  function waText() { return ' <a href="' + WA + '" target="_blank" rel="noopener noreferrer">WhatsApp</a>'; }

  /* ---------- data ---------- */
  function loadInitial() {
    return Promise.all([api("/services"), api("/availability")]).then(function (res) {
      state.catalog = (res[0] && res[0].categories) || [];
      state.weekly = (res[1] && res[1].weekly) || [];
      state.blocked = ((res[1] && res[1].blocked) || []).map(function (b) { return b.date; });
      preselectFromUrl();
    });
  }
  function preselectFromUrl() {
    var p = new URLSearchParams(location.search), cat = p.get("cat"), svc = p.get("service");
    if (cat) {
      var f = state.catalog.find(function (c) { return c.key === cat; });
      if (f) { state.category = f; if (svc) { var it = f.items.find(function (i) { return i.name === svc; }); if (it) { state.service = it; state.i = 1; } } }
    }
  }
  function selectableDates() {
    var out = [], today = new Date(); today.setHours(0, 0, 0, 0);
    for (var i = 0; i < 35 && out.length < 24; i++) {
      var d = new Date(today); d.setDate(today.getDate() + i);
      var av = state.weekly.find(function (a) { return a.weekday === d.getDay(); });
      var s = ymd(d);
      if (av && av.is_working_day && state.blocked.indexOf(s) === -1) out.push(s);
    }
    return out;
  }
  function loadSlots(s) {
    state.loadingSlots = true; state.slots = []; render();
    api("/availability?date=" + encodeURIComponent(s))
      .then(function (r) { state.slots = r.slots || []; })
      .catch(function () { state.slots = []; })
      .then(function () { state.loadingSlots = false; render(); });
  }

  /* ---------- render ---------- */
  function stepper() {
    var h = '<ol class="rsv-steps">';
    state.steps.forEach(function (k, i) {
      var cls = i === state.i ? "active" : i < state.i ? "done" : "";
      h += '<li class="' + cls + '"><span class="rsv-dot">' + (i + 1) + '</span><span class="rsv-steplabel">' + esc(t(LABELS[k])) + "</span></li>";
    });
    return h + "</ol>";
  }
  function navBtns(nextDisabled, nextLabel, backable) {
    var h = '<div class="rsv-nav">';
    h += backable ? '<button class="btn btn-outline rsv-back">' + esc(t("back")) + "</button>" : "<span></span>";
    h += '<button class="btn btn-primary rsv-next"' + (nextDisabled ? " disabled" : "") + ">" + esc(nextLabel || t("next")) + "</button></div>";
    return h;
  }

  function stepService() {
    var h = '<h2 class="rsv-h">' + esc(t("choose")) + '</h2><div class="rsv-cats">';
    state.catalog.forEach(function (c) {
      h += '<button class="rsv-cat' + (state.category && state.category.key === c.key ? " active" : "") + '" data-cat="' + esc(c.key) + '">' + esc(c.label) + "</button>";
    });
    h += "</div>";
    if (state.category) {
      h += '<div class="rsv-services">';
      state.category.items.forEach(function (it) {
        h += '<button class="rsv-service' + (state.service && state.service.name === it.name ? " active" : "") + '" data-svc="' + esc(it.name) + '">' +
          '<span class="rsv-sname">' + esc(it.name) + '</span><span class="rsv-sprice">' + esc(it.price) + " CHF</span></button>";
      });
      h += "</div>";
    } else { h += '<p class="rsv-hint">' + esc(t("pick_cat")) + "</p>"; }
    return h + navBtns(!state.service, t("next"), false);
  }

  function stepDate() {
    var dates = selectableDates();
    var h = '<h2 class="rsv-h">' + esc(t("dt_title")) + "</h2>";
    if (!dates.length) {
      h += '<p class="rsv-hint">' + esc(t("no_online")) + waText() + ".</p>";
    } else {
      h += '<div class="rsv-dates">';
      dates.forEach(function (s) {
        h += '<button class="rsv-date' + (state.date === s ? " active" : "") + '" data-date="' + s + '">' +
          '<span class="rsv-dwd">' + esc(dt(s, { weekday: "short" })) + '</span><span class="rsv-dnum">' + new Date(s + "T00:00:00").getDate() + '</span><span class="rsv-dmon">' + esc(dt(s, { month: "short" })) + "</span></button>";
      });
      h += "</div>";
      if (state.date) {
        h += '<h3 class="rsv-sub">' + esc(tpl("free_at", { date: fmtDateLong(state.date) })) + "</h3>";
        if (state.loadingSlots) h += '<p class="rsv-hint">' + esc(t("loading")) + "</p>";
        else if (!state.slots.length) h += '<p class="rsv-hint">' + esc(t("no_slots")) + "</p>";
        else {
          h += '<div class="rsv-slots">';
          state.slots.forEach(function (x) { h += '<button class="rsv-slot' + (state.time === x ? " active" : "") + '" data-time="' + esc(x) + '">' + esc(x) + "</button>"; });
          h += "</div>";
        }
      }
    }
    return h + navBtns(!(state.date && state.time), t("next"), true);
  }

  function fld(id, label, type, val, req) {
    return '<label class="rsv-field"><span>' + esc(label) + (req ? " *" : "") + '</span><input id="rsv-' + id + '" type="' + type + '" value="' + esc(val) + '"' + (req ? " required" : "") + "></label>";
  }
  function stepInfos() {
    var c = state.customer;
    var h = '<h2 class="rsv-h">' + esc(t("s_infos")) + '</h2><div class="rsv-form">';
    h += fld("firstname", t("vorname"), "text", c.firstname, true);
    h += fld("lastname", t("nachname"), "text", c.lastname, true);
    h += fld("phone", t("phone"), "tel", c.phone, true);
    h += fld("email", t("email"), "email", c.email, false);
    h += '<label class="rsv-field rsv-full"><span>' + esc(t("note")) + '</span><textarea id="rsv-note" rows="3">' + esc(c.note) + "</textarea></label></div>";
    if (state.error) h += '<p class="rsv-error">' + esc(state.error) + "</p>";
    return h + navBtns(false, t("next"), true);
  }

  function stepCard() {
    var h = '<h2 class="rsv-h">' + esc(t("card_title")) + "</h2>";
    h += '<p class="rsv-card-note">' + esc(t("card_note")) + "</p>";
    h += '<div id="rsv-payment-element" class="rsv-stripe"><p class="rsv-hint">' + esc(t("card_loading")) + "</p></div>";
    h += '<p id="rsv-card-error" class="rsv-error"></p>';
    h += '<div class="rsv-nav"><button class="btn btn-outline rsv-back">' + esc(t("back")) + "</button>";
    h += '<button class="btn btn-primary rsv-card-next">' + esc(t("card_next")) + "</button></div>";
    return h;
  }

  function row(k, v) { return '<div class="rsv-row"><span class="rsv-k">' + esc(k) + '</span><span class="rsv-v">' + esc(v) + "</span></div>"; }
  function stepConfirm() {
    var c = state.customer;
    var h = '<h2 class="rsv-h">' + esc(t("s_confirm")) + '</h2><div class="rsv-summary">';
    h += row(t("r_treat"), state.category.label + " · " + state.service.name);
    h += row(t("r_price"), state.service.price + " CHF");
    h += row(t("r_date"), fmtDateLong(state.date));
    h += row(t("r_time"), state.time + (t("oclock") ? " " + t("oclock") : ""));
    h += row(t("r_name"), c.firstname + " " + c.lastname);
    h += row(t("r_phone"), c.phone);
    if (c.email) h += row(t("r_email"), c.email);
    if (c.note) h += row(t("r_note"), c.note);
    if (state.setupIntentId) h += row(t("r_card"), t("card_saved"));
    h += "</div>";
    if (!STRIPE_ON) h += '<p class="rsv-card-note">' + esc(t("card_note")) + "</p>";
    if (state.error) h += '<p class="rsv-error">' + esc(state.error) + "</p>";
    h += '<div class="rsv-nav"><button class="btn btn-outline rsv-back">' + esc(t("back")) + "</button>";
    h += '<button class="btn btn-primary rsv-submit"' + (state.submitting ? " disabled" : "") + ">" + esc(state.submitting ? t("sending") : t("submit")) + "</button></div>";
    return h;
  }
  function stepSuccess() {
    var v = { name: esc(state.customer.firstname), service: "<strong>" + esc(state.service.name) + "</strong>", date: "<strong>" + esc(fmtDateLong(state.date)) + "</strong>", time: "<strong>" + esc(state.time) + (t("oclock") ? " " + t("oclock") : "") + "</strong>" };
    return '<div class="rsv-success"><div class="rsv-check">✓</div>' +
      '<h2 class="rsv-h">' + esc(tpl("thanks", { name: state.customer.firstname })) + "</h2>" +
      "<p>" + tpl("received", v) + "</p>" +
      '<p class="rsv-hint">' + esc(t("soon")) + waText() + ".</p>" +
      '<a href="index.html" class="btn btn-primary">' + esc(t("to_home")) + "</a></div>";
  }

  function render() {
    if (state.success) { root.innerHTML = stepSuccess(); return; }
    var k = key(), body;
    if (k === "service") body = stepService();
    else if (k === "datetime") body = stepDate();
    else if (k === "infos") body = stepInfos();
    else if (k === "card") body = stepCard();
    else body = stepConfirm();
    root.innerHTML = stepper() + '<div class="rsv-panel">' + body + "</div>";
    if (k === "card") mountStripe();
  }

  /* ---------- Stripe ---------- */
  function mountStripe() {
    var el = document.getElementById("rsv-payment-element");
    if (!el) return;
    if (!state.stripe) state.stripe = window.Stripe(STRIPE_PK);
    var ensure = state.clientSecret ? Promise.resolve() :
      api("/stripe/create-setup-intent", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: state.customer.email || null, name: (state.customer.firstname + " " + state.customer.lastname).trim() }) })
        .then(function (r) { state.clientSecret = r.client_secret; state.setupIntentId = r.setup_intent_id; state.customerId = r.customer_id; });
    ensure.then(function () {
      state.elements = state.stripe.elements({ clientSecret: state.clientSecret, appearance: { theme: "stripe", variables: { colorPrimary: "#e2568f", fontFamily: "Jost, sans-serif", borderRadius: "12px" } } });
      state.paymentEl = state.elements.create("payment");
      el.innerHTML = ""; state.paymentEl.mount("#rsv-payment-element"); state.cardReady = true;
    }).catch(function (err) {
      el.innerHTML = "";
      var e = document.getElementById("rsv-card-error");
      if (e) e.innerHTML = esc(t("pay_unavail") + err.message) + waText();
    });
  }
  function confirmCard() {
    var btn = root.querySelector(".rsv-card-next");
    if (!state.cardReady || !state.elements) return;
    if (btn) { btn.disabled = true; btn.textContent = t("card_checking"); }
    var errEl = document.getElementById("rsv-card-error"); if (errEl) errEl.textContent = "";
    state.stripe.confirmSetup({ elements: state.elements, redirect: "if_required", confirmParams: { return_url: location.href } })
      .then(function (res) {
        if (res.error) { if (errEl) errEl.textContent = res.error.message || t("card_fail"); if (btn) { btn.disabled = false; btn.textContent = t("card_next"); } return; }
        if (res.setupIntent && res.setupIntent.id) state.setupIntentId = res.setupIntent.id;
        state.cardReady = false; state.i++; render(); scrollTop();
      });
  }

  /* ---------- events ---------- */
  root.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    if (b.dataset.cat) { state.category = state.catalog.find(function (c) { return c.key === b.dataset.cat; }); state.service = null; render(); return; }
    if (b.dataset.svc) { state.service = state.category.items.find(function (i) { return i.name === b.dataset.svc; }); render(); return; }
    if (b.dataset.date) { state.date = b.dataset.date; state.time = null; loadSlots(state.date); return; }
    if (b.dataset.time) { state.time = b.dataset.time; render(); return; }
    if (b.classList.contains("rsv-back")) { saveForm(); state.error = null; state.cardReady = false; state.i--; render(); scrollTop(); return; }
    if (b.classList.contains("rsv-card-next")) { confirmCard(); return; }
    if (b.classList.contains("rsv-next")) { onNext(); return; }
    if (b.classList.contains("rsv-submit")) { onSubmit(); return; }
  });

  function saveForm() {
    var g = function (id) { var el = document.getElementById("rsv-" + id); return el ? el.value.trim() : ""; };
    if (document.getElementById("rsv-firstname")) {
      state.customer = { firstname: g("firstname"), lastname: g("lastname"), phone: g("phone"), email: g("email"), note: g("note") };
    }
  }
  function onNext() {
    state.error = null;
    if (key() === "infos") {
      saveForm(); var c = state.customer;
      if (!c.firstname || !c.lastname || !c.phone) { state.error = t("err_req"); render(); return; }
      if (c.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(c.email)) { state.error = t("err_email"); render(); return; }
    }
    state.i++; render(); scrollTop();
  }
  function onSubmit() {
    state.submitting = true; state.error = null; render();
    var c = state.customer;
    var payload = {
      service_category: state.category.key, service_name: state.service.name,
      customer_firstname: c.firstname, customer_lastname: c.lastname,
      customer_phone: c.phone, customer_email: c.email || null, note: c.note || null,
      booking_date: state.date, booking_time: state.time,
      stripe_customer_id: state.customerId || null, stripe_setup_intent_id: state.setupIntentId || null,
    };
    api("/bookings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
      .then(function () { state.success = true; render(); scrollTop(); })
      .catch(function (err) { state.submitting = false; state.error = (err && err.message ? err.message : t("send_fail")) + t("or_wa"); render(); });
  }

  /* re-render au changement de langue (sans perdre l'etat) */
  document.addEventListener("bg:lang", function () { if (state.catalog.length) render(); });

  /* ---------- init ---------- */
  loadInitial().then(render).catch(function () {
    root.innerHTML = '<div class="rsv-panel"><p class="rsv-error">' + esc(t("unreachable")) + "</p>" +
      '<p class="rsv-hint">' + esc(t("try_later")) + waText() + ".</p>" +
      '<a href="' + WA + '" target="_blank" rel="noopener noreferrer" class="btn btn-wa">' + esc(t("book_wa")) + "</a></div>";
  });
})();
