var User=require("../datasets/users")
var mongoose=require('mongoose');

module.exports.post_blog=function(req,res){
	var userid=req.user._id;
	console.log(userid);

User.findOne({_id:userid}).exec(function(err,user){
	
	if(err)
	{
		res.error(error);
	}
	else
	{
		//console.log(user);

		user.blog.push(req.body);
		//	console.log(user);
			user.save();
	}

})
}

module.exports.get_blog=function(req,res){
User.find({}).exec(function(err,user){
	
	if(err)
	{
		res.error(error);
	}
	else
	{
		res.json(user);
	}

})
}

module.exports.view_blog=function(req,res){
	//console.log(req.body.id);
	var blogid=mongoose.Types.ObjectId(req.body.id);
	var userid=req.user._id;
	
	console.log(blogid);
	console.log(userid);

	User.find({ '_id':userid,'blog._id':blogid }, { $inc:{'blog.$.likes':1 }},function(err){
if(err)
	{
		res.error(error);
	}
	else
		{
			console.log("yes");
            
}
	})
	
User.find({"blog._id":blogid},{"blog.$":1}).exec(function(err,blog){
if(err)
	{
		res.error(error);
	}
	else
	{
		console.log(blog[0].blog[0]);
		res.json(blog[0].blog[0]);
	}

})


}
