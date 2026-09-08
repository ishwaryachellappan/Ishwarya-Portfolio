const skills = [
  "ABAP", "RAP", "CAP", "SAPUI5", "Fiori Elements", "OData",
  "SAP BTP", "CDS Views", "HANA", "Fiori Launchpad"
];

function renderSkills() {
  document.getElementById("skills-grid").innerHTML = skills
    .map(s => `<span class="skill-pill">${s}</span>`)
    .join("");
}
renderSkills();