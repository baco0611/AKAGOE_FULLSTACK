<?php

use App\Http\Controllers\Api\CharacterController;
use App\Http\Controllers\Api\Contentcontroller;
use App\Http\Controllers\Api\ExploreController;
use App\Http\Controllers\Api\OtherController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

#product
Route::get('product', [ContentController::class,'index'])->name('product.index');

#title
Route::get('title/{id_name}', [ContentController::class,'showTitle'])->name('title.show');

#introduce
Route::get('introduce/{id_name}', [ContentController::class,'showIntroduce'])->name('introduce.show');

#explore
Route::get('explore/{id_name}', [ExploreController::class,'show'])->name('explore.show');

#character
Route::get('character/{id_name}', [CharacterController::class,'show'])->name('character.show');

#other
Route::get('other/{id_name}', [OtherController::class,'show'])->name('other.show');