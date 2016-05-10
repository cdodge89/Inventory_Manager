(function(){
	angular.module('routerApp')
		.controller('TransactionDetailsController', ['getAllProducts','Transaction', 'Item', 'getTransactionDetails', '$stateParams', 
											function(getAllProducts,Transaction, Item, getTransactionDetails, $stateParams){
			var vm = this;

			vm.transaction = getTransactionDetails;
			// vm.newTransaction = {};
			vm.products = getAllProducts;
			console.log('prods ', vm.products);
			vm.id = vm.transaction.id;
			vm.types = ['Sale', 'Lost/Stolen','Returned To Supplier', 'Inventory Purchase', 'Returned', 'Returned Defective'];
			vm.transType = vm.types[vm.transaction.type.id-1]; //*
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

			function putTransaction(transId, transObj){
				var putObj = {};
				putObj.type = {id: vm.types.indexOf(vm.transType),description: vm.transType};
				putObj.date= transObj.date;
				putObj.note= transObj.note;
				putObj.altersId= transId;
				putObj.subTransactions = [];
				for(var i = 0; i < transObj.subTransactions.length; i++){
					putObj.subTransactions.push({});
					putObj.subTransactions[i].id = transObj.subTransactions[i].productId;
					putObj.subTransactions[i].qty = transObj.subTransactions[i].amt;
				}
				Transaction.put(transId, putObj).then(function(response){
					console.log(response.data);
				});
				console.log('obj ',putObj);
			}
		}]);
})();