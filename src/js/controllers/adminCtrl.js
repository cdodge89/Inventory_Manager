(function(){
	angular.module('routerApp')
		.controller('AdminController',['Item', 'getProductsAdmin', '$scope', function(Item, getProductsAdmin, $scope){
			var vm = this;

			vm.products = getProductsAdmin;
			vm.showModal = showModal;
			vm.currentItem = null;
			vm.isModalShowing = false;
			console.log('prod ', vm.products)

			 function showModal(item) {
			 	console.log(item);
			 	vm.currentItem = item;
			    // Get the modal
				vm.isModalShowing = true;
			}
		}]);
})();