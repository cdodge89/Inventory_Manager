(function(){
	angular.module('routerApp')
		.controller('AdminController',['Item', 'getProductsAdmin', '$scope', function(Item, getProductsAdmin, $scope){
			var vm = this;

			vm.products = getProductsAdmin;
			console.log('prod ', vm.products)

			$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
			    // Get the modal
				var modal = document.getElementById('myModal');

				// Get the button that opens the modal
				var btn = document.getElementsByClassName("myBtn");
				console.log('btns ', btn)

				// Get the <span> element that closes the modal
				var span = document.getElementsByClassName("close")[0];

				// When the user clicks on the button, open the modal 
				for(var i = 0; i < btn.length; i++){
					btn[i].onclick = function() {
				    	modal.style.display = "block";
					}
				}

				// When the user clicks on <span> (x), close the modal
				span.onclick = function() {
				    modal.style.display = "none";
				}

				// When the user clicks anywhere outside of the modal, close it
				window.onclick = function(event) {
				    if (event.target == modal) {
				        modal.style.display = "none";
				    }
				}
			});
		}]);
})();