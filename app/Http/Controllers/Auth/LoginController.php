<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * 認証の試行を処理
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
        $result = false;

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            //sucess
            $result = true;

            // return redirect()->intended('dashboard');
            // return redirect('/');
            // return new JsonResponse(['message' => 'ログインしました']);
        }
        return response()->json(['result' => $result]);
        // return back()->withErrors([
        //     'email' => 'The provided credentials do not match our records.',
        // ]);
    }
}