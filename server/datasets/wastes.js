var mongoose=require('mongoose');
module.exports=mongoose.model('waste',{
        user:String,
        userid:String,
        userimage:String,
        content:String,
        date:{type:Date,default:Date.now} ,
    
});