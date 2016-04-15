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
			
		}])
		.controller('DetailsController', ['Item', 'getProducts', '$stateParams', function(Item, getProducts, $stateParams){
			var vm = this;
			var id = $stateParams.productId;
			id = +id;
			//bound variables
			vm.list = getProducts;
			vm.currentProduct = vm.list[findById(id, vm.list)];
			console.log(vm.list);


			//helper functions
			function findById(id, productArr){
				for(var i = 0; i < productArr.length; i++){
					if(productArr[i].id === id){
						return i;
					}
				}
				return null;
			}
			
		}])
		.controller('SignupController',[function(){

		}])
		.controller('LoginController',[function(){
			
		}]);
})();