const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: {
        type: String
    },
    previousPrice: {
        type: Number
    },
    currentPrice: {
        type: Number
    },
    discount: {
        type: Number
    },
    reviews: {
        type: Array
    },
    ratings: {
        type: Number
    },
    stockNumber: {
        type: Number
    },
    productImg1: {
        type: String
    },
    productImg2: {
        type: String
    },
    productImg3: {
        type: String
    },
    productImg4: {
        type: String
    },
    productImg5: {
        type: String
    }
})

const Product = mongoose.model("Product", productSchema)

module.exports = { Product }