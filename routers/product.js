const express = require("express");
const { productController } = require("../controller/productController");
const router = express.Router();
const { upload } = require("../utility_function/fileUpload")
console.log(upload)

router.post("/addProduct", upload.array('productImg', 5), productController.addProduct)

module.exports = router