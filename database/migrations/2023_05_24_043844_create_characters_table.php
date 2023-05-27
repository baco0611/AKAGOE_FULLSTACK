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
        Schema::create('characters', function (Blueprint $table) {
            $table->increments('id_character');
            $table->longtext('description_ENG')->nullable();
            $table->longtext('description_VIE')->nullable();
            $table->longtext('description_JPN')->nullable();
            $table->text('image_link')->nullable();
            $table->text('image_type')->nullable();
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
        Schema::dropIfExists('characters');
    }
};