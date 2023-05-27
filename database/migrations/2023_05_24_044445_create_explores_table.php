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
        Schema::create('explores', function (Blueprint $table) {
            $table->increments('id_explore');
            $table->longtext('contentExplore_ENG')->nullable();
            $table->longtext('contentExplore_VIE')->nullable();
            $table->longtext('contentExplore_JPN')->nullable();
            $table->string('image_link', 500)->nullable();
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
        Schema::dropIfExists('explores');
    }
};