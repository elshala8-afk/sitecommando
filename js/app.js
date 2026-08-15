/* ============================================================
   LA COMMANDO — logique de l'app (rythme mensuel)
   ============================================================ */

const ICONS = {
  sun: `<circle cx="12" cy="12" r="4.4"/><path d="M12 2.5v3M12 18.5v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2.5 12h3M18.5 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>`,
  cloud: `<path d="M6.5 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1.8A4.2 4.2 0 0 1 17 18H6.5Z"/>`,
  rain: `<path d="M6.5 14a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1.8A4.2 4.2 0 0 1 17 14H6.5Z"/><path d="M8 18l-1 3M12.5 18l-1 3M17 18l-1 3"/>`,
  storm: `<path d="M6.5 12a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1.8A4.2 4.2 0 0 1 17 12H6.5Z"/><path d="M12.5 13l-3 5h3l-2 4"/>`,
  rainbow: `<path d="M3 18a9 9 0 0 1 18 0"/><path d="M6.5 18a5.5 5.5 0 0 1 11 0"/><path d="M10 18a2 2 0 0 1 4 0"/>`,
  book: `<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21V5.5Z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"/>`,
  film: `<rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="M8 4.5v15M16 4.5v15M3 9.5h5M16 9.5h5M3 14.5h5M16 14.5h5"/>`,
  recipe: `<path d="M6 3v6a3 3 0 0 0 6 0V3M9 9v12M17 3c-1.6 1.6-2 3.4-2 5.5 0 1.8 1 2.5 2 2.5s2-.7 2-2.5c0-2.1-.4-3.9-2-5.5ZM17 11v10"/>`,
  podcast: `<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M9 21h6"/>`,
  series: `<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M10 9.2v3.6l3-1.8-3-1.8Z"/>`,
  laugh: `<circle cx="12" cy="12" r="9"/><path d="M8 13.5c1 2 2.6 3 4 3s3-1 4-3"/><path d="M8.5 9.5h.01M15.5 9.5h.01"/>`,
  hug: `<path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M3 20c1-4 3.2-6 5.5-6M21 20c-1-4-3.2-6-5.5-6M8.5 14c1.2 1 2.3 1.4 3.5 1.4s2.3-.4 3.5-1.4"/>`,
  palm: `<path d="M12 21V10"/><path d="M12 10c-2-3-6-3.5-8-2 1.5 2.5 4.5 3.3 8 2ZM12 10c2-3 6-3.5 8-2-1.5 2.5-4.5 3.3-8 2ZM12 10c-.5-3-3-5-3-5s3 .5 4 3M12 10c.5-3 3-5 3-5s-3 .5-4 3"/>`,
  spa: `<path d="M12 21c4-1 6-4 6-8 0-3-2-5-2-5s0 2.5-2 4c0-3-2-6-2-6s-2 3-2 6c-2-1.5-2-4-2-4s-2 2-2 5c0 4 2 7 6 8Z"/>`,
  moon: `<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/>`,
  friends: `<circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M2 20c.7-3.4 2.8-5.5 6-5.5s5.3 2.1 6 5.5M10 20c.7-3.4 2.8-5.5 6-5.5s5.3 2.1 6 5.5"/>`,
  other: `<path d="M4 20l1-4.2L16.5 4.3a1.8 1.8 0 0 1 2.6 0l.6.6a1.8 1.8 0 0 1 0 2.6L8.2 19 4 20Z"/><path d="M14.5 6.3l3.2 3.2"/>`,
  camera: `<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="12" cy="12" r="3.4"/><path d="M8 5l1.5-2h5L16 5"/>`
};

const MOODS = [
  {id:'sun', label:'Ensoleillé', icon:'sun'},
  {id:'cloud', label:'Nuageux', icon:'cloud'},
  {id:'rain', label:'Pluvieux', icon:'rain'},
  {id:'storm', label:'Orageux', icon:'storm'},
  {id:'rainbow', label:'Arc-en-ciel', icon:'rainbow'}
];
const SHARES = [
  {id:'book', label:'Un livre', icon:'book', detailLabel:'Quel livre ?', detailPlaceholder:'Titre, autrice...'},
  {id:'film', label:'Un film', icon:'film', detailLabel:'Quel film ?', detailPlaceholder:'Titre...'},
  {id:'recipe', label:'Une recette', icon:'recipe', detailLabel:'Quelle recette ?', detailPlaceholder:'Le plat...'},
  {id:'podcast', label:'Un podcast', icon:'podcast', detailLabel:'Quel podcast ?', detailPlaceholder:'Nom, épisode...'},
  {id:'series', label:'Une série', icon:'series', detailLabel:'Quelle série ?', detailPlaceholder:'Titre...'},
  {id:'laugh', label:'Une blague', icon:'laugh', detailLabel:'Vas-y, raconte', detailPlaceholder:'On t\u2019écoute...'},
  {id:'other', label:'Autre', icon:'other', detailLabel:'Dis-nous en plus', detailPlaceholder:'Ce que tu veux partager...'}
];
const NEEDS = [
  {id:'hug', label:'Un câlin', icon:'hug'},
  {id:'palm', label:'Des vacances', icon:'palm'},
  {id:'spa', label:'Un spa', icon:'spa'},
  {id:'moon', label:'Me-time', icon:'moon'},
  {id:'friends', label:'Friends-time', icon:'friends'},
  {id:'other', label:'Autre', icon:'other'}
];
const CHARACTERS = [
  {id:'258', name:'Poisson-Lune',   asset:'char_258', active:true},
  {id:'259', name:'Petit Soleil',   asset:'char_259', active:true},
  {id:'260', name:'Mousse',         asset:'char_260', active:true},
  {id:'262', name:'Câline',         asset:'char_262', active:true},
  {id:'263', name:'Le Justicier',   asset:'char_263', active:true},
  {id:'264', name:'Boucles',        asset:'char_264', active:true},
  {id:'265', name:'Zen',            asset:'char_265', active:true},
  {id:'266', name:'Grand Sourire',  asset:'char_266', active:true},
  {id:'267', name:'Gourmand',       asset:'char_267', active:true},
  {id:'268', name:'Libellule',      asset:'char_268', active:true},
  {id:'269', name:'Fraise',         asset:'char_269', active:true}
];

const MOCK_ANSWERS = {
  '258': {name:'Tom',    mood:'sun',     note:7, song:'Le Grand Bleu — bande originale', share:['film','laugh'], shareDetails:{film:'Le Grand Bleu', laugh:'Un chat a glissé dans ma piscine gonflable.'}, need:['palm'], anecdote:'J\u2019ai failli louper le train pour venir ce week-end-là, in extremis sur le quai.'},
  '259': {name:'Léa',    mood:'rainbow', note:8, song:'https://open.spotify.com/track/7BNeFchpHDCWYSUV4hfU89', share:['podcast','film'], shareDetails:{podcast:'La Poudre', film:'La La Land'}, need:['friends','spa'], anecdote:'On a dansé sous la pluie jusqu\u2019à 2h, aucun regret.'},
  '260': {name:'Yanis',  mood:'cloud',   note:5, song:'Un mix lo-fi pour coder', share:['other'], shareDetails:{other:'Un jeu vidéo indé qui m\u2019obsède en ce moment'}, need:['spa'], anecdote:''},
  '262': {name:'Nour',   mood:'sun',     note:9, song:'Sa dernière découverte sur Spotify', share:['recipe','book'], shareDetails:{recipe:'Un taboulé qui change la vie', book:'Le Comte de Monte-Cristo'}, need:['hug','friends'], anecdote:'Premier apéro sur le toit de l\u2019immeuble, personne n\u2019a voulu redescendre.'},
  '263': {name:'Sacha',  mood:'storm',   note:4, song:'Une playlist "orage"', share:['laugh'], shareDetails:{laugh:'Pourquoi les plongeurs plongent toujours en arrière ? Parce que sinon ils tombent dans le bateau.'}, need:['other'], needOther:'Une bonne nuit de sommeil, pour de vrai', anecdote:''},
  '264': {name:'Camille',mood:'sun',     note:7, song:'Sa chanson de road-trip préférée', share:['book','series'], shareDetails:{book:'Le Petit Prince', series:'Fleabag'}, need:['moon'], anecdote:'Pique-nique improvisé sous les pins, on a oublié les couverts et mangé avec les doigts.'}
};

const state = {
  selectedCharacter: null,
  participantName: '',
  quizAnswers: { mood:null, note:null, song:'', share:[], shareDetails:{}, need:[], needOther:'', anecdote:'', events:'' },
  binome: null,
  playedGames: { blindtest:false, memory:false, quiz:false, imitation:false }
};
const messages = []; // notes d'amour envoyées pendant la session (repli local)

/* ============================================================
   PARTAGE ENTRE PARTICIPANTS (Firebase Firestore)
   ============================================================ */
let sharedParticipants = {};
let cloudMessagesCache = [];

