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
    <div id="app"></div>
    <script src="{{ mix('/js/index.js') }}" ></script>
</body>
</html>