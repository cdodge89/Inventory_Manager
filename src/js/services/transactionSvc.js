(function(){
	angular.module('routerApp').factory('Transaction', transaction);

		transaction.$inject = ['$http'];
		function transaction($http){
			var service = {
				post: post,
				get: get,
				getByProd: getByProd,
				put: put,
				del: del,
				getByTransId: getByTransId,
				addTransaction: addTransaction,
				transactions: []
			};

			return service;

			function post(transactionObj){
				return $http.post('http://wta-inventorybackend.herokuapp.com/api/v1/transaction', transactionObj);
			}

			function get(){
				return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/transaction');
			}

			function getByProd(prodId){
				return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/product/'+prodId+'/transactions')
			}

			function put(transId, putObj){
				return $http.put('http://wta-inventorybackend.herokuapp.com/api/v1/transaction/'+transId)				
			}

			function del(transId){
				return $http.delete('http://wta-inventorybackend.herokuapp.com/api/v1/transaction/'+transId)
			}

			function getByTransId(transId){
				return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/transaction/'+transId)
			}

			function addTransaction(newTransaction){
				service.transactions.push(newTransaction);
			}
		}
})();