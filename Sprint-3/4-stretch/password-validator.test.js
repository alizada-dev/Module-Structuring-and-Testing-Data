/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const isValidPassword = require("./password-validator");

test("password has at least 5 characters", () => {
    // Arrange
    const password = "Hello123$";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
}
);

test("password has at least 5 characters", () => {
    expect(isValidPassword("Hi98#")).toEqual(true);
    expect(isValidPassword("Hola76!")).toEqual(true);
    expect(isValidPassword("Hola76!")).toEqual(true);
})

test("password has less than 5 and should equal false", () => {
    expect(isValidPassword("12333333333")).toEqual(false);
    expect(isValidPassword("Hi9#")).toEqual(false);
    expect(isValidPassword("Aafokd!")).toEqual(false);
})