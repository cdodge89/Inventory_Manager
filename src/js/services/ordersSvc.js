(function(){
	angular.module('routerApp').factory('Orders', orders);

	orders.$inject = ['$http'];
	function orders($http){
		var service = {
			get: get,
			// getAll: getAll
		};

		return service;

		function get(){
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/user/orders');
			//endpoint doesn't work yet
		}

		// function getAll(){
		// 	return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/user/orders');
		// }
	}
})();