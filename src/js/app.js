(function(){
	angular.module('routerApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/products');

		$stateProvider
		.state('products', {
			url: '/products',
			templateUrl: 'views/partial-products.html',
			resolve: {
				getProducts: function(Item){
					return Item.get().then(function(response){
						return response.data;
					});
				}
			},
			controller: 'ProductsController as products'
		})
		.state('product-details', {
			url: '/products/:productId',
			templateUrl: 'views/partial-product-details',
			resolve: {
				getProducts: function(Item){
					return Item.get().then(function(response){
						return response.data;
					});
				}
			},
			controller: 'DetailsController as details'
		})
		.state('signup',{
			url:'/signup',
			templateUrl: 'views/partial-signup',
			controller: 'SignupController as signup'
		})
		.state('login',{
			url:'/login',
			templateUrl: 'views/partial-login',
			controller: 'LoginController as login'
		});
	});
})();