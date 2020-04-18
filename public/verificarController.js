//Features
(function () {
    'use strict';
//Angular 1.X
var app = 	angular.module('myApp');//crear aplicacion
var nombreControlador="verificarController";
app.controller(nombreControlador,
['$scope',	function($s){
	var ctl=this;
		ctl.usuario="mario";
		ctl.contrasena="1234";
		ctl.msj="";

		ctl.validar=function(){
				if(ctl.usuario=='mario' && ctl.contrasena=='1234' ){
					ctl.msj="correcto";

				} else{
					ctl.msj="Incorrecto";
				}
			
			//console.log("Boton activado por "+ ctl.nombre);
			//alert.("Boton activado por " + ctl.nombre)

		};
}]);
})();