(function()
{
	var app=angular.module('book-store');
	var rentalcartcontroller1=function($scope,$state,$http)
	{ 
		
		
	function userbookcartinfo(){
	$scope.price=0;
		console.log("angular");
		$http.get('/api/usercartinfo').success(function(res)
	{
		
		
		$scope.cartinfo=res;
	
	}).error(function(err) 
	{
		console.log("errror");
	});


		}
userbookcartinfo();


$scope.deletefromcart=function(bookid)
{
	//console.log(bookid);
	var request={
		bookid:bookid
	}
   $http.post('/api/deletefromcart',request).success(function(res)
   {
   //	console.log("deleteed from cart");
   	userbookcartinfo();
   }).error(function(err)
   {
   	console.log("err");


   	})



}



	}



 app.controller('rentalcartcontroller',['$scope','$state','$http',rentalcartcontroller1]);

}());
