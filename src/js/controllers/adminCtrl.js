(function(){
	angular.module('routerApp')
		.controller('AdminController',['Item', 'getProductsAdmin','getTransactionsAdmin', '$scope', function(Item, getProductsAdmin, getTransactionsAdmin, $scope){
			var vm = this;

			vm.products = getProductsAdmin;
			vm.transactions = getTransactionsAdmin;
			vm.showModal = showModal;
			vm.currentItem = null;
			vm.isModalShowing = false;
			console.log('prod ', vm.products);
			console.log('trans', vm.transactions);

			 function showModal(item) {
			 	console.log(item);
			 	vm.currentItem = item;
			    // Get the modal
				vm.isModalShowing = true;
			}
		}]);
})();