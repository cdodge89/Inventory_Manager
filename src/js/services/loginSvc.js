(function(){
	angular.module('routerApp').factory('Login',login);

	login.$inject = ['$http', 'Auth'];
	function login($http, Auth){
		var service = {
			postUser: postUser,
		}

		return service;

		function postUser(user){
			return $http.post('http://wta-inventorybackend.herokuapp.com/api/v1/login', user).then(function(response){
				Auth.successAuth(response);
				return response;
			});
		}
	}
})();