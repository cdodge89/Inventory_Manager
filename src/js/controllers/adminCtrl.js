(function(){
	angular.module('routerApp')
		.controller('AdminController',['Transaction', 'Item', 'getProductsAdmin','getTransactionsAdmin', '$scope','ProdTransBool' ,
			function(Transaction, Item, getProductsAdmin, getTransactionsAdmin, $scope, ProdTransBool){
			var vm = this;

			vm.products = getProductsAdmin;
			vm.transactions = getTransactionsAdmin;
			Transaction.transactions = vm.transactions;
			vm.showModal = showModal;
			vm.currentItem = null;
			vm.isModalShowing = false;

			console.log('prod ', vm.products);
			console.log('trans', vm.transactions);

			 function showModal(item, bool) {
			 	console.log(item);
			 	vm.currentItem = item;
			 	ProdTransBool.setIsProduct(bool);
			    // Get the modal
				vm.isModalShowing = true;
			}
		}]);
})();