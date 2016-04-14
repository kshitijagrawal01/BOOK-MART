(function(){
angular.module("book-store")
.controller('userinputcontroller',['Upload','$scope','$state','$http',function(Upload,$scope,$state,$http){

        


           $scope.submit=function()
        {
            var request={
              
                  
                  mobile:$scope.user.mobile,
                  name1:$scope.user.name1,
                  email:$scope.user.email,
                  dob:$scope.user.dob,
                  address:$scope.user.address
			}
          
          console.log(request);

		$scope.$watch(function()
		{
			return $scope.file
		},function()
		{
			$scope.upload($scope.file);
		});



		$scope.upload=function(file)
		{
			if(file)
			{
                 Upload.upload(
                               {
                         url:'api/profile/update',
                         type:'POST',
                         data:request,
                         file:file
                               }).progress(function(evt)
                               { 
	                        console.log("  uploading file");
                               }).success(function(data)
                               {
                               	console.log(data);
                               console.log("saved file");
                               alert("form submitted");
                               }).error(function(err)
                               {
                               	console.log("error in file upload");
                               })
			}

		};

       


        
        }

           
        $scope.reset=function()
        {
         
                $scope.user.name="";
                $scope.user.name="";
                $scope.user.name="";
                $scope.user.name="";
                $scope.user.name="";
                $scope.file="";

        }
		
	

 
}]);


}());