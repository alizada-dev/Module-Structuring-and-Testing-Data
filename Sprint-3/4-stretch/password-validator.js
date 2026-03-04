function passwordValidator(password) {

    // const hasUppercase = /[A-Z]/.test(password);
    // const hasLowercase = /[a-z]/.test(password);
    // const hasNumber = /[0-9]/.test(password);
    // const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
    // const hasMinLength = password.length >= 5;

    // return (
    //     hasUppercase &&
    //     hasLowercase &&
    //     hasNumber &&
    //     hasSpecialChar &&
    //     hasMinLength
    // );

    // clean one-line method
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{5,}$/.test(password);
}


module.exports = passwordValidator;