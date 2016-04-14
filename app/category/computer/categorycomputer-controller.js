(function(){
angular.module("book-store")
.controller('computercontroller',['$scope','$http','$state','bookid',function($scope,$http,$state,bookid){
        

        console.log('hii');




     var  request8={
                  
                 category:'computer'
              }

     $http.post('api/bookinfo/computer',request8).then(function(response){
$scope.categorybooks=response.data;
console.log($scope.categorybooks);

  });

$scope.cart=function(bookval){
  bookid.id=bookval.bookid;
  $state.go('/book-full');
}

          
}]);


}());