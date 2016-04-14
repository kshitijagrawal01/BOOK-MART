(function()
{
	var app=angular.module('book-store');
	var bookcontroller=function($scope,$state,$http,Upload)
	{ 
		
	 $scope.saveinfo=function()
		{
				console.log("cont");
            var date1= new Date();
			console.log(date1);
			
			var request={
				name:$scope.name,
				price:$scope.price,
				userid:"sidd",
				publisher:$scope.publisher,
				author:$scope.author,
				isbn:$scope.isbn,
				pages:$scope.pages,
				category:$scope.category,
				descriptions:$scope.descriptions,
				pincode:[{"availableat":$scope.pincode,"availableafter":15}],
				offers:$scope.offers,
				

				imageurl:undefined,
				date:date1
			}

console.log(request);

			$scope.$watch(function()
			{
				return $scope.file
			},function()
			{
				$scope.upload($scope.file);
			});



			$scope.upload=function(file)
			{
				if(file)
				{
	                 Upload.upload(
	                               {
	                        url:'api/bookinfo/saveinfo',
	                        type:'POST',
	                        data:request,
	                        file:file
	                               }).progress(function(evt)
	                               { 
		                        console.log("  uploading file");
	                               }).success(function(data)
	                               {
	                           console.log("saved file");
	                           //$state.go('mybooks');
	                               }).error(function(err)
	                               {
	                               	console.log("error in file upload");
	                               })
				}

			};
	







		}
		



		}



 
 app.controller('book-controller',['$scope','$state','$http','Upload',bookcontroller]);

}());
