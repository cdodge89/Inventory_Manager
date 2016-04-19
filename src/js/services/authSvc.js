(function(){
	angular.module('routerApp').factory('Auth',auth);

	auth.$inject = ['$localStorage', '$location'];
	function auth($localStorage, $location){
	//decode JWT and translate to readable code
		service = {
			urlBase64Decode: urlBase64Decode,
			getClaimsFromToken: getClaimsFromToken,
			successAuth: successAuth,
      checkLoggedIn: checkLoggedIn,
      logOut: logOut,
      getUser: getUser,
      isAdmin: isAdmin
		}

		return service;

		function urlBase64Decode(str) {
           var output = str.replace('-', '+').replace('_', '/');
           switch (output.length % 4) {
               case 0:
                   break;
               case 2:
                   output += '==';
                   break;
               case 3:
                   output += '=';
                   break;
               default:
                   throw 'Illegal base64url string!';
           }
           return window.atob(output);
       }

		//get usable information from token (like user’s name and id)
       function getClaimsFromToken() {
           var token = $localStorage.token;
           var user = {};
           if (typeof token !== 'undefined') {
               var encoded = token.split('.')[1];
               user = JSON.parse(urlBase64Decode(encoded));
           }
           return user;
       }

		//on successfully authenticating user, save the token
		function successAuth(res) {
			console.log('success - auth');
			$localStorage.token = res.data.token;
			tokenClaims = getClaimsFromToken();
      $location.path('/products')
		}

    function checkLoggedIn(){
      if ($localStorage.token){
        console.log('logged in');
        return true
      } else{
        return false;
      }
    }

    function logOut(){
      console.log('success - logout');
        delete $localStorage.token;
    }

    function getUser(){
      var user = getClaimsFromToken();
      console.log('user ', user);
      return user;
    }

    function isAdmin(){
      var user = getClaimsFromToken();
      return user.role === 'admin';
    }
	}
})();