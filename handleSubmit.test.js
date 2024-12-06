/**
 * @jest-environment jsdom
 */

const { submitForm } = require("../views/js/handleSubmit");

describe('submitForm', () => {
    it('should be defined', () => {
        expect(submitForm).toBeDefined();
    });
});
