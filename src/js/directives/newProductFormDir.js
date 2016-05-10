(function(){
	angular.module('routerApp').directive('newProductForm', function(){
		return{
			templateUrl: 'views/dir-new-product-form',
			scope: {
				item: '=',
				itemClicked: '&',
				isModalShowing: '='
			},
			controller: 'ProductFormController',
			controllerAs: 'vm',
			bindToController: true
		}
	});
})();