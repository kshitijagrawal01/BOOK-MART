(function(){
angular.module("book-store")
.controller('examscontroller',['$scope','$http',function($scope,$http){
        

        console.log('hii');



     var  request4={
                  
                 category:'exams'
              }

     $http.post('api/bookinfo/exams',request4).then(function(response){
$scope.categorybooks=response.data;
console.log($scope.categorybooks);

  });

     

          
}]);


}());