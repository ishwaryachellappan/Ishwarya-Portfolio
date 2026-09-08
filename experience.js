// experience.js
const experience = [
    {
    role: "Business Process Associate Consultant",
    company: "SAP Fioneer",
    period: "Mar 2026 — Present",
    description: "Working as a CAP developer and product architect, building RAP-based clean-core applications, SAPUI5 applications and dashboards, alongside CDS models and performance-optimized HANA solutions."
  },
  {
    role: "Packaged App Development Senior Analyst",
    company: "Accenture",
    period: "Dec 2025 — Mar 2026",
    description: "Led end-to-end delivery of full stack SAP ABAP and S/4HANA solutions, spanning OData configuration, RAP back ends and SAPUI5 front ends, while mentoring junior developers."
  },
  {
    role: "Packaged App Development Analyst",
    company: "Accenture",
    period: "Mar 2024 — Nov 2025",
    description: "Delivered 30+ RICEFW objects and client-facing Fiori dashboards, improving PR/PO report performance by ~40% and cutting approval cycle time by 20% through workflow enhancements."
  },
  {
    role: "Packaged App Development Associate",
    company: "Accenture",
    period: "Dec 2022 — Feb 2024",
    description: "Built a foundation in SAP ABAP development, delivering 15+ reports, enhancements, forms and OData APIs while supporting requirements gathering and testing."
  },
  {
    role: "Full Stack Developer Trainee",
    company: "Cognizant",
    period: "Feb 2022 — Aug 2022",
    description: "Trained in full stack development using the MEAN stack, building foundational web development skills ahead of moving into SAP."
  }
];

function renderExperience() {
  document.getElementById("experience-list").innerHTML = experience
    .map(job => `
      <div class="job">
        <div class="job-meta">${job.period}</div>
        <h3>${job.role}</h3>
        <div class="company">${job.company}</div>
        <p>${job.description}</p>
      </div>
    `).join("");
}
renderExperience();