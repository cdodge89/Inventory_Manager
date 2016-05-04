(function(){
	angular.module('routerApp')
		.controller('DashboardController',['Transaction', 'getAllTransactions', 'getProductSummaries', function(Transaction, getAllTransactions, getProductSummaries){
			var vm = this;

			vm.transactions = getAllTransactions;
			vm.currentTransactions = vm.transactions.slice(0);
			vm.numberOfTransactions = numberOfTransactions(vm.transactions);
			vm.inventoryAffected = inventoryAffected(vm.transactions);
			vm.totalCost = totalCost(vm.transactions);
			vm.totalRevenue = totalRevenue(vm.transactions);
			vm.totalProfit = [];

			vm.filterBy = filterBy;
			console.log('trans ', vm.transactions)
			vm.productSummaries = getProductSummaries;
			console.log('summ ', vm.productSummaries);

			function filterBy(typeOfTransaction){
				console.log('fired');
				vm.currentTransactions.length = 0;
				for(var i = 0; i < vm.transactions.length; i++){
					if(vm.transactions[i].type.id === typeOfTransaction){
						vm.currentTransactions.push(vm.transactions[i]);
					}
				}
			}

			function numberOfTransactions(transactions){
				var arr = [0,0,0,0,0,0];
				for(var i = 1; i <= 6; i++)
					for(var j = 0; j < transactions.length; j++){
						if(transactions[j].type.id === i){
							arr[i-1] += 1;
						}
					}
				return arr;
			}

			function inventoryAffected(transactions){
				var arr = [0,0,0,0,0,0];
				for(var i = 1; i <= 6; i++)
					for(var j = 0; j < transactions.length; j++){
						if(transactions[j].type.id === i){
							arr[i-1] += transactions[j].totalAmt;
						}
					}
				return arr;
			}

			function totalCost(transactions){
				var arr = [0,0,0,0,0,0];
				for(var i = 1; i <= 6; i++)
					for(var j = 0; j < transactions.length; j++){
						if(transactions[j].type.id === i){
							arr[i-1] += transactions[j].totalCost;
						}
					}
				return arr;
			}

			function totalRevenue(transactions){
				var arr = [0,0,0,0,0,0];
				for(var i = 1; i <= 6; i++)
					for(var j = 0; j < transactions.length; j++){
						if(transactions[j].type.id === i){
							arr[i-1] += transactions[j].totalPrice;
						}
					}
				return arr;
			}
		}]);
})();