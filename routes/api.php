<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// api/tasks
Route::apiResource('tasks','TaskController');
//ログインユーザを取得する
Route::get('/','UserController@index');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Auth::routes();
