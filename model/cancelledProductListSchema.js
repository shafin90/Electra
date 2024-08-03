const mongoose = require("mongoose");

const cancelledProductListSchema = new mongoose.Schema({
    email: {
        type: String
    },
    cancelledProductList: {
        type: Array
    }
})

const CancelledProductList = mongoose.model("CancelledProductList", cancelledProductListSchema)

module.exports = { CancelledProductList }