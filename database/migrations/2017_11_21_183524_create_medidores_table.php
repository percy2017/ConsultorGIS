<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMedidoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medidores', function (Blueprint $table) {
            // $table->increments('id');
            $table->string('FID');
            $table->string('SubTipo');
            $table->string('Codigo');
            $table->string('Consumidor');
            $table->string('Tipo_Comsumidor');
            $table->string('Categoria');
            $table->string('Nivel_Calidad');
            $table->string('Dirección');
            $table->string('Cod_Zona');
            $table->string('Fono');
            $table->string('Cod_Centro');
            $table->string('Num_Vanos');
            $table->string('created_us');
            $table->string('created_da');
            $table->string('last_edite');
            $table->string('last_edi_1');
            $table->string('Enabled');
            $table->string('Acometida');
            $table->string('x');
            $table->string('y');
            $table->string('z');
            $table->string('cod_poste');
            $table->string('Codigo_Ant');
            $table->string('Serie');
            $table->string('Ruta');
            $table->string('Remesa');
            $table->string('Nit');
            $table->string('RazonSocia');
            $table->string('CategoriaT');


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
        Schema::dropIfExists('medidores');
    }
}
