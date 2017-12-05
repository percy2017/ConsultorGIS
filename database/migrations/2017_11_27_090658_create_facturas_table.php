<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFacturasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('facturas', function (Blueprint $table) {
            $table->string('concodigo');
            $table->string('ncctgsiglaener');
            $table->integer('gestion');
            $table->integer('mes');
            $table->string('ncremcodigo');
            $table->string('ncrutcodigo');
            $table->string('ncarecodigo');
            $table->string('numero');
            $table->string('MUNICIPIO');
            $table->string('autorizacion');
            $table->string('fechaemision');
            $table->string('fechavencimiento');
            $table->string('nit');
            $table->string('codcontrol');
            $table->string('limemision');
            $table->string('connombre');
            $table->string('conrazonsocial');
            $table->string('condireccioncmp');
            $table->string('ncactecocodigo');
            $table->string('cargokwh');
            $table->string('devolucion');
            $table->string('menumero');
            $table->string('memultequipo');
            $table->string('memultipoten');
            $table->string('fechalecant');
            $table->string('fechalecact');
            $table->string('indantener');
            $table->string('indactener');
            $table->string('consenergia');
            $table->string('ConsumoaFacturar');
            $table->string('ENERGÍAFACTURADA');
            $table->string('conspotenlei');
            $table->string('conspotenFact');
            $table->string('lctpldescripcion');
            $table->string('CodObservacion');
            $table->string('diast');
            $table->string('promedio');
            $table->string('impcarfijo');
            $table->string('impenergia');
            $table->string('imppotencia');
            $table->string('impconsumo');
            $table->string('imptardig');
            $table->string('imptotalconsumo');
            $table->string('impley1886');
            $table->string('impinteres');
            $table->string('impinteresplan');
            $table->string('impconexion');
            $table->string('impreconex');
            $table->string('imprehabilita');
            $table->string('impmenoscreaju');
            $table->string('impsuministro');
            $table->string('imptap');
            $table->string('impaseo');
            $table->string('imptottura');
            $table->string('impmascreaju');
            $table->string('impgarantia');
            $table->string('impreducciones');
            $table->string('imppagadel');
            $table->string('impmes');
            $table->string('nrodeuener');
            $table->string('impdeuener');
            $table->string('impdeuaseo');
            $table->string('imptotcancelar');
            $table->string('nivcalidad');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('facturas');
    }
}
