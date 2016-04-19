(function(){
	angular.module('routerApp')
		.controller('LoginController',['Login', 'Auth', function(Login, Auth){
			var vm = this;


			vm.submitUserForLogin = submitUserForLogin;

			function submitUserForLogin(user){
				console.log('User submitted');
				if(user.email && user.password){
					Login.postUser(user).then(function(response){
						console.log(response.data);
					});
				}
			}

			
		}]);
})();