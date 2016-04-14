(function(){
	var app=angular.module('book-store');
	app.service('booksearchcontroller',['this','$http','$state','bookid',function(this,$http,$state,bookid){
		this.dropdown=false;
		
		this.search=function(event){
			this.dropdown=true;
			var type=this.type;
			if(type==1){
			if(event.which==13){
				this.dropdown=false;
				$http.post('api/search/word',{"value":this.search_val}).success(function(response){
					this.books=response;
					console.log(response);
				})
				.error(function(err){
					console.log(err);
				});
			}
			else{
				$http.post('api/search/word',{"value":this.search_val}).success(function(response){
					this.result=response;
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
				this.dropdown=false;
				$http.post('api/search/ebookword',{"value":this.search_val}).success(function(response){
					this.books=response;
					console.log(response);
				})
				.error(function(err){
					console.log(err);
				});
			}
			else{
				$http.post('api/search/ebookword',{"value":this.search_val}).success(function(response){
					this.result=response;
					console.log(response);
				})
				.error(function(err){
					console.log(err);
				});
			}
		}
		}


		this.fill=function(val){
			this.search_val=val;
			this.dropdown=false;
			var type=this.type;
			if(type==1){
			$http.post('api/search/search',{"value":this.search_val}).success(function(response){
					this.books=response;
					console.log(response);
				})
				.error(function(err){
					console.log(err);
				});
			}
			if(type==2){
			$http.post('api/search/ebooksearch',{"value":this.search_val}).success(function(response){
					this.books=response;
					console.log(response);
				})
				.error(function(err){
					console.log(err);
				});
			}
		}

		this.submit=function(){
			this.dropdown=false;
			var type=this.type;
			if(type==1){
			$http.post('api/search/word',{"value":this.search_val}).success(function(response){
					this.books=response;
					console.log(response);
				})
				.error(function(err){
					console.log(err);
				});
			}

			if(type==2){
			$http.post('api/search/ebookword',{"value":this.search_val}).success(function(response){
					this.books=response;
					console.log(response);
				})
				.error(function(err){
					console.log(err);
				});
			}
		}

		this.viewbook=function(id){
			bookid.id=id;
			var type=this.type;
			if(type==1){
				$state.go('/book-view');
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
	});
}());