const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId: String,
    company: String
});

// model is used to match schema and mongodb  collection field 
module.exports = mongoose.model("products", productSchema);