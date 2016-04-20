(function(){
	angular.module('routerApp').factory('Item',item);
	
	item.$inject = ['$http'];
	function item($http){
		var service = {
			get:get
		};

		return service;

		function get(){
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/product');
		}
	}
})();