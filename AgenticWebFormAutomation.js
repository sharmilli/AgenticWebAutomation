// Extract DOM Elements as JSON
function extractDOMElements() {
    const elements = document.querySelectorAll("input, select, textarea");
    const domJSON = Array.from(elements).map((element, index) => ({
        tagName: element.tagName,
        name: element.name || element.id || `unnamed_field_${index}`,
        type: element.type || "unknown",
        uniqueId: element.id || `element_${index}`,
    }));
    return domJSON;
}

// Fetch Recommendations from Backend or LLM API
async function fetchRecommendations(domJSON, apiUrl) {
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ domElements: domJSON }),
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch recommendations: ${response.statusText}`);
        }

        const userRecommendations = await response.json();
        return userRecommendations;
    } catch (error) {
        console.error("Error fetching recommendations:", error);
        return {};
    }
}

// Populate the Form Fields and Submit
function populateAndSubmitForm(domJSON, recommendations) {
    domJSON.forEach((domElement) => {
        const element = document.getElementById(domElement.uniqueId) || 
                        document.getElementsByName(domElement.name)[0];

        if (!element) {
            console.warn(`Element not found: ${domElement.name}`);
            return;
        }

        const value = recommendations[domElement.name] || recommendations[domElement.uniqueId];

        if (value !== undefined) {
            if (element.type === "checkbox" || element.type === "radio") {
                element.checked = Boolean(value);
            } else {
                element.value = value;
            }
        }
    });

    const form = document.querySelector("form");
    if (form) {
        form.submit();
    } else {
        console.error("No form found to submit.");
    }
}

// Orchestrate the Entire Process
async function processForm(recommendationApiUrl) {
    // Step 1: Extract DOM elements
    const domJSON = extractDOMElements();
    console.log("Extracted DOM Elements:", domJSON);

    // Step 2: Fetch recommendations from the LLM-backed API
    const recommendations = await fetchRecommendations(domJSON, recommendationApiUrl);
    console.log("User Recommendations:", recommendations);

    // Step 3: Populate form and submit
    populateAndSubmitForm(domJSON, recommendations);
}

// Example Usage: Trigger the Process
(function () {
    const recommendationApiUrl = "https://example.com/api/recommendations"; // Replace with your backend/LLM API URL

    // Ensure this runs after the DOM has fully loaded
    if (document.readyState === "complete" || document.readyState === "interactive") {
        processForm(recommendationApiUrl);
    } else {
        document.addEventListener("DOMContentLoaded", () => processForm(recommendationApiUrl));
    }
})();
