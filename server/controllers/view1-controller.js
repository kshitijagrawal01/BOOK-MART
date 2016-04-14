var User=require("../datasets/users.js")
var mongoose=require('mongoose');

module.exports.getbloginfo=function(req,res){
User.find({}).sort({'blog.$.likes' : -1}).limit(4).exec(function(err,data){
  
  if(err)
  {
    console.log("error");
  }
  else
  {
    console.log("retreive successfully");
    console.log(data);
    res.json(data);
  }

});
}

module.exports.view_blog=function(req,res){
  //console.log(req.body.id);
  var blogid=mongoose.Types.ObjectId(req.body.id);
  var userid=req.user._id;
  
  console.log(blogid);
  console.log(userid);

  User.update({ '_id':userid,'blog._id':blogid }, { $inc:{'blog.$.likes':1 }},function(err){
if(err)
  {
    res.error(error);
  }
  else
    {
      console.log("yes");
            
}
  });
  
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

});


}
