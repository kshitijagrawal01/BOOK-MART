(function()
{
    var app=angular.module('time-waste');
    var maincontroller=function($scope,$http,$interval)
    {
       
        if(localStorage['user']!==undefined)
            {
                $scope.user=JSON.parse(localStorage['user']);
                console.log($scope.user);
            }
        
        
        $scope.sendwaste=function(event)
        {
            if(event.which===13 )
                {
                    var request={
                        user:$scope.user.username||$scope.user.email,
                        userid:$scope.user._id,
                        userimage:$scope.user.userimage,
                        content:$scope.newwaste,
                        
                        
                    }
                    console.log(request);
                    $http.post('api/waste/post',request)
                    .success(function(response)
                            {
                        console.log("waste posted");
                        $scope.waste=response;
                        console.log(response);
                    }).error(function(error)
                            {
                        console.log("error in posting of waste");
                    })
                }
        };
        
        function getwastes(initial)
        {
            $http.get('api/waste/get').success(function(response){
                        if(initial)
                            {
                                $scope.waste=response;
                            }
              else  if(response.length>$scope.waste.length)
                  {
                      $scope.incomingwaste=response;
                  }
                                               
                                               })
        };
        
        $interval(function()
        {
            getwastes(false);
            if($scope.incomingwaste)
                {
            $scope.differences=$scope.incomingwaste.length-$scope.waste.length;
                    console.log("this is working");
                }
        },5000);
        
        
        $scope.setnewwaste=function()
        {
            $scope.waste=angular.copy($scope.incomingwaste);
            $scope.incomingwaste=undefined;
        }
        
        //initializers
        getwastes(true);
        
        
    }
    
   app.controller('maincontroller',['$scope','$http','$interval',maincontroller]);
    
}())