(function(){
	angular.module('routerApp')
		.controller('ModalController', ['Item', 'ProdTransBool', function(Item, ProdTransBool){
			var vm = this;
			vm.isProduct = ProdTransBool.isProduct;
			
			vm.closeModal = closeModal;

			function closeModal(){
				console.log('close modal');
				vm.isModalShowing = false
				vm.newProduct = null;
			}
		}]);
})();