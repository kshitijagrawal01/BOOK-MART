(function(){
angular.module("book-store")
.controller('dramacontroller',['$scope','$http',function($scope,$http){
        

        console.log('hii');



     var  request7={
                  
                 category:'drama'
              }

     $http.post('api/bookinfo/drama',request7).then(function(response){
$scope.categorybooks=response.data;
console.log($scope.categorybooks);

  });

    
          
}]);


}());