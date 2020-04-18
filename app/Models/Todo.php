<?php
namespace App\models;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    
    protected $table = 'tareas';
    protected $primaryKey = 'id';
    public $incrementing = true;


    protected $filiable = [

        'id',
        'estatus',
        'nombre',
        'descripcion',
        'imagen',
        'finicio',
        'ffin',
        'prioridad',

    ];

    protected $hidden = [


    ];

    protected $cast = [


    ];

}
