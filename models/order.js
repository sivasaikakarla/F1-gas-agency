const mongoose = require('mongoose');

const orderSchema=new mongoose.Schema({
    personname:String,
    personmail:String,
    personphn:Number,
    personAddress:String,
    personArea:String,
    quantity:Number,
    deliveryDate:Date,
    status: {
        type: String,
        default: 'pending'
      },
    orderId:{
        type:String
    }
});

const order=new mongoose.model("order",orderSchema)

module.exports = order;