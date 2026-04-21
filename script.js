/* =========================================================
   I18N — textes statiques + listes (stack, compétences)
   ========================================================= */
const TRANSLATIONS = {
  fr: {
    navAbout: "À propos",
    navProjects: "Projets",
    navSkills: "Compétences",
    navContact: "Contact",

    heroLabel: "Portfolio 2026 — GRC & Cybersécurité",
    heroLine1: "Gouvernance.",
    heroLine2: "Risque.",
    heroLine3: "Conformité.",
    metaBasedLabel: "Basé à",
    metaBasedValue: "Douala, Cameroun",
    metaGoalLabel: "Objectif",
    metaGoalValue: "Junior GRC — Big Four",
    metaFrameLabel: "Frameworks",
    metaFrameValue: "ISO 27001 · NIST · RGPD",
    metaApproachLabel: "Approche",
    metaApproachValue: "Project-based learning",

    aboutNum: "01 — À propos",
    aboutH2: `Je construis un parcours GRC à partir d'un <em style="color:var(--accent); font-style:italic;">profil technique</em>, projet après projet.`,
    aboutP1: `Mon approche est strictement <strong>project-based</strong> : chaque compétence est acquise en l'appliquant sur un cas concret, puis documentée au niveau de qualité attendu dans un cabinet Big Four.`,
    aboutP2: `Ce portfolio réunit mes livrables d'audit, de risk management et de cybersécurité. Chaque projet inclut sa méthodologie, ses livrables et le raisonnement professionnel derrière chaque choix — ce qui compte en entretien, c'est le <em style="color:var(--accent);">pourquoi</em>, pas seulement le <em style="color:var(--accent);">quoi</em>.`,
    aboutSideTitle: "— Stack méthodologique",
    stack: [
      ["ISO 27001", "Annexe A"],
      ["NIST SP 800-30", "Risk"],
      ["NIST CSF", "2.0"],
      ["RGPD", "Conformité"],
      ["ISO 31000", "Risk mgmt"],
      ["PCI-DSS", "v4.0"],
      ["EY Global Audit", "Méthodo"]
    ],

    projectsNum: "02 — Projets",
    projectsH2: "Travaux <em>sélectionnés</em>",

    skillsNum: "03 — Compétences",
    skillsH2: "Ce que je sais <em>faire</em>",
    skillAuditTitle: "— Audit & Compliance",
    skillAuditItems: [
      "Audit de processus (P2P, O2C)",
      "Analyse PESTEL sectorielle",
      "Évaluation du RoMM",
      "Tests de contrôles & substance",
      "Framework OIR (reporting)"
    ],
    skillRiskTitle: "— Risk Management",
    skillRiskItems: [
      "Registre des risques",
      "Heat map inhérent/résiduel",
      "Plan de traitement des risques",
      "Analyse NIST SP 800-30",
      "Cartographie réglementaire"
    ],
    skillCyberTitle: "— Cybersécurité",
    skillCyberItems: [
      "ITGC (IAM, Change Mgmt)",
      "ISO 27001 Annexe A",
      "Détection d'anomalies / fraude",
      "AML (Layering, Structuration)",
      "Threat modeling"
    ],
    skillSoftTitle: "— Soft skills",
    skillSoftItems: [
      "Communication client exigeant",
      "Rédaction technique FR/EN",
      "Professional skepticism",
      "Structuration de réunion",
      "Vulgarisation de l'analyse"
    ],

    contactNum: "04 — Contact",
    contactH2: "Parlons de votre <em>prochain audit.</em>",
    contactDesc: "Ouvert aux opportunités de stage et poste junior en GRC, audit et cybersécurité à Douala et à distance.",

    footer: "© 2026 Aurielle NJANEN · Portfolio GRC · Construit à Douala",

    modalContext: "— Contexte",
    modalMethodology: "— Méthodologie appliquée",
    modalFindings: "— Principales trouvailles",
    modalDeliverables: "— Livrables",
    modalSkills: "— Vocabulaire & concepts maîtrisés",
    modalDocument: "— Document complet",
    modalDownload: "Télécharger le PDF →",

    closeAria: "Fermer",
    menuAria: "Menu",

    pageTitle: "Aurielle NJANEN — Portfolio GRC & Cybersécurité",
    pageDescription: "Portfolio de projets en Gouvernance, Risque, Conformité et Cybersécurité."
  },
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Skills",
    navContact: "Contact",

    heroLabel: "2026 Portfolio — GRC & Cybersecurity",
    heroLine1: "Governance.",
    heroLine2: "Risk.",
    heroLine3: "Compliance.",
    metaBasedLabel: "Based in",
    metaBasedValue: "Douala, Cameroon",
    metaGoalLabel: "Goal",
    metaGoalValue: "Junior GRC — Big Four",
    metaFrameLabel: "Frameworks",
    metaFrameValue: "ISO 27001 · NIST · GDPR",
    metaApproachLabel: "Approach",
    metaApproachValue: "Project-based learning",

    aboutNum: "01 — About",
    aboutH2: `I'm building a GRC career from a <em style="color:var(--accent); font-style:italic;">technical background</em>, one project at a time.`,
    aboutP1: `My approach is strictly <strong>project-based</strong>: every skill is acquired by applying it to a real case, then documented at the quality level expected in a Big Four firm.`,
    aboutP2: `This portfolio brings together my audit, risk management and cybersecurity deliverables. Each project includes its methodology, deliverables and the professional reasoning behind every choice — what matters in an interview is the <em style="color:var(--accent);">why</em>, not just the <em style="color:var(--accent);">what</em>.`,
    aboutSideTitle: "— Methodology stack",
    stack: [
      ["ISO 27001", "Annex A"],
      ["NIST SP 800-30", "Risk"],
      ["NIST CSF", "2.0"],
      ["GDPR", "Compliance"],
      ["ISO 31000", "Risk mgmt"],
      ["PCI-DSS", "v4.0"],
      ["EY Global Audit", "Method"]
    ],

    projectsNum: "02 — Projects",
    projectsH2: "Selected <em>work</em>",

    skillsNum: "03 — Skills",
    skillsH2: "What I can <em>do</em>",
    skillAuditTitle: "— Audit & Compliance",
    skillAuditItems: [
      "Process audit (P2P, O2C)",
      "Sector PESTEL analysis",
      "RoMM assessment",
      "Controls & substantive testing",
      "OIR reporting framework"
    ],
    skillRiskTitle: "— Risk Management",
    skillRiskItems: [
      "Risk register",
      "Inherent/residual heat map",
      "Risk treatment plan",
      "NIST SP 800-30 analysis",
      "Regulatory mapping"
    ],
    skillCyberTitle: "— Cybersecurity",
    skillCyberItems: [
      "ITGC (IAM, Change Mgmt)",
      "ISO 27001 Annex A",
      "Anomaly / fraud detection",
      "AML (Layering, Structuring)",
      "Threat modeling"
    ],
    skillSoftTitle: "— Soft skills",
    skillSoftItems: [
      "Demanding-client communication",
      "Technical writing FR/EN",
      "Professional skepticism",
      "Meeting structuring",
      "Analysis vulgarization"
    ],

    contactNum: "04 — Contact",
    contactH2: "Let's talk about your <em>next audit.</em>",
    contactDesc: "Open to internship and junior opportunities in GRC, audit and cybersecurity — Douala and remote.",

    footer: "© 2026 Aurielle NJANEN · GRC Portfolio · Built in Douala",

    modalContext: "— Context",
    modalMethodology: "— Methodology applied",
    modalFindings: "— Key findings",
    modalDeliverables: "— Deliverables",
    modalSkills: "— Vocabulary & concepts mastered",
    modalDocument: "— Full document",
    modalDownload: "Download PDF →",

    closeAria: "Close",
    menuAria: "Menu",

    pageTitle: "Aurielle NJANEN — GRC & Cybersecurity Portfolio",
    pageDescription: "Portfolio of projects in Governance, Risk, Compliance and Cybersecurity."
  }
};

