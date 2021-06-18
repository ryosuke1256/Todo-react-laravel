<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
        return view('top/welcome');
});
Route::get('api/users','UserController@index');
Route::get('api/tasks/users/{id}','TaskController@index');
Route::apiResource('api/tasks','TaskController');
Route::Resource('api/tags','TagController');
Route::get('api/tags/tasks/{id}','TagController@index');
Route::get('api/tags/tasks/{id}','TagController@index');
Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
