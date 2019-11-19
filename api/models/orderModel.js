const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    quantity: Number
});

module.exports = mongoose.Model('Order', orderSchema);