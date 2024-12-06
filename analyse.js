const textrazorAPI = "https://api.textrazor.com/";
const axios = require("axios");

const performTextAnalysis = async (articleUrl, apiKey) => {
    try {
        const response = await axios.get(`${textrazorAPI}?key=${apiKey}&url=${articleUrl}&lang=en`);

        const { code } = response.data.status;

        if (code === 100) {
            return createErrorResponse(code, "Invalid URL. Please provide a valid one.");
        }

        if (code === 212) {
            return createErrorResponse(code, response.data.status.msg);
        }

        return formatSuccessResponse(response.data, code);
    } catch (error) {
        console.error("API Request Error:", error);
        return createErrorResponse(500, "Internal server error while processing the request.");
    }
};

const createErrorResponse = (statusCode, message) => {
    return {
        code: statusCode,
        message,
    };
};

const formatSuccessResponse = (data, statusCode) => {
    const { score_tag, agreement, subjectivity, confidence, irony } = data;
    const processedData = {
        scoreTag: score_tag,
        agreementType: agreement,
        subjectiveAnalysis: subjectivity,
        confidenceLevel: confidence,
        ironicTone: irony,
    };
    return { sample: processedData, status: statusCode };
};

module.exports = {
    performTextAnalysis,
};
