const validateCreditCard = require('./creditCard-validator');

test("should return true", () => {
    expect(validateCreditCard("9999777788880000")).toBe(true);
})

test("should return false", () => {
    expect(validateCreditCard("1111111111111110")).toBe(false);
    expect(validateCreditCard("6666666666666661")).toBe(false);
    expect(validateCreditCard("a92332119c011112")).toBe(false);
    expect(validateCreditCard("4444444444444444")).toBe(false);
})