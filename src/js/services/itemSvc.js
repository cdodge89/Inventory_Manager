(function(){
	angular.module('routerApp').factory('Item',item);
	
	item.$inject = ['$http'];
	function item($http){
		var service = {
			get:get,
			getProductSummaries: getProductSummaries,
			post: post
		};

		return service;

		function get(){
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/product');
		}

		function post(newProd){
			return $https.post('http://wta-inventorybackend.herokuapp.com/api/v1/product', newProd);
		}

		function getProductSummaries(){
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/product/summary');
		}
	}
})();