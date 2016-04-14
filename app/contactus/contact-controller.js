(function()
{
	var app=angular.module('book-store');
	var contactcontroller=function($scope,$state,$http,Upload)
	{ 
		console.log("cont");
	 $scope.saveinfo=function()
		{
				console.log("cont");
            var date1= new Date();
			console.log(date1);
			
			var request={
				message:$scope.message,
				date:date1
			}

console.log(request);
$http.post('api/contact/post',request).success(function(response){
							
				}).error(function(error){
					console.log(error);
				})

			
		
	}

}

 
 app.controller('contactcontroller',['$scope','$state','$http','Upload',contactcontroller]);

}());
