<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <!-- favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="icon/favicon.ico" />
    <link rel="apple-touch-icon" href="icon/apple-touch-icon.png" sizes="180x180" />
    <link rel="icon" type="image/png" href="icon/android-touch-icon.png" />
    
    <meta name='description' content='シンプルなTodoアプリです' >
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js',$is_production) }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset(mix('css/app.css'),$is_production) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/style.css'),$is_production) }}">
</head>
<body>
            @if (Route::has('login'))
            <!-- ログイン後 -->
                <div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    @auth
                    <!-- <a href="{{ url('/home') }}" class="text-sm text-gray-700 underline">Home</a> -->

                    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                        <div class="container">
                        <img src='/images/whale.png' width='40px' height=40px'/>
                        <a class="navbar-brand" href="{{ url('/') }}">
                            {{ config('app.name', 'Laravel') }}
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <!-- Left Side Of Navbar -->
                        <ul class="navbar-nav mr-auto">

                        </ul>

                        <!-- Right Side Of Navbar -->
                        <ul class="navbar-nav ml-auto">
                            <!-- Authentication Links -->
                            @guest
                                @if (Route::has('login'))
                                    <li class="nav-item">
                                        <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                    </li>
                                @endif

                                @if (Route::has('register'))
                                    <li class="nav-item">
                                        <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                    </li>
                                @endif
                            @else
                                <li class="nav-item dropdown">
                                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup=" aria-expanded="false" v-pre>
                                        {{ Auth::user()->name }}
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                document.getElementById('logout-form').submit();">
                                                {{ __('Logout') }}
                                        </a>

                                        <form id="logout-form" action="{{ url('logout') }}" method="POST" class="d-none">
                                            @csrf
                                        </form>
                                    </div>
                                </li>
                            @endguest
                        </ul>
                        </div>
                    </nav>

                    <!-- React -->
                    <div id="app"></div>
                    <script src="{{ mix('/js/index.js') }}" ></script>

            @else
                    <!-- ログイン前 -->
                    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                        <div class="container" style='padding-left:23px'>
                            <img src='/images/whale.png' width='40px' height=40px' />
                            <a class="navbar-brand" href="{{ url('/') }}">
                                {{ config('app.name', 'Laravel')}}
                            </a>
                            <a href="{{ route('login') }}" class="text-sm text-gray-700 underline" >ログイン</a>
                            @if (Route::has('register'))
                                <a href="{{ route('register') }}" class="ml-4 text-sm text-gray-700 underline">新規登録</a>
                            @endif
                        </div>
                    </nav>

                    <div class="wallpaper">
                    <img class="background-image" src='/images/background.jpg' />
                    <img class="background-image2" src='/images/background2.jpg' />
                    <div class='welcome-content'>
                        <h1 class='welcome-title'>
                            <div class='underLine'>Todoアプリ作ってみたよ！</div>
                            <div class='underLine'>会員登録して使ってみてね！</div>
                        </h1>
                        <div class='welcome-block'>
                            <div>
                            <div class='welcome-block-title'>タスク管理ツールを使って生産性を上げよう</div>
                            <a href="{{ route('login') }}" class="text-sm text-gray-700 underline Button Login">ログイン</a>
                            @if (Route::has('register'))
                                <a href="{{ route('register') }}" class="ml-4 text-sm text-gray-700 underline Button Register">新規登録</a>
                            @endif
                            </div>
                            <img  src='/images/todo.png' width='400px' height='400px'/>
                        </div>
                        <img class='todo-image' src='/images/image.png' width='800px' /><br>
                    </div>
                    </div>
                @endauth
            @endif
</body>
</html>