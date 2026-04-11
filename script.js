/* =========================================================
   PROJECTS DATA
   Pour ajouter un nouveau projet, copie-colle un objet
   dans ce tableau. Le site se met à jour automatiquement.
   ========================================================= */
const PROJECTS = [
  {
    id: 1,
    num: "Projet 01",
    status: "Terminé",
    disabled: false,
    title: "EY Audit",
    titleEm: "Simulation",
    subtitle: "Mission d'audit des états financiers — client FoodCo, 180 restaurants cotés.",
    shortDesc: "Simulation complète d'un audit EY sur 4 tâches : planification PESTEL, évaluation des risques P2P, tests ITGC et tests de substance.",
    tags: ["EY", "Audit", "PESTEL", "P2P", "ITGC", "Going concern"],
    context: "Simulation Forage du programme EY Audit. Rôle d'auditeur junior sur un scénario réel : FoodCo, chaîne cotée de 180 restaurants dans 3 pays. Objectif : produire une opinion d'audit sur les états financiers annuels.",
    methodology: [
      "<strong>Tâche 1 — Planification.</strong> Analyse PESTEL des articles de presse pour identifier les facteurs externes impactant les comptes de FoodCo (inflation, réglementation, concurrence).",
      "<strong>Tâche 2 — Comptes significatifs.</strong> Cartographie du cycle Purchase-to-Pay en 8 étapes et attribution des risques d'anomalies significatives (RoMM) aux comptes concernés.",
      "<strong>Tâche 3 — Tests de contrôles.</strong> Évaluation des ITGC (IAM et Change Management) du système d'approvisionnement ABC, avec correspondance explicite à l'Annexe A de l'ISO 27001.",
      "<strong>Tâche 4 — Tests de substance.</strong> Analyse transactionnelle du grand livre via Accounts Analyzer (détection de 3 anomalies majeures) puis revue critique du modèle de cash flow prévisionnel (5 erreurs identifiées justifiant une dépréciation du goodwill)."
    ],
    findings: [
      "<strong>Fonds de roulement négatif de 94 M USD</strong> → risque de continuité d'exploitation (going concern) à divulguer.",
      "<strong>Concentration des écritures manuelles</strong> sur un seul employé → red flag de séparation des tâches défaillante.",
      "<strong>Divergence revenus/créances</strong> (-18 M USD / +5 M USD) → hypothèse de revenus fictifs à investiguer.",
      "<strong>Cash flow surévalué</strong> : croissance 10% irréaliste, coûts d'intrants figés, salaires sous-estimés, erreur de formule en année 5."
    ],
    deliverables: [
      "Matrice PESTEL FoodCo",
      "Cartographie des risques P2P",
      "Synthèse ITGC/ISO 27001",
      "Rapport OIR structuré"
    ],
    skills: ["Professional skepticism", "Materiality", "RoMM", "Control reliance", "Substantive testing", "Going concern", "Impairment charge"],
    documentUrl: "projet1_ey_audit.pdf"
  },
  {
    id: 2,
    num: "Projet 02",
    status: "En cours",
    disabled: true,
    title: "Risk Management",
    titleEm: "PaySecure",
    subtitle: "Registre des risques, heat map et plan de traitement — client fictif fintech.",
    shortDesc: "Projet de risk management appliqué à PaySecure, opérateur de paiement fictif. Méthodologie ISO 31000 + NIST SP 800-30.",
    tags: ["ISO 31000", "NIST SP 800-30", "PCI-DSS", "RGPD"],
    context: "À venir.",
    methodology: [],
    findings: [],
    deliverables: [],
    skills: []
  },
  {
    id: 3,
    num: "Projet 03",
    status: "Planifié",
    disabled: true,
    title: "CREL Lab",
    titleEm: "v1",
    subtitle: "Lab Docker cybersécurité multi-framework pour entraînement Blue Team.",
    shortDesc: "Construction d'un environnement Docker complet pour pratiquer le risk management, le SOC et la conformité en conditions réalistes.",
    tags: ["Docker", "Blue Team", "OpenCTI", "SOC"],
    context: "À venir.",
    methodology: [],
    findings: [],
    deliverables: [],
    skills: []
  }
];

/* =========================================================
   RENDER PROJECT CARDS
   ========================================================= */
const grid = document.getElementById('projectsGrid');
PROJECTS.forEach(p => {
  const card = document.createElement('button');
  card.className = 'project-card' + (p.disabled ? ' disabled' : '');
  card.innerHTML = `
    <div class="card-num">
      <span>${p.num}</span>
      <span class="card-status">${p.status}</span>
    </div>
    <div>
      <h3>${p.title} <em>${p.titleEm}</em></h3>
      <p class="card-desc">${p.shortDesc}</p>
    </div>
    <div class="card-tags">
      ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
    </div>
    <div class="card-arrow">↗</div>
  `;
  if (!p.disabled) {
    card.addEventListener('click', () => openModal(p));
  }
  grid.appendChild(card);
});

/* =========================================================
   MODAL
   ========================================================= */
const overlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function openModal(p) {
  modalContent.innerHTML = `
    <div class="modal-num">${p.num} — ${p.status}</div>
    <h2>${p.title} <em>${p.titleEm}</em></h2>
    <p class="modal-subtitle">${p.subtitle}</p>

    <div class="modal-section">
      <h3>— Contexte</h3>
      <p>${p.context}</p>
    </div>

    ${p.methodology.length ? `
    <div class="modal-section">
      <h3>— Méthodologie appliquée</h3>
      <ul>${p.methodology.map(m => `<li>${m}</li>`).join('')}</ul>
    </div>` : ''}

    ${p.findings.length ? `
    <div class="modal-section">
      <h3>— Principales trouvailles</h3>
      <ul>${p.findings.map(f => `<li>${f}</li>`).join('')}</ul>
    </div>` : ''}

    ${p.deliverables.length ? `
    <div class="modal-section">
      <h3>— Livrables</h3>
      <div class="modal-deliverables">
        ${p.deliverables.map(d => `<div class="deliverable">${d}</div>`).join('')}
      </div>
    </div>` : ''}

    ${p.skills.length ? `
    <div class="modal-section">
      <h3>— Vocabulaire & concepts maîtrisés</h3>
      <div class="modal-tags">
        ${p.skills.map(s => `<span class="tag">${s}</span>`).join('')}
      </div>
    </div>` : ''}

    ${p.documentUrl ? `
    <div class="modal-section">
      <h3>— Document complet</h3>
      <a href="${p.documentUrl}" target="_blank" style="display:inline-block; padding:14px 24px; background:var(--accent); color:var(--bg); text-decoration:none; font-family:var(--font-mono); font-size:12px; text-transform:uppercase; letter-spacing:0.08em; font-weight:500;">Télécharger le PDF →</a>
    </div>` : ''}
  `;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

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