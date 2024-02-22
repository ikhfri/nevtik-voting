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
            $table->enum('class', explode(',','X TKP 1,X TKP 2,X DPIB 1,X DPIB 2,X TOI 1,X TOI 2,X TP 1,X TP 2,X TFLM,X TKRO 1,X TKRO 2,X TKRO 3,X TKJ 1,X TKJ 2,X SIJA 1,X SIJA 2,X RPL 1,X RPL 2,X DKV 1,X DKV 2,X DKV 3,X DKV 4,XI TKP 1,XI TKP 2,XI DPIB 1,XI DPIB 2,XI TOI 1,XI TOI 2,XI TP 1,XI TP 2,XI TFLM,XI TKR 1,XI TKR 2,XI TKR 3,XI TKJ 1,XI TKJ 2,XI SIJA 1,XI SIJA 2,XI RPL 1,XI RPL 2,XI DKV 1,XI DKV 2,XI DKV 3,XII BKP 1,XII BKP 2,XII DPIB 1,XII DPIB 2,XII TOI 1,XII TOI 2,XII TP 1,XII TP 2,XII TFLM,XII TKRO 1,XII TKRO 2,XII TKRO 3,XII TKJ 1,XII TKJ 2,XII SIJA,XII RPL 1,XII RPL 2,XII MM 1,XII MM 2,XII MM 3,XIII TOI 1,XIII TOI 2,XIII TFLM 1,XIII TFLM 2,XIII SIJA 1,XIII SIJA 2,GURU PNS,TU PNS,GURU PPPK,GURU TU HONOR'))->default('XII SIJA');
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
