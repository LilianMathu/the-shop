const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    Price: Number
});

module.exports = mongoose.Model('Product', productSchema);