<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_product', function (Blueprint $table) {
            $table->id('id_users_product');
            $table->integer('quantity_buy');
            $table->foreignId('id_users');
            $table->foreign('id_users')->references('id_users')->on('users');
            $table->foreignId('id_product');
            $table->foreign('id_product')->references('id_product')->on('product');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_product');
    }
};