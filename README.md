# Portfolio

Portfolio personnel — **React 19 + Vite 7**, sans framework CSS.
Thème **gris clair par défaut** avec bascule mode sombre, et site **bilingue FR / EN**.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère dist/
npm run preview
```

## Personnaliser

Presque tout se trouve dans **un seul fichier** : `src/data/portfolio.js`.

| Quoi | Où |
| --- | --- |
| Nom, initiales, email, téléphone, WhatsApp, ville, CV | `profile` |
| Réseaux sociaux | `socials` |
| Barres de compétences | `skills` |
| Bandeau défilant de technologies | `techStack` |
| Tous les textes FR | `content.fr` |
| Tous les textes EN | `content.en` |
| Services, parcours, projets | `content.<lang>.services / experience / projects` |

### 📁 Où déposer tes images et ton CV

Tout va dans le dossier **`public/`** à la racine du projet. Les fichiers actuels sont des
**placeholders SVG** : remplace-les par tes vrais fichiers.

```
myportfolio/
└── public/
    ├── favicon.svg              ← icône de l'onglet du navigateur
    ├── files/
    │   └── cv.pdf               ← 📄 DÉPOSE TON CV ICI (garde ce nom exact)
    └── images/
        ├── photo.jpg            ← 📷 TA PHOTO (grande, section d'accueil)
        ├── photo-about.jpg      ← 📷 TA PHOTO (section « À propos »)
        ├── project-1.png        ← Sécurité sociale
        ├── project-2.png        ← Plateforme de gestion de cours
        ├── project-3.png        ← Allocation ressources restaurant
        ├── project-4.png        ← Gestion académique école primaire
        └── project-5.png        ← Chiffrement SDITH
```

**Deux étapes :**

1. Copie tes fichiers dans `public/images/` (et ton CV dans `public/files/cv.pdf`).
2. Si ton fichier n'a pas la même extension que le placeholder (`.jpg`/`.png` au lieu de
   `.svg`), corrige le chemin dans `src/data/portfolio.js` :

```js
// dans profile
photo: "/images/photo.jpg",         // au lieu de photo.svg
aboutPhoto: "/images/photo-about.jpg",
cvUrl: "/files/cv.pdf",

// dans content.fr.projects et content.en.projects
image: "/images/project-1.png",     // au lieu de project-1.svg
```

> ⚠️ Le chemin commence toujours par `/images/...` (sans `public/`) — c'est Vite qui
> sert le dossier `public` à la racine du site.

**Formats conseillés :** photo d'accueil en portrait ~800×1000 px, photo « À propos » carrée
~800×800 px, visuels de projets en 16/10 (~1200×750 px). Format `.jpg` pour les photos,
`.png` pour les captures d'écran, poids < 300 Ko chacun.

### Couleurs

Dans `src/styles.css`, en haut :

```css
:root { --accent: #ff6a00; }          /* couleur principale */
html[data-theme="light"] { --bg: #eef0f3; }  /* fond gris clair */
html[data-theme="dark"]  { --bg: #101216; }  /* fond sombre */
```

## Fonctionnalités

- Fond gris clair + bouton mode sombre (préférence mémorisée dans le navigateur)
- Bilingue FR/EN avec sélecteur (préférence mémorisée)
- Sections : Hero, technos défilantes, Services, À propos, Compétences, Parcours (timeline), Projets filtrables, Contact, Footer
- Navigation avec lien actif au scroll, menu mobile, bouton retour en haut
- Animations d'apparition au scroll, respect de `prefers-reduced-motion`
- Accessible : liens d'évitement, labels de formulaire, focus visibles, attributs ARIA
- 100 % responsive

## Formulaire de contact

Le formulaire ouvre le client mail de l'utilisateur (`mailto:`), aucun backend requis.
Pour recevoir les messages directement par email, branche un service comme
[Formspree](https://formspree.io) ou [Web3Forms](https://web3forms.com) dans
`src/components/Contact.jsx`.

## Déploiement sur Vercel

Le fichier `vercel.json` est déjà configuré. Il ne reste qu'à connecter le dépôt :

1. Va sur [vercel.com/new](https://vercel.com/new) et connecte-toi avec ton compte **GitHub**.
2. Clique sur **Import** en face du dépôt `Koghene/myportfolio`.
3. Vercel détecte automatiquement Vite — laisse les réglages par défaut
   (Build Command `npm run build`, Output Directory `dist`).
4. Dans **Settings → Git → Production Branch**, choisis la branche à publier
   (`main` après avoir fusionné, ou directement `arena/01a09fa5-myportfolio`).
5. Clique sur **Deploy**. Ton site sera en ligne sur `https://<nom-du-projet>.vercel.app`.

Ensuite, chaque `git push` redéploie automatiquement le site.

### En ligne de commande (alternative)

```bash
npx vercel login
npx vercel --prod
```

## Reste à compléter

- [x] Email : `makeunediane@gmail.com`
- [x] Téléphone et WhatsApp : `+237 672 71 57 35`
- [x] GitHub : `github.com/Koghene`
- [x] Les 5 projets (titres et descriptions, FR + EN)
- [ ] Tes **photos** dans `public/images/` → voir la section « Où déposer tes images »
- [ ] Ton **CV** dans `public/files/cv.pdf`
- [ ] Ton lien **LinkedIn** (ligne commentée dans `socials`)
- [ ] Les **captures d'écran** de tes 5 projets (`project-1.png` … `project-5.png`)
- [ ] Les **liens démo/code** de tes projets (champs `demo` et `code`, actuellement `"#"`)
- [ ] Ton **parcours** dans `content.fr.experience` / `content.en.experience` (école, entreprises, années)
- [ ] Les **statistiques** du hero (`content.<lang>.stats`)
