(function(){
	angular.module('routerApp').directive('newTransactionForm', function(){
		return{
			templateUrl: 'views/dir-new-transaction-form',
			scope: {
				item: '=',
				itemClicked: '&'
			},
			controller: 'TransactionFormController',
			controllerAs: 'vm',
			bindToController: true
		}
	});
})();