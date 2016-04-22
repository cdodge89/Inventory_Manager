(function(){
	angular.module('routerApp').factory('Cart', cart);

	cart.$inject=['Transaction']
	function cart(){
		var service = {
			// postPurchase: postPurchase,
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

		// function postPurchase(transObj){
		// 	Transaction.post(transobj).then(function(response){
		// 		console.log(response.data);
		// 	});
		// }

		// function addToCart(transObj){
		// 	service.cart.subTransactions.push(transObj);
		// }
	}

})();