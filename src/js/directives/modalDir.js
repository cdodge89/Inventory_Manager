(function(){
	angular.module('routerApp').directive('modal', ['$window','$timeout','$document', function($window, $timeout, $document){
		return{
			templateUrl: 'views/dir-modal',
			scope: {
				item: '=',
				isModalShowing: '='
			},
			controller: 'ModalController',
			controllerAs: 'vm',
			bindToController: true,
			link: function(scope, element){
				// console.log('scope', scope);
				scope.$watch('vm.isModalShowing', function(){
					if(scope.vm.isModalShowing){
						$timeout(function(){$document.on('click', click)},0);
					}
				});
				// When the user clicks anywhere outside of the modal, close it
				var click = function(event) {
					if(scope.vm.isModalShowing){
						console.log('element ', element[0]);
						console.log('event ', event.target);
						var modalContent = element.find('.modal-content')[0];
					    if (event.target !== modalContent && !modalContent.contains(event.target)) {
					    	console.log('vm ',scope.vm);
					        // $timeout(function(){
					        	scope.vm.isModalShowing = false;
					        	scope.$applyAsync();
					        	console.log('click exp ', click);
					        	$document.off('click', click);
					        // },0);
					    }
					}
				};
			}
		}
	}]);
})();