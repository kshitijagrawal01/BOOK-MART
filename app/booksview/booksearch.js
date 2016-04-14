(function(){
	var app=angular.module('book-store');
	app.controller('booksearchcontroller',['$scope','$http','$state','bookid',function($scope,$http,$state,bookid){
		$scope.dropdown=false;
		$scope.$watch(
	    function() {
	        return bookid.word;
	    },
	    function(newValue, oldValue) {
	        if(bookid.type==1){
			$http.post('api/search/word',{"value":newValue}).success(function(response){
					$scope.books=response;
					console.log(response);
				})
				.error(function(err){
					console.log(err);
				});
			}

			if(bookid.type==2){
			$http.post('api/search/ebookword',{"value":newValue}).success(function(response){
					$scope.books=response;
					console.log(response);
				})
				.error(function(err){
					console.log(err);
				});
			}

	    });
		


		$scope.search=function(event){
			$scope.dropdown=true;
			var type=$scope.type;
			if(type==1){
			if(event.which==13){
				$scope.dropdown=false;
				$http.post('api/search/word',{"value":$scope.search_val}).success(function(response){
					$scope.books=response;
					console.log(response);
				})
				.error(function(err){
					console.log(err);
				});
			}
			else{
				$http.post('api/search/word',{"value":$scope.search_val}).success(function(response){
					$scope.result=response;
					console.log(response);
				})
				.error(function(err){
					console.log(err);
				});
			}
		}

		if(type==2){
			console.log("2............");

			if(event.which==13){
				$scope.dropdown=false;
				$http.post('api/search/ebookword',{"value":$scope.search_val}).success(function(response){
					$scope.books=response;
					console.log(response);
				})
				.error(function(err){
					console.log(err);
				});
			}
			else{
				$http.post('api/search/ebookword',{"value":$scope.search_val}).success(function(response){
					$scope.result=response;
					console.log(response);
				})
				.error(function(err){
					console.log(err);
				});
			}
		}
		}


		$scope.fill=function(val){
			$scope.search_val=val;
			$scope.dropdown=false;
			var type=$scope.type;
			if(type==1){
			$http.post('api/search/search',{"value":$scope.search_val}).success(function(response){
					$scope.books=response;
					console.log(response);
				})
				.error(function(err){
					console.log(err);
				});
			}
			if(type==2){
			$http.post('api/search/ebooksearch',{"value":$scope.search_val}).success(function(response){
					$scope.books=response;
					console.log(response);
				})
				.error(function(err){
					console.log(err);
				});
			}
		}

		$scope.submit=function(){
			$scope.dropdown=false;
			var type=$scope.type;
			if(type==1){
			$http.post('api/search/word',{"value":$scope.search_val}).success(function(response){
					$scope.books=response;
					console.log(response);
				})
				.error(function(err){
					console.log(err);
				});
			}

			if(type==2){
			$http.post('api/search/ebookword',{"value":$scope.search_val}).success(function(response){
					$scope.books=response;
					console.log(response);
				})
				.error(function(err){
					console.log(err);
				});
			}
		}

		$scope.viewbook=function(id){
			bookid.id=id;
			var type=$scope.type;
			if(type==1){
				$state.go('/book-full');
			}
			if(type==2){
				$state.go('/ebook-view');
			}
		}

	}])

	app.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });

      return output;
   };
});

	app.filter('pricefilter', function () {
    return function ( items, min,max ) {
        var filteredItems = []
        angular.forEach(items, function ( item ) {
            if ( item.price > min && item.price <max ) {
                filteredItems.push(item);
            }
        });
        return filteredItems;
    }
})

	app.service('bookid',function(){
		this.id="";
		this.type="";
		this.word="";
	});
}());