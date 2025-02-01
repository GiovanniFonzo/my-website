document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navbar = document.getElementById("navbar");

    sections.forEach((section) => {
        let link = document.createElement("a");
        link.href = `#${section.id}`;
        link.textContent = section.id.charAt(0).toUpperCase() + section.id.slice(1);
        link.style.marginRight = "15px";
        navbar.appendChild(link);
    });
});
