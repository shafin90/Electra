const { WishList } = require("../model/wishListSchema");
const { Product } = require("../model/productSchema")
const { responseMessages } = require("../utils/responseMessages");

const wishListController = {
    addToWishList: async (req, res) => {
        try {
            const { productId } = req.body

            // get the product from productList to add that into wishlist
            const particularProductToAdd = await Product.findOne({ _id: productId });

            // add that product to wishlist
            const addingProduct = new Product({ ...particularProductToAdd });
            const productAddedToWishList = await addingProduct.save();

            if (!productAddedToWishList) {
                return res.json({ success: false, message: responseMessages.failedToAddProductToWishList })
            }

            res.json({ success: true, message: responseMessages.addProductToWishList, addedProduct: productAddedToWishList })


        } catch (error) {
            res.json({ success: false, message: responseMessages.failedToAddProductToWishList })
        }
    },
    removeProductFromWishList: async (req, res) => {
        try {
            const { productId } = req.param;
            const removed = await WishList.deleteOne({ _id: productId })

            if (!removed) {
                return res.json({ success: false, message: responseMessages.failedToRemoveFromWishList })
            }
            res.json({ success: true, message: responseMessages.successfullyRemovedFromWishList })

        } catch (error) {
            res.json({ success: false, message: responseMessages.failedToRemoveFromWishList })
        }
    }
}

module.exports = { wishListController }