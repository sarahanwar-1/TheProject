import axios from "axios";

// Importing URL validation function
const { validateUrl } = require("./urlValidator");

const urlInputField = document.getElementById("urlInput");

// Handle input change
document.addEventListener("DOMContentLoaded", () => {
    urlInputField.addEventListener("input", (event) => {
        event.preventDefault();
        hideErrorMessage();
        toggleResultsVisibility(false);
    });
});

// Process form submission
async function processFormSubmission(event) {
    event.preventDefault();

    const formElement = document.querySelector("form");

    if (!validateUrl(urlInputField.value)) {
        displayErrorMessage("Please, enter a valid URL.");
        urlInputField.value = "";
        return;
    }

    toggleLoader(true);

    try {
        const { data } = await axios.post(
            "http://localhost:8000/",
            formElement,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        updateResultsDisplay(data);
    } catch (error) {
        console.error("Error during submission:", error);
        displayErrorMessage("An error occurred. Please try again later.");
        toggleLoader(false);
    }
}

// Update the results section with API data
const updateResultsDisplay = (responseData) => {
    toggleLoader(false);

    if (responseData.msg) {
        displayErrorMessage(responseData.msg);
        toggleResultsVisibility(false);
        return;
    }

    hideErrorMessage();
    toggleResultsVisibility(true);

    document.getElementById("resultAgreement").innerHTML = `Agreement: ${responseData.sample.agreement}`;
    document.getElementById("resultSubjectivity").innerHTML = `Subjectivity: ${responseData.sample.subjectivity}`;
    document.getElementById("resultConfidence").innerHTML = `Confidence: ${responseData.sample.confidence}`;
    document.getElementById("resultIrony").innerHTML = `Irony: ${responseData.sample.irony}`;
    document.getElementById("resultScoreTag").innerHTML = `Score Tag: ${responseData.sample.score_tag}`;
};

// Show or hide the loading spinner
const toggleLoader = (isLoading) => {
    const spinner = document.getElementById("loadingSpinner");
    spinner.style.display = isLoading ? "block" : "none";
};

// Show or hide the results section
const toggleResultsVisibility = (isVisible) => {
    document.querySelectorAll(".resultItem").forEach((item) => {
        item.style.display = isVisible ? "block" : "none";
    });
};

// Display an error message
const displayErrorMessage = (message) => {
    const errorElement = document.getElementById("errorBox");
    errorElement.style.display = "block";
    errorElement.innerHTML = message;
};

// Hide the error message
const hideErrorMessage = () => {
    document.getElementById("errorBox").style.display = "none";
};

// Export the primary function
export { processFormSubmission };
