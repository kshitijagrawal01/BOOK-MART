	var USER=require('../datasets/users.js');
	var fs=require('fs-extra');
	var path=require('path');
	module.exports.update=function(req,res)
	{
		var id=req.user._id;
		console.log(id);
		var name=req.body.name1;
		var email=req.body.email;
		var mobile=req.body.contact;
		var address=req.body.address;
		var dob=req.body.dob;

		var filename=req.files.file;
	
		console.log(filename);
		var temppath=filename.path;
	
		var targetpath=path.join(__dirname,"../../uploads/"+filename.name);
        console.log(targetpath);
        
        var savepath="/uploads/"+filename.name;
        console.log(savepath);
		fs.rename(temppath,targetpath,function(err)
		{
			if(err)
			{
				console.log("not moved");
			}
			else 
			{
                USER.findById(id,function(err,userData)
                           {
                             	 var userdbdata=userData;
			                     userdbdata.firstname=name;
			                     userdbdata.email=email;
			                     userdbdata.mobile=mobile;
			                     userdbdata.address=address;
			                     userdbdata.dob=dob;   
                                 userdbdata.imageurl=savepath;
                                 userdbdata.save(function(err)
                              {
                                 if(err)
                                   {
                                     console.log("failed to save to mongo");
                                     res.json({status:500});
                                   }
                                 else 
                                   {
                                     console.log("saved to mongo successfully");
                                     res.json({status:200});
                                   }
                              })
                          })
                
			}
		})

	}
	
	

