var mongo=require('mongoose');
module.exports=mongo.model('contactus',
{
	userid:String,
	message:String,
    date:{type:Date,default:Date.now},
	
}

);