

let tests = [];

async function loadTests() {
    try {
        const response = await fetch('data/tests.json');
        tests = await response.json();
    } catch (err) {
        console.error('Unable to load tests:', err);
        return;
    }

    setupSearch();
}

function setupSearch() {
    const input = document.getElementById('searchInput');
    const results = document.getElementById('results');

    if (!input || !results) return;

    input.addEventListener('input', () => {
        const query = input.value.trim().toLowerCase();

        if (query.length === 0) {
            results.innerHTML = '';
            return;
        }

        const matches = tests.filter(test =>
            (test.name || '').toLowerCase().includes(query)
        );

        if (matches.length === 0) {
            results.innerHTML = '<p>No matching tests found.</p>';
            return;
        }

        results.innerHTML = matches.map(test => `
            <div class="search-result">
                <strong>${test.name}</strong><br>
                ₹${test.price ?? '-'}
            </div>
        `).join('');
    });
}

loadTests();