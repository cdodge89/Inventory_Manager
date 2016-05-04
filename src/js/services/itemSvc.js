(function(){
	angular.module('routerApp').factory('Item',item);
	
	item.$inject = ['$http'];
	function item($http){
		var service = {
			get:get,
			getProductSummaries: getProductSummaries,
			post: post,
			put: put,
			remove: remove,
			getProductTransactions: getProductTransactions,
			addToProducts: addToProducts,
			products: []
		};

		return service;

		function get(){
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/product');
		}

		function post(newProd){
			return $http.post('http://wta-inventorybackend.herokuapp.com/api/v1/product', newProd);
		}

		function put(updatedObj, prodId){
			return $http.put('http://wta-inventorybackend.herokuapp.com/api/v1/product/' + prodId, updatedObj);
		}

		function remove(prodId){
			return $http.delete('http://wta-inventorybackend.herokuapp.com/api/v1/product/' + prodId)
		}

		function getProductSummaries(){
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/product/summary');
		}

		function getProductTransactions(prodId){
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/product/' + prodId + '/transactions')
		}

		function addToProducts(newProduct){
			service.products.push(newProduct);
		}
	}
})();