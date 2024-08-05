const responseMessages = {
    // registration
    registrationFailedMessage: "Account creation failed",
    registrationSuccessfullMessage: "Registration successful.",
    registeringUsersPasswordMissmatchMessage: "Passwords do not match.",

    // login
    loginFailedMessage: "Login failed. Try again.",
    puttingWrongPasswordWhileLogin: "Incorrect password",

    // jwt
    invalidJWTToken: "No token provided",

    // add product
    failedToAddProduct: "Failed to add product",
    successfullyAddedProduct: "successfully added product",
    successMsgToAddProduct: "Successfully added",

    // remove product
    failedToRemoveProduct: "Failed to remove product",
    successMsgToRemoveProduct: "Successfully removed"
}

module.exports = { responseMessages }