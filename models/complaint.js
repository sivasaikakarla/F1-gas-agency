const mongoose = require('mongoose');
const complaintSchema=new mongoose.Schema({
    personname:String,
    personphn:Number,
    personmail:String,
    complainttype:String,
    personAddress:String,
    personArea:String,
    status: {
        type: String,
        default: 'pending'
      },
    complaintId:{
        type:String
    }
});

const complaint = new mongoose.model("complaint",complaintSchema)

module.exports = complaint;