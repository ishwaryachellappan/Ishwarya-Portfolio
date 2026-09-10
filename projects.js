const projects = [
  {
    title: "Payment Operations Dashboard",
    description: "Full stack Payment Operations app on SAP CAP with role-based admin and user login, CDS data models and @cap-js/sqlite persistence — covering an admin KPI dashboard and a payments approval/rejection workflow with backend-enforced authorization.",
    tags: ["SAP CAP", "SAPUI5", "OData V4", "CDS"],
    link: "https://github.com/ishwaryachellappan/Payment-operation-Application",
    github: null,
    media: []
  },
  {
    title: "Milestone Management",
    description: "RAP application built with a CDS Business Object, behaviour definitions and validations, with SLA automation triggering notifications after 10 days.",
    tags: ["RAP", "SAPUI5", "CDS"],
    link: "https://github.com/ishwaryachellappan/Milestone-Dashboard",
    github: null,
    media: []
  },
  {
    title: "CMO Dashboard",
    description: "Full OData service with CRUD, file upload and approval logic, cutting manual tracking effort by 50%.",
    tags: ["OData", "SAPUI5", "Fiori"],
    link: null,
    github: null,
    media: []
  },
  {
    title: "SAMA Dashboard",
    description: "A multi-tab payment operations dashboard — Overview, Exceptions, Reconciliation, Rail Health, and Audit — tracking payment KPIs, status breakdowns, exception queues, and rail health across clearing areas. Built with SAP UI5 (Fiori freestyle, XML views), sap.viz charts, and a RAP-based OData V4 service (ZPE_SD_PO_DATA) on SAP BTP/ABAP.",
    tags: ["SAP", "SAPUI5"],
    link: null,
    github: "https://github.com/ishwaryachellappan/Payment_dashboard",
    media: [
      { type: "image", src: "assets/payment-ops-4.png" },
      { type: "image", src: "assets/payment-ops-1.png" },
      { type: "image", src: "assets/payment-ops-2.png" },
      { type: "image", src: "assets/payment-ops-3.png" }

    ]
  },
  {
    title: "Loan Application",
    description: "A loan approval and exception management cockpit — priority-ranked exception queue, document/credit/risk validation engine, officer assignment recommendation, and an operations dashboard tracking SLA breaches, risk bands, and queue ageing. Built with SAP CAP (Node.js), Fiori Elements, SAPUI5, OData V4, and SQLite.",
    tags: ["SAP"],
    link: "https://github.com/ishwaryachellappan/Loan-Approval-Cockpit",
    github: null,
    media: [
      { type: "image", src: "assets/image (6).png" },
      { type: "image", src: "assets/image (7).png" },
      { type: "image", src: "assets/image (8).png" },
      { type: "image", src: "assets/image (9).png" },
      { type: "image", src: "assets/image (10).png" },
      { type: "image", src: "assets/image (11).png" },
      { type: "image", src: "assets/image (12).png" },
      { type: "image", src: "assets/image (13).png" },
      { type: "image", src: "assets/image (14).png" }

    ]
  }
];

function renderProjects() {
  document.getElementById("projects-grid").innerHTML = projects
    .map((p, projectIndex) => `
      <div class="project-card">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="project-links">
          ${p.link ? `<a class="project-link" href="${p.link}" target="_blank">Live demo ↗</a>` : ""}
          ${p.github ? `<a class="project-link" href="${p.github}" target="_blank">Code ↗</a>` : ""}
          ${p.media && p.media.length ? `<a class="project-link" href="javascript:void(0)" onclick="openGallery(${projectIndex})">View images ↗</a>` : ""}
        </div>
      </div>
    `).join("");
}

let currentProjectIndex = null;
let currentMediaIndex = 0;

function openGallery(projectIndex) {
  currentProjectIndex = projectIndex;
  currentMediaIndex = 0;
  renderLightbox();
}

function closeGallery() {
  const overlay = document.getElementById("lightbox-overlay");
  if (overlay) overlay.remove();
  currentProjectIndex = null;
}

function showNextMedia() {
  const media = projects[currentProjectIndex].media;
  currentMediaIndex = (currentMediaIndex + 1) % media.length;
  renderLightbox();
}

function showPrevMedia() {
  const media = projects[currentProjectIndex].media;
  currentMediaIndex = (currentMediaIndex - 1 + media.length) % media.length;
  renderLightbox();
}

function renderLightbox() {
  const media = projects[currentProjectIndex].media;
  const item = media[currentMediaIndex];

  let overlay = document.getElementById("lightbox-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "lightbox-overlay";
    overlay.className = "lightbox-overlay";
    document.body.appendChild(overlay);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeGallery();
    });
  }

  const mediaHtml = item.type === "image"
    ? `<img src="${item.src}" alt="">`
    : `<video src="${item.src}" controls autoplay></video>`;

  overlay.innerHTML = `
    <button class="lightbox-close" onclick="closeGallery()">✕</button>
    ${media.length > 1 ? `<button class="lightbox-nav lightbox-prev" onclick="showPrevMedia()">‹</button>` : ""}
    <div class="lightbox-frame">${mediaHtml}</div>
    ${media.length > 1 ? `<button class="lightbox-nav lightbox-next" onclick="showNextMedia()">›</button>` : ""}
    ${media.length > 1 ? `<div class="lightbox-counter">${currentMediaIndex + 1} / ${media.length}</div>` : ""}
  `;
}

document.addEventListener("keydown", (e) => {
  if (currentProjectIndex === null) return;
  if (e.key === "Escape") closeGallery();
  if (e.key === "ArrowRight") showNextMedia();
  if (e.key === "ArrowLeft") showPrevMedia();
});

renderProjects();