function currentMonthTag(){
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
}
function assetForCharacterId(id){
  const c = CHARACTERS.find(ch=>ch.id===id);
  return c ? c.asset : 'char_258';
}
let participantsUnsub = null, messagesUnsub = null, configUnsub = null;
function attachRoomListeners(){
  if(typeof firebaseReady === 'undefined' || !firebaseReady || !db || !currentRoomId) return;
  // On coupe d'éventuels écouteurs d'une salle précédente (changement de salle
  // dans la même session) avant d'en attacher de nouveaux, propres à cette salle.
  if(participantsUnsub) participantsUnsub();
  if(messagesUnsub) messagesUnsub();
  if(configUnsub) configUnsub();
  participantsUnsub = watchParticipants();
  messagesUnsub = watchMessages();
  configUnsub = watchMonthlyConfig();
}
function watchParticipants(){
  if(typeof firebaseReady === 'undefined' || !firebaseReady || !db || !currentRoomId) return null;
  // Un seul critère de recherche Firestore (roomId) : pas besoin d'index
  // composé à créer manuellement. Le mois est filtré ensuite ici, dans le
  // navigateur — largement assez rapide pour la taille d'un groupe d'amis.
  return db.collection('participants')
    .where('roomId','==', currentRoomId)
    .onSnapshot(snapshot=>{
      const latest = {};
      const monthTag = currentMonthTag();
      snapshot.forEach(doc=>{
        const d = doc.data();
        if(d.month !== monthTag) return;
        const prev = latest[d.characterId];
        if(!prev || (d.timestamp && prev.timestamp && d.timestamp.toMillis() > prev.timestamp.toMillis())){
          latest[d.characterId] = d;
        }
      });
      sharedParticipants = latest;
      refreshLiveViews();
    }, err=>{ console.warn('Lecture Firestore (participants) impossible :', err); });
}
function watchMessages(){
  if(typeof firebaseReady === 'undefined' || !firebaseReady || !db || !currentRoomId) return null;
  return db.collection('messages')
    .where('roomId','==', currentRoomId)
    .onSnapshot(snapshot=>{
      const monthTag = currentMonthTag();
      cloudMessagesCache = snapshot.docs.map(d=>d.data()).filter(d=> d.month === monthTag);
    }, err=>{ console.warn('Lecture Firestore (messages) impossible :', err); });
}
function configDocId(){
  return currentRoomId ? `${currentRoomId}_monthly` : 'monthly';
}
function watchMonthlyConfig(){
  if(typeof firebaseReady === 'undefined' || !firebaseReady || !db || !currentRoomId) return null;
  return db.collection('config').doc(configDocId()).onSnapshot(doc=>{
    if(!doc.exists) return;
    const d = doc.data();
    if(d.crea) monthlyConfig.crea = d.crea;
    if(d.lettreBody) monthlyConfig.lettreBody = d.lettreBody;
    if(d.lettreQuote) monthlyConfig.lettreQuote = d.lettreQuote;
    monthlyConfig.lettreLinkText = d.lettreLinkText || null;
    monthlyConfig.lettreLinkUrl = d.lettreLinkUrl || null;
    let needsRefresh = false;
    if(d.characterNames){
      monthlyConfig.characterNames = d.characterNames;
      Object.entries(d.characterNames).forEach(([id,name])=>{
        const c = CHARACTERS.find(ch=>ch.id===id);
        if(c && name) c.name = name;
      });
      needsRefresh = true;
    }
    if(d.characterActive){
      monthlyConfig.characterActive = d.characterActive;
      Object.entries(d.characterActive).forEach(([id,isActive])=>{
        const c = CHARACTERS.find(ch=>ch.id===id);
        if(c) c.active = isActive;
      });
      needsRefresh = true;
    }
    if(d.characterDeleted){
      monthlyConfig.characterDeleted = d.characterDeleted;
      Object.entries(d.characterDeleted).forEach(([id,isDeleted])=>{
        const c = CHARACTERS.find(ch=>ch.id===id);
        if(c && isDeleted) c.deleted = true;
      });
      needsRefresh = true;
    }
    if(needsRefresh) refreshCharacterNameDisplays();
  }, err=>{ console.warn('Lecture Firestore (config) impossible :', err); });
}
function saveMonthlyConfigToCloud(){
  if(typeof firebaseReady === 'undefined' || !firebaseReady || !db || !currentRoomId) return;
  db.collection('config').doc(configDocId()).set({
    roomId: currentRoomId,
    crea: monthlyConfig.crea,
    lettreBody: monthlyConfig.lettreBody,
    lettreQuote: monthlyConfig.lettreQuote,
    lettreLinkText: monthlyConfig.lettreLinkText || null,
    lettreLinkUrl: monthlyConfig.lettreLinkUrl || null,
    characterNames: monthlyConfig.characterNames || {},
    characterActive: monthlyConfig.characterActive || {},
    characterDeleted: monthlyConfig.characterDeleted || {},
    adminKey: currentRoomAdminPassword // doit correspondre au mot de passe admin de CETTE salle
  }, {merge:true}).catch(err=> console.warn("Impossible d'enregistrer la config dans Firebase :", err));
}
function saveParticipantToCloud(){
  if(typeof firebaseReady === 'undefined' || !firebaseReady || !db || !state.selectedCharacter || !currentRoomId) return;
  db.collection('participants').add({
    roomId: currentRoomId,
    ownerId: getCurrentUid(),
    name: state.participantName,
    characterId: state.selectedCharacter.id,
    mood: state.quizAnswers.mood,
    note: state.quizAnswers.note,
    song: state.quizAnswers.song,
    share: state.quizAnswers.share,
    shareDetails: state.quizAnswers.shareDetails,
    need: state.quizAnswers.need,
    needOther: state.quizAnswers.needOther,
    anecdote: state.quizAnswers.anecdote,
    events: state.quizAnswers.events,
    month: currentMonthTag(),
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).catch(err=> console.warn("Impossible d'enregistrer tes réponses dans Firebase :", err));
}
function getAnswersFor(c, isYou){
  if(isYou){
    // Si le questionnaire de cette session est rempli, on l'affiche en priorité.
    if(state.quizAnswers.mood) return {name: state.participantName, ...state.quizAnswers};
    // Sinon (ex. retour sur le site après avoir déjà rejoint), on réaffiche
    // tes propres réponses déjà envoyées à Firebase.
    if(sharedParticipants[c.id]) return sharedParticipants[c.id];
    return {name: state.participantName, ...state.quizAnswers};
  }
  if(sharedParticipants[c.id]) return sharedParticipants[c.id];
  // En mode démo (pas de Firebase), on garde les exemples fictifs pour que
  // ce soit agréable à tester. Une fois Firebase branché, on affiche
  // seulement les vraies personnes qui ont rejoint ce mois-ci.
  if(typeof firebaseReady === 'undefined' || !firebaseReady) return MOCK_ANSWERS[c.id];
  return null;
}
function getAllAnswersMap(){
  const map = {};
  CHARACTERS.forEach(c=>{
    const isYou = state.selectedCharacter && c.id === state.selectedCharacter.id;
    const a = getAnswersFor(c, isYou);
    if(a) map[c.id] = a;
  });
  return map;
}
function refreshLiveViews(){
  if(document.getElementById('modal-recs')?.classList.contains('active')) buildRecsFeed();
  if(document.getElementById('modal-events')?.classList.contains('active')) buildEventsFeed();
  if(document.getElementById('modal-playlist')?.classList.contains('active')) renderPlaylist();
  if(document.getElementById('screen-dashboard')?.classList.contains('active')) buildDashCharacterGrid();
  updateCharacterAvailability();
}
function connectionBadgeText(){
  return (typeof firebaseReady !== 'undefined' && firebaseReady)
    ? '🟢 Connecté — les réponses sont partagées avec toute la Commando'
    : '⚪ Mode démo local — active Firebase (voir README) pour un vrai partage';
}


/* ---------- helpers ---------- */
function setIcon(svgEl, key){ svgEl.innerHTML = ICONS[key] || ''; }
function findMeta(list, id){ return list.find(x=>x.id===id); }
function shuffle(arr){ const a = arr.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

/* ---------- conversion de liens Spotify / YouTube en vrai lecteur embarqué ---------- */
function toEmbedInfo(link){
  if(!link) return null;
  const spotifyMatch = link.match(/open\.spotify\.com\/(?:intl-\w+\/)?track\/([a-zA-Z0-9]+)/);
  if(spotifyMatch){
    return { type:'spotify', embedUrl:`https://open.spotify.com/embed/track/${spotifyMatch[1]}`, height:152 };
  }
  const ytMatch = link.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{6,})/);
  if(ytMatch){
    return { type:'youtube', embedUrl:`https://www.youtube.com/embed/${ytMatch[1]}`, height:200 };
  }
  return null;
}
function renderEmbed(link){
  const info = toEmbedInfo(link);
  if(!info) return '';
  return `<div class="embed-wrap"><iframe src="${info.embedUrl}" height="${info.height}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>`;
}

/* ---------- fonds immersifs : rotation en fondu, sans parallax ---------- */
const BG_SEQUENCE = ['bg_12','bg_13','bg_0334','bg_22','bg_292'];
function initBgCycle(containerId, offset, interval){
  const container = document.getElementById(containerId);
  if(!container) return;
  const l1 = container.querySelector('.l1');
  const l2 = container.querySelector('.l2');
  const order = BG_SEQUENCE.slice(offset % BG_SEQUENCE.length).concat(BG_SEQUENCE.slice(0, offset % BG_SEQUENCE.length));
  let pos = 0;
  l1.style.backgroundImage = `url(${ASSETS[order[0]]})`;
  l1.classList.add('active');
  let currentIsL1 = true;
  setInterval(()=>{
    pos = (pos + 1) % order.length;
    const showLayer = currentIsL1 ? l2 : l1;
    const hideLayer = currentIsL1 ? l1 : l2;
    showLayer.style.backgroundImage = `url(${ASSETS[order[pos]]})`;
    showLayer.classList.add('active');
    hideLayer.classList.remove('active');
    currentIsL1 = !currentIsL1;
  }, interval);
}
[
  ['bgcycle-login',0], ['bgcycle-select',1], ['bgcycle-letter',2], ['bgcycle-quiz',3],
  ['bgcycle-dashboard',4], ['bgcycle-fiches',0], ['bgcycle-fiche-detail',1], ['bgcycle-binome',2], ['bgcycle-recs',3],
  ['bgcycle-crea',3], ['bgcycle-jouer',4], ['bgcycle-lettre',0], ['bgcycle-love',1], ['bgcycle-playlist',2],
  ['bgcycle-admin-gate',3], ['bgcycle-admin',4]
].forEach(([id,offset],i)=>{
  if(id === 'bgcycle-login'){
    // Le fond de l'écran de connexion doit être visible tout de suite.
    initBgCycle(id, offset, 8600 + i*160);
  } else {
    // Tous les autres fonds ne sont pas visibles au premier chargement —
    // on les charge un peu après, pour ne pas ralentir l'arrivée sur le site.
    // requestIdleCallback attend que le navigateur soit tranquille ; sur les
    // navigateurs qui ne le supportent pas (Safari), on utilise un délai.
    const start = () => initBgCycle(id, offset, 8600 + i*160);
    if('requestIdleCallback' in window){ requestIdleCallback(start, {timeout: 4000}); }
    else { setTimeout(start, 1200 + i*150); }
  }
});

/* ---------- navigation ---------- */
function goToScreen(id){
  document.querySelectorAll('.scene').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top:0, behavior:'instant'});
}
function openModal(id){ document.getElementById(id).classList.add('active'); }
function closeModal(id){ document.getElementById(id).classList.remove('active'); }

/* ============ LOGIN / SALLES ============ */
// Mode démo (pas de Firebase) : une seule salle virtuelle, comportement inchangé.
const DEMO_ACCESS_CODE = 'ETE2026';
const DEMO_ADMIN_PASSWORD = 'commando2026';

let currentRoomId = null;
let currentRoomAdminPassword = null;
let currentRoomName = null;

const loginForm = document.getElementById('login-form');
const accessInput = document.getElementById('access-code');
const loginError = document.getElementById('login-error');

// Cherche la salle correspondant au code tapé. Renvoie true si trouvée
// (et remplit currentRoomId / currentRoomAdminPassword), false sinon.
async function resolveRoomFromCode(code){
  if(typeof firebaseReady === 'undefined' || !firebaseReady || !db){
    if(code.toUpperCase() !== DEMO_ACCESS_CODE) return {found:false};
    currentRoomId = 'demo';
    currentRoomAdminPassword = DEMO_ADMIN_PASSWORD;
    currentRoomName = 'Démo';
    return {found:true};
  }
  try{
    const attempts = [code, code.toUpperCase(), code.toLowerCase()];
    let roomDoc = null;
    for(const attempt of attempts){
      const snap = await db.collection('rooms').where('accessCode','==', attempt).limit(1).get();
      if(!snap.empty){ roomDoc = snap.docs[0]; break; }
    }
    if(!roomDoc) return {found:false};
    currentRoomId = roomDoc.id;
    currentRoomAdminPassword = roomDoc.data().adminPassword;
    currentRoomName = roomDoc.data().name || roomDoc.id;
    return {found:true};
  }catch(err){
    console.warn('Recherche de salle impossible :', err);
    return {found:false, error: (err && err.code) ? err.code : String(err)};
  }
}

loginForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const code = accessInput.value.trim();
  if(code.length === 0){
    loginError.textContent = "Un petit code, et on t'ouvre la porte.";
    loginError.classList.add('show');
    return;
  }
  const submitBtn = loginForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  const result = await resolveRoomFromCode(code);
  submitBtn.disabled = false;
  if(!result.found){
    loginError.textContent = result.error
      ? `Ce code ne correspond à aucune invitation — essaie encore. (détail technique : ${result.error})`
      : "Ce code ne correspond à aucune invitation — essaie encore.";
    loginError.classList.add('show');
    return;
  }
  loginError.classList.remove('show');
  // Une fois la salle connue, on s'assure que les données affichées lui
  // correspondent (les écouteurs Firestore sont ré-attachés pour cette salle).
  attachRoomListeners();
  if(await tryRestoreSession()) return; // tu avais déjà rejoint : direct sur ton dashboard
  buildCharacterGrid(); // les images des personnages ne se chargent qu'à ce moment-là
  updateCharacterAvailability();
  goToScreen('screen-select');
});

