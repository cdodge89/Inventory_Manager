(function(){
	angular.module('routerApp').directive('adminTransaction', function(){
		return{
			templateUrl: 'views/dir-admin-transaction',
			scope: {
				transaction: '=',
				// itemClicked: '&'
			},
			controller: function(){},
			controllerAs: 'vm',
			bindToController: true
		}
	});
})();