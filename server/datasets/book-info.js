var mongo=require('mongoose');
module.exports=mongo.model('books',
{
	name:String,
	userid:String,
	author:String,
	publisher:String,
	isbn:String,
	price:Number,
	pages:Number,
	category:String,
	imageurl:String,
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
	rentto:
	
		[{
		userid:String,
	    date:{type:Date,default:Date.now}      
	    }
		]
	,
	views:Number,
	date:{type:Date,default:Date.now}
	

}

)