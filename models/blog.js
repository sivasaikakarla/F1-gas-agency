const mongoose = require('mongoose');

const blogSchema=new mongoose.Schema({
    h1:String,
    p1:String,
    p2:String,
    imgsrc:String
});

const blog=new mongoose.model("blog",blogSchema);

module.exports = blog;