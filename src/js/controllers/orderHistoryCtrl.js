(function(){
	angular.module('routerApp')
		.controller('HistoryController', ['OrderHistory', 'getHistory', function(OrderHistory, getHistory){
			var vm = this;

			vm.orders = getHistory;
			console.log('order history ',vm.orders);
		}]);
})();