<?php

use App\Http\Controllers\Api\CharacterController;
use App\Http\Controllers\Api\Contentcontroller;
use App\Http\Controllers\Api\DownloadController;
use App\Http\Controllers\Api\ExploreController;
use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Api\OtherController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ReviewController;
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
Route::get('product', [ContentController::class,'index'])->name('content.index');

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

#review
Route::get('review/{id_name}', [ReviewController::class,'show'])->name('review.show');

#review
Route::get('download/{id_name}', [DownloadController::class,'show'])->name('download.show');

#home
Route::get('home/{id_language}', [HomeController::class,'show'])->name('home.show');

#bestSeller
Route::get('best-seller', [ProductController::class,'index'])->name('products.index');

#product_other
Route::get('item/{id}', [ProductController::class,'show'])->name('products.index');

#product_popular
Route::post('find', [ProductController::class,'store'])->name('product.store');