(function(){
	angular.module('routerApp')
		.controller('DetailsController', ['Item', 'getProducts', '$stateParams', 'Auth', 
								  function(Item, getProducts, $stateParams, Auth){
			var vm = this;
			var id = $stateParams.productId;
			id = +id;
			vm.id = id
			//bound variables
			vm.list = getProducts;
			vm.currentProduct = vm.list[findById(id, vm.list)];
			vm.isAdmin = Auth.isAdmin();
			vm.formIsShowing = false;

			vm.toggleForm = toggleForm;
			vm.putProduct = putProduct;
			vm.removeProduct = removeProduct;
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

			function toggleForm(){
				vm.formIsShowing = !vm.formIsShowing;
			}

			function putProduct(updatedObj, prodId){
				Item.put(updatedObj, prodId).then(function(response){
					console.log(response.data);
				})
			}

			function removeProduct(prodId){
				Item.remove(prodId).then(function(response){
					console.log(response.data);
				})
			}
			
		}]);
})();