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
    description: "[What does SAMA stand for / what does it do? One sentence on the problem it solves.]",
    tags: ["SAP", "SAPUI5"],
    link: "https://github.com/ishwaryachellappan/Payment_dashboard"
  },
  {
    title: "Loan Application",
    description: "[What kind of loan app — origination, approval workflow, tracking? One sentence + the tech stack.]",
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