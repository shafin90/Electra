const express = require("express");
const { productController } = require("../controller/productController");
const router = express.Router();
const { upload } = require("../utility_function/fileUpload")


router.post("/addProduct", upload.array('productImg', 5), productController.addProduct)
router.delete("/removeProduct/:id", productController.removeProduct)
router.put("/editProduct/:id", productController.editProduct)

module.exports = router