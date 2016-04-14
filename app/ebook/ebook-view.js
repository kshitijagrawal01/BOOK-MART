(function()
{
	var app=angular.module('book-store');
	
 app.controller('ebook-controller',['$scope','$state','$http','bookid',function($scope,$state,$http,bookid){
 	
 	var request={
 		//isbn:"ISBN1234"
 		id:bookid.id
 	}
 	console.log(bookid.id);
 	$scope.userval=[];
 	$scope.stars=[];
 	

 	$http.post('api/ebook/info',request).success(function(response){
 		$scope.data=response[0];
 		console.log(response);
 		$scope.data.star=Math.ceil($scope.data.star);
 		$scope.data.reviews.forEach(function(entry){
 			$http.post('api/ebook/user',{"user":entry.userid}).success(function(response){
 				
 				$scope.userval.push(response);
 				
 			});
 		});
 		
 	}).error(function(err){
 		console.log("ERROR"+err);
 	});




 	$scope.likes=function(bookid,userid,index){
 		var request={
 			bookid:bookid,
 			userid:userid
 		}
 		console.log(request);
 		$http.post('api/ebook/likes',request).success(function(response){
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


 	

 	$scope.comment=function(event){
 		if(event.which==13){
 			var request={
 				"id":$scope.data._id,
 				"userid":"56e5406d67e04117430d6a81",
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
