<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\StudentController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('students',[StudentController::class,'index']);
Route::post('students',[StudentController::class,'store']);
Route::post('students/{id}',[StudentController::class,'show']);