(function(){
	angular.module('routerApp')
		.controller('PurchaseController',['$location','Item', 'getProductsForPurchase', '$stateParams', 'Transaction','Auth', function($location,Item, getProductsForPurchase, $stateParams, Transaction,Auth){
			var vm = this;
			var id = $stateParams.productId;
			console.log('stateparams',$stateParams);
			id = +id;
			//bound variables
			vm.list = getProductsForPurchase;
			vm.currentProduct = vm.list[findById(id, vm.list)];
			vm.currentTransaction = {
				type: {
					id: 1,
					description: 'Sale'
				},
				date: (new Date()),
				notes: null,
				altersId: null,
				subTransactions: [
					{
						id: $stateParams.productId,
						qty: 0
					}
					
				]
			};
			console.log('current ', vm.currentTransaction);

			//bound functions
			vm.submitTransaction = submitTransaction;

			// bound function declarations
			function submitTransaction(transactionObj){
				if(Auth.checkLoggedIn()){
					Transaction.post(transactionObj).then(function(response){
						console.log(response.data);
					});
				} else{
					$location.path('login');
				}
			}

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