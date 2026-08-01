let tests = [];

async function loadTests() {
    try {
        const response = await fetch("data/tests.json");

        if (!response.ok) {
            throw new Error("Unable to load tests.json");
        }

        tests = await response.json();

        return tests;
    } catch (error) {
        console.error(error);
        return [];
    }
}

window.loadTests = loadTests;
window.tests = tests;

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Fade-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});