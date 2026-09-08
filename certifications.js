const certifications = [
  { name: "SAP Certified ABAP Cloud Developer", code: "C_ABAPD_2309" },
  { name: "SAP Certified — BTP Solution Architect", code: null },
  { name: "Microsoft Azure Fundamentals", code: "AZ-900" }
];

function renderCertifications() {
  document.getElementById("certs-grid").innerHTML = certifications
    .map(c => `
      <div class="cert-card">
        <p class="cert-name">${c.name}</p>
        ${c.code ? `<p class="cert-code">${c.code}</p>` : ""}
      </div>
    `).join("");
}
renderCertifications();