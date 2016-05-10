(function(){
	angular.module('routerApp')
		.controller('TransactionFormController', ['Item', 'Transaction', '$location', function(Item, Transaction, $location){
			var vm = this;

			vm.products = Item.products;
			vm.transactions = Transaction.transactions;
			// console.log('trans products ', vm.products)
			vm.typeOfTransaction = 1;
			vm.descriptions = ['Sale', 'Lost/Stolen', 'Returned to Supplier', 'Inventory Purchase', 'Returned', 'Returned Defective' ]
			vm.newTransaction = {
				type: {
					id: null,
					description: null,
				},
				date: null,
				notes: null,
				altersId: null,
				subTransactions: [
					{
						id: null, 
						qty: null
					}
				]
			}

			vm.setTransactionType = setTransactionType;
			vm.transactionTypeIsSet = transactionTypeIsSet;
			vm.addSubTransaction = addSubTransaction;
			vm.removeFromArr = removeFromArr;
			vm.postTransaction = postTransaction;

			function setTransactionType(num){
				vm.typeOfTransaction = num;
				console.log('type ', vm.typeOfTransaction);
			}

			function transactionTypeIsSet(num){
				return vm.typeOfTransaction === num;
			}

			function addSubTransaction(){
				console.log('fired subtrans');
				vm.newTransaction.subTransactions.push({id: null, description: null});
				console.log('subtrans added ', vm.newTransaction);
			}

			function removeFromArr(index, arr){
				for(var i = index; i < arr.length - 1; i++){
					arr[i] = arr[i+1]
				}
				arr.length = arr.length - 1;
			}

			function postTransaction(transObj){
				newTrans = transObj;
				if(allSubsFilledOut(newTrans.subTransactions)){
					newTrans.type.id = vm.typeOfTransaction;
					newTrans.type.description = vm.descriptions[vm.typeOfTransaction - 1];
					newTrans.date = new Date();
					parseIds(newTrans.subTransactions);
					Transaction.post(newTrans).then(function(response){
						console.log('new transaction posted - ',response.data);
						vm.transactions.push(newTrans);
						vm.isModalShowing = false;
					});
				} else{
					alert('Please fill out all of the fields in each subtransaction');
				}
					
			}

			function parseIds(arr){
				for(var i = 0; i < arr.length; i++){
					var str = arr[i].id;
					arr[i].id = parseInt(str);
				}
				console.log('IDs ', arr);
			}

			function allSubsFilledOut(arr){
				for ( var i = 0; i < arr.length; i++){
					if(!arr[i].id || !arr[i].qty){
						return false;
					}
				}
				return true;
			}
		}]);
})();