var User=require('../datasets/users');
var book=require('../datasets/book-info');
var mongoose=require('mongoose');

module.exports.addpartials=function(req,res){
	
	
var userid=req.user._id;
userid=mongoose.Types.ObjectId(userid);
var add=req.body.add;
var landmark=req.body.landmark;
var phoneno=req.body.phoneno;
var state=req.body.state;
var price=req.body.price;
//var val={"bookid":id};

User.update({"_id":userid},{$set:{"address":add,"landmark":landmark,"phoneno":phoneno,"state":state}},function(err,result){

	if(err){
		console.log(err);
		res.json({status:500});
	}
	else
	{

           User.find({"_id":userid},{"cartdetails.bookid":true,"_id":false},function(err,result)
        {
	         if(err)
		       console.log(err);
	         else {
		      var array=[];
		          for (var i=0;i<result[0].cartdetails.length;i++)
		           { 

			          console.log(result[0].cartdetails[i].bookid);
                      array[i]=result[0].cartdetails[i].bookid;
             User.update({"_id":userid},{$push:{"rentedbooks":{$each:[{"bookid":array[i],"price":price}]}}}
		             	,function(err,result)
                       {
	                      if(err)
	                      {
	                        console.log("error in add to set boooks in rentedbooks");
		                    res.json({status:500});
	                       }
	                      else
	                      {
	                      	  console.log("success ");
	                      	  User.update({"_id":userid}, { $set: {cartdetails: []} },function(err,result){

	                         if(err){
                              		 console.log("errr");
		                             //res.json(err);
	                                }
	                                else
	                                	
	                                	{
	                                		console.log("gd");
	                            res.json({status:200});
	                        }
                                   });



                           
                            }
                            })
		             

		            }

		
		          
	}

})



	// res.json({status:200});
}
});

}




module.exports.addtocart=function(req,res){
	var id=mongoose.Types.ObjectId(req.body.id);

	console.log(id);
	
var userid=req.user._id;
userid=mongoose.Types.ObjectId(userid);
console.log(userid);
//var val={"bookid":id};

User.update({"_id":userid},{$addToSet:{"cartdetails":{"bookid":id}}},function(err,result){

	if(err){
		console.log(err);
		res.json(err);
	}
	res.json("working..........");
});

}
module.exports.usercartinfo=function(req,res){

var userid=req.user._id;
userid=mongoose.Types.ObjectId(userid);
console.log(userid);
User.find({"_id":userid},{"cartdetails.bookid":true,"_id":false},function(err,result)
{
	if(err)
		console.log(err)
	else {
		var array=[];
		for (var i=0;i<result[0].cartdetails.length;i++)
		{ 
			//console.log(result[0].cartdetails[i].bookid);
            array[i]=result[0].cartdetails[i].bookid;
		}

		//console.log(array);
		book.find({_id:{$in:array}},function(err,result)
{
	if(err)
	{
		res.json({status:500});
	}
	else
	{
res.json(result);
}
})
	}

})

}
module.exports.deletefromcart=function(req,res)
{
	var userid=req.user._id;
	userid=mongoose.Types.ObjectId(userid);
    var bookid=req.body.bookid;
    User.update( {_id: userid}, { $pull: {cartdetails: {bookid:bookid }} },function(err)
    {
    	if(!err)
    		
    		{
    			
    			res.json({status:200});
    		}
    	else 
    	{
    		res.json({status:500});
    	}
    		
    } )
   

}