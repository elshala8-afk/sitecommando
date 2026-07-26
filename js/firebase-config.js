/* ============================================================
   CONFIGURATION FIREBASE — déjà remplie avec les valeurs
   de ton projet "site-commando-d5d33".
   ============================================================
   Ce fichier connecte le site à une base de données partagée,
   pour que tout ce que chacun rentre (recommandations, mots
   doux, musique du mois...) soit visible par toute la Commando,
   pas juste stocké dans le navigateur de la personne.
   ============================================================ */

const firebaseConfig = {
  apiKey: "AIzaSyA-4JWTt_vlizrmMGbWqbhrjVOizRt1Y0U",
  authDomain: "site-commando-d5d33.firebaseapp.com",
  projectId: "site-commando-d5d33",
  storageBucket: "site-commando-d5d33.firebasestorage.app",
  messagingSenderId: "982536935464",
  appId: "1:982536935464:web:829377b2b1fc5b062d3d1d",
  measurementId: "G-R009ZQX809"
};

let db = null;
let firebaseReady = false;

(function initFirebase(){
  if (firebaseConfig.apiKey === "REMPLACE_MOI") {
    console.info("ℹ️ Firebase non configuré — La Commando tourne en mode démo local.");
    return;
  }
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    firebaseReady = true;
    console.info("✅ Firebase connecté — les réponses sont partagées avec toute la Commando.");
  } catch (err) {
    console.warn("⚠️ Impossible de se connecter à Firebase, retour au mode démo local.", err);
  }
})();