/* =========================================================
   PROJECTS DATA — chaque champ localisable prend la forme
   { fr: "...", en: "..." }
   ========================================================= */
const PROJECTS = [
  {
    id: 1,
    num: { fr: "Projet 01", en: "Project 01" },
    status: { fr: "Terminé", en: "Completed" },
    disabled: false,
    title: "EY Audit",
    titleEm: "Simulation",
    subtitle: {
      fr: "Mission d'audit des états financiers — client FoodCo, 180 restaurants cotés.",
      en: "Financial-statements audit — client FoodCo, 180 publicly-listed restaurants."
    },
    shortDesc: {
      fr: "Simulation complète d'un audit EY sur 4 tâches : planification PESTEL, évaluation des risques P2P, tests ITGC et tests de substance.",
      en: "Complete EY audit simulation across 4 tasks: PESTEL planning, P2P risk assessment, ITGC testing and substantive testing."
    },
    tags: ["EY", "Audit", "PESTEL", "P2P", "ITGC", "Going concern"],
    context: {
      fr: "Simulation Forage du programme EY Audit. Rôle d'auditeur junior sur un scénario réel : FoodCo, chaîne cotée de 180 restaurants dans 3 pays. Objectif : produire une opinion d'audit sur les états financiers annuels.",
      en: "Forage simulation of the EY Audit program. Junior-auditor role on a real scenario: FoodCo, a publicly-listed chain of 180 restaurants across 3 countries. Objective: deliver an audit opinion on the annual financial statements."
    },
    methodology: {
      fr: [
        "<strong>Tâche 1 — Planification.</strong> Analyse PESTEL des articles de presse pour identifier les facteurs externes impactant les comptes de FoodCo (inflation, réglementation, concurrence).",
        "<strong>Tâche 2 — Comptes significatifs.</strong> Cartographie du cycle Purchase-to-Pay en 8 étapes et attribution des risques d'anomalies significatives (RoMM) aux comptes concernés.",
        "<strong>Tâche 3 — Tests de contrôles.</strong> Évaluation des ITGC (IAM et Change Management) du système d'approvisionnement ABC, avec correspondance explicite à l'Annexe A de l'ISO 27001.",
        "<strong>Tâche 4 — Tests de substance.</strong> Analyse transactionnelle du grand livre via Accounts Analyzer (détection de 3 anomalies majeures) puis revue critique du modèle de cash flow prévisionnel (5 erreurs identifiées justifiant une dépréciation du goodwill)."
      ],
      en: [
        "<strong>Task 1 — Planning.</strong> PESTEL analysis of press articles to identify external factors impacting FoodCo's accounts (inflation, regulation, competition).",
        "<strong>Task 2 — Significant accounts.</strong> Mapping the Purchase-to-Pay cycle in 8 steps and assigning Risk of Material Misstatement (RoMM) to each affected account.",
        "<strong>Task 3 — Controls testing.</strong> ITGC assessment (IAM and Change Management) of the ABC procurement system, with explicit mapping to ISO 27001 Annex A.",
        "<strong>Task 4 — Substantive testing.</strong> Transactional general-ledger analysis via Accounts Analyzer (3 major anomalies detected) and critical review of the forecast cash-flow model (5 errors identified justifying a goodwill impairment)."
      ]
    },
    findings: {
      fr: [
        "<strong>Fonds de roulement négatif de 94 M USD</strong> → risque de continuité d'exploitation (going concern) à divulguer.",
        "<strong>Concentration des écritures manuelles</strong> sur un seul employé → red flag de séparation des tâches défaillante.",
        "<strong>Divergence revenus/créances</strong> (-18 M USD / +5 M USD) → hypothèse de revenus fictifs à investiguer.",
        "<strong>Cash flow surévalué</strong> : croissance 10% irréaliste, coûts d'intrants figés, salaires sous-estimés, erreur de formule en année 5."
      ],
      en: [
        "<strong>Negative working capital of USD 94M</strong> → going-concern risk to be disclosed.",
        "<strong>Manual journal entries concentrated</strong> on a single employee → red flag of broken segregation of duties.",
        "<strong>Revenue vs. receivables divergence</strong> (-USD 18M / +USD 5M) → hypothesis of fictitious revenue to investigate.",
        "<strong>Overstated cash flow</strong>: unrealistic 10% growth, frozen input costs, understated salaries, formula error in year 5."
      ]
    },
    deliverables: {
      fr: ["Matrice PESTEL FoodCo", "Cartographie des risques P2P", "Synthèse ITGC/ISO 27001", "Rapport OIR structuré"],
      en: ["FoodCo PESTEL matrix", "P2P risk mapping", "ITGC / ISO 27001 summary", "Structured OIR report"]
    },
    skills: ["Professional skepticism", "Materiality", "RoMM", "Control reliance", "Substantive testing", "Going concern", "Impairment charge"],
    documentUrl: {
      fr: "Projet EY Audit(FR).pdf",
      en: "Projet EY Audit(EN).pdf"
    }
  },
  {
    id: 2,
    num: { fr: "Projet 02", en: "Project 02" },
    status: { fr: "Terminé", en: "Completed" },
    disabled: false,
    title: "IT Risk",
    titleEm: "Assessment",
    subtitle: {
      fr: "Analyse de sécurité d'un système de transactions bancaires — 50 000 enregistrements, méthodologie NIST SP 800-30.",
      en: "Security analysis of a banking-transaction system — 50,000 records, NIST SP 800-30 methodology."
    },
    shortDesc: {
      fr: "Évaluation IT Risk en 3 phases (Prepare / Conduct / Communicate) sur un dataset Kaggle bancaire. 26 scénarios identifiés, 2 critiques, exposition cumulée > 16 M USD.",
      en: "3-phase IT Risk assessment (Prepare / Conduct / Communicate) on a Kaggle banking dataset. 26 scenarios identified, 2 critical, cumulative exposure > USD 16M."
    },
    tags: ["NIST SP 800-30", "AML", "Fraud detection", "OIR", "Excel"],
    context: {
      fr: "Exercice hands-on de détection d'anomalies de sécurité appliqué à un dataset bancaire Kaggle (50 000 transactions, 15 colonnes). Le dataset est traité comme un registre critique : altération, corruption ou accès non autorisé compromettent toutes les décisions basées sur son contenu. Approche à la croisée de la cybersécurité, de la conformité AML et de la gouvernance des données.",
      en: "Hands-on security-anomaly detection exercise applied to a Kaggle banking dataset (50,000 transactions, 15 columns). The dataset is treated as a critical register: tampering, corruption or unauthorized access compromise every decision made from it. An approach at the intersection of cybersecurity, AML compliance and data governance."
    },
    methodology: {
      fr: [
        "<strong>Phase 1 — Préparer.</strong> Cadrage du dataset comme artefact organisationnel critique, identification des 4 surfaces d'exposition (identité, accès, réseau, flux financiers) et formulation des questions génératrices.",
        "<strong>Phase 2 — Conduire.</strong> Inspection sous Excel (filtres, NB.SI.ENS, tableaux croisés dynamiques) pour matérialiser 13 signaux internes (Brute Force, Account Takeover, Device compromis, Structuration AML, Layering, Botnet, Card Testing, Money Mule, Impossibilité géographique…) puis 9 scénarios croisés.",
        "<strong>Phase 3 — Communiquer.</strong> Scoring NIST (L1 × L2 → L_Overall × Impact) de chaque scénario sur l'échelle 1–25, matrice de risques 5×5, puis 5 rapports OIR (Observation / Impact / Recommandation) adressés aux bonnes audiences (RSSI, Direction, Compliance, SOC, DPO)."
      ],
      en: [
        "<strong>Phase 1 — Prepare.</strong> Framing the dataset as a critical organizational artifact, identifying the 4 exposure surfaces (identity, access, network, financial flows) and formulating the generative questions.",
        "<strong>Phase 2 — Conduct.</strong> Inspection in Excel (filters, COUNTIFS, pivot tables) to surface 13 internal signals (Brute Force, Account Takeover, compromised device, AML structuring, Layering, Botnet, Card Testing, Money Mule, Impossible geography…) and 9 cross-signal scenarios.",
        "<strong>Phase 3 — Communicate.</strong> NIST scoring (L1 × L2 → L_Overall × Impact) of each scenario on a 1–25 scale, 5×5 risk matrix, and 5 OIR (Observation / Impact / Recommendation) reports tailored to each audience (CISO, Executives, Compliance, SOC, DPO)."
      ]
    },
    findings: {
      fr: [
        "<strong>Défaillance critique des timestamps (25/25)</strong> : 47 488 / 50 000 enregistrements (94,9 %) sans heure précise — l'audit trail perd sa valeur probatoire.",
        "<strong>Violation de solde (25/25)</strong> : 1 708 transactions Debit supérieures au solde disponible — défaillance du contrôle applicatif.",
        "<strong>Comptes compromis (20/25)</strong> : 471 Account Takeovers potentiels + 355 comptes en impossibilité géographique (même compte, 2 villes le même jour).",
        "<strong>Structuration AML (20/25)</strong> : 2 446 paires compte-marchand avec rafales > 5 transactions (record : 42 tx vers un même marchand).",
        "<strong>Botnet confirmé (20/25)</strong> : 552 IPs multi-comptes, dont une IP pivotant sur 13 comptes distincts.",
        "<strong>Exposition financière cumulée > 16 M USD</strong> sur les scénarios critiques et très élevés."
      ],
      en: [
        "<strong>Critical timestamp failure (25/25)</strong>: 47,488 / 50,000 records (94.9%) without precise time — the audit trail loses its evidentiary value.",
        "<strong>Balance violation (25/25)</strong>: 1,708 Debit transactions exceeding available balance — application-control failure.",
        "<strong>Compromised accounts (20/25)</strong>: 471 potential Account Takeovers + 355 accounts in impossible-geography conditions (same account, 2 cities, same day).",
        "<strong>AML structuring (20/25)</strong>: 2,446 account-merchant pairs with bursts > 5 transactions (record: 42 tx to a single merchant).",
        "<strong>Confirmed botnet (20/25)</strong>: 552 multi-account IPs, including one IP pivoting across 13 distinct accounts.",
        "<strong>Cumulative financial exposure > USD 16M</strong> across critical and very-high scenarios."
      ]
    },
    deliverables: {
      fr: ["Matrice de risques 5×5 (26 scénarios)", "Fichier Excel 6 onglets", "5 rapports OIR ciblés", "Glossaire 25 termes + bibliographie"],
      en: ["5×5 risk matrix (26 scenarios)", "6-tab Excel workbook", "5 targeted OIR reports", "25-term glossary + bibliography"]
    },
    skills: ["NIST SP 800-30", "L1 × L2", "Risk matrix 5×5", "OIR framework", "AML", "Layering", "Smurfing", "Money Mule", "Account Takeover", "Botnet", "Card Testing", "Audit trail", "Non-repudiation"],
    documentUrl: {
      fr: "IT RISK ASSESSMENT(FR).pdf",
      en: "IT RISK ASSESSMENT(EN).pdf"
    }
  }
];

