(function(){
angular.module("book-store")
.controller('historycontroller',['$scope','$http',function($scope,$http){
        

        console.log('hii');




     var  request6={
                  
                 category:'history'
              }

     $http.post('api/bookinfo/history',request6).then(function(response){
$scope.categorybooks=response.data;
console.log($scope.categorybooks);

  });

    
          
}]);


}());