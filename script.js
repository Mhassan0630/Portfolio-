document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("main > section");
    const navLinks = document.querySelectorAll("nav ul li a");

    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSection = this.getAttribute("href").substring(1);
            showSection(targetSection);
        });
    });

    showSection("home");
});