/* ============ CHOIX DU PERSONNAGE ============ */
const characterGrid = document.getElementById('character-grid');
let characterGridBuilt = false;
// Ces 4 personnages sont affichés 50% plus grands que les autres partout
// où ils apparaissent (voir la classe CSS .char-large dans style.css).
const LARGE_CHARACTERS = ['266','267','268','269'];
function charImgClass(id){ return LARGE_CHARACTERS.includes(id) ? ' char-large' : ''; }

function buildCharacterGrid(){
  characterGridBuilt = true;
  characterGrid.innerHTML = '';
  CHARACTERS.forEach(c=>{
    if(c.deleted || c.active === false) return;
    const btn = document.createElement('button');
    btn.className = 'character';
    btn.type = 'button';
    btn.dataset.id = c.id;
    btn.innerHTML = `<img class="${charImgClass(c.id).trim()}" src="${ASSETS[c.asset]}" alt="${c.name}"><span class="name">${c.name}</span>`;
    btn.addEventListener('click', ()=> chooseCharacter(c));
    characterGrid.appendChild(btn);
  });
}
function updateCharacterAvailability(){
  const allButtons = document.querySelectorAll('#character-grid .character');
  if(typeof firebaseReady === 'undefined' || !firebaseReady || !db) return; // en mode démo, tous les personnages restent proposés
  allButtons.forEach(btn=>{
    try{
      const id = btn.dataset.id;
      const c = CHARACTERS.find(ch=>ch.id===id);
      const taken = !!sharedParticipants[id];
      btn.classList.toggle('taken', taken);
      btn.disabled = taken;
      // Style forcé directement en ligne : gagne toujours sur n'importe quelle
      // règle CSS externe, même en cas de conflit de priorité imprévu.
      if(taken){
        btn.style.setProperty('opacity', '0.4', 'important');
        btn.style.setProperty('filter', 'grayscale(0.8)', 'important');
        btn.style.setProperty('pointer-events', 'none', 'important');
      } else {
        btn.style.removeProperty('opacity');
        btn.style.removeProperty('filter');
        btn.style.removeProperty('pointer-events');
      }
      const nameEl = btn.querySelector('.name');
      if(nameEl && c) nameEl.textContent = taken ? `${c.name} · pris` : c.name;
    }catch(e){ console.warn('updateCharacterAvailability, personnage', btn.dataset.id, ':', e); }
  });
}
function chooseCharacter(c){
  if(sharedParticipants[c.id]) return; // déjà pris — les personnes déjà inscrites utilisent "Retrouver mon espace"
  state.selectedCharacter = c;
  const uid = typeof getCurrentUid === 'function' ? getCurrentUid() : null;
  if(uid){
    // Déjà connecté·e (nouveau mois, compte déjà créé les mois précédents) —
    // pas besoin de repasser par la création de compte, direct au questionnaire.
    if(typeof auth !== 'undefined' && auth && auth.currentUser && auth.currentUser.displayName){
      state.participantName = auth.currentUser.displayName;
    }
    document.getElementById('love-name').value = state.participantName || '';
    document.getElementById('quiz-submit').textContent = 'Rejoindre la Commando →';
    goToScreen('screen-quiz');
    return;
  }
  document.querySelectorAll('#character-grid .character').forEach(el=>{
    if(el.dataset.id === c.id){ el.classList.add('chosen'); } else { el.classList.add('fade-out'); }
  });
  document.getElementById('letter-name').textContent = c.name;
  setTimeout(()=>{ openModal('modal-letter'); }, 650);
}

/* ---------- identifiant technique (email fictif) à partir du prénom ---------- */
function fakeEmailFor(prenom){
  const slug = prenom.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/g,'');
  return (slug || 'participant') + '@commando.local';
}

function checkLetterFormValid(){
  const name = document.getElementById('letter-participant-name').value.trim();
  const pass = document.getElementById('letter-participant-password').value;
  document.getElementById('letter-continue').disabled = !(name.length > 0 && pass.length >= 6);
}
document.getElementById('letter-participant-name').addEventListener('input', checkLetterFormValid);
document.getElementById('letter-participant-password').addEventListener('input', checkLetterFormValid);

document.getElementById('letter-continue').addEventListener('click', async ()=>{
  const name = document.getElementById('letter-participant-name').value.trim();
  const password = document.getElementById('letter-participant-password').value;
  const errorEl = document.getElementById('letter-error');
  errorEl.classList.remove('show');

  if(typeof authReady !== 'undefined' && authReady){
    try{
      const cred = await auth.createUserWithEmailAndPassword(fakeEmailFor(name), password);
      if(cred && cred.user && cred.user.updateProfile){
        try{ await cred.user.updateProfile({displayName: name}); }catch(e){ console.warn('Nom non enregistré sur le compte :', e); }
      }
    }catch(err){
      console.warn(err);
      if(err.code === 'auth/email-already-in-use'){
        errorEl.textContent = "Ce prénom a déjà un compte. Si c'est le tien, utilise \"Déjà inscrit·e ?\" sur l'écran de connexion. Si vous êtes deux à porter ce prénom dans la Commando, ajoute une précision (ex. \"Charlotte B\") et réessaie.";
      } else if(err.code === 'auth/weak-password'){
        errorEl.textContent = 'Ton mot de passe doit faire au moins 6 caractères.';
      } else {
        errorEl.textContent = "Impossible de créer ton espace pour le moment.";
      }
      errorEl.classList.add('show');
      return;
    }
  }

  state.participantName = name;
  document.getElementById('love-name').value = state.participantName;
  document.getElementById('quiz-submit').textContent = 'Rejoindre la Commando →';
  closeModal('modal-letter');
  goToScreen('screen-quiz');
});

/* ============ SE CONNECTER (retrouver son espace depuis un autre appareil) ============ */
function getCurrentUid(){
  return (typeof authReady !== 'undefined' && authReady && auth && auth.currentUser) ? auth.currentUser.uid : null;
}
function findOwnParticipant(uid){
  for(const [charId, data] of Object.entries(sharedParticipants)){
    if(data && data.ownerId === uid) return { charId, data };
  }
  return null;
}
// Vérification directe (une seule requête, sans dépendre de l'écoute en
// direct) — utile en dernier recours si la connexion est lente et que les
// données n'ont pas encore eu le temps d'arriver via l'écoute habituelle.
async function findOwnParticipantDirect(uid){
  if(typeof firebaseReady === 'undefined' || !firebaseReady || !db || !currentRoomId) return null;
  try{
    const snap = await db.collection('participants').where('ownerId','==', uid).get();
    const monthTag = currentMonthTag();
    let best = null;
    snap.forEach(doc=>{
      const d = doc.data();
      if(d.roomId !== currentRoomId || d.month !== monthTag) return;
      if(!best || (d.timestamp && best.timestamp && d.timestamp.toMillis() > best.timestamp.toMillis())){
        best = d;
      }
    });
    return best ? { charId: best.characterId, data: best } : null;
  }catch(e){ console.warn('findOwnParticipantDirect :', e); return null; }
}
async function tryRestoreSession(){
  const uid = getCurrentUid();
  if(!uid) return false;
  let found = findOwnParticipant(uid);
  if(!found) found = await findOwnParticipantDirect(uid);
  if(!found) return false;
  const c = CHARACTERS.find(ch => ch.id === found.charId);
  if(!c) return false;
  state.selectedCharacter = c;
  state.participantName = found.data.name;
  document.getElementById('love-name').value = found.data.name;
  initDashboard();
  goToScreen('screen-dashboard');
  return true;
}
document.getElementById('open-signin').addEventListener('click', ()=>{
  document.getElementById('signin-room-code').value = accessInput.value.trim().toUpperCase(); // pré-rempli si déjà tapé
  document.getElementById('signin-name').value = '';
  document.getElementById('signin-password').value = '';
  document.getElementById('signin-error').classList.remove('show');
  openModal('modal-signin');
});
document.getElementById('signin-close').addEventListener('click', ()=> closeModal('modal-signin'));
document.getElementById('signin-submit').addEventListener('click', async ()=>{
  const code = document.getElementById('signin-room-code').value.trim();
  const name = document.getElementById('signin-name').value.trim();
  const password = document.getElementById('signin-password').value;
  const errorEl = document.getElementById('signin-error');
  errorEl.classList.remove('show');
  if(!code || !name || !password){
    errorEl.textContent = 'Renseigne le code de ta salle, ton prénom et ton mot de passe.';
    errorEl.classList.add('show');
    return;
  }
  const submitBtn = document.getElementById('signin-submit');
  submitBtn.disabled = true;
  const foundRoom = await resolveRoomFromCode(code);
  submitBtn.disabled = false;
  if(!foundRoom.found){
    errorEl.textContent = "Ce code ne correspond à aucune salle — vérifie-le avant de te reconnecter.";
    errorEl.classList.add('show');
    return;
  }
  if(typeof authReady === 'undefined' || !authReady){
    errorEl.textContent = "La connexion par mot de passe n'est pas disponible en mode démo local.";
    errorEl.classList.add('show');
    return;
  }
  try{
    const cred = await auth.signInWithEmailAndPassword(fakeEmailFor(name), password);
    attachRoomListeners();
    closeModal('modal-signin');
    let attempts = 0;
    const tryFind = async () => {
      const found = findOwnParticipant(cred.user.uid);
      if(found){
        const c = CHARACTERS.find(ch => ch.id === found.charId);
        if(c){
          state.selectedCharacter = c;
          state.participantName = found.data.name;
          document.getElementById('love-name').value = found.data.name;
          initDashboard();
          goToScreen('screen-dashboard');
          return;
        }
      }
      attempts++;
      if(attempts < 12){ setTimeout(tryFind, 300); }
      else {
        // Dernier recours : une vraie requête Firestore directe, au cas où
        // l'écoute en direct n'aurait pas encore reçu les données (connexion
        // lente) — plus fiable que d'abandonner après seulement 3,6 secondes.
        const directFound = await findOwnParticipantDirect(cred.user.uid);
        if(directFound){
          const c = CHARACTERS.find(ch => ch.id === directFound.charId);
          if(c){
            state.selectedCharacter = c;
            state.participantName = directFound.data.name;
            document.getElementById('love-name').value = directFound.data.name;
            initDashboard();
            goToScreen('screen-dashboard');
            return;
          }
        }
        alert("Tu es connecté·e ! Tu n'as pas encore répondu pour ce mois-ci — choisis ton personnage pour rejoindre.");
        if(!characterGridBuilt) buildCharacterGrid();
        goToScreen('screen-select');
      }
    };
    tryFind();
  }catch(err){
    console.warn(err);
    if(err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential' || err.code === 'auth/invalid-login-credentials'){
      errorEl.textContent = 'Mot de passe incorrect.';
    } else if(err.code === 'auth/user-not-found'){
      errorEl.textContent = "Aucun compte trouvé avec ce prénom — vérifie l'orthographe, ou inscris-toi d'abord.";
    } else {
      errorEl.textContent = 'Connexion impossible pour le moment.';
    }
    errorEl.classList.add('show');
  }
});

