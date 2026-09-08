// projects.js
const projects = [
  {
    title: "Payment Operations Dashboard",
    description: "Full stack Payment Operations app on SAP CAP with role-based admin and user login, CDS data models and @cap-js/sqlite persistence — covering an admin KPI dashboard and a payments approval/rejection workflow with backend-enforced authorization.",
    tags: ["SAP CAP", "SAPUI5", "OData V4", "CDS"],
    link: "https://github.com/ishwaryachellappan/Payment-operation-Application"
  },
  {
    title: "Milestone Management",
    description: "RAP application built with a CDS Business Object, behaviour definitions and validations, with SLA automation triggering notifications after 10 days.",
    tags: ["RAP", "SAPUI5", "CDS"],
    link: "https://github.com/ishwaryachellappan/Milestone-Dashboard"
  },
  {
    title: "CMO Dashboard",
    description: "Full OData service with CRUD, file upload and approval logic, cutting manual tracking effort by 50%.",
    tags: ["OData", "SAPUI5", "Fiori"],
    link: null
  },
  {
    title: "SAMA Dashboard",
   description: "A multi-tab payment operations dashboard — Overview, Exceptions, Reconciliation, Rail Health, and Audit — tracking payment KPIs, status breakdowns, exception queues, and rail health across clearing areas. Built with SAP UI5 (Fiori freestyle, XML views), sap.viz charts, and a RAP-based OData V4 service (ZPE_SD_PO_DATA) on SAP BTP/ABAP.",
    tags: ["SAP", "SAPUI5"],
    link: "https://github.com/ishwaryachellappan/Payment_dashboard"
  },
  {
    title: "Loan Application",
    description: "A loan approval and exception management cockpit — priority-ranked exception queue, document/credit/risk validation engine, officer assignment recommendation, and an operations dashboard tracking SLA breaches, risk bands, and queue ageing. Built with SAP CAP (Node.js), Fiori Elements, SAPUI5, OData V4, and SQLite.",
    tags: ["SAP"],
    link: "https://github.com/ishwaryachellappan/Loan-Approval-Cockpit"
  }
];

function renderProjects() {
  document.getElementById("projects-grid").innerHTML = projects
    .map(p => `
      <div class="project-card">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        ${p.link ? `<a class="project-link" href="${p.link}" target="_blank">View project ↗</a>` : ""}
      </div>
    `).join("");
}
renderProjects();