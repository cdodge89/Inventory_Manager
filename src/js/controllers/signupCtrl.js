(function(){
	angular.module('routerApp')
		.controller('SignupController',['Signup', 'Auth', function(Signup, Auth){
			var vm = this;
			vm.newUser = {
				firstName: null,
				lastName: null,
				email: null,
				password1: null,
				password2: null
			};

			vm.submitNewUser = submitNewUser;

			function submitNewUser(newUser){
				var user = {};
				user.email = newUser.email;
				user.password = newUser.password1;
				user.fName = newUser.firstName;
				user.lName = newUser.lastName;
				if (newUser.password1 === newUser.password2 && newUser.email && newUser.firstName && newUser.lastName && newUser.password1){
					Signup.postNewUser(user).then(function(response){
						console.log(response.data);
					});
				} else if(newUser.password1 !== newUser.password2) {
					alert("Passwords Do Not Match");
				} else {
					alert("Please fill out the whole form");
				}
			}
		}]);
})();