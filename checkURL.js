const urlValidator = require("valid-url");

// Function to validate a given URL
const validateUrl = (inputUrl) => {
    return !!urlValidator.isWebUri(`${inputUrl}`);
};

// Exporting the function
module.exports = {
    validateUrl,
};
