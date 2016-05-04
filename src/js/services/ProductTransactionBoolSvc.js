(function(){
	angular.module('routerApp').factory('ProdTransBool', prodtransbool);

		function prodtransbool(){
			var service = {
				isProduct: true,
				setIsProduct: setIsProduct,
			}

			return service;

			function setIsProduct(bool){
				service.isProduct = bool;
			}
		}
})();