(function(){
	angular.module('routerApp', ['ngStorage','ui.router']).config(function($stateProvider, $urlRouterProvider){
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
			controller: 'SignupController as signup',
			onEnter: function($localStorage, $location){
				if($localStorage.token){
					$location.path('products');
				}
			}
		})
		.state('login',{
			url:'/login',
			templateUrl: 'views/partial-login',
			controller: 'LoginController as login',
			onEnter: function($localStorage, $location){
				if($localStorage.token){
					$location.path('products');
				}
			}
		})
		.state('purchase',{
			url: '/purchase/:productId',
			templateUrl: 'views/partial-purchase',
			onEnter: function($localStorage, $location){
				if(!$localStorage.token){
					$location.path('login');
				}
			},
			resolve: {
				getProductsForPurchase: function(Item){
					return Item.get().then(function(response){
						return response.data;
					});
				}
			},
			controller: 'PurchaseController as objToPurchase'			
		})
		.state('admin',{
			url: '/admin',
			templateUrl: 'views/partial-admin',
			controller: 'AdminController as admin'
		})
		.state('dashboard',{
			url: '/dashboard',
			templateUrl: 'views/partial-dashboard',
			resolve: {
				getAllTransactions: function(Transaction){
					return Transaction.get().then(function(response){
						return response.data;
					});
				},
				// getSummary: function(Item){
				// 	return Item.getSummary().then(function(response){
				// 		return response.data;
				// 	});
				// }
			},
			controller: 'DashboardController as dashboard'			
		})
		.state('cart',{
			url: '/cart',
			templateUrl: 'views/partial-cart',
			resolve: {
				getCartProducts: function(Item){
					return Item.get().then(function(response){
						return response.data;
					});
				}
			},
			controller: 'CartController as cart'
		})
		.state('order-history',{
			url: '/order-history',
			templateUrl: 'views/partial-order-history',
			resolve: {
				getHistory: function(OrderHistory){
					return OrderHistory.get().then(function(response){
						return response.data;
					});
				}
			},
			controller: 'HistoryController as history'
		});
	})
	.config(['$httpProvider', function ($httpProvider) {
		$httpProvider.defaults.useXDomain = true;

		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		$httpProvider.interceptors.push(['$q', '$location', '$localStorage', function ($q, $location, $localStorage) {
			return {
				'request': function (config) {
					config.headers = config.headers || {};

					if ($localStorage.token) {
						config.headers.Authorization = $localStorage.token;
						config.headers['Access-Control-Allow-Origin'] = '*';
						config.headers['Content-Type'] = 'application/json';
					}
					console.log('config ',config)
					return config;
				},
				'responseError': function (response) {
					if([401].indexOf(response.status)){
						delete $localStorage.token;
						$location.path('/login'); //YOU MIGHT WANT TO CHANGE THIS ROUTE
					}
					return $q.reject(response);
				}
			};
		}]);
	}]);
})();