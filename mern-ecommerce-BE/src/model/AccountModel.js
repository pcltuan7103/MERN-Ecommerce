const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        phone: {type: Number, required: true},
        isAdmin: {type: Boolean, required: true, default: false},
        access_token: {type: String, required: true},
        refresh_token: {type: String, required: true},
    },
    {
        timestamps: true
    }
);
const Account = mongoose.model("Account",accountSchema);
module.exports = Account;