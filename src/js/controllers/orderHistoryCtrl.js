(function(){
	angular.module('routerApp')
		.controller('HistoryController', ['OrderHistory', 'getHistory', 'Transaction', function(OrderHistory, getHistory, Transaction){
			var vm = this;

			vm.orders = getHistory;
			
			vm.returnOrder = returnOrder;
			console.log('order history ',vm.orders);
			
			function returnOrder(id){
				Transaction.post(returnedObj);
			}
		}]);
})();