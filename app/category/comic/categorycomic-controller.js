(function(){
angular.module("book-store")
.controller('comiccontroller',['$scope','$http','$state','bookid',function($scope,$http){
        

        console.log('hii');



var  request9={
                  
                 category:'comic'
              }

     $http.post('api/bookinfo/comic',request9).then(function(response){
$scope.categorybooks=response.data;
console.log($scope.categorybooks);

  });

          
}]);


}());