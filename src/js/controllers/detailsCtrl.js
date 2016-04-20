(function(){
	angular.module('routerApp')
		.controller('DetailsController', ['Item', 'getProducts', '$stateParams', function(Item, getProducts, $stateParams){
			var vm = this;
			var id = $stateParams.productId;
			id = +id;
			vm.id = id
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
			
		}]);
})();