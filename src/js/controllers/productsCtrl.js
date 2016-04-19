(function(){
	angular.module('routerApp')
		.controller('ProductsController', ['Item', 'getProducts', function(Item, getProducts){
			var vm = this;
			//bound variables
			vm.currentProduct = null;
			vm.currentProductIndex = null;
			vm.list = getProducts;

			//bound functions
			
			//bound function implementation
			
		}]);
})();