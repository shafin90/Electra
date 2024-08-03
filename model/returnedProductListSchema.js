const mongoose = require("mongoose");

const returnedProductListSchema = new mongoose.Schema({
    email: {
        type: String
    },
    returnedProductList: {
        type: Array
    }
})

const ReturnedProductList = mongoose.model("ReturnedProductList", returnedProductListSchema)

module.exports = { ReturnedProductList }