/* ============ QUESTIONNAIRE MENSUEL ============ */
function buildMoodGrid(){
  const container = document.getElementById('mood-options');
  container.innerHTML = '';
  MOODS.forEach(item=>{
    const opt = document.createElement('button');
    opt.type = 'button'; opt.className = 'option'; opt.dataset.id = item.id;
    opt.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${ICONS[item.icon]}</svg><span>${item.label}</span>`;
    opt.addEventListener('click', ()=>{
      container.querySelectorAll('.option').forEach(o=>o.classList.remove('picked'));
      opt.classList.add('picked');
      state.quizAnswers.mood = item.id;
    });
    container.appendChild(opt);
  });
}
function buildNoteRow(){
  const container = document.getElementById('note-options');
  container.innerHTML = '';
  for(let n=1; n<=10; n++){
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'note-btn'; btn.textContent = n;
    btn.addEventListener('click', ()=>{
      container.querySelectorAll('.note-btn').forEach(b=>b.classList.remove('picked'));
      btn.classList.add('picked');
      state.quizAnswers.note = n;
    });
    container.appendChild(btn);
  }
}
function buildShareGrid(){
  const container = document.getElementById('share-options');
  container.innerHTML = '';
  SHARES.forEach(item=>{
    const opt = document.createElement('button');
    opt.type = 'button'; opt.className = 'option'; opt.dataset.id = item.id;
    opt.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${ICONS[item.icon]}</svg><span>${item.label}</span>`;
    opt.addEventListener('click', ()=>{
      const idx = state.quizAnswers.share.indexOf(item.id);
      if(idx > -1){ state.quizAnswers.share.splice(idx,1); opt.classList.remove('picked'); delete state.quizAnswers.shareDetails[item.id]; }
      else { state.quizAnswers.share.push(item.id); opt.classList.add('picked'); }
      syncShareDetails();
    });
    container.appendChild(opt);
  });
}
function syncShareDetails(){
  const container = document.getElementById('share-details');
  const picked = state.quizAnswers.share;
  Array.from(container.children).forEach(row=>{ if(!picked.includes(row.dataset.key)) row.remove(); });
  picked.forEach(id=>{
    if(container.querySelector(`[data-key="${id}"]`)) return;
    const meta = findMeta(SHARES, id);
    if(!meta) return;
    const row = document.createElement('div');
    row.className = 'detail-row'; row.dataset.key = id;
    row.innerHTML = `<label>${meta.detailLabel}</label>`;
    const input = document.createElement('input');
    input.type = 'text'; input.placeholder = meta.detailPlaceholder || '';
    input.value = state.quizAnswers.shareDetails[id] || '';
    input.addEventListener('input', ()=>{ state.quizAnswers.shareDetails[id] = input.value; });
    row.appendChild(input);
    container.appendChild(row);
  });
}
function buildNeedGrid(){
  const container = document.getElementById('need-options');
  const otherField = document.getElementById('need-other-field');
  container.innerHTML = '';
  NEEDS.forEach(item=>{
    const opt = document.createElement('button');
    opt.type = 'button'; opt.className = 'option'; opt.dataset.id = item.id;
    opt.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${ICONS[item.icon]}</svg><span>${item.label}</span>`;
    opt.addEventListener('click', ()=>{
      const idx = state.quizAnswers.need.indexOf(item.id);
      if(idx > -1){ state.quizAnswers.need.splice(idx,1); opt.classList.remove('picked'); }
      else { state.quizAnswers.need.push(item.id); opt.classList.add('picked'); }
      const otherPicked = state.quizAnswers.need.includes('other');
      otherField.style.display = otherPicked ? 'block' : 'none';
      if(!otherPicked){ otherField.value=''; state.quizAnswers.needOther=''; }
    });
    container.appendChild(opt);
  });
  otherField.addEventListener('input', ()=>{ state.quizAnswers.needOther = otherField.value; });
}
buildMoodGrid(); buildNoteRow(); buildShareGrid(); buildNeedGrid();

/* ============ MODIFIER MES RÉPONSES (fiche modifiable) ============ */
function prefillQuizForm(){
  const qa = state.quizAnswers;
  document.querySelectorAll('#mood-options .option').forEach(opt=>{
    opt.classList.toggle('picked', opt.dataset.id === qa.mood);
  });
  document.querySelectorAll('#note-options .note-btn').forEach(btn=>{
    btn.classList.toggle('picked', parseInt(btn.textContent, 10) === qa.note);
  });
  document.getElementById('song-of-month').value = qa.song || '';
  document.querySelectorAll('#share-options .option').forEach(opt=>{
    opt.classList.toggle('picked', qa.share.includes(opt.dataset.id));
  });
  syncShareDetails();
  Object.entries(qa.shareDetails || {}).forEach(([key,val])=>{
    const input = document.querySelector(`#share-details [data-key="${key}"] input`);
    if(input) input.value = val;
  });
  document.querySelectorAll('#need-options .option').forEach(opt=>{
    opt.classList.toggle('picked', qa.need.includes(opt.dataset.id));
  });
  const otherField = document.getElementById('need-other-field');
  const hasOther = qa.need.includes('other');
  otherField.style.display = hasOther ? 'block' : 'none';
  otherField.value = qa.needOther || '';
  document.getElementById('anecdote-text').value = qa.anecdote || '';
  document.getElementById('events-text').value = qa.events || '';
}
document.getElementById('edit-answers').addEventListener('click', ()=>{
  prefillQuizForm();
  document.getElementById('quiz-submit').textContent = 'Enregistrer mes changements →';
  goToScreen('screen-quiz');
});
// Les écouteurs Firestore (participants, messages, config) ne démarrent
// qu'une fois la salle connue — voir attachRoomListeners(), appelée après
// une connexion réussie ou une session restaurée.

document.getElementById('quiz-submit').addEventListener('click', ()=>{
  if(!state.quizAnswers.mood || !state.quizAnswers.note){
    alert('Choisis au moins ta météo et ta note avant de continuer 🙂');
    return;
  }
  state.quizAnswers.song = document.getElementById('song-of-month').value.trim();
  state.quizAnswers.anecdote = document.getElementById('anecdote-text').value.trim();
  state.quizAnswers.events = document.getElementById('events-text').value.trim();
  saveParticipantToCloud();
  initDashboard();
  goToScreen('screen-dashboard');
});

/* ============ CHANGER D'IDENTITÉ (déconnexion) ============ */
document.getElementById('switch-identity').addEventListener('click', async ()=>{
  if(!confirm("Se déconnecter sur ce navigateur ? (utile si plusieurs personnes partagent le même appareil)")) return;
  if(typeof authReady !== 'undefined' && authReady){
    try{ await auth.signOut(); }catch(e){ console.warn(e); }
  }
  state.selectedCharacter = null;
  state.participantName = '';
  state.quizAnswers = { mood:null, note:null, song:'', share:[], shareDetails:{}, need:[], needOther:'', anecdote:'' };
  goToScreen('screen-select');
  updateCharacterAvailability();
});

/* ============ DASHBOARD ============ */
let currentWeekGame = 'blindtest';
function initDashboard(){
  document.getElementById('dash-avatar').src = ASSETS[state.selectedCharacter.asset];
  document.getElementById('dash-avatar').alt = state.selectedCharacter.name;
  document.getElementById('dash-name').textContent = state.participantName;
  const weekNum = Math.min(4, Math.ceil(new Date().getDate() / 7));
  document.getElementById('badge-week-num').textContent = weekNum;
  currentWeekGame = ['blindtest','memory','quiz','imitation'][weekNum-1];
  const badgeEl = document.getElementById('connection-badge');
  if(badgeEl) badgeEl.textContent = connectionBadgeText();
  buildDashCharacterGrid();
  renderDashLeaderboard();
}

/* ============ PERSONNAGES SUR L'ÉCRAN PRINCIPAL ============ */
function buildDashCharacterGrid(){
  const wrap = document.getElementById('dash-character-grid');
  wrap.innerHTML = '';
  CHARACTERS.forEach(c=>{
    const isYou = state.selectedCharacter && c.id === state.selectedCharacter.id;
    const answers = getAnswersFor(c, isYou);
    if(!isYou && !answers) return; // personne n'a encore rejoint avec ce personnage ce mois-ci
    const btn = document.createElement('button');
    btn.className = 'character';
    btn.innerHTML = `<img class="${charImgClass(c.id).trim()}" src="${ASSETS[c.asset]}" alt="${c.name}"><span class="name">${c.name}</span>${isYou ? '<span class="you-badge">C\'est toi</span>' : ''}`;
    btn.addEventListener('click', ()=> openFicheDetail(c, isYou));
    wrap.appendChild(btn);
  });
}
function renderChips(containerEl, ids, metaList, detailsObj, otherText){
  containerEl.innerHTML = '';
  if(!ids || ids.length === 0){ containerEl.textContent = '—'; return; }
  ids.forEach(id=>{
    const meta = findMeta(metaList, id);
    if(!meta) return;
    const chip = document.createElement('span');
    chip.className = 'fiche-chip';
    let detail = '';
    if(id === 'other' && otherText) detail = otherText;
    else if(detailsObj && detailsObj[id]) detail = detailsObj[id];
    chip.innerHTML = detail ? `${meta.label}<em>${detail}</em>` : meta.label;
    containerEl.appendChild(chip);
  });
}
function openFicheDetail(c, isYou){
  const answers = getAnswersFor(c, isYou);
  const moodMeta = findMeta(MOODS, answers.mood);
  document.getElementById('fiche-img').src = ASSETS[c.asset];
  document.getElementById('fiche-img').alt = c.name;
  document.getElementById('fiche-img').className = charImgClass(c.id).trim();
  document.getElementById('fiche-name').textContent = c.name;
  document.getElementById('fiche-tag').textContent = isYou ? `Ta fiche · ${answers.name}` : `${answers.name} · La Commando`;
  setIcon(document.getElementById('fiche-mood-icon'), moodMeta ? moodMeta.icon : 'sun');
  document.getElementById('fiche-mood-val').textContent = `${moodMeta ? moodMeta.label : '—'} · ${answers.note}/10`;
  document.getElementById('fiche-song-val').textContent = answers.song ? answers.song : '—';
  renderChips(document.getElementById('fiche-share-val'), answers.share, SHARES, answers.shareDetails, answers.shareDetails ? answers.shareDetails.other : '');
  renderChips(document.getElementById('fiche-need-val'), answers.need, NEEDS, null, answers.needOther);

  const anecdoteRow = document.getElementById('fiche-anecdote-row');
  const anecdoteText = answers.anecdote || (isYou ? answers.anecdote : '');
  if(!anecdoteText){
    anecdoteRow.style.display = 'none';
  } else {
    anecdoteRow.style.display = '';
    document.getElementById('fiche-anecdote-val').textContent = anecdoteText;
  }

  openModal('modal-fiche-detail');
}
document.getElementById('fiche-detail-close').addEventListener('click', ()=> closeModal('modal-fiche-detail'));

