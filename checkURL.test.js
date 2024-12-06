const { validateWebAddress } = require("../views/js/checkURL");

describe('validateWebAddress', () => {
    it('should return false for non-URL strings', () => {
        expect(validateWebAddress("read")).toBe(false);
    });

    it('should identify email addresses as invalid URLs', () => {
        expect(validateWebAddress("mailto:ahmed@gmail.com")).toBe(false);
    });

    it('should return true for valid URLs', () => {
        expect(validateWebAddress("https://www.google.com")).toBe(true);
    });

    it('should return false for an empty string', () => {
        expect(validateWebAddress("")).toBe(false);
    });
});
