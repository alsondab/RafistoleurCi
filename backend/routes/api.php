<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\rafistoleurController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('adminsign', [AuthController::class, 'adminsign']);
Route::post('admilogin', [AuthController::class, 'admilogin']);


Route::post('login', [AuthController::class,'login']);
Route::post('signup', [AuthController::class,'signup']);
route::get('rafistoleurs', [rafistoleurController::class,'index']);
route::post('rafistoleurs', [rafistoleurController::class,'store']);

route::post('rafistoleurs', [rafistoleurController::class,'rafistoleurLogin']);
route::get('rafistoleurs/{id}', [rafistoleurController::class,'show']);
route::get('rafistoleurs/{id}/edit', [rafistoleurController::class,'edit']);
route::put('rafistoleurs/{id}/edit', [rafistoleurController::class,'update']);
route::delete('rafistoleurs/{id}/delete', [rafistoleurController::class,'destroy']);

Route::group([

    'middleware' => 'api'

], function ($router) {
    // Route::post('logout', 'AuthController@logout');
    // Route::post('refresh', 'AuthController@refresh');
    // Route::post('me', 'AuthController@me');

});