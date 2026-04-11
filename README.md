# Portfolio GRC — Aurielle NJANEN

> Portfolio personnel de projets en **Gouvernance, Risque, Conformité** et **Cybersécurité**.
> Construit à Douala, Cameroun. Objectif : poste junior GRC en Big Four.

🔗 **Site en ligne :** https://Aurielle-hash.github.io/portfolio/

---

## 📁 Structure du projet

```
portfolio-grc/
├── index.html              # Structure HTML
├── styles.css              # Tous les styles
├── script.js               # Données des projets + logique
├── projet1_ey_audit.pdf    # Livrable du projet 1 (FR)
├── projet1_ey_audit_en.pdf # Livrable du projet 1 (EN)
└── README.md
```

## 🛠️ Stack technique

- **HTML/CSS/JS vanilla** — aucune dépendance, aucun build
- **Google Fonts** — Fraunces, Inter, JetBrains Mono
- **Hébergement** — GitHub Pages (gratuit)

## ✏️ Ajouter un nouveau projet

Ouvre `script.js`, trouve l'objet `PROJECTS` en haut du fichier et ajoute un nouveau bloc :

```javascript
{
  id: 4,
  num: "Projet 04",
  status: "Terminé",
  disabled: false,
  title: "Mon nouveau",
  titleEm: "projet",
  subtitle: "Phrase d'accroche du projet.",
  shortDesc: "Description courte affichée sur la carte.",
  tags: ["Tag1", "Tag2", "Tag3"],
  context: "Contexte détaillé du projet.",
  methodology: [
    "<strong>Étape 1.</strong> Description.",
    "<strong>Étape 2.</strong> Description."
  ],
  findings: [
    "Trouvaille 1.",
    "Trouvaille 2."
  ],
  deliverables: ["Livrable 1", "Livrable 2"],
  skills: ["Compétence 1", "Compétence 2"],
  documentUrl: "mon_projet.pdf"
}
```

Sauvegarde, recharge la page : le projet apparaît automatiquement.

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
| 02 | Risk Management — PaySecure | ISO 31000, NIST SP 800-30, PCI-DSS | 🔄 En cours |
| 03 | CREL Lab v1 | Docker, OpenCTI, Blue Team | 📋 Planifié |

---

© 2026 Aurielle NJANEN