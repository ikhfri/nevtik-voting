<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [LoginController::class, 'authenticate']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [LoginController::class, 'logout']);
    Route::get('/me', [LoginController::class, 'me']);
    Route::get('/candidates', [CandidateController::class, 'index'])->name('voting');
    Route::get('/rate', [CandidateController::class, 'rate']);
    Route::get('/candidate/{id}', [CandidateController::class, 'show']);
    Route::post('voting', [CandidateController::class, 'store']);
    Route::post('/voting/{id}', [CandidateController::class, 'vote']);
    Route::delete('voting/{id}', [CandidateController::class, 'destroy']);

    Route::get('/dashboard', [UserController::class, 'index'])->middleware('admin')->name('dashboard');
    Route::post('dashboard', [UserController::class, 'postIndex']);
    Route::put('dashboard/{user}', [UserController::class, 'update']);
    Route::delete('dashboard/{user}', [UserController::class, 'destroy']);

    Route::post('generate', [UserController::class, 'generate']);
});