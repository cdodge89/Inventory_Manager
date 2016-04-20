(function(){
	angular.module('routerApp').factory('Cart', cart);

	cart.$inject=['$http']
	function cart(){
		var service = {
			postPurchase: postPurchase,
			purchaseObj: {}
		};

		return service;
	}

})();