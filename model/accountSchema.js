const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /.+\@.+\..+/
    },
    address: {
        type: String
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(v);
            },
            message: props => `${props.value} is not a valid password!`
        }
    },
    

    cancelledProductList: {
        type: Array
    }
});

const Account = mongoose.model("Account", accountSchema);

module.exports = { Account };
