(function()
{
var app=angular.module('book-store');
var logincontroller=function($scope,$http,$state,loginsession)
{

$scope.loginbutton=function(user)
{
var user=
{
	username:$scope.user.email,
	password:$scope.user.password
}
console.log(user);
$http.post('/auth/login',user).success(function(response)
	{
console.log(response);

     $scope.loggeduser = response;
     loginsession.user=response;
   

    // $location.path('/user');
     $scope.alert = 'Successfully logged in'; 
   
     //$state.go('/user');
    
	}).error(function(err)
	{
		console.log(err);
		$scope.alert = 'Login failed'
	});

}
 $scope.signup = function(user){
        $http.post('/auth/signup', user).
            success(function(data) {
                $scope.alert = data.alert;
             }).
            error(function() {
                $scope.alert = 'Registration failed'
            });

    };

    $scope.userinfo = function() {
        $http.get('/auth/currentuser').
            success(function (data) {
                $scope.loggeduser = data;
                console.log($scope.loggeduser);
            }).
            error(function () {
                $scope.alert = 'Login failed'
            });
    };



    $scope.logoutbutton = function(){
        $http.get('/auth/logout')
            .success(function() {
                $scope.loggeduser = {};
                $scope.alert = 'Logout success';
               
                $state.go('/login');

            })
            .error(function() {
                $scope.alert = 'Logout failed'
            });
    };
    

}
app.controller('login-controller',['$scope','$http','$state','loginsession',logincontroller]);
}());


