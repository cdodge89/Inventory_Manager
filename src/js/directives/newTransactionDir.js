(function(){
	angular.module('routerApp').directive('newTransaction', function(){
		return{
			templateUrl: 'views/dir-new-transaction',
			scope: {
				transaction: '=',
				transactionClicked: '&'
			},
			controller: function(){},
			controllerAs: 'vm',
			bindToController: true
		}
	});
})();