function creditCardValidator(number) {
    const stringCreditCard = number.toString();

    // Must be exactly 16 digits
    if (stringCreditCard.length !== 16) return false;

    // Must contain only digits
    if (!/^\d{16}$/.test(stringCreditCard)) return false;

    // Must have at least 2 unique digits
    const uniqueDigits = new Set(stringCreditCard);
    if (uniqueDigits.size < 2) return false;

    // Last digit must be even
    if (Number(stringCreditCard.slice(-1)) % 2 !== 0 ) return false;

    // Sum of digits > 16
    const sum = stringCreditCard
                .split("")
                .map(x => Number(x))
                .reduce((a, b) => a + b, 0);

    if (sum <= 16) return false;

    return true;
}

module.exports = creditCardValidator;