/* ============ RECOMMANDATIONS MÉLANGÉES ============ */
document.getElementById('open-recs').addEventListener('click', ()=>{
  buildRecsFeed();
  openModal('modal-recs');
});
document.getElementById('recs-close').addEventListener('click', ()=> closeModal('modal-recs'));
const NAME_COLORS = ['#D9603A','#2D8B8E','#4A3B5C','#256F71','#A6473C','#8B5E34','#6B7F3E','#B0447A'];
function colorForName(name){
  let hash = 0;
  for(let i=0;i<name.length;i++){ hash = name.charCodeAt(i) + ((hash << 5) - hash); }
  return NAME_COLORS[Math.abs(hash) % NAME_COLORS.length];
}
function buildRecsFeed(){
  const wrap = document.getElementById('recs-feed');
  const items = [];
  Object.values(getAllAnswersMap()).forEach(a=>{
    (a.share||[]).forEach(sid=>{
      const meta = findMeta(SHARES, sid);
      if(!meta) return;
      const detail = a.shareDetails ? a.shareDetails[sid] : null;
      items.push({name:a.name, catId:sid, label:meta.label, icon:meta.icon, detail});
    });
  });
  wrap.innerHTML = '';
  if(items.length === 0){ wrap.innerHTML = '<div class="recs-feed-empty">Personne n\u2019a encore partagé de recommandation.</div>'; return; }
  const CATEGORY_TITLES = {book:'Livres', film:'Films', recipe:'Recettes', podcast:'Podcasts', series:'Séries', laugh:'Blagues', other:'Autre'};
  SHARES.forEach(meta=>{
    const catItems = shuffle(items.filter(it=>it.catId===meta.id));
    if(catItems.length === 0) return;
    const catDiv = document.createElement('div');
    catDiv.className = 'recs-cat';
    const catLabel = CATEGORY_TITLES[meta.id] || meta.label;
    catDiv.innerHTML = `<div class="recs-cat-title"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${ICONS[meta.icon]}</svg>${catLabel}</div><div class="recs-cat-items"></div>`;
    const itemsWrap = catDiv.querySelector('.recs-cat-items');
    catItems.forEach(it=>{
      const div = document.createElement('div');
      div.className = 'recs-feed-item';
      div.innerHTML = `<strong style="color:${colorForName(it.name)};">${it.name}</strong>${it.detail ? ' — <em>'+it.detail+'</em>' : ''}`;
      itemsWrap.appendChild(div);
    });
    wrap.appendChild(catDiv);
  });
}

document.getElementById('open-events').addEventListener('click', ()=>{
  buildEventsFeed();
  openModal('modal-events');
});
document.getElementById('events-close').addEventListener('click', ()=> closeModal('modal-events'));
function buildEventsFeed(){
  const wrap = document.getElementById('events-feed');
  const entries = [];
  Object.values(getAllAnswersMap()).forEach(a=>{
    if(a.events && a.events.trim()) entries.push({name:a.name, text:a.events.trim()});
  });
  wrap.innerHTML = '';
  if(entries.length === 0){ wrap.innerHTML = '<div class="recs-feed-empty">Personne n\u2019a encore partagé ses événements du mois.</div>'; return; }
  shuffle(entries).forEach(it=>{
    const div = document.createElement('div');
    div.className = 'recs-feed-item';
    div.innerHTML = `<strong style="color:${colorForName(it.name)};">${it.name}</strong> — ${it.text}`;
    wrap.appendChild(div);
  });
}

/* ============ CLASSEMENT SUR L'ÉCRAN PRINCIPAL (format discret) ============ */
function renderDashLeaderboard(){
  const wrap = document.getElementById('dash-leaderboard');
  if(!wrap) return;
  wrap.innerHTML = '';
  const gameLabels = {blindtest:'· blind test', memory:'· mémoire', quiz:'· quiz boomeuse', imitation:'· imitation'};
  const labelEl = document.getElementById('dash-game-label');
  if(labelEl) labelEl.textContent = gameLabels[currentWeekGame] || '';
  let list = [];
  if(currentWeekGame === 'blindtest'){
    list = BLINDTEST_LEADERBOARD.slice().sort((a,b)=>a.seconds-b.seconds).map(e=>({...e, display:`${e.seconds}s`}));
  } else if(currentWeekGame === 'memory'){
    list = MEMORY_LEADERBOARD.slice().sort((a,b)=> a.moves-b.moves || a.seconds-b.seconds).map(e=>({...e, display:`${e.moves} coups`}));
  } else if(currentWeekGame === 'quiz'){
    list = QUIZ_LEADERBOARD.slice().sort((a,b)=> b.score-a.score || a.seconds-b.seconds).map(e=>({...e, display:`${e.score}/6`}));
  } else if(currentWeekGame === 'imitation'){
    list = IMITATIONS.slice().sort((a,b)=>b.votes-a.votes).map(e=>({...e, display:`${e.votes}♥`}));
  }
  if(list.length === 0){ wrap.innerHTML = '<span class="dash-lb-empty">Personne n\u2019a encore joué cette semaine.</span>'; return; }
  const medals = ['🥇','🥈','🥉'];
  list.slice(0,3).forEach((entry,i)=>{
    const chip = document.createElement('span');
    chip.className = 'dash-lb-chip';
    chip.innerHTML = `<span class="rk">${medals[i]}</span><img src="${ASSETS[entry.asset]}" alt=""><span class="nm">${entry.name}</span><span class="tm">${entry.display}</span>`;
    wrap.appendChild(chip);
  });
}

/* ============ BINÔME DU MOIS ============ */
const BINOME_IDEAS = [
  {label:'Appel de 10 min', text:'Appelez-vous 10 minutes cette semaine, sans raison particulière.'},
  {label:'Recommandation croisée', text:'Chacun recommande un livre, un film ou une chanson à l\u2019autre.'},
  {label:'Photo du jour', text:'Envoyez-vous chaque jour une photo de quelque chose qui vous a marqué.'},
  {label:'Café virtuel', text:'Un "coffee chat" en visio, café en main, 15 minutes.'},
  {label:'Défi cuisine', text:'Cuisinez la même recette chacun de votre côté, comparez le résultat.'},
  {label:'Souvenir commun', text:'Racontez-vous chacun un souvenir que vous partagez, avec un détail que l\u2019autre a oublié.'}
];
document.getElementById('open-binome').addEventListener('click', ()=>{
  updateBinomeDisplay();
  openModal('modal-binome');
});
document.getElementById('binome-close').addEventListener('click', ()=> closeModal('modal-binome'));
function renderBinomeIdeas(){
  const titleEl = document.getElementById('binome-ideas-title');
  const wrap = document.getElementById('binome-ideas');
  if(!state.binome){ titleEl.style.display='none'; wrap.style.display='none'; return; }
  titleEl.style.display = ''; wrap.style.display = '';
  wrap.innerHTML = '';
  shuffle(BINOME_IDEAS).slice(0,4).forEach(idea=>{
    const row = document.createElement('div');
    row.className = 'info-row';
    row.innerHTML = `<strong>${idea.label}</strong><span>${idea.text}</span>`;
    wrap.appendChild(row);
  });
}
function updateBinomeDisplay(){
  const spinBtn = document.getElementById('roulette-spin');
  if(state.binome){
    document.getElementById('roulette-img').src = ASSETS[state.binome.asset];
    document.getElementById('roulette-img').style.opacity = 1;
    document.getElementById('roulette-result').textContent = state.binome.name;
    document.getElementById('roulette-sub').textContent = 'Ton binôme, fixé pour tout le mois 💛';
    spinBtn.style.display = 'none';
  } else {
    document.getElementById('roulette-img').src = ASSETS[CHARACTERS[0].asset];
    document.getElementById('roulette-img').style.opacity = .3;
    document.getElementById('roulette-result').textContent = '?';
    document.getElementById('roulette-sub').textContent = 'Pas encore tiré ce mois-ci';
    spinBtn.style.display = '';
  }
  renderBinomeIdeas();
}
document.getElementById('roulette-spin').addEventListener('click', ()=>{
  const pool = CHARACTERS.filter(c => !state.selectedCharacter || c.id !== state.selectedCharacter.id);
  const btn = document.getElementById('roulette-spin');
  const img = document.getElementById('roulette-img');
  img.style.opacity = 1;
  btn.disabled = true;
  let spins = 0;
  const maxSpins = 18;
  const interval = setInterval(()=>{
    const random = pool[Math.floor(Math.random()*pool.length)];
    img.src = ASSETS[random.asset];
    document.getElementById('roulette-result').textContent = random.name;
    spins++;
    if(spins >= maxSpins){
      clearInterval(interval);
      const chosen = pool[Math.floor(Math.random()*pool.length)];
      state.binome = chosen;
      updateBinomeDisplay();
      btn.disabled = false;
    }
  }, 90);
});

/* ============ LA CRÉA DU MOIS ============ */
const DEFAULT_CREA = {
  title: 'Une journée de vacances avec moi',
  body1: "Et si, le temps d'une journée, tu devenais vlogueuse ? On a envie de vivre un peu de tes vacances à travers tes yeux : filme, raconte, montre-nous une journée avec toi — un petit vlog « Une journée de vacances avec moi » suffit amplement.",
  body2: "Plus discret·ète ? Un petit album photo « Summer Mood » nous comblera tout autant. L'essentiel, c'est de partager un fragment de ton été.",
  tools: "CapCut (ou l'appli de montage que tu préfères) — gratuite et simple.",
  consignes: "Vous faites comme vous voulez. On veut juste un peu de votre été.",
  where: "Sur notre groupe Commando 💛",
  when: "Quand vous voulez, avant la fin du mois."
};
let monthlyConfig = { crea: {...DEFAULT_CREA}, lettreBody: null, lettreQuote: null, lettreLinkText: null, lettreLinkUrl: null };

function applyCreaToModal(){
  const c = monthlyConfig.crea || DEFAULT_CREA;
  document.getElementById('crea-title').textContent = c.title;
  document.getElementById('crea-body1').textContent = c.body1;
  document.getElementById('crea-body2').textContent = c.body2;
  document.getElementById('crea-tools').textContent = c.tools;
  document.getElementById('crea-consignes').textContent = c.consignes;
  document.getElementById('crea-where').textContent = c.where;
  document.getElementById('crea-when').textContent = c.when;
}
document.getElementById('open-crea').addEventListener('click', ()=>{
  applyCreaToModal();
  openModal('modal-crea');
});
document.getElementById('crea-close').addEventListener('click', ()=> closeModal('modal-crea'));

/* ============ VIENS ON JOUE ============ */
document.getElementById('open-jouer').addEventListener('click', ()=>{
  openModal('modal-jouer');
  switchGamePanel(currentWeekGame);
});
document.getElementById('jouer-close').addEventListener('click', ()=> closeModal('modal-jouer'));
document.querySelectorAll('.game-pill').forEach(pill=>{
  pill.addEventListener('click', ()=> switchGamePanel(pill.dataset.game));
});
function switchGamePanel(game){
  document.querySelectorAll('.game-pill').forEach(p=>{
    p.classList.toggle('active', p.dataset.game === game);
    p.classList.toggle('current-week', p.dataset.game === currentWeekGame);
  });
  document.querySelectorAll('.game-panel').forEach(panel=>{
    panel.classList.toggle('active', panel.id === 'panel-' + game);
  });
  if(game === 'memory' && !memoryInitialized){ initMemoryGame(); }
  if(game === 'quiz'){ initQuiz(); }
  if(game === 'imitation'){ renderImitationGallery(); renderImitationRef(); }
  if(game === 'blindtest'){ renderBlindtestRounds(); renderBlindtestLeaderboard(); }
}

