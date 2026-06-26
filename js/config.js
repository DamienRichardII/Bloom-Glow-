/* =====================================================================
   BLOOM & GLOW — configuration API (centralisée)
   Local  : http://localhost:4000/api
   Prod   : URL du backend Railway (à remplacer ci-dessous).
   ===================================================================== */
(function () {
  var isLocal = ["localhost", "127.0.0.1"].indexOf(window.location.hostname) !== -1;

  // ⬇️ APRÈS DÉPLOIEMENT RAILWAY : remplacer cette URL par l'URL réelle du backend.
  var PROD_API = "https://A-REMPLACER-RAILWAY.up.railway.app/api";

  window.BG_CONFIG = {
    API_BASE_URL: isLocal ? "http://localhost:4000/api" : PROD_API,
    WHATSAPP_URL: "https://wa.me/message/JRDZLUSUA52AF1",
    SHOP_URL: "https://bloomandglow.sumupstore.com/",
    // Clé PUBLIQUE Stripe (pk_test_... / pk_live_...). Vide = étape carte désactivée.
    STRIPE_PUBLISHABLE_KEY: "",
  };
})();
