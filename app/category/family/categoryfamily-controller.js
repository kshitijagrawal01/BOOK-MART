(function(){
angular.module("book-store")
.controller('familycontroller',['$scope','$http',function($scope,$http){
        

        console.log('hii');



     var  request2={
                  
                 category:'family'
              }

     $http.post('api/bookinfo/family',request2).then(function(response){
$scope.categorybooks=response.data;
console.log($scope.categorybooks);

  });
     
     
          
}]);


}());