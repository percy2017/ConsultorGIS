<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Historico;
class HistoricoController extends Controller
{
    //
    function registro($criterio, $resultado, $ip, $coordenadas, $navegador)
    {
    	Historico::create([
    		
    		'criterio' => $criterio,
    		'resultado' =>$resultado,
    		'ip' => $ip,
    		'coordenadas' => $coordenadas,
    		'navegador' => $navegador

    	]);
    }
}