/* --- Semaine 1 : blind test avec vraies musiques (Spotify / YouTube), extraits fixés par l'organisateur --- */
const BLINDTEST_ROUNDS = [
  {label:'Extrait n°1', link:'https://open.spotify.com/track/7BNeFchpHDCWYSUV4hfU89'},
  {label:'Extrait n°2', link:''},
  {label:'Extrait n°3', link:''}
];
const BLINDTEST_LEADERBOARD = [
  {name:'Léa', asset:'char_259', seconds:4.2},
  {name:'Nour', asset:'char_262', seconds:6.8},
  {name:'Sacha', asset:'char_263', seconds:9.1}
];

function renderBlindtestRounds(){
  const wrap = document.getElementById('blindtest-rounds');
  wrap.innerHTML = '';
  const locked = state.playedGames.blindtest;
  BLINDTEST_ROUNDS.forEach((round, idx)=>{
    const div = document.createElement('div');
    div.className = 'bt-round';
    let inner = `<div class="bt-round-head"><span class="bt-round-name">${round.label}</span></div>`;
    if(round.link){
      inner += renderEmbed(round.link);
    } else {
      inner += `<div class="bt-round-placeholder">Extrait à venir — ajouté prochainement par l'organisateur.</div>`;
    }
    div.innerHTML = inner;
    wrap.appendChild(div);
  });

  if(locked){
    document.getElementById('blindtest-locked').style.display = 'block';
    document.querySelector('#panel-blindtest .guess-row')?.remove();
    document.querySelector('#panel-blindtest .guess-timer')?.remove();
  } else if(!document.getElementById('guess-row-bt')){
    const guessRow = document.createElement('div');
    guessRow.className = 'guess-row';
    guessRow.id = 'guess-row-bt';
    guessRow.innerHTML = `<input type="text" id="guess-input" placeholder="Le titre que tu as deviné..."><button id="guess-start">Commencer</button>`;
    const timerDiv = document.createElement('div');
    timerDiv.className = 'guess-timer';
    timerDiv.id = 'guess-timer';
    timerDiv.style.display = 'none';
    timerDiv.textContent = '0.0s';
    document.getElementById('blindtest-rounds').insertAdjacentElement('afterend', timerDiv);
    timerDiv.insertAdjacentElement('afterend', guessRow);
    document.getElementById('guess-start').addEventListener('click', handleGuessClick);
  }
}
let guessStartTime = null, guessTimerInterval = null;
function handleGuessClick(){
  const startBtn = document.getElementById('guess-start');
  let timerEl = document.getElementById('guess-timer');
  if(guessStartTime){
    const elapsed = ((Date.now()-guessStartTime)/1000);
    clearInterval(guessTimerInterval);
    const asset = state.selectedCharacter ? state.selectedCharacter.asset : 'char_258';
    BLINDTEST_LEADERBOARD.push({name: state.participantName || 'Toi', asset, seconds: Math.round(elapsed*10)/10});
    renderBlindtestLeaderboard();
    renderDashLeaderboard();
    guessStartTime = null;
    state.playedGames.blindtest = true;
    document.getElementById('guess-timer').style.display = 'none';
    renderBlindtestRounds();
  } else {
    guessStartTime = Date.now();
    startBtn.textContent = 'Valider ma réponse';
    timerEl = document.getElementById('guess-timer');
    timerEl.style.display = 'block';
    guessTimerInterval = setInterval(()=>{
      timerEl.textContent = (((Date.now()-guessStartTime)/1000)).toFixed(1) + 's';
    }, 100);
  }
}
function renderBlindtestLeaderboard(){
  const wrap = document.getElementById('blindtest-leaderboard');
  wrap.innerHTML = '';
  const sorted = BLINDTEST_LEADERBOARD.slice().sort((a,b)=>a.seconds-b.seconds);
  sorted.forEach((entry,i)=>{
    const medal = i===0 ? '🥇' : i===1 ? '🥈' : i===2 ? '🥉' : (i+1);
    const item = document.createElement('div');
    item.className = 'lb-item';
    item.innerHTML = `<span class="lb-rank">${medal}</span><img src="${ASSETS[entry.asset]}" alt=""><span class="lb-name">${entry.name}</span><span class="lb-time">${entry.seconds}s</span>`;
    wrap.appendChild(item);
  });
}

/* --- Semaine 2 : jeu de mémoire --- */
let memoryInitialized = false;
let memoryState = { first:null, second:null, moves:0, matched:0, startTime:null, lock:false };
const MEMORY_LEADERBOARD = [
  {name:'Nour', asset:'char_262', moves:9, seconds:38},
  {name:'Yanis', asset:'char_260', moves:12, seconds:52}
];
function initMemoryGame(){
  if(state.playedGames.memory){
    document.getElementById('memory-locked').style.display = 'block';
    document.getElementById('memory-restart').style.display = 'none';
    return;
  }
  memoryInitialized = true;
  const pairChars = CHARACTERS.slice(0,6);
  let cards = [];
  pairChars.forEach(c=>{ cards.push({charId:c.id, asset:c.asset}); cards.push({charId:c.id, asset:c.asset}); });
  cards = cards.sort(()=>Math.random()-0.5);
  memoryState = { first:null, second:null, moves:0, matched:0, startTime:null, lock:false };
  const grid = document.getElementById('memory-grid');
  grid.innerHTML = '';
  cards.forEach((card, idx)=>{
    const btn = document.createElement('button');
    btn.className = 'memory-card';
    btn.dataset.idx = idx;
    btn.dataset.charId = card.charId;
    btn.innerHTML = `<img src="${ASSETS[card.asset]}" alt="">`;
    btn.addEventListener('click', ()=> flipMemoryCard(btn));
    grid.appendChild(btn);
  });
  document.getElementById('memory-win').classList.remove('show');
  updateMemoryStats();
}
function flipMemoryCard(btn){
  if(memoryState.lock || btn.classList.contains('flipped') || btn.classList.contains('solved')) return;
  if(!memoryState.startTime) memoryState.startTime = Date.now();
  btn.classList.add('flipped');
  if(!memoryState.first){ memoryState.first = btn; return; }
  memoryState.second = btn;
  memoryState.moves++;
  memoryState.lock = true;
  const match = memoryState.first.dataset.charId === memoryState.second.dataset.charId;
  if(match){
    memoryState.first.classList.add('solved');
    memoryState.second.classList.add('solved');
    memoryState.matched++;
    memoryState.first = null; memoryState.second = null; memoryState.lock = false;
    updateMemoryStats();
    if(memoryState.matched === 6){
      const totalTime = Math.round((Date.now()-memoryState.startTime)/1000);
      const winEl = document.getElementById('memory-win');
      winEl.textContent = `Bravo ! Terminé en ${memoryState.moves} coups et ${totalTime}s 🎉`;
      winEl.classList.add('show');
      state.playedGames.memory = true;
      const asset = state.selectedCharacter ? state.selectedCharacter.asset : 'char_258';
      MEMORY_LEADERBOARD.push({name: state.participantName || 'Toi', asset, moves: memoryState.moves, seconds: totalTime});
      document.getElementById('memory-restart').style.display = 'none';
      renderDashLeaderboard();
    }
  } else {
    setTimeout(()=>{
      memoryState.first.classList.remove('flipped');
      memoryState.second.classList.remove('flipped');
      memoryState.first = null; memoryState.second = null; memoryState.lock = false;
      updateMemoryStats();
    }, 700);
  }
  updateMemoryStats();
}
function updateMemoryStats(){
  const elapsed = memoryState.startTime ? Math.floor((Date.now()-memoryState.startTime)/1000) : 0;
  document.getElementById('memory-stats').textContent = `${memoryState.moves} coups · ${elapsed}s`;
}
setInterval(()=>{ if(memoryState.startTime && memoryState.matched < 6) updateMemoryStats(); }, 1000);
document.getElementById('memory-restart').addEventListener('click', initMemoryGame);

/* --- Semaine 3 : quiz de la boomeuse --- */
const QUIZ_QUESTIONS = [
  {q:'« Goumin », dans le langage des jeunes, ça veut dire :', options:['Un ami proche','Un problème','Une fête','Un vêtement'], correct:0},
  {q:'L\u2019emoji 💀 dans un message veut dire :', options:['Danger imminent','Je suis mort de rire','Je suis fatigué·e','J\u2019ai faim'], correct:1},
  {q:'L\u2019emoji 🧢 veut dire :', options:['Il fait chaud','Je pars en voyage','C\u2019est un mensonge / n\u2019importe quoi','Bravo, bien joué'], correct:2},
  {q:'« Askip » est la contraction de :', options:['"À ce qu\u2019il paraît"','"À ce que je pense"','"Ah c\u2019est quoi"','"À ce qui se passe"'], correct:0},
  {q:'Quand quelqu\u2019un écrit « frr » dans un message, ça sert à :', options:['Dire au revoir','Insister, "vraiment vraiment"','Exprimer la peur','Compter jusqu\u2019à trois'], correct:1},
  {q:'L\u2019emoji 😭 utilisé dans un message drôle veut le plus souvent dire :', options:['Je suis triste','Mort de rire','Je pleure de déception','Je suis ému·e'], correct:1}
];
const QUIZ_LEADERBOARD = [
  {name:'Camille', asset:'char_264', score:6, seconds:22},
  {name:'Tom', asset:'char_258', score:4, seconds:31}
];
let mcqStarted = false, mcqIndex = 0, mcqScore = 0, mcqStartTime = null, mcqTimerInterval = null;
function initQuiz(){
  if(state.playedGames.quiz){
    document.getElementById('quiz-locked').style.display = 'block';
    document.getElementById('mcq-question-wrap').style.display = 'none';
    document.getElementById('mcq-result').style.display = 'none';
    return;
  }
  mcqStarted = true; mcqIndex = 0; mcqScore = 0; mcqStartTime = Date.now();
  document.getElementById('mcq-result').style.display = 'none';
  document.getElementById('mcq-question-wrap').style.display = 'block';
  clearInterval(mcqTimerInterval);
  mcqTimerInterval = setInterval(()=>{
    document.getElementById('mcq-timer').textContent = (((Date.now()-mcqStartTime)/1000)).toFixed(1) + 's';
  }, 100);
  renderMcqQuestion();
}
function renderMcqQuestion(){
  const q = QUIZ_QUESTIONS[mcqIndex];
  document.getElementById('mcq-progress').textContent = `Question ${mcqIndex+1}/${QUIZ_QUESTIONS.length}`;
  document.getElementById('mcq-question').textContent = q.q;
  const optWrap = document.getElementById('mcq-options');
  optWrap.innerHTML = '';
  q.options.forEach((opt, i)=>{
    const btn = document.createElement('button');
    btn.className = 'mcq-option';
    btn.textContent = opt;
    btn.addEventListener('click', ()=> answerMcq(i, btn));
    optWrap.appendChild(btn);
  });
}
function answerMcq(i, btn){
  document.querySelectorAll('#mcq-options .mcq-option').forEach(b=>b.disabled = true);
  const q = QUIZ_QUESTIONS[mcqIndex];
  if(i === q.correct){ btn.classList.add('correct'); mcqScore++; }
  else {
    btn.classList.add('wrong');
    document.querySelectorAll('#mcq-options .mcq-option')[q.correct].classList.add('correct');
  }
  setTimeout(()=>{
    mcqIndex++;
    if(mcqIndex >= QUIZ_QUESTIONS.length){ finishQuiz(); }
    else { renderMcqQuestion(); }
  }, 900);
}
function finishQuiz(){
  clearInterval(mcqTimerInterval);
  const totalTime = Math.round((Date.now()-mcqStartTime)/1000);
  document.getElementById('mcq-question-wrap').style.display = 'none';
  document.getElementById('mcq-result').style.display = 'block';
  document.getElementById('mcq-score').textContent = `${mcqScore}/${QUIZ_QUESTIONS.length}`;
  document.getElementById('mcq-time-final').textContent = `Terminé en ${totalTime} secondes.`;
  state.playedGames.quiz = true;
  const asset = state.selectedCharacter ? state.selectedCharacter.asset : 'char_258';
  QUIZ_LEADERBOARD.push({name: state.participantName || 'Toi', asset, score: mcqScore, seconds: totalTime});
  renderDashLeaderboard();
}

