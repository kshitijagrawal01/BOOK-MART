(function()
{
	var app=angular.module('book-store');
	var bookviewcontroller=function($scope,$state,$http)
	{ 
		console.log("index");
	$http.get('/api/bookview').success(function(res)
	{
		
		$scope.bookview=res;
		console.log(res);
		
	}).error(function(err) 
	{
		console.log("errror");
	});
		}



 
 app.controller('bookviewcontroller',['$scope','$state','$http',bookviewcontroller]);

}());
