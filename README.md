# Portfolio GRC — Aurielle NJANEN

> Portfolio personnel de projets en **Gouvernance, Risque, Conformité** et **Cybersécurité**.
> Construit à Douala, Cameroun. Objectif : poste junior GRC en Big Four.

🔗 **Site en ligne :** https://github.com/Aurielle-hash/portfolio/

---

## 🌐 Bilingue FR / EN

Le site propose un sélecteur `FR / EN` dans la navigation. Le choix est persisté dans `localStorage` et bascule en une seconde :

- L'intégralité des textes (hero, about, projets, skills, contact, footer)
- Les fiches projets et leur modale (contexte, méthodologie, trouvailles, livrables, compétences)
- Le PDF téléchargé depuis chaque projet (version FR ou EN selon la langue active)

## 📁 Structure du projet

```
portfolio-grc/
├── index.html                       # Structure HTML
├── styles.css                       # Tous les styles
├── script.js                        # i18n + données des projets + logique
├── Projet EY Audit(FR).pdf          # Livrable projet 01 — FR
├── Projet EY Audit(EN).pdf          # Livrable projet 01 — EN
├── IT RISK ASSESSMENT(FR).pdf       # Livrable projet 02 — FR
├── IT RISK ASSESSMENT(EN).pdf       # Livrable projet 02 — EN
└── README.md
```

## 🛠️ Stack technique

- **HTML/CSS/JS vanilla** — aucune dépendance, aucun build
- **Google Fonts** — Fraunces, Inter, JetBrains Mono
- **Hébergement** — GitHub Pages (gratuit)

## ✏️ Ajouter un nouveau projet

Ouvre `script.js`, trouve l'objet `PROJECTS` et ajoute un nouveau bloc. Les champs textuels peuvent être soit une simple chaîne (commune FR/EN), soit un objet `{ fr, en }` pour une version bilingue :

```javascript
{
  id: 3,
  num: { fr: "Projet 03", en: "Project 03" },
  status: { fr: "Terminé", en: "Completed" },
  disabled: false,
  title: "Mon nouveau",
  titleEm: "projet",
  subtitle: {
    fr: "Phrase d'accroche du projet.",
    en: "Project tagline."
  },
  shortDesc: {
    fr: "Description courte affichée sur la carte.",
    en: "Short card description."
  },
  tags: ["Tag1", "Tag2", "Tag3"],
  context: { fr: "Contexte…", en: "Context…" },
  methodology: {
    fr: ["<strong>Étape 1.</strong> …", "<strong>Étape 2.</strong> …"],
    en: ["<strong>Step 1.</strong> …", "<strong>Step 2.</strong> …"]
  },
  findings:     { fr: ["…"], en: ["…"] },
  deliverables: { fr: ["…"], en: ["…"] },
  skills: ["Compétence 1", "Compétence 2"],
  documentUrl: {
    fr: "mon_projet_FR.pdf",
    en: "mon_projet_EN.pdf"
  }
}
```

Sauvegarde, recharge la page : le projet apparaît automatiquement dans les deux langues.

## 🔧 Développement local

Avec **VS Code** + extension **Live Server** :
1. Ouvrir le dossier dans VS Code
2. Clic droit sur `index.html` → "Open with Live Server"
3. Le navigateur recharge à chaque sauvegarde

## 📦 Mise en production

```bash
git add .
git commit -m "Description de la modification"
git push
```

GitHub Pages redéploie automatiquement le site en 1-2 minutes.

## 📚 Projets inclus

| # | Projet | Frameworks | Statut |
|---|--------|-----------|--------|
| 01 | EY Audit Simulation — FoodCo | EY Global Audit, ISA, ISO 27001 | ✅ Terminé |
| 02 | IT Risk Assessment — Bank Transactions | NIST SP 800-30, AML, OIR | ✅ Terminé |

---

© 2026 Aurielle NJANEN
