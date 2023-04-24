const mongoose = require('mongoose');

const deliveryboySchema=new mongoose.Schema({
    name:String,
    phn:Number,
    email:String,
    employeId:String,
    deliveryArea:String,
    password:String,
    approveStatus:{
        type: String,
        default: 'pending'  
    }
    
});

const deliveryboy=new mongoose.model("deliveryboy",deliveryboySchema);

module.exports = deliveryboy;