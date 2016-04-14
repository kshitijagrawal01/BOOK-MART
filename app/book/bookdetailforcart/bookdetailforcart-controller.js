
(function()
{
	var app=angular.module('book-store');
	
 app.controller('bookdetailforcart-controller',['$scope','$state','$http','$stateParams','bookid',function($scope,$state,$http,$stateParams,bookid){
 	
 	//var bookid=$stateParams.bookid.toString();
			//console.log(bookid);
 	var request={
 		
 		id:bookid.id
 	}
 	
 	$scope.userval=[];
 	$scope.stars=[];
 	

 	$http.post('api/book/info',request).success(function(response){
 		$scope.data=response[0];
 		console.log($scope.data);
 		$scope.data.star=Math.ceil($scope.data.star);
 		$scope.data.reviews.forEach(function(entry){
 			$http.post('api/book/user',{"user":entry.userid}).success(function(response){
 				//console.log(response);
 				$scope.userval.push(response);
 				//console.log(userval);
 			});
 		});
 		
 	}).error(function(err){
 		console.log("ERROR"+err);
 	});


$scope.addtocart=function()
{
	console.log("in cart"+bookid.id);
	var request={
 		
 		id:bookid.id
 	}
 	$http.post('api/book/addtocart',request).success(function(response){
 		$state.go('/rentalcart');
 		
 		
 	}).error(function(err){
 		console.log("ERROR"+err);
 	});
 	
}

 	$scope.likes=function(bookid,userid,index){
 		var request={
 			bookid:bookid.id,
 			userid:userid
 		}
 		console.log(request);
 		$http.post('api/book/likes',request).success(function(response){
 			console.log(response);
 			$scope.data.reviews[index].likes++;
 		})
 		.error(function(err){
 			console.log(err);
 		});
 	}

 	$scope.dislikes=function(bookid,userid,index){
 		var request={
 			bookid:bookid,
 			userid:userid
 		}
 		$http.post('api/book/dislikes',request).success(function(response){
 			console.log(response);
 			$scope.data.reviews[index].dislikes++;
 		})
 		.error(function(err){
 			console.log(err);
 		});
 	}


 	$scope.checkpin=function(){

 		var request={
 			id:$scope.data._id,
 			pin:$scope.pin
 		}
 		
 		$http.post('api/book/pin',request).success(function(response){
 			if(response==0){
	 			$scope.msg="Service is not avilable in your area";
	 		}
	 		else{
	 			$scope.msg="Book will be delivered within "+response+" days";
	 		}
 		}).error(function(err){
 			console.log(err)
 		});
 	}

 	$scope.comment=function(event){
 		if(event.which==13){
 			var request={
 				"id":$scope.data._id,
 				"userid":undefined,
 				"rating":$scope.star,
 				"review":$scope.comm,
 				"likes":0,
 				"dislikes":0
 			}
 			$http.post('api/book/communication',request).success(function(response){
 				$scope.data.reviews.push(request);
 				$http.post('api/book/user',{"user":"56e5406d67e04117430d6a81"}).success(function(response){
 				//console.log(response);
 				$scope.userval.push(response);
 				//console.log(userval);
 			});
 			})
 			.error(function(err){

 			});
 		}
 	}

 }]);


}());

