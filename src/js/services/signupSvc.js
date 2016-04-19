(function(){
	angular.module('routerApp').factory('Signup',signup);

	signup.$inject = ['$http', 'Auth'];
	function signup($http, Auth){
		service = {
			postNewUser: postNewUser
		};	

		return service;

		function postNewUser(newUser){
			return $http.post('http://wta-inventorybackend.herokuapp.com/api/v1/signup', newUser).then(function(response){
				Auth.successAuth(response);
				return response;
			});
		}
	}
})();