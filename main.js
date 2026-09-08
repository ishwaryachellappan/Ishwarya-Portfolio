document.getElementById("year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".navlinks a");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

sections.forEach((section) => sectionObserver.observe(section));