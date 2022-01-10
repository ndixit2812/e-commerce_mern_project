const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

// model is used to match schema and mongodb  collection field 
module.exports = mongoose.model("users", userSchema);