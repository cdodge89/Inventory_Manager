(function(){
	angular.module('routerApp').directive('newProduct', function(){
		return{
			templateUrl: 'views/dir-new-product',
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