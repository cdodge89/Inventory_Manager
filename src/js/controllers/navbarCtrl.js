(function(){
	angular.module('routerApp')
		.controller('NavbarController', ['Auth', 'Orders', function(Auth, Orders){
			var vm = this;

			vm.isLoggedIn = isLoggedIn;
			vm.logOut = logOut;
			vm.userDrop = userDrop;
			vm.adminDrop = adminDrop;
			vm.userName = Auth.getUser().name; //this doesn't actually show until I reload the page after loggin in, and if I log out and log in as a new user, it shows the old name
			vm.getUsersOrders = getUsersOrders;
			vm.isAdmin = isAdmin;

			function isLoggedIn(){
				vm.userName = Auth.getUser().name;
				return Auth.checkLoggedIn();
			}

			function logOut(){
				Auth.logOut();
			}

			function userDrop() {
			    document.getElementById("userDropdown").classList.toggle("show");
			}

			function adminDrop() {
			    document.getElementById("adminDropdown").classList.toggle("show");
			}

			function getUsersOrders(){
				var id = Auth.getUser().id;
				Orders.get(id).then(function(response){
					console.log(response.data);
				});
			}

			function isAdmin(){
				console.log('admin', Auth.isAdmin());
				return Auth.isAdmin();
			}

// Close the dropdown menu if the user clicks outside of it
			window.onclick = function(event) {
			  if (!event.target.matches('.dropbtn')) {

			    var dropdowns = document.getElementsByClassName("dropdown-content");
			    var i;
			    for (i = 0; i < dropdowns.length; i++) {
			      var openDropdown = dropdowns[i];
			      if (openDropdown.classList.contains('show')) {
			        openDropdown.classList.remove('show');
			      }
			    }
			  }
			}
		}]);
})();