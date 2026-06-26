/* =====================================================================
   BLOOM & GLOW — configuration API (centralisée)
   Local : http://localhost:4000/api
   Prod  : backend Railway
   ===================================================================== */
(function () {
  var isLocal = ["localhost", "127.0.0.1"].indexOf(window.location.hostname) !== -1;

  var PROD_API = "https://bloom-glow-backend-production.up.railway.app/api";

  window.BG_CONFIG = {
    API_BASE_URL: isLocal ? "http://localhost:4000/api" : PROD_API,
    WHATSAPP_URL: "https://wa.me/message/JRDZLUSUA52AF1",
    SHOP_URL: "https://bloomandglow.sumupstore.com/",
    // Clé PUBLIQUE Stripe (pk_test_... / pk_live_...). Vide = étape carte désactivée.
    STRIPE_PUBLISHABLE_KEY: "",
  };
})();
