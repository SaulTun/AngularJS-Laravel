(function () {
    'use strict';
//Angular 1.X
var app = 	angular.module('myApp',[]);//crear aplicacion
var nombreControlador="Controlador1";

app.controller(nombreControlador,
	['$scope',
	function($s){	
		var ctl=this;
		ctl.nombre="Mario";
		ctl.apellido="Mena";
		ctl.edad=20;
		ctl.msj='';

		ctl.ejecutar=function(){
			if(ctl.nombre==='1234a'){
			    ctl.msj="Correcto!!";	
			}else {
				ctl.msj="Incorrecto!!"
			}
			//ctl.msj="Boton activado por "+ctl.nombre;
			//console.log("Boton activado por "+ctl.nombre);
			//alert("Boton activado por "+ctl.nombre);
		};
	}
	]
);
app.controller("Controlador2",
	['$scope',
	function($s){	
		var ctl=this;
		ctl.nombre="Mario";
		ctl.onSubmit=function(login){
			console.log("Realizando submit.");
			if (login.$valid) {

			}

		}
	}
	]
);
})();


/*
app.controller(nombreControlador,['$scope',	function($s){}]);
app.controller(x,['$scope','$uno',	function($s,$u){}]);
app.controller(y,['$scope','$uno','$dos',	function($s,$u,$d){}]);
*/




/*
//document.ready()
(function () {
	
	})();
*/









