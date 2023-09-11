const mongoose = require('mongoose');

const connectionSchema=new mongoose.Schema({
    personname:String,
    personmail:String,
    personphn:Number,
    personAddress:String,
    personArea:String,
    status: {
        type: String,
        default: 'pending'
      },
    connectionId:{
        type:String
    }
});

const connection=new mongoose.model("connection",connectionSchema)

module.exports = connection;