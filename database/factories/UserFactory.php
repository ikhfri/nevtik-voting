<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->name(),
            'candidate_id' => fake()->numberBetween(1, 4),
            'NIS' => fake()->unique()->numberBetween(1000000000, 9999999999),
            'class' => fake()->randomElement(explode(',','X TKP 1,X TKP 2,X DPIB 1,X DPIB 2,X TOI 1,X TOI 2,X TP 1,X TP 2,X TFLM,X TKRO 1,X TKRO 2,X TKRO 3,X TKJ 1,X TKJ 2,X SIJA 1,X SIJA 2,X RPL 1,X RPL 2,X DKV 1,X DKV 2,X DKV 3,X DKV 4,XI TKP 1,XI TKP 2,XI DPIB 1,XI DPIB 2,XI TOI 1,XI TOI 2,XI TP 1,XI TP 2,XI TFLM,XI TKR 1,XI TKR 2,XI TKR 3,XI TKJ 1,XI TKJ 2,XI SIJA 1,XI SIJA 2,XI RPL 1,XI RPL 2,XI DKV 1,XI DKV 2,XI DKV 3,XII BKP 1,XII BKP 2,XII DPIB 1,XII DPIB 2,XII TOI 1,XII TOI 2,XII TP 1,XII TP 2,XII TFLM,XII TKRO 1,XII TKRO 2,XII TKRO 3,XII TKJ 1,XII TKJ 2,XII SIJA,XII RPL 1,XII RPL 2,XII MM 1,XII MM 2,XII MM 3,XIII TOI 1,XIII TOI 2,XIII TFLM 1,XIII TFLM 2,XIII SIJA 1,XIII SIJA 2,GURU PNS,TU PNS,GURU PPPK,GURU TU HONOR')),
            'role' => 'user',
            'email_verified_at' => now(),
            // 'password' => Hash::make('123456'), // password
            'password' => '123456', // password
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
