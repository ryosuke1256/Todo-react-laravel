<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    // ログイン済みの場合
    public function __construct() {
        $this->middleware('auth');
    }

    /**
     * 現在ログインしているユーザーIDを取得する
     * api/users
     * GET
     *
     * @return \App\User|null
     */
    public function index(): ?object 
    {
        return Auth::user();
    }

}
