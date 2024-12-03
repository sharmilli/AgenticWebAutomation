# AgenticWebAutomation
Agentic Browser Automation is a lightweight JavaScript solution for automating web tasks. It extracts form fields, integrates LLM-backed recommendations, and dynamically fills and submits forms. Versatile and efficient, it simplifies workflows like surveys or registrations, saving time and improving accuracy. MIT Licensed.

# AgenticBrowserAutomation.js

AgenticBrowserAutomation.js is a lightweight, JavaScript-based solution that enables intelligent browser automation by extracting HTML DOM elements from any webpage, fetching tailored recommendations, and dynamically filling and submitting forms. It demonstrates the concept of agentic AI in action, empowering users to automate workflows in a flexible and efficient way.

---

## Features
- **DOM Extraction**: Scans a webpage and extracts form elements (input, textarea, select) as a structured JSON object.
- **Recommendation Fetching**: Integrates with backend APIs or LLMs to generate tailored recommendations based on user context.
- **Form Automation**: Dynamically populates forms using the fetched recommendations and submits them programmatically.
- **Fully Scripted Workflow**: Works with minimal setup, providing an end-to-end solution for browser-based automation.

---

## How It Works
1. **Extracts Form Fields**: Identifies all form elements on the page and creates a JSON object with their attributes.
2. **Fetches Recommendations**: Sends the JSON object to a backend API (e.g., LLM or database query service) to receive recommendations for optimal values.
3. **Populates and Submits Forms**: Maps the recommended values to the corresponding form fields and submits the form.

---

## Installation

### Download
Download the `AgenticBrowserAutomation.js` file:
[**Download Here**](./AgenticBrowserAutomation.js)

### Script Injection
You can inject the script into any webpage via:
1. **Browser Console**:
    ```javascript
    const script = document.createElement('script');
    script.src = "http://yourserver.com/AgenticBrowserAutomation.js"; // Replace with your hosted URL
    document.head.appendChild(script);
    ```
2. **Browser Extension**: Use the script in your custom browser extension for persistent automation.
3. **Bookmarklet**: Convert the script into a bookmarklet for quick access.

---

## Usage

### Setup
1. Replace the API URL (`recommendationApiUrl`) in the script with your backend or LLM endpoint.
2. Ensure your API returns a JSON response with field names as keys and recommended values as the associated data.

### Execution
1. Load the webpage you want to automate.
2. Inject the script or let your extension/bookmarklet run it automatically.
3. The form will be populated and submitted programmatically.

### Example API Response
```json
{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "comments": "Looking forward to your response!"
}

