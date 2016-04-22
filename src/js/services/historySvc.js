(function(){
	angular.module('routerApp').factory('OrderHistory', orderHistory);

	orderHistory.$inject = ['$http'];
	function orderHistory($http){
		var service = {
			get: get
		}  

		return service;

		function get(){
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/user/orders');
		}
	}
})();