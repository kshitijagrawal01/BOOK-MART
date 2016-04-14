
(function()
{
var app=angular.module('book-store');
var fblogincontroller=function($scope,$http)
{
console.log("in fb login");
$http.get('/auth/facebook').success(function(res)
{
	console.log("in fb success");
	console.log(res);
})
.error(function(err)
{
	console.log("err in fb");
})}
app.controller('fblogin-controller',['$scope','$http',fblogincontroller]);
}())