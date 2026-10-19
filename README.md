# REVUE TECH · Le Grand Dossier TNI & Journal des Innovations

Projet d'article de presse et magazine technologique en ligne, optimisé pour ordinateur et smartphone, prêt à être déployé sur **GitHub** et **Netlify**.

---

## 🚀 Guide de Déploiement : GitHub & Netlify

Le projet a été configuré avec `netlify.toml` et `public/_redirects` pour un déploiement instantané en continu.

### Étape 1 : Pousser le projet sur GitHub

1. Ouvrez votre terminal à la racine du projet :
```bash
git init
git add .
git commit -m "feat: initialisation du magazine technologique TNI & innovations"
```

2. Créez un nouveau dépôt sur votre compte [GitHub](https://github.com/new).

3. Liez votre dépôt distant et poussez vos fichiers :
```bash
git branch -M main
git remote add origin https://github.com/VOTRE_PSEUDO/NOM_DU_REPO.git
git push -u origin main
```

---

### Étape 2 : Déployer sur Netlify

1. Rendez-vous sur [Netlify.com](https://app.netlify.com/) et connectez-vous avec votre compte GitHub.
2. Cliquez sur **« Add new site »** > **« Import an existing project »**.
3. Sélectionnez **GitHub**, puis choisissez le dépôt que vous venez de créer.
4. Les paramètres de build sont **automatiquement détectés** grâce au fichier `netlify.toml` inclus :
   - **Build command :** `npm run build`
   - **Publish directory :** `dist`
   - **Node version :** `20`
5. Cliquez sur **« Deploy site »**. En moins de 60 secondes, votre site sera en ligne avec son URL publique sécurisée (HTTPS) !

---

## 🛠️ Commandes Locales

- **Démarrage en développement :**
  ```bash
  npm run dev
  ```
- **Vérification TypeScript & Linting :**
  ```bash
  npm run lint
  ```
- **Compilation de production :**
  ```bash
  npm run build
  ```

---

## 📂 Contenu Inclus

- **Grand Dossier TNI :** Article d'investigation sur les Tableaux Numériques Interactifs et la collaboration hybride.
- **3 Décryptages Visuels Immersifs :** Photos haute résolution avec pastilles interactives (Hotspots) techniques.
- **Lab Virtuel (Tableau Numérique) :** Canevas tactile avec dessin, post-its et simulation de vectorisation IA.
- **Kiosque d'Actualités :** Articles sur la robotique humanoïde, les processeurs quantiques et l'IA en entreprise.
- **Kit Soutenance :** Simulateur de rentabilité financière (ROI), matrice SWOT et réponses aux questions du jury.
