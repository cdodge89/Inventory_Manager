(function(){
	angular.module('routerApp')
		.controller('TransactionDetailsController', ['Item', 'getTransactionDetails', '$stateParams', function(Item, getTransactionDetails, $stateParams){
			var vm = this;

			vm.transaction = getTransactionDetails;
			vm.subTransactions = vm.transaction.subTransactions;
			console.log(vm.transaction);


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