const { Product } = require("../model/productSchema")
const { responseMessages } = require("../utils/responseMessages")


const productController = {
    addProduct: async (req, res) => {
        try {
            const { files } = req;
            const {
                productName,
                currentPrice,
                previousPrice,
                ratings,
                review,
                description,
                stockNumber,
                discount
            } = req.body;

            const productImg = [...files];

            const newProduct = new Product({
                productName,
                currentPrice,
                previousPrice,
                ratings,
                review,
                description,
                stockNumber,
                discount,
                productImg
            })
            const newProductAdded = await newProduct.save();

            if (!newProductAdded) {
                return res.json({ success: false, message: responseMessages.failedToAddProduct})
            }
            res.json({ success: true, message: responseMessages.successMsgToAddProduct , newProduct: newProductAdded })


        } catch (error) {
            res.status(500).json({
                success: false,
                error,
                message: responseMessages.failedToAddProduct
            })
        }
    }
}

module.exports = { productController }