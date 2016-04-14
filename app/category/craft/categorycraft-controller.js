(function(){
angular.module("book-store")
.controller('craftcontroller',['$scope','$http',function($scope,$http){
        

        console.log('hii');



     var  request1={
                  
                 category:'craft'
              }

     $http.post('api/bookinfo/craft',request1).then(function(response){
$scope.categorybooks=response.data;
console.log($scope.categorybooks);

  });

     

          
}]);


}());