(function(){
	angular.module('routerApp').directive('newProduct', function(){
		return{
			templateUrl: 'views/dir-new-item',
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