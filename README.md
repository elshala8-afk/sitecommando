# La Commando 🌞

Un site immersif pour garder le lien avec ton groupe d'amis, mois après mois : chacun choisit un personnage, répond à un petit questionnaire (mood, recommandations, besoins, musique du mois, anecdote), et retrouve les réponses de tout le monde — fiches, recommandations mélangées par catégorie, playlist collective, mots doux.

## 🚀 Tester tout de suite (mode démo)

Aucune installation n'est nécessaire pour essayer le site :

1. Télécharge/clone ce dossier
2. Ouvre `index.html` dans ton navigateur (double-clic, ou glisser dans un onglet)
3. Code d'accès de démo : **ETE2026**

En mode démo, **chaque personne qui ouvre le site ne voit que ses propres réponses**, mélangées à des exemples fictifs pré-remplis (Léa, Nour, Sacha...). C'est parfait pour prévisualiser, mais **rien n'est partagé entre plusieurs vraies personnes** tant que l'étape suivante n'est pas faite.

## 💛 Activer le vrai partage entre participants

Pour que ce que chacun tape (recommandations, musique, mots doux...) soit **visible par toute la Commando** — et pas seulement dans le navigateur de la personne qui l'a écrit — il faut connecter le site à une base de données partagée. On utilise **Firebase Firestore** : gratuit pour ce type d'usage (petit groupe d'amis), pas besoin de savoir coder pour le configurer.

### Étape 1 — Créer un projet Firebase (5 min)

1. Va sur [console.firebase.google.com](https://console.firebase.google.com/)
2. Connecte-toi avec un compte Google, clique sur **"Ajouter un projet"**
3. Donne-lui un nom (ex. `la-commando`), continue les étapes par défaut (tu peux désactiver Google Analytics, pas nécessaire ici)
4. Une fois le projet créé, dans le menu de gauche, clique sur **⚙️ Paramètres du projet**
5. Descends jusqu'à "Vos applications", clique sur l'icône **`</>`** (Web)
6. Donne un surnom à l'application (ex. `la-commando-web`), clique sur **"Enregistrer l'application"**
7. Firebase affiche un bloc de code avec un objet `firebaseConfig` — **copie ces valeurs**, tu en as besoin à l'étape 3

### Étape 2 — Activer Firestore (base de données)

1. Toujours dans la console Firebase, menu de gauche → **Build → Firestore Database**
2. Clique sur **"Créer une base de données"**
3. Choisis **"Mode production"**, puis une région proche de vous (ex. `eur3 (europe-west)`)
4. Une fois créée, va dans l'onglet **"Règles"** et remplace le contenu par celui du fichier [`firestore.rules`](./firestore.rules) fourni dans ce dossier, puis clique sur **"Publier"**

Ces règles sont plus prudentes que "tout est ouvert à tous" :
- N'importe qui peut **lire** les réponses (c'est le but — tout le monde doit voir tout le monde)
- N'importe qui peut **créer** une nouvelle réponse (questionnaire, mot doux)
- **Personne ne peut modifier ou supprimer** la réponse de quelqu'un d'autre après coup
- Seule la config du mois (créa/lettre/personnages) exige le mot de passe admin pour être modifiée

> ℹ️ Si Firebase t'affiche un avertissement "vos règles sont publiques" en créant la base par défaut, c'est parce que la base démarre avec des règles ouvertes avant que tu les remplaces — une fois les règles de `firestore.rules` publiées, cet avertissement disparaît. Ce n'est toujours pas une sécurité "de niveau bancaire" (pas d'authentification réelle des participants), mais ça protège contre la modification/suppression malveillante et contre les robots qui scannent le web au hasard. Pour une vraie authentification, Firebase propose "Firebase Authentication" — une évolution possible plus tard si besoin.

### Étape 3 — Coller ta config dans le site

1. Ouvre le fichier `js/firebase-config.js`
2. Remplace les valeurs `"REMPLACE_MOI"` par celles copiées à l'étape 1, par exemple :

