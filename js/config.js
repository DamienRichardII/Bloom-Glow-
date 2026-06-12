/* =====================================================================
   BLOOM & GLOW — configuration API (centralisée)
   En local : backend sur http://localhost:4000/api
   En prod  : remplacer par l'URL Railway du backend.
   ===================================================================== */
window.BG_CONFIG = {
  API_BASE_URL: "http://localhost:4000/api",
  WHATSAPP_URL: "https://wa.me/message/JRDZLUSUA52AF1",
  SHOP_URL: "https://bloomandglow.sumupstore.com/",
  // Cle PUBLIQUE Stripe (pk_test_... / pk_live_...). Laisser vide tant que non configuree :
  // l'etape "Kartenhinterlegung" s'active automatiquement une fois remplie.
  STRIPE_PUBLISHABLE_KEY: "",
};
