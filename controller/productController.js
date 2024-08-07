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
                discount,
                isDiscountAvailable
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
                productImg,
                isDiscountAvailable
            })
            const newProductAdded = await newProduct.save();

            if (!newProductAdded) {
                return res.json({ success: false, message: responseMessages.failedToAddProduct })
            }
            res.json({ success: true, message: responseMessages.successMsgToAddProduct, newProduct: newProductAdded })


        } catch (error) {
            res.status(500).json({
                success: false,
                error,
                message: responseMessages.failedToAddProduct
            })
        }
    },
    removeProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const removeProduct = await Product.deleteOne({ _id: id });

            if (!removeProduct) {
                return res.json({ success: false, message: responseMessages.failedToRemoveProduct })
            }

            res.json({ success: true, message: responseMessages.successMsgToRemoveProduct })

        } catch (error) {
            res.json({ success: false, message: responseMessages.failedToRemoveProduct })
        }
    },
    editProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const {
                productName,
                currentPrice,
                previousPrice,
                ratings,
                review,
                description,
                stockNumber,
                discount,
                isDiscountAvailable
            } = req.body;

            const updateProduct = await Product.updateOneById(
                { _id: id },
                {
                    productName,
                    currentPrice,
                    previousPrice,
                    ratings,
                    review,
                    description,
                    stockNumber,
                    discount,
                    isDiscountAvailable
                },
                { new: true }
            )

            if (!updateProduct) {
                return res.json({
                    success: false,
                    message: responseMessages.failedToEditProduct
                })
            }

            res.json({
                success: true,
                message: responseMessages.successfullMsgToEditProduct,
                updatedProduct: updateProduct
            })

        } catch (error) {
            res.json({ success: false, error, message: responseMessages.failedToEditProduct })
        }
    }
}

module.exports = { productController }