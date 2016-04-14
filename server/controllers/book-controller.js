
var BOOKS=require('../datasets/book-info.js');

var fs=require('fs-extra');
var path=require('path');
module.exports.savebookinfo=function(req,res)
{
 //console.log(req.body);
 //console.log("in server");
 	var filename=req.files.file;
 	var temppath=filename.path;
	
	var targetpath=path.join(__dirname,"../../uploads/"
			+filename.name);
      
        
        var savepath="/uploads/"+filename.name;
        console.log(savepath);
        req.body.imageurl=savepath;
		fs.rename(temppath,targetpath,function(err)
		{
			if(err)
			{
				console.log("not moved");
			}
			else 
			{
				
				var book=new BOOKS(req.body);
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

	