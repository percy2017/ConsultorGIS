@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Facturas
                	<div class="pull-right"><a href="#" class="btn btn-xs btn-primary">Lugares de Pago</a></div>
                </div>

                <div class="panel-body">
                	<div class="table-responsive">
					  <table class="table table-hover">
					    <tr>
					    	<td>Año/Mes</td>
					    	<td>Fecha Emision</td>
					    	<td>Categoria</td>
					    	<td>Tipo lectura</td>

					    	<td>Energia</td>
					    	<td>TAP</td>
					    	<td>TAS</td>
					    	<td>Total</td>
					    </tr>
					    @foreach($consulta as $item)
					    <tr>
					    	<td>{{$item->gestion}}/{{$item->mes}}</td>
					    	<td>{{$item->fechaemision}}</td>
					    	<td>{{$item->ncctgsiglaener}}</td>
					    	<td>{{$item->lctpldescripcion}}</td>

					    	<td>{{$item->impsuministro}}</td>
					    	<td>{{$item->imptap}}</td>
					    	<td>{{$item->impaseo}}</td>
					    	<td>{{$item->imptottura}}</td>
					    </tr>
					   	@endforeach
					  </table>
					  {{$consulta->link}}
					</div>
                </div>
                <div class="panel-fotter">

                </div>
            </div>
        </div>
    </div>
</div>
@endsection