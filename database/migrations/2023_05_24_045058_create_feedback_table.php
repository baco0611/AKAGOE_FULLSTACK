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
        Schema::create('feedback', function (Blueprint $table) {
           $table->increments('id_feedback');
           $table->string('fullname', 255);
           $table->string('email', 255);
           $table->string('phone');
           $table->longText('content_fb');
           $table->integer('star')->nullable();
           $table->string('image_link');
           $table->string('position');
           $table->timestamp('time_fb');
           $table->string('id_name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('feedback');
    }
};