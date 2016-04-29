(function(){
	angular.module('routerApp')
		.controller('ProductTransactionController', ['getProductTransactions',function(getProductTransactions){
			var vm = this;

			vm.transactions = getProductTransactions;
			console.log('prod trans ', vm.transactions);
		}]);
})();