```js
const firebaseConfig = {
  apiKey: "AIzaSyABCDEF1234567890",
  authDomain: "la-commando.firebaseapp.com",
  projectId: "la-commando",
  storageBucket: "la-commando.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

3. Sauvegarde, recharge le site — regarde en bas de l'écran d'accueil du dashboard, tu dois voir **"🟢 Connecté — les réponses sont partagées avec toute la Commando"**

À partir de là, tout ce que chaque participant remplit dans le questionnaire (météo, note, musique, recommandations, besoins, anecdote texte) et tous les mots doux écrits sont sauvegardés et visibles par tout le monde, en temps réel.

### Ce qui est partagé, et ce qui ne l'est pas (pour l'instant)

| Contenu | Partagé entre tous ? |
|---|---|
| Météo, note, musique du mois, recommandations, besoins | ✅ Oui |
| Anecdote (texte) | ✅ Oui |
| Anecdote (photo) | ❌ Non — reste sur ton écran uniquement |
| Mots doux (texte) | ✅ Oui |
| Mots doux (note vocale) | ❌ Non — reste sur ton écran uniquement |
| Textes du mode admin (créa + lettre du mois) | ✅ Oui |

Les photos et notes vocales ne sont pas envoyées à Firestore car ce service est pensé pour du texte (limite de 1 Mo par entrée). Pour les partager aussi, il faudrait ajouter **Firebase Storage** — une évolution possible, mais qui demande un peu plus de configuration. Demande si tu veux qu'on l'ajoute.

## 🎭 Changer les personnages

Les 6 personnages sont de simples fichiers image dans `assets/characters/`. Pour en remplacer un :

1. Prépare ta nouvelle image :
   - Format **PNG avec fond transparent** (pas de fond blanc/coloré autour du personnage)
   - Idéalement carrée ou proche, entre 600 et 900 px de large
2. Renomme-la exactement comme le fichier que tu remplaces (ex. `char_258.png`)
3. Remplace le fichier dans `assets/characters/`
4. Recharge le site — c'est tout, aucune autre modification nécessaire

**Pour changer le nom** d'un personnage (ex. "Poisson-Lune" → autre chose) : ouvre `js/app.js`, cherche `const CHARACTERS = [`, modifie le champ `name` correspondant.

**Pour ajouter un 7ᵉ personnage** (au lieu de remplacer) : ajoute ton PNG dans `assets/characters/`, ajoute son chemin dans `js/assets-map.js`, puis ajoute une ligne dans `CHARACTERS` (`js/app.js`) avec un nouvel `id` unique.

## 🔐 Mode admin (modifier les textes du mois)

Un mode admin intégré permet de changer, sans toucher au code :
- Le titre et le texte de **la créa du mois**
- Le texte et la citation de **la lettre du mois**

**Comment y accéder :** sur l'écran de connexion, tout en bas, clique sur le petit lien **"Mode admin"**. Mot de passe par défaut : `commando2026`.

> ⚠️ Ce mot de passe est écrit en clair dans `js/app.js` (cherche `ADMIN_PASSWORD`) — ce n'est pas une vraie sécurité, juste un filtre pour éviter qu'un participant curieux tombe dessus par hasard. Change-le si tu veux, mais ne t'en sers pas pour protéger des informations sensibles.

**Sans Firebase configuré** : les changements ne sont visibles que dans ton propre navigateur, le temps de la session (comme le reste du mode démo).

**Avec Firebase configuré** : les changements sont sauvegardés dans Firestore et **visibles instantanément par toute la Commando**, sans qu'ils aient besoin de recharger la page.

## 🌍 Mettre le site en ligne (GitHub Pages, gratuit)

1. Crée un dépôt GitHub, mets-y tout le contenu de ce dossier (`index.html`, `css/`, `js/`, `assets/`)
2. Dans le dépôt GitHub → **Settings → Pages**
3. Source : **Deploy from a branch**, branche `main`, dossier `/ (root)`
4. Sauvegarde — GitHub te donne une adresse du type `https://ton-pseudo.github.io/la-commando/`
5. Partage ce lien à ta Commando 🎉

## 📁 Structure du projet

```
la-commando/
├── index.html              → structure de la page
├── css/style.css           → toute l'apparence (couleurs, mise en page)
├── js/
│   ├── firebase-config.js  → tes identifiants Firebase (à remplir)
│   ├── assets-map.js       → chemins des images
│   └── app.js               → toute la logique du site
├── assets/
│   ├── characters/          → les 6 personnages (PNG détourés)
│   └── backgrounds/         → les fonds immersifs (JPG)
└── README.md                → ce fichier
```

## ✏️ Personnaliser

- **Couleurs / typographies** : tout est en variables CSS en haut de `css/style.css` (`:root { --terracotta: ... }`)
- **Textes des rubriques** (lettre du mois, créa du mois...) : directement dans `index.html`, et dans les tableaux `LETTRES_DU_MOIS`, etc. de `js/app.js`
- **Code d'accès** : actuellement tout code non vide fonctionne (page de connexion symbolique). Pour un vrai contrôle d'accès, il faudrait ajouter une vérification côté Firebase.
- **Rubriques masquées** ("Viens on joue", "Binôme du mois") : leur code est toujours présent, juste caché (`style="display:none;"` dans `index.html`) — cherche `id="open-jouer"` ou `id="open-binome"` pour les réactiver.

## 🐛 Limites connues

- Pas d'authentification réelle — le code d'accès est symbolique, pas une vraie sécurité
- Photos et notes vocales non partagées entre participants (voir tableau ci-dessus)
- Le classement des jeux (blind test, mémoire, quiz, imitation) reste local à chaque navigateur — la rubrique "Viens on joue" est d'ailleurs masquée par défaut
- "Ton binôme du mois" tire un binôme uniquement pour la personne qui clique — pas de vraie réciprocité entre deux comptes (ça demanderait une logique d'appariement côté serveur)
