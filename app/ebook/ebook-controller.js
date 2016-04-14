(function(){
	var app=angular.module('book-store');

	app.controller('ebookcontroller',['$scope', 'Upload', function ($scope, Upload){


		$scope.saveinfo=function(){
			var request={
				name:$scope.name,
				price:$scope.price,
				userid:"sidd",
				publisher:$scope.publisher,
				author:$scope.author,
				pages:$scope.pages,
				category:$scope.category,
				descriptions:$scope.descriptions,
				bookurl:undefined,
				pincode:[{"availableat":$scope.pincode,"availableafter":15}],
				offers:$scope.offers,
				
			}

			$scope.$watch(function()
			{
				return $scope.file
			},function()
			{
				$scope.upload($scope.file);
			});

			$scope.upload = function (file) {
			console.log(file);
        Upload.upload({
            url: 'app/ebook/ebookinfo',
            type:'POST',
            data: request,
            file:file
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };

		}

		

	}]);
}());