/* =========================================================
   LANGUAGE STATE
   ========================================================= */
let LANG = (localStorage.getItem('lang') === 'en') ? 'en' : 'fr';

function t(value) {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value;
  if (typeof value === 'object') return value[LANG] ?? value.fr ?? value.en ?? '';
  return value;
}

/* =========================================================
   RENDER
   ========================================================= */
let currentProject = null;

const grid = document.getElementById('projectsGrid');
const overlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function renderStaticTexts() {
  const dict = TRANSLATIONS[LANG];

  document.documentElement.lang = LANG;
  document.title = dict.pageTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', dict.pageDescription);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined && typeof dict[key] === 'string') {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (dict[key]) el.setAttribute('aria-label', dict[key]);
  });

  // Stack (about-side)
  const stackList = document.getElementById('stackList');
  if (stackList) {
    stackList.innerHTML = dict.stack
      .map(([term, detail]) => `<li>${term} <span>${detail}</span></li>`)
      .join('');
  }

  // Skills
  const skillMap = [
    ['skillAudit', 'skillAuditTitle', 'skillAuditItems'],
    ['skillRisk', 'skillRiskTitle', 'skillRiskItems'],
    ['skillCyber', 'skillCyberTitle', 'skillCyberItems'],
    ['skillSoft', 'skillSoftTitle', 'skillSoftItems']
  ];
  skillMap.forEach(([blockId, titleKey, itemsKey]) => {
    const block = document.getElementById(blockId);
    if (!block) return;
    block.querySelector('h3').textContent = dict[titleKey];
    block.querySelector('ul').innerHTML = dict[itemsKey]
      .map(item => `<li>${item}</li>`)
      .join('');
  });

  // Language toggle active state
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === LANG);
  });
}

