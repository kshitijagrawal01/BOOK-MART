var usersdb=require('../datasets/users.js');
module.exports.getusers=function(req,res)
{
	usersdb.find({},function(err,userdata)
	{ if(!err)
		{
			console.log(userdata);
		res.json(userdata);
		}
		else 
			console.log(err);
	})
}
 module.exports.followusers=function(req,res)
{
	var userid=req.body.userid;
	var followid=req.body.followid;
	usersdb.findById(userid,function(err,userinfo)
	{
      userinfo.following.push({userid:followid});
      userinfo.save();
	})
	usersdb.findById(followid,function(err,followerinfo)
	{
      followerinfo.followers.push({userid:userid});
      followerinfo.save();
	})
}