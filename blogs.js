const mongoose=require('mongoose');

const Schema=mongoose.Schema;
 const formSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    number:{
        type: Number,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    cardtype:{
        type:String,
        required:true
    },
    cardnumber:{
        type:Number,
        required:true
    },
    expiry:{
        type:Date,
        required:true
    },
    cvv:{
        type:Number,
        required:true
    },

 },{timestamps:true});

 const Blog=mongoose.model('Blog',formSchema);

 module.exports=Blog;



