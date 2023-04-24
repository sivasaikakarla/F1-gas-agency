const mongoose = require('mongoose');

const adminSchema=new mongoose.Schema({
    name:String,
    adminId:String,
    password:String
});

const admin=new mongoose.model("admin",adminSchema);

// const newadmin=new Admin({
//     name:'sivasai',
//     adminId:'siva123',
//     password:'sivasaikakarla'
// });
// newadmin.save();

module.exports = admin;