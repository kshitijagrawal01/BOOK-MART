var Book=require('../datasets/book-info');
var User=require('../datasets/users');
var mongoose=require('mongoose');

/*module.exports.addtocart=function(req,res){
	var id=mongoose.Types.ObjectId(req.body.id);
	//var isbn=req.body.isbn;
		console.log("addtocart");
	console.log(id);
	
var userid=req.user._id;
userid=mongoose.Types.ObjectId(userid);
console.log(userid);
var val={"bookid":id};
User.update({"_id":"userid"},{$set:{"cartdetails":[{"bookid":"id"}]}},function(err,result){

	if(err){
		console.log(err);
		res.json(err);
	}
	res.json("working..........");
});

}*/

module.exports.info=function(req,res){
	var id=mongoose.Types.ObjectId(req.body.id);
	//var isbn=req.body.isbn;
	console.log(req.body.id);
	Book.aggregate([{$match:{"_id":id}},{$project:{"_id":1,"name":1,"userid":1,"author":1,"publisher":1,"price":1,
		"pages":1,"category":1,"imageurl":1,"descriptions":1,"offers":1,"reviews":1,
		"star":{"$avg":"$reviews.rating"}}}],function(err,result){
		if(err){
			res.json(err);
		}
		else
		{

		res.json(result);
	}
	});
}
module.exports.pin=function(req,res){
	//alert("okk");
	var pin=req.body.pin;
	var id=mongoose.Types.ObjectId(req.body.id);
	//console.log("pin="+id);
	Book.find({$and:[{"_id":id},{"pincode.availableat":pin}]},{"pincode.availableat.$":1},function(err,result){
		
		if(err)
			res.json(err);
		else{
			if(result.length==0){
				
				res.json(0);
			}
			else{

				res.json(result[0].pincode[0].availableafter);
			}
		}
	})
}
module.exports.user=function(req,res){
	var id=req.body.user;
	//console.log(id);
	User.find({"_id":id},{"name":1,"imageurl":1},function(err,result){
		console.log(result);
		if(err){
			console.log(err);
		}
		else{
			if(result.length==0){
				res.json("status:404");
			}
			else{
				res.json(result);
			}
		}
	});
}
module.exports.likes=function(req,res){
	
	var userid=req.body.userid;
	var id=mongoose.Types.ObjectId(req.body.bookid);
Book.update({"_id":id,"reviews.userid":userid},{$inc:{"reviews.$.likes":1}},function(err,result){
		if(err){
			res.json(err);
		}
		else{
			res.json({status:500});
		}
	})
}
module.exports.dislikes=function(req,res){
	
	var userid=req.body.userid;
	var id=mongoose.Types.ObjectId(req.body.bookid);
	console.log(req.body);
	Book.update({"_id":id,"reviews.userid":userid},{$inc:{"reviews.$.dislikes":1}},function(err,result){
		if(err){
			res.json(err);
		}
		else{
			res.json({status:200});
		}
	})
}
module.exports.comm=function(req,res){
	var id=mongoose.Types.ObjectId(req.body.id);
var userid=req.user._id;
	var val={"userid":userid,"rating":req.body.rating,"review":req.body.review,"likes":0,"dislikes":0}
	Book.update({"_id":id},{$push:{"reviews":{$each:[val]}}},function(err,result){
		if(err)
			res.json(err);
		else{
			if(result.length==0){
				res.json({status:404});
			}
			else{
				res.json({status:200});
			}
		}
	})
}