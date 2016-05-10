(function(){
	angular.module('routerApp')
		.controller('CartController', ['Auth', 'Transaction', 'Cart', 'getCartProducts', '$location', 
								function(Auth, Transaction, Cart, getCartProducts, $location){
			var vm = this;
			vm.cart = Cart.cart
			vm.list = vm.cart.subTransactions;
			vm.productsList = getCartProducts;
			vm.list = addDetails(vm.list, vm.productsList);
			console.log('cartlist ',vm.list);
			vm.postTransaction = postTransaction;
			
			function postTransaction(postObj){
				postObj.subTransactions = removeDetails(vm.list);
				Cart.postPurchase(postObj);
				$location.path('products');
			}

			//helper functions
			function findById(id, productArr){
				for(var i = 0; i < productArr.length; i++){
					if(productArr[i].id === id){
						return productArr[i];
					}
				}
				return null;
			}

			function addDetails(cartList, productList){
				var list = cartList;
				for(var i = 0; i < list.length; i++){
					list[i].name = findById(+list[i].id, productList).name
					list[i].price = findById(+list[i].id, productList).price
					list[i].imgThumbnail = findById(+list[i].id, productList).imgThumbnail
				}
				return list;
			}

			function removeDetails(cartList){
				var list = [];
				for(var i = 0; i < cartList.length; i++){
					var subTransaction = {};
					subTransaction.id = cartList[i].id;
					subTransaction.qty = cartList[i].qty;
					list.push(subTransaction);
				}
				return list;
			} //after this, send this to the cartSvc as its subTransaction list which will do the transaction post
		}]);
})();