var books=require('../datasets/book-info');

module.exports.getbookview=function(req,res)
{
console.log(req.user._id);
books.find({},function(err,response)
{
	if(err)
		console.log("err at server");
	else 
		res.json(response);
})



}
