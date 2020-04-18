//Features
(function () {
    'use strict';
//Angular 1.X
var app = 	angular.module('myApp');//crear aplicacion
var nombreControlador="cambiarController";
app.controller(nombreControlador,
['$scope',	function($s){
	var ctl=this;
		ctl.nombre="Mario";
		ctl.apellido="Mena";
		ctl.msj="";

		ctl.ejecutar=function(){
				if(ctl.nombre==='Mario'){
					ctl.msj="correcto";

				} else{
					ctl.msj="Incorrecto";
				}
			
			//console.log("Boton activado por "+ ctl.nombre);
			//alert.("Boton activado por " + ctl.nombre)

		};
}]);
})();