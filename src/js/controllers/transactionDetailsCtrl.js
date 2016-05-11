(function(){
	angular.module('routerApp')
		.controller('TransactionDetailsController', ['getAllProducts','Transaction', 'Item', 'getTransactionDetails', '$stateParams', '$scope', 
											function(getAllProducts,Transaction, Item, getTransactionDetails, $stateParams, $scope){
			var vm = this;

			vm.transaction = getTransactionDetails;
			vm.isOpen = false;
			// vm.newTransaction = {};
			vm.products = getAllProducts;
			console.log('prods ', vm.products);
			vm.id = vm.transaction.id;
			vm.types = [
				{id: 1, description: 'Sale'}, 
				{id: 2, description: 'Lost/Stolen'} ,
				{id: 3, description: 'Returned To Supplier'}, 
				{id: 4, description: 'Inventory Purchase'}, 
				{id: 5, description: 'Returned'}, 
				{id: 6, description: 'Returned Defective'}
			];
			vm.transType = vm.types[vm.transaction.type.id-1]; //*
			vm.date = new Date(vm.transaction.date);
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

			function putTransaction(transId, transObj, transType){
				var putObj = {};
				putObj.type = transType;
				putObj.date = transObj.date;
				console.log('date ',putObj.date);
				putObj.note = transObj.note;
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
			
			$scope.open2 = function() {
				vm.isOpen = true;
			};
		}]);
})();