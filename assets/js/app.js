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