var mongo=require('mongoose');
module.exports=mongo.model('ebooks',
{
	name:String,
	userid:String,
	author:String,
	publisher:String,
	isbn:String,
	price:Number,
	pages:Number,
	category:String,
	bookurl:String,
	descriptions:String,
	offers:Number,
	reviews:
		[
		{
		userid:String,
		rating:Number,
		review:String,
		likes:Number,
		dislikes:Number,
		date:{type:Date,default:Date.now}      
			}
		]
	,
	pincode:
		[
		{
		availableat:Number,
		availableafter:Number
		}
		]
	,
	
	views:Number,
	date:{type:Date,default:Date.now}
	

}

)