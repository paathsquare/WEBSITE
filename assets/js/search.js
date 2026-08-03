
let searchTests = [];

async function loadTests() {
    try {
        const response = await fetch('data/tests.json');
        searchTests = await response.json();
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

        const matches = searchTests.filter(test =>
            (test.name || '').toLowerCase().includes(query)
        );

        if (matches.length === 0) {
            results.innerHTML = '<p>No matching tests found.</p>';
            return;
        }

        results.innerHTML = matches.map(test => `
    <div class="search-result">
        <div>
            <strong>${test.name}</strong>
            <div style="margin-top:6px;color:#666;font-size:14px;">Blood Test</div>
        </div>
        <div style="text-align:right;">
            <div style="font-size:22px;font-weight:700;color:#16A34A;">₹${test.price ?? '-'}</div>
            <a href="https://wa.me/919622170122?text=I%20want%20to%20book%20${encodeURIComponent(test.name)}" target="_blank" style="display:inline-block;margin-top:10px;padding:8px 14px;background:#16A34A;color:#fff;text-decoration:none;border-radius:8px;font-size:14px;">Book Test</a>
        </div>
    </div>
`).join('');
    });
}

loadTests();