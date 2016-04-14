(function(){
angular.module("book-store")
.controller('biocontroller',['$scope','$http','$state','bookid',function($scope,$http,$state,bookid){
        

        console.log('hii');


var  request={
                  
                 category:'bio'
              }

     $http.post('api/bookinfo/bio',request).then(function(response){
$scope.categorybooks=response.data;
console.log($scope.categorybooks);

  });
     
$scope.cart=function(bookval){
  bookid.id=bookval.bookid;
  $state.go('/book-full');
}

          
}]);


}());