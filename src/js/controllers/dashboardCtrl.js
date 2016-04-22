(function(){
	angular.module('routerApp')
		.controller('DashboardController',['Transaction', 'getAllTransactions', function(Transaction, getAllTransactions){
			var vm = this;

			vm.transactions = getAllTransactions;
			console.log('trans ', vm.transactions)
			// vm.summary = getSummary;
			// console.log('summ ', vm.summary);
		}]);
})();