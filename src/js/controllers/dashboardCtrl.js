(function(){
	angular.module('routerApp')
		.controller('DashboardController',['Transaction', 'getAllTransactions', 'getProductSummaries', function(Transaction, getAllTransactions, getProductSummaries){
			var vm = this;

			vm.transactions = getAllTransactions;
			console.log('trans ', vm.transactions)
			vm.productSummaries = getProductSummaries;
			console.log('summ ', vm.productSummaries);
		}]);
})();