/* --- Semaine 4 : imitation d'une vraie photo de référence ---
   La photo de référence doit être fournie par la Commando elle-même
   (on ne peut pas intégrer une photo dont on n'a pas les droits). */
let imitationRefImg = null;

function renderImitationRef(){
  const zone = document.getElementById('imitation-ref-zone');
  const preview = document.getElementById('imitation-ref-preview');
  if(imitationRefImg){
    preview.src = imitationRefImg;
    zone.classList.add('has-photo');
  } else {
    zone.classList.remove('has-photo');
  }
}
document.getElementById('imitation-ref-input').addEventListener('change', ()=>{
  const input = document.getElementById('imitation-ref-input');
  const file = input.files && input.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (e)=>{
    imitationRefImg = e.target.result;
    renderImitationRef();
  };
  reader.readAsDataURL(file);
});

const IMITATIONS = [
  {name:'Sacha', asset:'char_263', img:null, votes:3},
  {name:'Camille', asset:'char_264', img:null, votes:5}
];
const votedImitations = new Set();
function renderImitationGallery(){
  const wrap = document.getElementById('imitation-gallery');
  wrap.innerHTML = '';
  const sorted = IMITATIONS.slice().sort((a,b)=>b.votes-a.votes);
  sorted.forEach((item, idx)=>{
    const key = item.name;
    const isWinner = idx === 0 && item.votes > 0;
    const el = document.createElement('div');
    el.className = 'imitation-item' + (isWinner ? ' winner' : '');
    const photoHtml = item.img
      ? `<div class="imitation-photo" style="background-image:url(${item.img})"></div>`
      : `<div class="imitation-photo" style="display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--lagon-deep)" stroke-width="1.5">${ICONS.camera}</svg></div>`;
    el.innerHTML = `
      ${photoHtml}
      <div class="imitation-meta">
        <span class="imitation-name">${item.name}${isWinner ? ' 🏆' : ''}</span>
        <button class="vote-btn ${votedImitations.has(key)?'voted':''}" data-key="${key}">♥ ${item.votes}</button>
      </div>`;
    wrap.appendChild(el);
  });
  wrap.querySelectorAll('.vote-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const key = btn.dataset.key;
      const item = IMITATIONS.find(i=>i.name===key);
      if(votedImitations.has(key)){ votedImitations.delete(key); item.votes--; }
      else { votedImitations.add(key); item.votes++; }
      renderImitationGallery();
    });
  });
}
const imitationInput = document.getElementById('imitation-input');
const imitationZone = document.getElementById('imitation-zone');
const imitationPreview = document.getElementById('imitation-preview');
imitationInput.addEventListener('change', ()=>{
  if(state.playedGames.imitation) return;
  const file = imitationInput.files && imitationInput.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (e)=>{
    imitationPreview.src = e.target.result;
    imitationZone.classList.add('has-photo');
    const name = state.participantName || 'Toi';
    const asset = state.selectedCharacter ? state.selectedCharacter.asset : 'char_258';
    IMITATIONS.push({ name, asset, img: e.target.result, votes:0 });
    state.playedGames.imitation = true;
    document.getElementById('imitation-locked').style.display = 'block';
    document.getElementById('imitation-zone').style.pointerEvents = 'none';
    document.getElementById('imitation-zone').style.opacity = '.6';
    renderImitationGallery();
    renderDashLeaderboard();
  };
  reader.readAsDataURL(file);
});

/* ============ LA PILLS DU MOIS ============ */
const MOIS_FR = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
document.getElementById('open-lettre').addEventListener('click', ()=>{
  const body = monthlyConfig.lettreBody || "Personne n'a encore écrit la Pills de ce mois-ci — l'admin peut l'ajouter depuis le Mode admin.";
  const quote = monthlyConfig.lettreQuote || '';
  document.getElementById('lettre-title').textContent = monthlyConfig.lettreBody ? `Pills de ${MOIS_FR[new Date().getMonth()]}` : 'À venir';
  document.getElementById('lettre-body').textContent = body;
  document.getElementById('lettre-quote').textContent = quote ? '« ' + quote + ' »' : '';
  const linkWrap = document.getElementById('lettre-link-wrap');
  const linkEl = document.getElementById('lettre-link');
  if(monthlyConfig.lettreLinkText && monthlyConfig.lettreLinkUrl){
    linkEl.textContent = monthlyConfig.lettreLinkText;
    linkEl.href = monthlyConfig.lettreLinkUrl;
    linkWrap.style.display = 'block';
  } else {
    linkWrap.style.display = 'none';
  }
  openModal('modal-lettre');
});
document.getElementById('lettre-close').addEventListener('click', ()=> closeModal('modal-lettre'));

/* ============ MODE ADMIN ============ */
document.getElementById('open-admin').addEventListener('click', async (e)=>{
  e.preventDefault();
  const code = accessInput.value.trim();
  if(code.length === 0){
    loginError.textContent = "Tape d'abord le code d'accès de la salle que tu veux administrer.";
    loginError.classList.add('show');
    return;
  }
  const result = await resolveRoomFromCode(code);
  if(!result.found){
    loginError.textContent = result.error
      ? `Ce code ne correspond à aucune salle. (détail technique : ${result.error})`
      : "Ce code ne correspond à aucune salle.";
    loginError.classList.add('show');
    return;
  }
  loginError.classList.remove('show');
  document.getElementById('admin-password').value = '';
  document.getElementById('admin-gate-error').classList.remove('show');
  openModal('modal-admin-gate');
});
document.getElementById('admin-gate-close').addEventListener('click', ()=> closeModal('modal-admin-gate'));
document.getElementById('admin-gate-submit').addEventListener('click', ()=>{
  const val = document.getElementById('admin-password').value;
  if(val !== currentRoomAdminPassword){
    document.getElementById('admin-gate-error').classList.add('show');
    return;
  }
  attachRoomListeners();
  closeModal('modal-admin-gate');
  openAdminPanel();
});
function openAdminPanel(){
  const c = monthlyConfig.crea || DEFAULT_CREA;
  document.getElementById('admin-crea-title').value = c.title;
  document.getElementById('admin-crea-body1').value = c.body1;
  document.getElementById('admin-crea-body2').value = c.body2;
  document.getElementById('admin-crea-tools').value = c.tools;
  document.getElementById('admin-crea-consignes').value = c.consignes;
  document.getElementById('admin-crea-where').value = c.where;
  document.getElementById('admin-crea-when').value = c.when;
  document.getElementById('admin-lettre-body').value = monthlyConfig.lettreBody || '';
  document.getElementById('admin-lettre-quote').value = monthlyConfig.lettreQuote || '';
  document.getElementById('admin-lettre-link-text').value = monthlyConfig.lettreLinkText || '';
  document.getElementById('admin-lettre-link-url').value = monthlyConfig.lettreLinkUrl || '';
  buildAdminCharactersList();
  document.getElementById('admin-status-note').textContent =
    (typeof firebaseReady !== 'undefined' && firebaseReady)
      ? 'Ces changements seront visibles par toute la Commando.'
      : 'Mode démo local : ces changements ne seront visibles que dans ce navigateur, le temps de la session.';
  openModal('modal-admin');
}
function buildAdminCharactersList(){
  const wrap = document.getElementById('admin-characters-list');
  wrap.innerHTML = '';
  CHARACTERS.forEach(c=>{
    if(c.deleted) return;
    const row = document.createElement('div');
    row.className = 'admin-char-row';
    row.innerHTML = `
      <img class="${charImgClass(c.id).trim()}" src="${ASSETS[c.asset]}" alt="">
      <input type="text" data-char-id="${c.id}" value="${c.name}">
      <label class="admin-char-active"><input type="checkbox" data-active-id="${c.id}" ${c.active !== false ? 'checked' : ''}> Actif</label>
      <button type="button" class="admin-char-delete" data-delete-id="${c.id}" title="Supprimer ce personnage">🗑</button>
    `;
    wrap.appendChild(row);
  });
  wrap.querySelectorAll('.admin-char-delete').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.dataset.deleteId;
      const c = CHARACTERS.find(ch=>ch.id===id);
      if(!c) return;
      if(!confirm(`Supprimer "${c.name}" ? Il ne sera plus proposé aux nouveaux participants (ses données déjà envoyées restent visibles).`)) return;
      c.deleted = true;
      c.active = false;
      buildAdminCharactersList();
    });
  });
}
function refreshCharacterNameDisplays(){
  // Redessine les grilles de personnages déjà à l'écran pour refléter les nouveaux noms
  if(document.getElementById('character-grid')){
    document.querySelectorAll('#character-grid .character').forEach(btn=>{
      const c = CHARACTERS.find(ch=>ch.id === btn.dataset.id);
      if(c) btn.querySelector('.name').textContent = c.name;
    });
  }
  if(characterGridBuilt) buildCharacterGrid();
  updateCharacterAvailability();
  if(document.getElementById('screen-dashboard')?.classList.contains('active')){
    buildDashCharacterGrid();
  }
}
document.getElementById('admin-close').addEventListener('click', ()=> closeModal('modal-admin'));
document.getElementById('admin-save').addEventListener('click', ()=>{
  monthlyConfig.crea = {
    title: document.getElementById('admin-crea-title').value.trim() || DEFAULT_CREA.title,
    body1: document.getElementById('admin-crea-body1').value.trim() || DEFAULT_CREA.body1,
    body2: document.getElementById('admin-crea-body2').value.trim() || DEFAULT_CREA.body2,
    tools: document.getElementById('admin-crea-tools').value.trim() || DEFAULT_CREA.tools,
    consignes: document.getElementById('admin-crea-consignes').value.trim() || DEFAULT_CREA.consignes,
    where: document.getElementById('admin-crea-where').value.trim() || DEFAULT_CREA.where,
    when: document.getElementById('admin-crea-when').value.trim() || DEFAULT_CREA.when
  };
  monthlyConfig.lettreBody = document.getElementById('admin-lettre-body').value.trim();
  monthlyConfig.lettreQuote = document.getElementById('admin-lettre-quote').value.trim();
  monthlyConfig.lettreLinkText = document.getElementById('admin-lettre-link-text').value.trim();
  monthlyConfig.lettreLinkUrl = document.getElementById('admin-lettre-link-url').value.trim();

  const characterNames = {};
  const characterActive = {};
  const characterDeleted = {};
  document.querySelectorAll('#admin-characters-list input[data-char-id]').forEach(input=>{
    const id = input.dataset.charId;
    const newName = input.value.trim();
    if(newName){
      characterNames[id] = newName;
      const c = CHARACTERS.find(ch=>ch.id === id);
      if(c) c.name = newName;
    }
  });
  document.querySelectorAll('#admin-characters-list input[data-active-id]').forEach(input=>{
    const id = input.dataset.activeId;
    characterActive[id] = input.checked;
    const c = CHARACTERS.find(ch=>ch.id === id);
    if(c) c.active = input.checked;
  });
  CHARACTERS.forEach(c=>{ if(c.deleted) characterDeleted[c.id] = true; });

  monthlyConfig.characterNames = characterNames;
  monthlyConfig.characterActive = characterActive;
  monthlyConfig.characterDeleted = characterDeleted;
  refreshCharacterNameDisplays();

  if(typeof saveMonthlyConfigToCloud === 'function') saveMonthlyConfigToCloud();
  const confirmEl = document.getElementById('admin-save-confirm');
  confirmEl.classList.add('show');
  setTimeout(()=> confirmEl.classList.remove('show'), 2500);
});

