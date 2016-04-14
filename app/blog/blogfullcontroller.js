(function()
{
	var app=angular.module('book-store');
	var blogfullCtrl=function($scope,$state,$http,$stateParams)
	{ 
		
			var blogid=$stateParams.blogid.toString();
			
				var request={
					id:blogid
				
					}
				$http.post('api/blog/show',request).success(function(response){
							console.log(response);
							$scope.blog=response;
							
				}).error(function(error){
					console.log(error);
				})


			
	}
	 
 app.controller('blogfullCtrl',['$scope','$state','$http','$stateParams',blogfullCtrl]);

}());
