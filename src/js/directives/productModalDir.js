(function(){
	angular.module('routerApp').directive('productModal', ['$window', function($window){
		return{
			templateUrl: 'views/dir-modal',
			scope: {
				item: '=',
				isModalShowing: '='
			},
			controller: function(){
				var vm = this;
				vm.closeModal = function(){
					vm.isModalShowing = false
				}
			},
			controllerAs: 'vm',
			bindToController: true,
			link: function(scope, element){
				console.log('scope', scope);
				scope.$watch('vm.isModalShowing', function(){
					console.log('isModalShowing ', scope.vm.isModalShowing);
				})
				// When the user clicks anywhere outside of the modal, close it
				$window.onclick = function(event) {
					console.log('element ', element[0]);
					console.log('event ', event.target);
				    if (event.target == element[0]) {
				    	console.log('vm ',scope.vm)
				        scope.vm.isModalShowing = false;
				    }
				}
			}
		}
	}]);
})();