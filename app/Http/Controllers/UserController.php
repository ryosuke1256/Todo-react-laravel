<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
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
    public function index()
    {
        return Auth::id();
    }
}
