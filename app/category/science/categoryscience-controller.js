(function(){
angular.module("book-store")
.controller('sciencecontroller',['$scope','$http',function($scope,$http){
        

        console.log('hii');


v
     var  request3={
                  
                 category:'science'
              }

     $http.post('api/bookinfo/science',request3).then(function(response){
$scope.categorybooks=response.data;
console.log($scope.categorybooks);

  });
     
          
}]);


}());