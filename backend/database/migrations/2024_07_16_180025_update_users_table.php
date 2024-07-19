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
        Schema::table('users', function (Blueprint $table) {
            // Add 'location' column after 'email'
            $table->string('location')->after('email')->unique();
            // Add 'tel' column after 'location'
            $table->string('tel')->after('location');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            // Drop 'location' and 'tel' columns
            $table->dropColumn(['location', 'tel']);
        });
    }
};
