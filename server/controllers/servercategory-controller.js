var BOOKS=require('../datasets/book-info.js');
	var fs=require('fs-extra');
	var path=require('path');
	module.exports.bioinfo=function(req,res)
  {
  var cat=req.body.category;

                BOOKS.find({'category':cat}).sort({'views' : -1}).exec(function(err,data){ 

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


module.exports.historyinfo=function(req,res)
  {
  var cat=req.body.category;

                BOOKS.find({'category':cat}).sort({'views' : -1}).exec(function(err,data){ 

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
module.exports.scienceinfo=function(req,res)
  {
  var cat=req.body.category;

                BOOKS.find({'category':cat}).sort({'views' : -1}).exec(function(err,data){ 

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
module.exports.computerinfo=function(req,res)
  {
  var cat=req.body.category;

                BOOKS.find({'category':cat}).sort({'views' : -1}).exec(function(err,data){ 

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
module.exports.philosinfo=function(req,res)
  {
  var cat=req.body.category;

                BOOKS.find({'category':cat}).sort({'views' : -1}).exec(function(err,data){ 

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
module.exports.comicinfo=function(req,res)
  {
  var cat=req.body.category;

                BOOKS.find({'category':cat}).sort({'views' : -1}).exec(function(err,data){ 

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
module.exports.familyinfo=function(req,res)
  {
  var cat=req.body.category;

                BOOKS.find({'category':cat}).sort({'views' : -1}).exec(function(err,data){ 

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
module.exports.dramainfo=function(req,res)
  {
  var cat=req.body.category;

                BOOKS.find({'category':cat}).sort({'views' : -1}).exec(function(err,data){ 

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
module.exports.examinfo=function(req,res)
  {
  var cat=req.body.category;

                BOOKS.find({'category':cat}).sort({'views' : -1}).exec(function(err,data){ 

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
module.exports.craftinfo=function(req,res)
  {
  var cat=req.body.category;

                BOOKS.find({'category':cat}).sort({'views' : -1}).exec(function(err,data){ 

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
