// Mobile Menu
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('open');
    });
}

// Search
const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');

let tests = [];

async function loadTests() {
    try {
        const response = await fetch('./data/tests.json');
        tests = await response.json();
    } catch (err) {
        console.error('Failed to load tests.json', err);
        return;
    }
}

loadTests();

if (searchInput && results) {
    searchInput.addEventListener('input', () => {

        const query = searchInput.value.trim().toLowerCase();

        if (!query) {
            results.innerHTML = "";
            return;
        }

        const matches = tests.filter(test =>
            (test.name || "").toLowerCase().includes(query)
        );

        if (matches.length === 0) {
            results.innerHTML = "<p>No matching tests found.</p>";
            return;
        }

        results.innerHTML = matches.map(test => `
            <div class="search-result">
                <strong>${test.name}</strong>
                <div class="price">₹${test.price}</div>
                <a href="https://wa.me/919622170122?text=I want to book ${encodeURIComponent(test.name)}" target="_blank">
                    Book Test
                </a>
            </div>
        `).join("");

    });
}