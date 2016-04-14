
var EBOOKS=require('../datasets/ebook-info.js');
var mongoose=require('mongoose');
var fs=require('fs-extra');
var path=require('path');
module.exports.saveinfo=function(req,res)
{
 //console.log(req.body);
 //console.log("in server");
 	var filename=req.files.file;
 	var temppath=filename.path;
	
	var targetpath=path.join(__dirname,"../../files/"
			+filename.name);
      
        
        var savepath=filename.name;
        console.log(savepath);
        req.body.bookurl=savepath;
		fs.rename(temppath,targetpath,function(err)
		{
			if(err)
			{
				console.log("not moved");
			}
			else 
			{
				
				var book=new EBOOKS(req.body);
              book.save(function(err)
           {

    	     if(err)
	        {
		    console.log("error in db insertion"); 
		    res.json({status:500});
	        }
	   else 
		   {
		  	console.log("success in insertion");
			res.json({status:200});
		   }
})


      
                
			}
		})

}




module.exports.info=function(req,res){
	var id=mongoose.Types.ObjectId(req.body.id);
	//var isbn=req.body.isbn;
	console.log(req.body.id);
	EBOOKS.aggregate([{$match:{"_id":id}},{$project:{"_id":1,"name":1,"userid":1,"author":1,"publisher":1,"price":1,
		"pages":1,"category":1,"descriptions":1,"offers":1,"reviews":1,
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
EBOOKS.update({"_id":id,"reviews.userid":userid},{$inc:{"reviews.$.likes":1}},function(err,result){
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
	EBOOKS.update({"_id":id,"reviews.userid":userid},{$inc:{"reviews.$.dislikes":1}},function(err,result){
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

	var val={"userid":req.body.userid,"rating":req.body.rating,"review":req.body.review,"likes":0,"dislikes":0}
	EBOOKS.update({"_id":id},{$push:{"reviews":{$each:[val]}}},function(err,result){
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