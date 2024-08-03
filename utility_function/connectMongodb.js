const { default: mongoose } = require("mongoose");

const connectMongoDB = () => {
    mongoose.connect("mongodb+srv://ecommerce:ecommerce@cluster0.6oyupqe.mongodb.net/ecommerce", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(
            console.log("Connected to database")
        )
        .catch(error => {
            console.log(error)
        })

}

module.exports = { connectMongoDB };