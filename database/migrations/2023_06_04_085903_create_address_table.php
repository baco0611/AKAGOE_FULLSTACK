<?php

use App\Models\Users;
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
        Schema::create('address', function (Blueprint $table) {
            $table->id('id_address');
            $table->string('province');
            $table->string('district')->nullable();
            $table->string('ward')->nullable();//phuong
            $table->string('specific_address')->nullable();//dia chi cu the
            $table->string('address_type')->nullable();//nha rieng hoac cong ty
            $table->foreignId('id_users');
            $table->foreign('id_users')->references('id_users')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('address');
    }
};