(function(){
angular.module("book-store")
.controller('philoscontroller',['$scope','$http',function($scope,$http){
        

        console.log('hii');




     var  request5={
                  
                 category:'philos'
              }

     $http.post('api/bookinfo/philos',request5).then(function(response){
$scope.categorybooks=response.data;
console.log($scope.categorybooks);

  });

    
          
}]);


}());