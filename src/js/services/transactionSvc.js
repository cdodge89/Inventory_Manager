(function(){
	angular.module('routerApp').factory('Transaction', transaction);

		transaction.$inject = ['$http'];
		function transaction($http){
			var service = {
				post: post
			};

			return service;

			function post(transactionObj){
				return $http.post('http://wta-inventorybackend.herokuapp.com/api/v1/transaction', transactionObj);
			}
		}
})();