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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('candidate_id')->nullable();
            $table->string('name')->default('John Doe');
            $table->enum('role', ['admin', 'user'])->default('user');
            $table->enum('class', explode(',','X TKP 1,X TKP 2,X DPIB 1,X DPIB 2,X TOI 1,X TOI 2,X TP 1,X TP 2,X TFLM,X TKR 1,X TKR 2,X TKR 3,X TKJ 1,X TKJ 2,X SIJA 1,X SIJA 2,X RPL 1,X RPL 2,X DKV 1,X DKV 2,X DKV 3,XI BKP 1,XI BKP 2,XI DPIB 1,XI DPIB 2,XI TOI 1,XI TOI 2,XI TP 1,XI TP 2,XI TFLM,XI TKR 1,XI TKR 2,XI TKR 3,XI TKJ 1,XI TKJ 2,XI SIJA,XI RPL 1,XI RPL 2,XI MM 1,XI MM 2,XI MM 3,XII BKP 1,XII BKP 2,XII DPIB 1,XII DPIB 2,XII TOI 1,XII TOI 2,XII TP,XII TFLM 1,XII TFLM 2,XII TKR 1,XII TKR 2,XII TKR 3,XII TKJ,XII SIJA 1,XII SIJA 2,XII RPL 1,XII RPL 2,XII MM 1,XII MM 2,XII MM 3,XIII TOI 1,XIII TOI 2,XIII TFLM,XIII SIJA,GURU PNS,TU PNS,GURU PPPK,GURU TU HONOR'))->default('XII SIJA 1');
            $table->string('nis')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
