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

### Images et fichiers

Dépose tes fichiers dans `public/` puis mets à jour les chemins :

- `public/images/photo.svg` → ta photo du hero (`profile.photo`)
- `public/images/photo-about.svg` → photo section « À propos » (`profile.aboutPhoto`)
- `public/images/project-1.svg` … → visuels des projets
- `public/files/cv.pdf` → ton CV (`profile.cvUrl`)
- `public/favicon.svg` → icône de l'onglet

Les images actuelles sont des placeholders SVG : remplace-les par des `.jpg`/`.png` et
adapte l'extension dans `portfolio.js`.

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

## Déploiement

Vercel ou Netlify : build `npm run build`, dossier de sortie `dist`.
