/* =====================================================================
   BLOOM & GLOW — Admin Dashboard (vanilla JS, DE/EN/FR)
   Login (mot de passe modifiable), KPI, termine, arbeitstage,
   gesperrte tage, passwort andern, nachrichten.
   ===================================================================== */
(function () {
  "use strict";
  var CFG = window.BG_CONFIG || {};
  var API = CFG.API_BASE_URL || "http://localhost:4000/api";
  var TOKEN_KEY = "bg_admin_token";
  var LANG_KEY = "bg_lang";

  /* ---------- i18n ---------- */
  var I18N = {
    de: {
      a_logout: "Abmelden", a_login_title: "Admin Login", a_login_sub: "Gib dein Passwort ein, um das Dashboard zu öffnen.",
      a_password: "Passwort", a_login_btn: "Anmelden",
      a_bookings: "Termine", a_status: "Status", a_all: "Alle", a_pending: "Ausstehend", a_confirmed: "Bestätigt", a_completed: "Erledigt", a_cancelled: "Storniert",
      a_reload: "Aktualisieren", a_loading: "Lädt …", a_no_bookings: "Keine Termine.",
      a_workdays: "Arbeitstage", a_workdays_intro: "Lege fest, an welchen Tagen du arbeitest und zu welchen Zeiten.",
      a_blocked: "Gesperrte Tage", a_date: "Datum", a_reason: "Grund (optional)", a_block_add: "Tag sperren", a_no_blocked: "Keine gesperrten Tage.", a_unblock: "Entsperren",
      a_pw_section: "Passwort ändern", a_pw_intro: "Wähle ein neues Passwort (mindestens 6 Zeichen). Das Notfall-Passwort aus der Konfiguration bleibt zusätzlich gültig.",
      a_newpw: "Neues Passwort", a_savepw: "Passwort speichern", a_pw_ok: "Passwort geändert ✓", a_pw_short: "Passwort zu kurz (mindestens 6 Zeichen).",
      a_templates: "Nachrichtenvorlagen", a_templates_intro: "Für jede Buchung kannst du oben eine WhatsApp-Nachricht öffnen. Vorlagen:",
      a_kpi_total: "Termine total", a_kpi_month: "Diesen Monat", a_kpi_upcoming: "Anstehend", a_kpi_potential: "Potenzial", a_kpi_top: "Top Service",
      a_confirm: "Bestätigen", a_complete: "Erledigt", a_cancel: "Stornieren", a_wa_conf: "WA Bestätigung", a_wa_rem: "WA Erinnerung", a_wa_canc: "WA Storno",
      a_save: "Speichern", a_saved: "Gespeichert ✓",
      a_tpl_conf: "Bestätigung", a_tpl_rem: "Erinnerung", a_tpl_canc: "Stornierung",
      a_wrong_pw: "Falsches Passwort.", a_conn_fail: "Verbindung fehlgeschlagen: ",
      a_forgot_link: "Passwort vergessen?", a_forgot_email: "Admin E-Mail", a_forgot_send: "Link senden",
      a_forgot_sent: "Falls die Adresse berechtigt ist, wurde ein Link gesendet.", a_forgot_fail: "Senden fehlgeschlagen.",
      a_confirm_ok: "Reservierung bestätigt und E-Mails gesendet.", a_confirm_mail_fail: "Reservierung bestätigt, aber E-Mail nicht gesendet.",
      a_resend: "Mail erneut senden", a_resend_ok: "E-Mail gesendet.",
      a_kpis_fail: "KPIs konnten nicht geladen werden.", a_load_fail: "Konnte nicht geladen werden.",
      wd: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    },
    en: {
      a_logout: "Log out", a_login_title: "Admin Login", a_login_sub: "Enter your password to open the dashboard.",
      a_password: "Password", a_login_btn: "Sign in",
      a_bookings: "Appointments", a_status: "Status", a_all: "All", a_pending: "Pending", a_confirmed: "Confirmed", a_completed: "Completed", a_cancelled: "Cancelled",
      a_reload: "Refresh", a_loading: "Loading …", a_no_bookings: "No appointments.",
      a_workdays: "Working days", a_workdays_intro: "Set which days you work and at what times.",
      a_blocked: "Blocked days", a_date: "Date", a_reason: "Reason (optional)", a_block_add: "Block day", a_no_blocked: "No blocked days.", a_unblock: "Unblock",
      a_pw_section: "Change password", a_pw_intro: "Choose a new password (at least 6 characters). The emergency password from the config stays valid too.",
      a_newpw: "New password", a_savepw: "Save password", a_pw_ok: "Password changed ✓", a_pw_short: "Password too short (at least 6 characters).",
      a_templates: "Message templates", a_templates_intro: "For each booking you can open a WhatsApp message above. Templates:",
      a_kpi_total: "Total appointments", a_kpi_month: "This month", a_kpi_upcoming: "Upcoming", a_kpi_potential: "Potential", a_kpi_top: "Top service",
      a_confirm: "Confirm", a_complete: "Completed", a_cancel: "Cancel", a_wa_conf: "WA Confirmation", a_wa_rem: "WA Reminder", a_wa_canc: "WA Cancellation",
      a_save: "Save", a_saved: "Saved ✓",
      a_tpl_conf: "Confirmation", a_tpl_rem: "Reminder", a_tpl_canc: "Cancellation",
      a_wrong_pw: "Wrong password.", a_conn_fail: "Connection failed: ",
      a_forgot_link: "Forgot password?", a_forgot_email: "Admin email", a_forgot_send: "Send link",
      a_forgot_sent: "If this address is authorized, a link has been sent.", a_forgot_fail: "Sending failed.",
      a_confirm_ok: "Booking confirmed and emails sent.", a_confirm_mail_fail: "Booking confirmed, but email not sent.",
      a_resend: "Resend email", a_resend_ok: "Email sent.",
      a_kpis_fail: "KPIs could not be loaded.", a_load_fail: "Could not be loaded.",
      wd: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    },
    fr: {
      a_logout: "Déconnexion", a_login_title: "Connexion Admin", a_login_sub: "Entre ton mot de passe pour ouvrir le tableau de bord.",
      a_password: "Mot de passe", a_login_btn: "Se connecter",
      a_bookings: "Rendez-vous", a_status: "Statut", a_all: "Tous", a_pending: "En attente", a_confirmed: "Confirmé", a_completed: "Terminé", a_cancelled: "Annulé",
      a_reload: "Actualiser", a_loading: "Chargement …", a_no_bookings: "Aucun rendez-vous.",
      a_workdays: "Jours de travail", a_workdays_intro: "Définis les jours où tu travailles et à quelles heures.",
      a_blocked: "Jours bloqués", a_date: "Date", a_reason: "Raison (optionnel)", a_block_add: "Bloquer le jour", a_no_blocked: "Aucun jour bloqué.", a_unblock: "Débloquer",
      a_pw_section: "Changer le mot de passe", a_pw_intro: "Choisis un nouveau mot de passe (au moins 6 caractères). Le mot de passe de secours de la configuration reste aussi valable.",
      a_newpw: "Nouveau mot de passe", a_savepw: "Enregistrer le mot de passe", a_pw_ok: "Mot de passe modifié ✓", a_pw_short: "Mot de passe trop court (au moins 6 caractères).",
      a_templates: "Modèles de messages", a_templates_intro: "Pour chaque réservation, tu peux ouvrir un message WhatsApp ci-dessus. Modèles :",
      a_kpi_total: "Rendez-vous total", a_kpi_month: "Ce mois", a_kpi_upcoming: "À venir", a_kpi_potential: "Potentiel", a_kpi_top: "Top soin",
      a_confirm: "Confirmer", a_complete: "Terminé", a_cancel: "Annuler", a_wa_conf: "WA Confirmation", a_wa_rem: "WA Rappel", a_wa_canc: "WA Annulation",
      a_save: "Enregistrer", a_saved: "Enregistré ✓",
      a_tpl_conf: "Confirmation", a_tpl_rem: "Rappel", a_tpl_canc: "Annulation",
      a_wrong_pw: "Mot de passe incorrect.", a_conn_fail: "Échec de connexion : ",
      a_forgot_link: "Mot de passe oublié ?", a_forgot_email: "E-mail admin", a_forgot_send: "Envoyer le lien",
      a_forgot_sent: "Si cette adresse est autorisée, un lien a été envoyé.", a_forgot_fail: "Échec de l'envoi.",
      a_confirm_ok: "Réservation confirmée et e-mails envoyés.", a_confirm_mail_fail: "Réservation confirmée, mais e-mail non envoyé.",
      a_resend: "Renvoyer l'e-mail", a_resend_ok: "E-mail envoyé.",
      a_kpis_fail: "Les KPI n'ont pas pu être chargés.", a_load_fail: "Chargement impossible.",
      wd: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    },
  };
  function lang() { try { var l = localStorage.getItem(LANG_KEY); return I18N[l] ? l : "de"; } catch (e) { return "de"; } }
  function t(k) { return (I18N[lang()] || I18N.de)[k]; }
  function locale() { return { de: "de-CH", en: "en-GB", fr: "fr-CH" }[lang()] || "de-CH"; }

  // Messages clients WhatsApp : toujours en allemand (langue du salon).
  var TEMPLATES = {
    confirmation: "Hallo [Vorname], dein Termin für [Service] am [Datum] um [Uhrzeit] ist bestätigt. Wir freuen uns auf dich. Bloom & Glow",
    reminder: "Hallo [Vorname], kleine Erinnerung an deinen Termin morgen um [Uhrzeit] bei Bloom & Glow.",
    cancellation: "Hallo [Vorname], dein Termin musste leider storniert werden. Bitte kontaktiere uns für einen neuen Termin.",
  };

  var $ = function (id) { return document.getElementById(id); };
  function token() { try { return localStorage.getItem(TOKEN_KEY); } catch (e) { return null; } }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  function apiAdmin(path, opts) {
    opts = opts || {};
    opts.headers = Object.assign({ Authorization: "Bearer " + token() }, opts.headers || {});
    if (opts.body) opts.headers["Content-Type"] = "application/json";
    return fetch(API + path, opts).then(function (r) {
      return r.json().then(function (b) { if (!r.ok) throw new Error(b && b.error ? b.error : "Fehler " + r.status); return b; });
    });
  }

  function fmtDate(dStr) { return new Intl.DateTimeFormat(locale(), { weekday: "short", day: "numeric", month: "numeric", year: "numeric" }).format(new Date(dStr + "T00:00:00")); }
  function fill(tpl, b) {
    return tpl.replace(/\[Vorname\]/g, b.customer_firstname || "").replace(/\[Service\]/g, b.service_name || "")
      .replace(/\[Datum\]/g, fmtDate(b.booking_date)).replace(/\[Uhrzeit\]/g, b.booking_time || "");
  }
  function waLink(b, type) { return "https://wa.me/" + (b.customer_phone || "").replace(/[^0-9]/g, "") + "?text=" + encodeURIComponent(fill(TEMPLATES[type], b)); }

  /* ---------- i18n apply + lang toggle ---------- */
  function applyStatic() {
    document.documentElement.setAttribute("lang", lang());
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n"); if (t(k) != null) el.textContent = t(k);
    });
    document.querySelectorAll("#adm-lang button").forEach(function (b) { b.classList.toggle("active", b.dataset.setlang === lang()); });
  }
  document.getElementById("adm-lang").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-setlang]"); if (!b) return;
    try { localStorage.setItem(LANG_KEY, b.dataset.setlang); } catch (e2) {}
    applyStatic();
    if (!$("adm-app").classList.contains("hidden")) loadAll();
  });

  /* ---------- LOGIN ---------- */
  function showApp() {
    $("adm-login").classList.add("hidden");
    $("adm-app").classList.remove("hidden");
    $("adm-logout").classList.remove("hidden");
    loadAll();
  }
  function doLogin(pw) {
    return fetch(API + "/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: pw }) })
      .then(function (r) { return r.json().then(function (b) { if (!r.ok) throw new Error(b && b.error ? b.error : "Fehler"); return b; }); })
      .then(function (b) { try { localStorage.setItem(TOKEN_KEY, b.token); } catch (e) {} showApp(); });
  }
  $("adm-login-btn").addEventListener("click", function () {
    var v = $("adm-token").value.trim(); if (!v) return;
    doLogin(v).catch(function (err) {
      var el = $("adm-login-error");
      el.textContent = /Falsches|Wrong|incorrect|401/.test(err.message) ? t("a_wrong_pw") : t("a_conn_fail") + err.message;
      el.classList.remove("hidden");
    });
  });
  $("adm-token").addEventListener("keydown", function (e) { if (e.key === "Enter") $("adm-login-btn").click(); });
  $("adm-logout").addEventListener("click", function () { try { localStorage.removeItem(TOKEN_KEY); } catch (e) {} location.reload(); });

  // Mot de passe oublie
  $("adm-forgot-link").addEventListener("click", function (e) { e.preventDefault(); $("adm-forgot").classList.toggle("hidden"); });
  $("adm-forgot-btn").addEventListener("click", function () {
    var email = $("adm-forgot-email").value.trim();
    var msg = $("adm-forgot-msg"); msg.className = "adm-msg"; msg.textContent = "…";
    fetch(API + "/admin/forgot-password", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: email }) })
      .then(function () { msg.className = "adm-ok"; msg.textContent = t("a_forgot_sent"); })
      .catch(function () { msg.className = "adm-error"; msg.textContent = t("a_forgot_fail"); });
  });

  /* ---------- LOAD ALL ---------- */
  function loadAll() { loadKpis(); loadBookings(); loadDays(); loadBlocked(); loadTemplates(); }

  /* ---------- KPIs ---------- */
  function loadKpis() {
    apiAdmin("/kpis").then(function (k) {
      var top = (k.top_services && k.top_services[0]) ? k.top_services[0].name : "—";
      var cards = [
        { num: k.total_bookings, lbl: t("a_kpi_total") },
        { num: k.bookings_this_month, lbl: t("a_kpi_month") },
        { num: k.upcoming_bookings, lbl: t("a_kpi_upcoming") },
        { num: (k.potential_revenue || 0) + " CHF", lbl: t("a_kpi_potential") },
        { num: top, lbl: t("a_kpi_top") },
      ];
      $("adm-kpis").innerHTML = cards.map(function (c) { return '<div class="adm-kpi"><div class="num">' + esc(c.num) + '</div><div class="lbl">' + esc(c.lbl) + "</div></div>"; }).join("");
    }).catch(function () { $("adm-kpis").innerHTML = '<p class="adm-error">' + esc(t("a_kpis_fail")) + "</p>"; });
  }

  /* ---------- BOOKINGS ---------- */
  function loadBookings() {
    var status = $("adm-filter").value, box = $("adm-bookings");
    box.innerHTML = '<p class="adm-msg">' + esc(t("a_loading")) + "</p>";
    apiAdmin("/bookings" + (status ? "?status=" + status : "")).then(function (list) {
      box.innerHTML = list.length ? list.map(renderBooking).join("") : '<p class="adm-msg">' + esc(t("a_no_bookings")) + "</p>";
    }).catch(function (e) { box.innerHTML = '<p class="adm-error">' + esc(e.message) + "</p>"; });
  }
  function renderBooking(b) {
    var h = '<div class="adm-booking" data-id="' + b.id + '">';
    h += '<div class="top"><span class="when">' + esc(fmtDate(b.booking_date)) + " · " + esc(b.booking_time) + "</span>";
    h += '<span class="adm-badge badge-' + b.status + '">' + esc(t("a_" + b.status) || b.status) + "</span></div>";
    h += '<div class="meta"><strong>' + esc(b.service_name) + "</strong> · " + esc(b.price) + " CHF</div>";
    h += '<div class="meta">' + esc(b.customer_firstname + " " + b.customer_lastname) + " · " + esc(b.customer_phone) + (b.customer_email ? " · " + esc(b.customer_email) : "") + "</div>";
    if (b.note) h += '<div class="meta">📝 ' + esc(b.note) + "</div>";
    h += '<div class="adm-actions">';
    h += '<button class="btn btn-primary" data-act="confirmed">' + esc(t("a_confirm")) + "</button>";
    h += '<button class="btn btn-outline" data-act="completed">' + esc(t("a_complete")) + "</button>";
    h += '<button class="btn btn-outline" data-act="cancelled">' + esc(t("a_cancel")) + "</button>";
    h += '<a class="btn btn-wa" href="' + waLink(b, "confirmation") + '" target="_blank" rel="noopener">' + esc(t("a_wa_conf")) + "</a>";
    h += '<a class="btn btn-wa" href="' + waLink(b, "reminder") + '" target="_blank" rel="noopener">' + esc(t("a_wa_rem")) + "</a>";
    h += '<a class="btn btn-outline" href="' + waLink(b, "cancellation") + '" target="_blank" rel="noopener">' + esc(t("a_wa_canc")) + "</a>";
    h += '<button class="btn btn-outline" data-resend="1">' + esc(t("a_resend")) + "</button>";
    h += "</div></div>";
    return h;
  }
  $("adm-bookings").addEventListener("click", function (e) {
    // Renvoyer l'email de confirmation
    var resend = e.target.closest("button[data-resend]");
    if (resend) {
      var rid = resend.closest(".adm-booking").dataset.id; resend.disabled = true;
      apiAdmin("/bookings/" + rid + "/resend-confirmation", { method: "POST" })
        .then(function (r) { alert(r.email && r.email.error ? r.email.error : t("a_resend_ok")); resend.disabled = false; })
        .catch(function (err) { alert(err.message); resend.disabled = false; });
      return;
    }
    var btn = e.target.closest("button[data-act]"); if (!btn) return;
    var id = btn.closest(".adm-booking").dataset.id; btn.disabled = true;
    apiAdmin("/bookings/" + id + "/status", { method: "PATCH", body: JSON.stringify({ status: btn.dataset.act }) })
      .then(function (r) {
        if (btn.dataset.act === "confirmed" && r && r.email) {
          alert(r.email.client || r.email.admin ? t("a_confirm_ok") : t("a_confirm_mail_fail") + (r.email.error ? " (" + r.email.error + ")" : ""));
        }
        loadBookings(); loadKpis();
      })
      .catch(function (err) { alert(err.message); btn.disabled = false; });
  });
  $("adm-reload-bookings").addEventListener("click", loadBookings);
  $("adm-filter").addEventListener("change", loadBookings);

  /* ---------- WORKING DAYS ---------- */
  var DAY_ORDER = [1, 2, 3, 4, 5, 6, 0];
  function loadDays() {
    apiAdmin("/availability").then(function (res) {
      var byDay = {}; (res.weekly || []).forEach(function (a) { byDay[a.weekday] = a; });
      $("adm-days").innerHTML = DAY_ORDER.map(function (n) {
        var a = byDay[n] || { start_time: "09:00", end_time: "18:00", is_working_day: false };
        return '<div class="adm-day" data-wd="' + n + '">' +
          '<label class="dl"><input type="checkbox" class="wd-on"' + (a.is_working_day ? " checked" : "") + "> " + esc(t("wd")[n]) + "</label>" +
          '<input type="time" class="wd-start" value="' + esc(a.start_time) + '">' +
          '<input type="time" class="wd-end" value="' + esc(a.end_time) + '">' +
          '<button class="btn btn-primary btn-sm wd-save">' + esc(t("a_save")) + "</button></div>";
      }).join("");
    }).catch(function () { $("adm-days").innerHTML = '<p class="adm-error">' + esc(t("a_load_fail")) + "</p>"; });
  }
  $("adm-days").addEventListener("click", function (e) {
    var btn = e.target.closest(".wd-save"); if (!btn) return;
    var row = btn.closest(".adm-day");
    var body = { weekday: parseInt(row.dataset.wd, 10), is_working_day: row.querySelector(".wd-on").checked, start_time: row.querySelector(".wd-start").value || "09:00", end_time: row.querySelector(".wd-end").value || "18:00" };
    btn.disabled = true; btn.textContent = "…";
    apiAdmin("/availability", { method: "POST", body: JSON.stringify(body) })
      .then(function () { btn.textContent = t("a_saved"); setTimeout(function () { btn.textContent = t("a_save"); btn.disabled = false; }, 1200); })
      .catch(function (err) { alert(err.message); btn.textContent = t("a_save"); btn.disabled = false; });
  });

  /* ---------- BLOCKED DAYS ---------- */
  function loadBlocked() {
    apiAdmin("/blocked-days").then(function (list) {
      $("adm-blocked").innerHTML = list.length ? list.map(function (b) {
        return '<div class="adm-booking" data-id="' + b.id + '" style="display:flex;justify-content:space-between;align-items:center;">' +
          "<span>" + esc(fmtDate(b.date)) + (b.reason ? " — " + esc(b.reason) : "") + "</span>" +
          '<button class="btn btn-outline btn-sm blk-del">' + esc(t("a_unblock")) + "</button></div>";
      }).join("") : '<p class="adm-msg">' + esc(t("a_no_blocked")) + "</p>";
    }).catch(function () { $("adm-blocked").innerHTML = '<p class="adm-error">' + esc(t("a_load_fail")) + "</p>"; });
  }
  $("adm-block-add").addEventListener("click", function () {
    var date = $("adm-block-date").value; if (!date) return;
    apiAdmin("/blocked-days", { method: "POST", body: JSON.stringify({ date: date, reason: $("adm-block-reason").value || null }) })
      .then(function () { $("adm-block-date").value = ""; $("adm-block-reason").value = ""; loadBlocked(); })
      .catch(function (err) { alert(err.message); });
  });
  $("adm-blocked").addEventListener("click", function (e) {
    var btn = e.target.closest(".blk-del"); if (!btn) return;
    var id = btn.closest("[data-id]").dataset.id;
    apiAdmin("/blocked-days/" + id, { method: "DELETE" }).then(loadBlocked).catch(function (err) { alert(err.message); });
  });

  /* ---------- CHANGE PASSWORD ---------- */
  $("adm-savepw").addEventListener("click", function () {
    var v = $("adm-newpw").value.trim(); var msg = $("adm-pw-msg");
    msg.className = ""; msg.textContent = "";
    if (v.length < 6) { msg.className = "adm-error"; msg.textContent = t("a_pw_short"); return; }
    apiAdmin("/admin/password", { method: "PATCH", body: JSON.stringify({ new_password: v }) })
      .then(function (b) { try { if (b.token) localStorage.setItem(TOKEN_KEY, b.token); } catch (e) {} $("adm-newpw").value = ""; msg.className = "adm-ok"; msg.textContent = t("a_pw_ok"); })
      .catch(function (err) { msg.className = "adm-error"; msg.textContent = err.message; });
  });

  /* ---------- TEMPLATES ---------- */
  function loadTemplates() {
    var lbl = { confirmation: t("a_tpl_conf"), reminder: t("a_tpl_rem"), cancellation: t("a_tpl_canc") };
    $("adm-templates").innerHTML = Object.keys(TEMPLATES).map(function (k) {
      return '<div class="adm-tmpl"><strong>' + esc(lbl[k]) + ":</strong> " + esc(TEMPLATES[k]) + "</div>";
    }).join("");
  }

  /* ---------- INIT ---------- */
  applyStatic();
  if (token()) doLogin(token()).catch(function () { /* token invalide : rester sur login */ });
})();
