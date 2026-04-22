# 📝 Todo App — React + Vite + Tailwind + DaisyUI

## Préambule

Dans le cadre de mon apprentissage de React, j'ai fait le choix délibéré de **partir directement sur un projet concret** plutôt que de suivre une progression purement théorique. L'objectif était de me confronter rapidement à une vue d'ensemble des notions essentielles à maîtriser : composants, state, props, hooks, typage TypeScript, gestion des événements, persistance des données, et organisation du code.

C'est dans ce processus d'apprentissage par la pratique que ce projet a vu le jour. Chaque fonctionnalité ajoutée a été l'occasion de comprendre un concept nouveau, de faire des erreurs, de les corriger, et d'approfondir ma compréhension de l'écosystème React moderne.

---

## Aperçu

Une application de gestion de tâches (Todo List) construite avec React, permettant de :

- Ajouter des tâches avec un niveau de priorité
- Filtrer les tâches par priorité
- Sélectionner et supprimer plusieurs tâches en même temps
- Marquer des tâches comme terminées
- Persister les données dans le localStorage

---

##  Fonctionnalités

- ✅ Ajout de tâches avec priorité (Urgente / Moyenne / Basse)
- 🔍 Filtrage par priorité avec compteurs en temps réel
- ☑️ Sélection multiple pour suppression groupée
- ✔️ Validation des tâches (marquées comme terminées)
- 💾 Sauvegarde automatique dans le localStorage
- 🎨 Thème sombre avec DaisyUI

---

##  Stack technique

| Technologie | Version | Rôle |
|-------------|---------|------|
| React | 19 | Interface utilisateur |
| TypeScript | 6 | Typage statique |
| Vite | 8 | Bundler & dev server |
| Tailwind CSS | 4 | Styles utilitaires |
| DaisyUI | 5 | Composants UI |
| Lucide React | latest | Icônes SVG |

---

## 📦 Installation

### Prérequis

- Node.js 18+
- npm ou yarn

### Cloner le projet

```bash
git clone https://github.com/ton-username/ton-repo.git
cd ton-repo
```

### Installer les dépendances

```bash
npm install
```

### Lancer en développement

```bash
npm run dev
```

Le projet tourne sur `http://localhost:5173`

### Builder pour la production

```bash
npm run build
```

---

## 📁 Structure du projet

```
src/
├── App.tsx          # Composant principal, logique & state
├── TodoItem.tsx     # Composant d'une tâche individuelle
├── index.css        # Imports Tailwind & DaisyUI
└── main.tsx         # Point d'entrée React
```

---

## 🎓 Notions React apprises

Ce projet m'a permis de mettre en pratique les concepts suivants :

- **Composants** — découpage de l'interface en composants réutilisables
- **Props** — communication parent → enfant avec typage TypeScript
- **useState** — gestion du state local (tâches, filtres, sélection)
- **useEffect** — synchronisation avec le localStorage
- **Rendu conditionnel** — affichage selon l'état de l'application
- **Listes & `.map()`** — affichage dynamique des tâches
- **Événements** — gestion des clics, changements d'input et de select
- **Types TypeScript** — `type`, unions, props typées
- **Set** — structure de données pour la sélection multiple

---

##  Configuration notable

### Tailwind v4 + DaisyUI v5

La combinaison Tailwind v4 et DaisyUI v5 nécessite une configuration spécifique dans `src/index.css` :

```css
@import "tailwindcss";
@import "daisyui/daisyui.css";
@import "daisyui/themes.css";
```

Et dans `vite.config.ts` :

```ts
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### Thème

Le thème est défini via l'attribut `data-theme` sur la balise `<html>` dans `index.html` :

```html
<html lang="fr" data-theme="night">
```

---

## ⚠️ Limitations

- Les données sont sauvegardées en **localStorage** — elles sont propres à chaque navigateur et ne sont pas partagées entre utilisateurs ou appareils.
- Pas de backend ni de base de données — une prochaine étape pourrait être d'intégrer **Supabase** ou **Firebase** pour une persistance réelle.

---

##  Prochaines étapes envisagées

- [ ] Ajout d'une authentification utilisateur
- [ ] Connexion à une base de données (Supabase)
- [ ] Modification d'une tâche existante
- [ ] Drag & drop pour réordonner les tâches
- [ ] Mode responsive mobile amélioré

---

## 👤 Auteur
**Bastou OURO-TAGBA**
