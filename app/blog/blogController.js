(function()
{
	var app=angular.module('book-store');
	var blogCtrl=function($scope,$state,$http)
	{ 
			$scope.postblog=function()
			{
				var request={
					title:$scope.blogtitle,
					subject:$scope.blogsubject,
					shortdescription:$scope.blogdescription,
					body:$scope.blogbody,
					likes:0
					}

					console.log(request);
				$http.post('api/blog/post',request).success(function(response){
							
				}).error(function(error){
					console.log(error);
				})

				$state.go("/blog-view");

			}

			
			function getblogs()
			{
			$http.get("api/blog/get").success(function(response){
				console.log(response);
					$scope.users=response;
					console.log($scope.users);
					
				
			})

			}

			getblogs();
}
	 
 app.controller('blogController',['$scope','$state','$http',blogCtrl]);

}());
