(function(){
	angular.module('routerApp').factory('Cart', cart);

	cart.$inject=['Transaction']
	function cart(Transaction){
		var service = {
			postPurchase: postPurchase,
			// addToCart: addToCart,
			cart: {
				type:{
					id: 1,
					description: 'Sale'
				},
				date: new Date(),
				notes: null,
				altersId: null,
				subTransactions: []
			}
		};

		return service;

		function postPurchase(transObj){
			Transaction.post(transObj).then(function(response){
				service.cart.subTransactions = [];
				console.log(response.data);
			});
		}
		// function addToCart(transObj){
		// 	service.cart.subTransactions.push(transObj);
		// }
	}
	
})();