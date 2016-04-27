(function(){
	angular.module('routerApp').directive('adminItem', function(){
		return{
			templateUrl: 'views/dir-admin-item',
			scope: {
				item: '=',
				itemClicked: '&'
			},
			controller: function(){},
			controllerAs: 'vm',
			bindToController: true
		}
	});
})();