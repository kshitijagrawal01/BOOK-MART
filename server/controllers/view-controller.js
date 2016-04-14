	var BOOKS=require('../datasets/book-info.js');
	var fs=require('fs-extra');
	var path=require('path');
	module.exports.getbookinfo=function(req,res)
	{
	

                BOOKS.find({}).sort({'views' : -1}).limit(4).exec(function(err,data){ 

                                if(err)
                                   {
                                     console.log("failed to retreive from mongo");
                                     res.json({status:500});
                                   }
                                 else 
                                   {
                                     console.log("retreive successfully");
                                     console.log(data);
                                     res.json(data);
                                   }


                	 });
                           
                             	
                                
                                 
                            
                
			}
		

	module.exports.getsciencebookinfo=function(req,res)
	{
	var cat=req.body.category;

                BOOKS.find({'category':cat}).sort({'views' : -1}).limit(4).exec(function(err,data){ 

                                if(err)
                                   {
                                     console.log("failed to retreive from mongo");
                                     res.json({status:500});
                                   }
                                 else 
                                   {
                                     console.log("retreive successfully");
                                     console.log(data);
                                     res.json(data);
                                   }


                	 });
                           
                             	
                                
                                 
                            
                
			}

			module.exports.getpreparationbookinfo=function(req,res)
	{
	var prep=req.body.category;

                BOOKS.find({'category':prep}).sort({'views' : -1}).limit(4).exec(function(err,data){ 

                                if(err)
                                   {
                                     console.log("failed to retreive from mongo");
                                     res.json({status:500});
                                   }
                                 else 
                                   {
                                     console.log("retreive successfully");
                                     console.log(data);
                                     res.json(data);
                                   }


                	 });
                           
                             	
                                
                                 
                            
                
			}
		
		
		
		
		