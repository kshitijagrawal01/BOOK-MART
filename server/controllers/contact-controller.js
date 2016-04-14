
var MESSAGE=require('../datasets/contactus.js');

var fs=require('fs-extra');
var path=require('path');
module.exports.saveinfo=function(req,res)
{
 
            var userid=req.user._id;
            console.log(userid);
            req.body.userid=userid;
            console.log(req.body);
           

      
}

	