var app = angular.module('myApp', []);
app.controller('todoController', function ($scope) {
	var ctl=this;
	ctl.todos=[];
	ctl.pendientes=[];
	ctl.completados=[];
	
	ctl.orden='prioridad';
	
	ctl.onSubmit=function(f){
		var todo={estatus: 'Pendiente',prioridad:5};
		todo.nombre=ctl.tarea;
		todo.prioridad=ctl.prioridad;
		todo.imagen=$('input[type=file]').val().replace(/C:\\fakepath\\/i, '');
		todo.descripcion=ctl.descripcion;
		todo.inicio=ctl.inicio;
		todo.fin=ctl.fin;
		ctl.todos.push(todo);
		ctl.tarea="";
		ctl.prioridad=0;

		$('#exampleModalCenter').modal('hide')

		console.log("esto es todo", todo);

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

ctl.init=function(){
		ctl.todos.push({estatus:'Pendiente',prioridad:5,nombre:'a'});
		ctl.todos.push({estatus:'Pendiente',prioridad:2,nombre:'b'});
		ctl.todos.push({estatus:'Completado',prioridad:1,nombre:'c'});
		ctl.todos.push({estatus:'Pendiente',prioridad:4,nombre:'d'});
		ctl.todos.push({estatus:'Completado',prioridad:3,nombre:'e'});
		
}
ctl.init();
	
  });