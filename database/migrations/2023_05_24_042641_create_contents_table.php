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
        Schema::create('contents', function (Blueprint $table) {
            $table->increments('id_content');
            $table->string('titleName_ENG', 500)->nullable();
            $table->text('contentDetails_ENG')->nullable();
            $table->text('contentOverall_ENG')->nullable();
            $table->string('titleName_VIE', 500)->nullable();
            $table->text('contentDetails_VIE')->nullable();
            $table->text('contentOverall_VIE')->nullable();
            $table->string('titleName_JPN', 500)->nullable();
            $table->text('contentDetails_JPN')->nullable();
            $table->text('contentOverall_JPN')->nullable();
            $table->string('mainColor')->nullable();
            $table->text('imageLogo')->nullable();
            $table->text('imageDetails')->nullable();
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
        Schema::dropIfExists('contents');
    }
};