function renderProjectCards() {
  grid.innerHTML = '';
  PROJECTS.forEach(p => {
    const card = document.createElement('button');
    card.className = 'project-card' + (p.disabled ? ' disabled' : '');
    card.innerHTML = `
      <div class="card-num">
        <span>${t(p.num)}</span>
        <span class="card-status">${t(p.status)}</span>
      </div>
      <div>
        <h3>${p.title} <em>${p.titleEm}</em></h3>
        <p class="card-desc">${t(p.shortDesc)}</p>
      </div>
      <div class="card-tags">
        ${p.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="card-arrow">↗</div>
    `;
    if (!p.disabled) {
      card.addEventListener('click', () => openModal(p));
    }
    grid.appendChild(card);
  });
}

function openModal(p) {
  currentProject = p;
  const dict = TRANSLATIONS[LANG];
  const methodology = t(p.methodology) || [];
  const findings = t(p.findings) || [];
  const deliverables = t(p.deliverables) || [];
  const skills = t(p.skills) || [];
  const docUrl = t(p.documentUrl);

  modalContent.innerHTML = `
    <div class="modal-num">${t(p.num)} — ${t(p.status)}</div>
    <h2>${p.title} <em>${p.titleEm}</em></h2>
    <p class="modal-subtitle">${t(p.subtitle)}</p>

    <div class="modal-section">
      <h3>${dict.modalContext}</h3>
      <p>${t(p.context)}</p>
    </div>

    ${methodology.length ? `
    <div class="modal-section">
      <h3>${dict.modalMethodology}</h3>
      <ul>${methodology.map(m => `<li>${m}</li>`).join('')}</ul>
    </div>` : ''}

    ${findings.length ? `
    <div class="modal-section">
      <h3>${dict.modalFindings}</h3>
      <ul>${findings.map(f => `<li>${f}</li>`).join('')}</ul>
    </div>` : ''}

    ${deliverables.length ? `
    <div class="modal-section">
      <h3>${dict.modalDeliverables}</h3>
      <div class="modal-deliverables">
        ${deliverables.map(d => `<div class="deliverable">${d}</div>`).join('')}
      </div>
    </div>` : ''}

    ${skills.length ? `
    <div class="modal-section">
      <h3>${dict.modalSkills}</h3>
      <div class="modal-tags">
        ${skills.map(s => `<span class="tag">${s}</span>`).join('')}
      </div>
    </div>` : ''}

    ${docUrl ? `
    <div class="modal-section">
      <h3>${dict.modalDocument}</h3>
      <a href="${encodeURI(docUrl)}" target="_blank" rel="noopener" style="display:inline-block; padding:14px 24px; background:var(--accent); color:var(--bg); text-decoration:none; font-family:var(--font-mono); font-size:12px; text-transform:uppercase; letter-spacing:0.08em; font-weight:500;">${dict.modalDownload}</a>
    </div>` : ''}
  `;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  currentProject = null;
}

function setLang(lang) {
  if (lang !== 'fr' && lang !== 'en') return;
  LANG = lang;
  localStorage.setItem('lang', lang);
  renderStaticTexts();
  renderProjectCards();
  if (overlay.classList.contains('open') && currentProject) {
    openModal(currentProject);
  }
}

/* =========================================================
   INIT
   ========================================================= */
renderStaticTexts();
renderProjectCards();

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.querySelectorAll('[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

/* =========================================================
   NAV SCROLL EFFECT
   ========================================================= */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* =========================================================
   MOBILE BURGER
   ========================================================= */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

/* =========================================================
   INTERSECTION OBSERVER — reveal on scroll
   ========================================================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(s => {
  s.style.opacity = '0';
  s.style.transform = 'translateY(40px)';
  s.style.transition = 'opacity 0.9s var(--ease), transform 0.9s var(--ease)';
  observer.observe(s);
});
