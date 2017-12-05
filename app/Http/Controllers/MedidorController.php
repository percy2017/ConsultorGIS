<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Medidor;
use App\Factura;
class MedidorController extends Controller
{
    function consulta($cuenta)
	{
		$consulta = Medidor::where('Codigo',$cuenta)->first();
		return $consulta;
	} 

	function facturas($cuenta)
	{
		$consulta = Factura::where('concodigo',$cuenta)
					->orderBy('mes', 'desc')
					->paginate(6);
		//return $consulta;
		return view('facturas',compact('consulta'));
	} 
}
