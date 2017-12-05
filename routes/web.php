<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('medidores/consulta/{cuenta}', 'MedidorController@consulta')->name('consulta');
Route::get('medidores/consulta/facturas/{cuenta}', 'MedidorController@facturas')->name('facturas');

Route::get('historicos/registro/{criterio}/{resultado}/{ip}/{coordenadas}/{navegador}', 'HistoricoController@registro')->name('historico_registro');

