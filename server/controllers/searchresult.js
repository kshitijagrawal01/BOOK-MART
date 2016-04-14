var Book=require('../datasets/book-info');
var User=require('../datasets/users');
var Ebook=require('../datasets/ebook-info');
var mongoose=require('mongoose');

module.exports.word=function(req,res){
	
	Book.find({$text:{$search: req.body.value}},function(err,result){
		if(err)
			res.json(err);
		else{
			if(result.length==0){
				res.json("No search result");
			}
			else{
				res.json(result);
			}
		}
	});
}

module.exports.ebookword=function(req,res){
	
	Ebook.find({$text:{$search: req.body.value}},function(err,result){
		if(err)
			res.json(err);
		else{
			if(result.length==0){
				res.json("No search result");
			}
			else{
				res.json(result);
			}
		}
	});
}

module.exports.search=function(req,res){
	Book.aggregate([{$match:{"name":req.body.value}},{$project:{"_id":1,"name":1,"author":1,"price":1,"imageurl":1,"descriptions":1,"offers":1,
		"star":{"$avg":"$reviews.rating"}}}],function(err,result){
		if(err){
			res.json(err);
		}
		else{
			if(result.length==0){
				res.json("No search result");
			}
			else{
				res.json(result);
			}
		}
	})
}

module.exports.ebooksearch=function(req,res){
	EBook.aggregate([{$match:{"name":req.body.value}},{$project:{"_id":1,"name":1,"author":1,"price":1,"descriptions":1,"offers":1,
		"star":{"$avg":"$reviews.rating"}}}],function(err,result){
		if(err){
			res.json(err);
		}
		else{
			if(result.length==0){
				res.json("No search result");
			}
			else{
				res.json(result);
			}
		}
	})
}