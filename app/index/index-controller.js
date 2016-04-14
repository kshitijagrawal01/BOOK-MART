(function(){
angular.module("book-store")
.controller('indexcontroller',['$scope','$http','$state','bookid',function($scope,$http,$state,bookid){
        

    


          $http.post('api/bookinfo/getbooks').then(function(response){
$scope.allbooks=response.data;
//console.log($scope.allbooks);

  });

var  request={
                  
                 category:'computer'
              }

     $http.post('api/bookinfo/sciencebooks',request).then(function(response){
     $scope.categorybooks=response.data;
//console.log($scope.categorybooks);

  });
     var  request1={
                  
                 category:'bio'
              }

     $http.post('api/bookinfo/preparationbooks',request1).then(function(response){
$scope.categoryexambooks=response.data;
//console.log($scope.categoryexambooks);

  });

     function getblogs()
      {

     $http.post('api/bookinfo/blog').then(function(response){
     $scope.users=response.data;
//console.log($scope.users);
});

      
     
  }
     
     getblogs();
$scope.cart=function(bookval){
  bookid.id=bookval.bookid;
  $state.go('/book-full');
}

          
}]);


}());