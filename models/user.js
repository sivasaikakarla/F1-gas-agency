const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    dateOfBirth:Date,
    email:{
        type: String,
        required: true,
        unique: true
    },
    mobileNo:Number,
    aadhar:Number,
    password:String,
    location:String,
    houseNo:String,
    streetName:String,
    city:String,
    district:String,
    state:String,
    pincode:Number
});

const User = new mongoose.model("User",userSchema);

module.exports=User;