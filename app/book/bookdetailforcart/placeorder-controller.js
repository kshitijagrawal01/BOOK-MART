(function()
{
	var app=angular.module('book-store');
	
 app.controller('placeorder-controller',['$scope','$state','$http','$stateParams',
 	function($scope,$state,$http,$stateParams){
 	
 	var price=$stateParams.price.toString();
			console.log(price);
		$scope.suc="";

	$scope.saveaddress=function(){		

			var request={
				add:$scope.add,
				landmark:$scope.landmark,
				phoneno:$scope.phoneno,
				state:$scope.state,
				price:price
			};
		$http.post('/api/cart/addpartials',request).success(function(res)
			{
				console.log("success");
                $scope.suc="alert";



			}).error(function(err)
			{
				console.log("error");
			})
 	}

 }]
 )}());	