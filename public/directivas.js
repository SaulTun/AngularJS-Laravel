(function () {
    'use strict';
//Angular 1.X
var app = 	angular.module('myApp');//crear aplicacion
var nombreDirectiva="iconoEstrella";

app.directive(
nombreDirectiva,
function(){
return { 
	restrict:'C',
	replace:"false",
	scope:{

		nEstrellas:"@",
		nNombre:"@"

	},
	templateUrl:'./directivaEstrellaTpl.html',

	controller:function($scope){
		//$scope.nEstrellas=10;
		$scope.estrellas=[];
		for(var i=0;i<$scope.nEstrellas;i++){
		$scope.estrellas.push(i);
		}
	},

	link:function(scope,elemento,attr){

		elemento.on('click',function(evento){
			alert("Hola " + scope.nNombre);
		}


			);
	}

	}
}

	);

})();