/* ============ ARCHIVER LE MOIS ET REPARTIR À ZÉRO ============ */
document.getElementById('admin-archive-reset').addEventListener('click', async ()=>{
  const note = document.getElementById('admin-archive-note');
  note.textContent = '';
  if(typeof firebaseReady === 'undefined' || !firebaseReady || !db){
    note.textContent = "Cette fonction a besoin de Firebase — en mode démo locale, il n'y a rien à archiver (rien n'est partagé de toute façon).";
    return;
  }
  if(!confirm("Passer au mois suivant ?\n\nCeci va :\n• archiver puis effacer toutes les réponses de ce mois-ci\n• vider la créa du mois et la lettre du mois (à réécrire pour le nouveau thème)\n\nRien n'est perdu — tout reste consultable dans Firebase, dans la collection \"archives\".\n\nCette action est immédiate et ne peut pas être annulée depuis l'app.")) return;

  const btn = document.getElementById('admin-archive-reset');
  btn.disabled = true;
  note.textContent = 'Archivage en cours…';
  try{
    const monthTag = currentMonthTag();
    const [participantsAllSnap, messagesAllSnap] = await Promise.all([
      db.collection('participants').where('roomId','==', currentRoomId).get(),
      db.collection('messages').where('roomId','==', currentRoomId).get()
    ]);
    const participantsDocs = participantsAllSnap.docs.filter(d=> d.data().month === monthTag);
    const messagesDocs = messagesAllSnap.docs.filter(d=> d.data().month === monthTag);
    const participantsData = participantsDocs.map(d=> d.data());
    const messagesData = messagesDocs.map(d=> d.data());

    await db.collection('archives').doc(`${currentRoomId}_${monthTag}_${Date.now()}`).set({
      roomId: currentRoomId,
      month: monthTag,
      participants: participantsData,
      messages: messagesData,
      crea: monthlyConfig.crea || null,
      lettreBody: monthlyConfig.lettreBody || null,
      lettreQuote: monthlyConfig.lettreQuote || null,
      archivedAt: firebase.firestore.FieldValue.serverTimestamp(),
      adminKey: currentRoomAdminPassword
    });

    const batch = db.batch();
    participantsDocs.forEach(doc=> batch.delete(doc.ref));
    messagesDocs.forEach(doc=> batch.delete(doc.ref));
    await batch.commit();

    // Nouveau mois = nouveau thème : on vide la créa et la lettre pour que
    // le mode admin les réécrive fraîches (au lieu de garder l'ancien contenu).
    monthlyConfig.crea = {...DEFAULT_CREA};
    monthlyConfig.lettreBody = '';
    monthlyConfig.lettreQuote = '';
    monthlyConfig.lettreLinkText = '';
    monthlyConfig.lettreLinkUrl = '';
    await saveMonthlyConfigToCloud();

    sharedParticipants = {};
    cloudMessagesCache = [];
    refreshLiveViews();
    if(document.getElementById('modal-admin').classList.contains('active')) openAdminPanel();

    const confirmEl = document.getElementById('admin-archive-confirm');
    confirmEl.classList.add('show');
    setTimeout(()=> confirmEl.classList.remove('show'), 3000);
    note.textContent = `${participantsData.length} réponse(s) et ${messagesData.length} message(s) archivés. Créa et lettre remises à blanc — à réécrire pour le nouveau mois.`;
  }catch(err){
    console.warn("Impossible d'archiver le mois :", err);
    note.textContent = "Une erreur est survenue pendant l'archivage — vérifie que les règles Firestore sont bien à jour.";
  }
  btn.disabled = false;
});

/* ============ LA LOVE RUBRIQUE ============ */
const LOVE_MESSAGES = [
  {name:'Léa', asset:'char_259', text:'Je pense à toi plus souvent que tu ne le crois.'},
  {name:'Nour', asset:'char_262', text:'Merci d\u2019être exactement comme tu es.'},
  {name:'Sacha', asset:'char_263', text:'On devrait se voir plus souvent, tu me manques.'},
  {name:'Camille', asset:'char_264', text:'T\u2019es la personne la plus rassurante que je connaisse.'}
];
document.getElementById('open-love').addEventListener('click', ()=>{
  openModal('modal-love');
  switchLovePanel('send');
});
document.getElementById('love-close').addEventListener('click', ()=> closeModal('modal-love'));
document.getElementById('toggle-send').addEventListener('click', ()=> switchLovePanel('send'));
document.getElementById('toggle-receive').addEventListener('click', ()=> switchLovePanel('receive'));
function switchLovePanel(panel){
  document.getElementById('toggle-send').classList.toggle('active', panel==='send');
  document.getElementById('toggle-receive').classList.toggle('active', panel==='receive');
  document.getElementById('panel-send').classList.toggle('active', panel==='send');
  document.getElementById('panel-receive').classList.toggle('active', panel==='receive');
  if(panel === 'receive') drawLoveMessage();
}
function drawLoveMessage(){
  const cloudOnes = cloudMessagesCache.map(m=>({name:m.name, asset:assetForCharacterId(m.characterId), text:m.text}));
  const pool = [...LOVE_MESSAGES, ...cloudOnes].filter(m => m.name !== state.participantName);
  if(pool.length === 0){
    document.getElementById('receive-card').innerHTML = '<div class="r-text">Personne n’a encore laissé de mot doux — reviens bientôt 💛</div>';
    return;
  }
  const pick = pool[Math.floor(Math.random()*pool.length)];
  const card = document.getElementById('receive-card');
  let html = `<img src="${ASSETS[pick.asset]}" alt=""><div class="r-name">De la part de ${pick.name}</div>`;
  if(pick.text) html += `<div class="r-text">« ${pick.text} »</div>`;
  if(pick.audioUrl) html += `<audio controls src="${pick.audioUrl}"></audio>`;
  card.innerHTML = html;
}
document.getElementById('receive-another').addEventListener('click', drawLoveMessage);

let mediaRecorder=null, audioChunks=[], recordedBlobUrl=null, micStream=null;
const voiceBtn = document.getElementById('voice-record');
const voiceLabel = document.getElementById('voice-record-label');
const voiceStatus = document.getElementById('voice-status');
const voicePreview = document.getElementById('voice-preview');
voiceBtn.addEventListener('click', async ()=>{
  if(voiceBtn.classList.contains('recording')){ mediaRecorder && mediaRecorder.stop(); return; }
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
    voiceStatus.textContent = "Le micro n'est pas accessible depuis ce navigateur.";
    return;
  }
  try{
    micStream = await navigator.mediaDevices.getUserMedia({audio:true});
    audioChunks = [];
    mediaRecorder = new MediaRecorder(micStream);
    mediaRecorder.ondataavailable = (e)=> audioChunks.push(e.data);
    mediaRecorder.onstop = ()=>{
      const blob = new Blob(audioChunks, {type:'audio/webm'});
      recordedBlobUrl = URL.createObjectURL(blob);
      voicePreview.src = recordedBlobUrl;
      voicePreview.style.display = 'block';
      voiceBtn.classList.remove('recording');
      voiceLabel.textContent = 'Recommencer la note vocale';
      voiceStatus.textContent = 'Note vocale prête ✓';
      micStream.getTracks().forEach(t=>t.stop());
    };
    mediaRecorder.start();
    voiceBtn.classList.add('recording');
    voiceLabel.textContent = 'Arrêter l\u2019enregistrement';
    voiceStatus.textContent = 'Enregistrement en cours…';
  }catch(err){
    voiceStatus.textContent = "Le micro n'est pas accessible depuis ce fichier local — cette fonctionnalité marchera une fois le site en ligne.";
  }
});
document.getElementById('love-send').addEventListener('click', ()=>{
  const text = document.getElementById('love-text').value.trim();
  const name = document.getElementById('love-name').value.trim() || state.participantName;
  if(!text && !recordedBlobUrl){
    voiceStatus.textContent = "Écris un mot ou enregistre une note vocale avant d'envoyer.";
    return;
  }
  const asset = state.selectedCharacter ? state.selectedCharacter.asset : 'char_258';
  LOVE_MESSAGES.push({ name, asset, text, audioUrl: recordedBlobUrl });
  messages.push({ name, text, audioUrl: recordedBlobUrl });
  if(typeof firebaseReady !== 'undefined' && firebaseReady && db && text){
    db.collection('messages').add({
      roomId: currentRoomId,
      ownerId: getCurrentUid(),
      name, text,
      characterId: state.selectedCharacter ? state.selectedCharacter.id : null,
      month: currentMonthTag(),
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(err=> console.warn("Impossible d'enregistrer le message dans Firebase :", err));
  }
  document.getElementById('love-text').value = '';
  voicePreview.style.display = 'none';
  voicePreview.removeAttribute('src');
  voiceLabel.textContent = 'Enregistrer une note vocale';
  voiceStatus.textContent = 'Message envoyé à la Commando 💛';
  recordedBlobUrl = null;
});

/* ============ MA MINIPLAYLIST COMMANDO ============ */
document.getElementById('open-playlist').addEventListener('click', ()=>{
  renderPlaylist();
  openModal('modal-playlist');
});
document.getElementById('playlist-close').addEventListener('click', ()=> closeModal('modal-playlist'));
function renderPlaylist(){
  const wrap = document.getElementById('playlist-list');
  wrap.innerHTML = '';
  const entries = [];
  Object.entries(getAllAnswersMap()).forEach(([id,a])=>{
    const c = CHARACTERS.find(ch=>ch.id===id);
    if(a.song) entries.push({name:a.name, asset:c ? c.asset : 'char_258', song:a.song});
  });
  if(entries.length === 0){ wrap.innerHTML = '<p class="messages-empty">Personne n\u2019a encore ajouté sa musique du mois.</p>'; return; }
  entries.forEach(e=>{
    const item = document.createElement('div');
    item.className = 'playlist-item';
    const embed = renderEmbed(e.song);
    item.innerHTML = `
      <div class="playlist-item-head"><img class="avatar" src="${ASSETS[e.asset]}" alt=""><span class="p-name">${e.name}</span></div>
      ${embed || `<div class="p-song-text">🎵 ${e.song}</div>`}
    `;
    wrap.appendChild(item);
  });
}

/* ---------- fermeture des modales ---------- */
document.querySelectorAll('.modal-overlay').forEach(m=>{
  m.addEventListener('click', (e)=>{ if(e.target === m) m.classList.remove('active'); });
});
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape'){
    document.querySelectorAll('.modal-overlay.active').forEach(m=>m.classList.remove('active'));
  }
});