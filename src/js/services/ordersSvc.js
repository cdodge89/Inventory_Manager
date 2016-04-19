(function(){
	angular.module('routerApp').factory('Orders', orders);

	orders.$inject = ['$http'];
	function orders($http){
		service = {
			get: get
		};

		return service;

		function get(userId){
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/user/'+userId+'/orders');
		}

		function getAll(){
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/user/orders');
		}
	}
})();