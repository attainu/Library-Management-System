const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required:true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    fine: Number,
    amount: Number,
    issueDate: {
        type: Date,
        default: Date.now(),
    },
    returnDate: {
        date: { type: Date, default: +new Date() + 30*24*60*60*1000}
    }
});


module.exports = mongoose.model("Order", OrderSchema);

