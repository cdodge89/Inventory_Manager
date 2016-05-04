(function(){
	angular.module('routerApp')
		.controller('TransactionDetailsController', ['getAllProducts','Transaction', 'Item', 'getTransactionDetails', '$stateParams', 
											function(getAllProducts,Transaction, Item, getTransactionDetails, $stateParams){
			var vm = this;

			vm.transaction = getTransactionDetails;
			vm.newTransaction = {};
			vm.products = getAllProducts;
			console.log('prods ', vm.products);
			vm.id = vm.transaction.id;
			// console.log('trans ', vm.transaction)
			// vm.subTransactions = vm.transaction.subTransactions;
			vm.types = ['Sale', 'Lost/Stolen','Returned To Supplier', 'Inventory Purchase', 'Returned', 'Returned Defective']
			vm.editMode = false;
			vm.toggleEdit = toggleEdit;
			vm.putTransaction = putTransaction;
			console.log(vm.transaction);


			function toggleEdit(){
				vm.editMode = !vm.editMode
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

			function putTransaction(transId, putObj){
				// Transaction.put(transId, putObj).then(function(response){
				// 	console.log(response.data);
				// });
				console.log('obj ',putObj);
			}
		}]);
})();