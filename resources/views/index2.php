<!DOCTYPE html>
<html lang="en"  class="no-js">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css " />
  <title>My AngularJS first App</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body ng-app="myApp">

<div class="container">
    <div class="row">

        <div class="col-sm-12">
      <!-- iniciocontroller-->

          <div class="container" ng-controller="todoController as ctl">

            <div class="col-md-12" style="margin: 10px;">
              <h1>Tareas {{ctl.todos.length}} </h1>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
              Agregar
            </button>

            </div> 

            

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      
        <form name="todo" ng-submit="ctl.onSubmit(todo)" enctype="multipart/form-data">
          <div class="form-group">

            <label for="exampleFormControlInput1">Nombre</label>

            <input type="text" name="tarea" placeholder="Ingrese el nombre de usuario" ng-model="ctl.tarea"      ng-required="true" class="form-control" >

          </div>

            <div class="form-group">

              <label for="exampleFormControlInput1">Prioridad</label>

            <input type="number" name="prioridad"
            placeholder="Ingrese el nombre de usuario"
            ng-model="ctl.prioridad"
            ng-required="true"
            class="form-control"
            >
      
            </div>
      
           <div class="form-group">
            <label for="exampleFormControlFile1">Imagen</label>
            <input type="file" class="form-control-file" id="imagen" ng-model="ctl.imagen">
          </div>
            
            <div class="form-group">
            <label for="exampleFormControlSelect2">Estatus</label>
            <select  class="form-control" ng-model="ctl.estatus">
              <option>Pendiente</option>
              <option>Completado</option>
            </select>
          </div>


          <div class="form-group">
            <label for="inputEmail4" >Inicio</label>
            <input type="date" class="form-control" id="" placeholder="Email" ng-model="ctl.inicio">
          </div>

          <div class="form-group">
            <label for="inputEmail4">Fin</label>
            <input type="date" class="form-control" id="" placeholder="Email" ng-model="ctl.fin">
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Descripcion</label>
            <textarea type="text" class="form-control" id="" aria-describedby="emailHelp" placeholder="Descripcion" ng-model="ctl.descripcion"></textarea>
          </div>

           <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
             <button type="submit" class="btn btn-primary" name="add">Agregar</button>
          </div>

        </form>

      </div>
    </div>
  </div>
</div>

<div class="row" style="margin: 10px;">

<div class="col-md-12" style="margin:10px;">

  <input type="text" name="filtro" placeholder="Ingrese el nombre de la tarea a buscar" ng-model="ctl.filtro" class="form-control">

</div>

<div class="col-md-12" style="margin: 10px;">

<button type="button" class="btn btn-primary" name="add" ng-click="ctl.ordenarPor('prioridad')">Prioridad</button>
<button type="button" class="btn btn-primary" name="add" ng-click="ctl.ordenarPor('estatus')">Estatus</button>
<button type="button" class="btn btn-primary" name="add" ng-click="ctl.ordenarPor('nombre')">Nombre</button>


</div>

    </div>
     
    <table class="table table-bordered">
          	<thead>
              <th ng-click="ctl.ordenarPor('prioridad')">Prioridad</th>
          		<th>Estatus</th>
          		<th>Tarea</th>
              <th>Descripcion</th>
              <th>Imagen</th>
              <th>Fecha Inicio</th>
              <th>Fecha Fin</th>
          		<th>Opciones</th>

            </thead>
            <tbody>
            <tr ng-repeat="t in ctl.todos | filter:ctl.filtro | orderBy:'nombre'">

              <td>{{t.prioridad}}<i class="fas fa-star"></i></div></td>
              <td>{{t.estatus}}</td>
              <td ng-if="!t.edicion">{{t.nombre}}</td>

              <td>{{t.descripcion}}</td>
              <td> <img src="{{t.imagen}}"></td>
              <td>{{t.finicio}}</td>
              <td>{{t.ffin}}</td>

                <td ng-if="t.edicion"><input type="text" name="tarea" ng-model="t.nombre" class="form-control"></td>
                <td>
              <button type="button" class="btn btn-primary" name="completado" ng-click="ctl.completar(t)">Completado</button>
              <button type="button" class="btn btn-warning" name="pendiente" ng-click="ctl.pendiente(t)">Pendiente</button>
              <button type="button" class="btn btn-warning" name="eliminar" ng-click="ctl.eliminar(t)">
                <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
              Eliminar</button>

              <button type="button" class="btn btn-warning" name="editar" ng-click="t.edicion=!t.edicion">Editar</button>

              </td>
              </tr>
            </tbody>
    </table> 


          </div>

           <!-- fincontroller-->

        </div>
</div>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js"></script>
<script src="https://code.angularjs.org/1.3.11/angular-route.js"></script>
<!-- Angular components  -->

<!-- declaracion de modulos  -->
<script  src="app2.js"></script>

</body>
</html>
