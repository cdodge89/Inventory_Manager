(function(){
	angular.module('routerApp')
		.controller('ProductFormController', ['Item', function(Item){
			var vm = this;

			vm.newProduct = {
				amt:null,
				description:null,
				imgThumbnail:null,
				name:null,
				price:null,
				cost:null
			}

			vm.postNewProduct = postNewProduct;

			function postNewProduct(newProd){
				if(newProd.amt && newProd.description && newProd.imgThumbnail && newProd.name && newProd.cost && newProd.price){
					Item.post(newProd).then(function(response){
						Item.addToProducts(newProd);
						console.log(response.data);
					});
				} else{
					alert("Please fill out all fields");
				}
			}


		}]);
})();