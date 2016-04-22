(function(){
	angular.module('routerApp')
		.controller('PurchaseController',['Cart' ,'$location','Item', 'getProductsForPurchase', '$stateParams','Auth', function(Cart ,$location,Item, getProductsForPurchase, $stateParams, Auth){
			var vm = this;
			var id = $stateParams.productId;
			console.log('stateparams',$stateParams);
			id = +id;
			//bound variables
			vm.list = getProductsForPurchase;
			vm.currentProduct = vm.list[findById(id, vm.list)];
			vm.currentTransaction = {
				id: $stateParams.productId,
				qty: 0
			};
			console.log('current ', vm.currentTransaction);

			//bound functions
			vm.addToCart = addToCart;

			// bound function declarations
			function addToCart(transactionObj){
				if(Auth.checkLoggedIn()){
					Cart.cart.subTransactions.push(vm.currentTransaction);
					console.log('Cart ', Cart.cart)
				} else{
					$location.path('login');
				}
			}

			//helper functions
			function findById(id, productArr){
				for(var i = 0; i < productArr.length; i++){
					if(productArr[i].id === id){
						return i;
					}
				}
				return null;
			}
		}]);
})();