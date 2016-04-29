(function(){
	angular.module('routerApp')
		.controller('NewProductController', ['Item', function(Item){
			var vm = this;
			vm.newProduct = {
				amt:null,
				description:null,
				imgThumbnail:null,
				name:null,
				price:null,
				cost:null
			}

			vm.closeModal = closeModal;
			vm.postNewProduct = postNewProduct;

			function closeModal(){
				vm.isModalShowing = false
				vm.newProduct = null;
			}

			function postNewProduct(newProd){
				if(newProd.amt && newProd.description && newProd.imgThumbnail && newProd.name && newProd.cost && newProd.price){
					Item.post(newProd).then(function(response){
						console.log(response.data);
					});
				} else{
					alert("Please fill out all fields");
				}
			}
		}]);
})();