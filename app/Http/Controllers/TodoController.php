<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\Models\Todo;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class TodoController extends Controller{

    public function mostrar(){

        return Todo::all();

    }

    public function guardar(Request $request){

        $todo = new Todo;

        $todo->estatus = $request->estatus;
        $todo->nombre = $request->nombre;
        $todo->descripcion = $request->descripcion;
        $todo->imagen = $request->imagen;
        $todo->finicio = $request->inicio;
        $todo->ffin = $request->fin;
        $todo->prioridad = $request->prioridad;

        $todo->save();

        return $todo;


    }



}

