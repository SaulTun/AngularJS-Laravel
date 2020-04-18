var app = angular.module('myApp', []);
app.controller('todoController', function ($scope, $http) {
	var ctl=this;
	ctl.todos=[];
	ctl.pendientes=[];
	ctl.completados=[];
	
	ctl.orden='prioridad';
	
	ctl.onSubmit=function(f){
		
		$http({
            method: 'POST',
            url: 'todosG',
			data: {'nombre':ctl.tarea,
				'estatus':ctl.estatus,
				'prioridad':ctl.prioridad,
				'imagen':"",
				'descripcion':ctl.descripcion,
				'inicio':ctl.inicio,
				'fin':ctl.fin}
        }).then(function (response) {

			ctl.getTodo();

			console.log("esto devuelve",response);
			
			$('#exampleModalCenter').modal('hide')

			ctl.limpiar();

        }), (function (error) {
            console.log(error);
            alert('This is embarassing. An error has occurred. Please check the log for details');
        });

		console.log("esto es todo", todo);

	};

	ctl.limpiar = function(){

				ctl.tarea="";
				ctl.estatus="";
				ctl.prioridad="";
				ctl.imagen = "";
				ctl.descripcion="";
				ctl.inicio="";
				ctl.fin = "";

	};

	ctl.completar=function(t){
		t.estatus="Completado";
		ctl.contar();
	};
	ctl.pendiente=function(t){
		t.estatus="Pendiente";
		
	};
	ctl.Destroy=function(t){
			ctl.todos.splice(todo,t);
		
		};
	
	ctl.eliminar=function(t){
			ctl.todos=_.without(ctl.todos,t);
		
		};
	
	ctl.ordenarPor=function(t){
		ctl.orden=t;
	};


	ctl.editar=function(t){
		t.edicion!= t.edicion ;
	
	};
ctl.contar=function(){
		ctl.pendientes=_.findWhere(ctl.todos,{estatus:'Pendiente'});
		ctl.completados=_.findWhere(ctl.todos,{estatus:'Completado'});
	};

	ctl.getTodo = function(){

		$http({
			method: 'GET', //i.e. GET, POST, PUT, DELETE
			url: '/todos' //url to the backend API
		}).then(function (response) { // anonymous function called when request succeeded
			console.log(response.data);
			
			ctl.todos = response.data;
		
		}, function (error) { // anonymous function called when request fails
			console.log(error);
		});

	};

ctl.getTodo();

  });