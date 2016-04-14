(function()
{
	angular.module('book-store', ['ui.router','ngFileUpload'])
	.config(function($stateProvider,$urlRouterProvider)
	{  $urlRouterProvider.otherwise('/index');
		$stateProvider
		.state("/index",
		{
			url:"/index",
			templateUrl:"app/index/home.html",
			controller:"indexcontroller"
			/*templateUrl:"app/book/book-view.html",
			controller:"bookviewcontroller"*/
		}
			)
			
			.state('/book-input',
		{
			url:"/book-input",
			templateUrl:"app/book/book-input.html",
			controller:"book-controller"
		}
			).state('/blog-input',
		{
			url:"/blog-input",
			templateUrl:"app/blog/blog-input.html",
			controller:"blogController"
		}
			).state('/blog-view',
		{
			url:"/blog-view",
			templateUrl:"app/blog/blog-view.html",

			controller:"blogController"
		}
			).state('/blog-full',
		{
			url:"/blog-full",
			templateUrl:"app/blog/blog-view-full.html",
						params:{blogid:null},

			controller:"blogfullCtrl"
		}
			)
			.state('/user-input',
		{
			url:"/user-input",
			templateUrl:"app/user/user-input.html",
			controller:"userinputcontroller"
		}
			)
			
			.state('/book-view',
		{
			url:"/book-view",
			templateUrl:"app/book/book-view.html",
			controller:"book-controller"
		}
			)
			.state('/user-view',
		{
			url:"/user-view",
			templateUrl:"app/user/user-view.html",
			controller:""
		}
			)
	
			.state('/login',
		{
			url:"/login",
			templateUrl:"app/login/login.html",
			controller:"login-controller"
		}
			)

			.state('/auth/facebook',
		{
			url:"/fb-login",
			templateUrl:"app/login/login.html",
			controller:"fblogin-controller"
		}
			)

			/*.state('/bookdetailforcart',
		{
			url:"/bookdetailforcart",
			templateUrl:"app/book/bookdetailforcart/bookdetailforcart.html",
			controller:"bookdetailforcart-controller"
		}
			)*/
			.state('/book-full',
		{
			url:"/book-full",
			templateUrl:"app/book/bookdetailforcart/bookdetailforcart.html",
		
			//params:{bookid:null},
			controller:"bookdetailforcart-controller"
			
		}
			)
					.state('placeorder',
		{
			url:"/placeorder",
			templateUrl:"app/book/bookdetailforcart/placeorder.html",
		
			params:{price:null},
			controller:"placeorder-controller"
			
		}
			)
					.state('/rentalcart',
		{
			url:"/rentalcart",
			templateUrl:"app/book/bookdetailforcart/rentalcart.html",
			controller:"rentalcartcontroller"
			
		}
			)

			.state('/user',
		{
			url:"/userinfo",
			templateUrl:"app/login/userinfo.html",
			controller:"login-controller"
		}
			)
	



		.state('/signup',
		{
			url:"/signup",
			templateUrl:"app/login/signup.html",
			controller:"login-controller"
		}
			)

		.state('/book-search',
			{
				url:"/book-search",
				templateUrl:"app/booksview/booksearch.html",
				controller:"booksearchcontroller"
			})
			.state('/book-entry',
		{
			url:"/book-entry",
			templateUrl:"app/book/book-input.html",
			controller:"bookcontroller"
		}).state('/comic',
		{

			url:"/comic",
			templateUrl:"app/category/comic/comic.html",
			controller:"comiccontroller"
			
		}
			).state('/family',
		{

			url:"/family",
			templateUrl:"app/category/family/family.html",
			controller:"familycontroller"
			
		}
			).state('/science',
		{

			url:"/science",
			templateUrl:"app/category/science/science.html",
			controller:"sciencecontroller"
			
		}
			).state('/craft',
		{

			url:"/craft",
			templateUrl:"app/category/craft/craft.html",
			controller:"craftcontroller"
			
		}
			).state('/computer',
		{

			url:"/computer",
			templateUrl:"app/category/computer/computer.html",
			controller:"computercontroller"
			
		}
			).state('/exams',
		{

			url:"/exams",
			templateUrl:"app/category/exams/exams.html",
			controller:"examscontroller"
			
		}
			).state('/bio',
		{

			url:"/bio",
			templateUrl:"app/category/bio/bio.html",
			controller:"biocontroller"
			
		}
			).state('/drama',
		{

			url:"/drama",
			templateUrl:"app/category/drama/drama.html",
			controller:"dramacontroller"
			
		}
			).state('/history',
		{

			url:"/history",
			templateUrl:"app/category/history/history.html",
			controller:"historycontroller"
			
		}
			).state('/philos',
		{

			url:"/philos",
			templateUrl:"app/category/philos/philos.html",
			controller:"philoscontroller"
			
		}
			).state('/contactus',
		{
			url:"/contactus",
			templateUrl:"app/contactus/contactus.html",
			controller:"contactcontroller"
		}
			)
			.state('/ebook-input',
			{
				url:'/ebook-input',
				templateUrl:'app/ebook/ebook-input.html',
				controller:'ebookcontroller'
			})
			.state('/ebook-view',
			{
				url:'/ebook-view',
				templateUrl:'app/ebook/ebook-view.html',
				controller:'ebook-controller'
			})
	}).controller('indexcontroller1',['$scope','$state','$http','$stateParams','loginsession','bookid',function($scope,$state,$http,$stateParams,loginsession,bookid)
	{
		$scope.loggedin=false;
		$scope.dropdown=false;
		
		$scope.search=function(event){
			//console.log("okk");
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
			bookid.type=$scope.type;
			bookid.word=$scope.search_val;
			$state.go('/book-search');
		}

		$scope.submit=function(){
			$scope.dropdown=false;
			var type=$scope.type;
			bookid.type=$scope.type;
			bookid.word=$scope.search_val;
			$state.go('/book-search');
		}
		$scope.$watch(function() { return loginsession.user },
              function(newval,oldval) {
              	if(newval == ""){
				$scope.loggedin=false;
			}
			else{
				$scope.loggedin=true;
				$scope.loginsession=loginsession.user;
				console.log($scope.loginsession.firstname)
			}
              }
             );

		$scope.logout=function(){
			loginsession.user="";
		 $http.get('/auth/logout')
            .success(function() {
                $scope.loggeduser = {};
                $scope.alert = 'Logout success';
               
                $state.go('/login');

            })
            .error(function() {
                $scope.alert = 'Logout failed'
            });
		}



		

	}]).service('loginsession',function(){
    this.user="";
}).service('bookid',function(){
		this.id="";
		this.type="";
		this.word="";
	});



}());
