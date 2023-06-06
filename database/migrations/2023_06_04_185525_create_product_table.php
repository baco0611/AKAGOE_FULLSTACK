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
        Schema::create('product', function (Blueprint $table) {
            $table->id();
            $table->string('product_name');
            $table->integer('quantity');
            $table->integer('sale_quantity')->nullable();
            $table->double('price');
            $table->text('product_description')->nullable();
            $table->string('color')->nullable();
            $table->string('size')->nullable();
            $table->foreignId('id_supplier')->nullable();//dev sau
            $table->foreign('id_supplier')->references('id')->on('supplier');
            $table->foreignId('id_product_type');
            $table->foreign('id_product_type')->references('id')->on('product_type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product');
    }
};