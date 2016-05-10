(function(){
	angular.module('routerApp').directive('newTransactionForm', function(){
		return{
			templateUrl: 'views/dir-new-transaction-form',
			scope: {
				item: '=',
				itemClicked: '&',
				isModalShowing: '='
			},
			controller: 'TransactionFormController',
			controllerAs: 'vm',
			bindToController: true
		}
	});
})();