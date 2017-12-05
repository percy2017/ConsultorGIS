<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Historico extends Model
{
    //
    protected $table = 'historicos';
    protected $fillable = [
        'criterio', 'resultado', 'ip', 'coordenadas', 'navegador'
    ];
}
