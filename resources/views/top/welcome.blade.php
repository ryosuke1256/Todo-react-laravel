@extends('index')

@section('content')
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
                    <a href="{{ url('login', null , $is_production) }}" class="text-sm text-gray-700 underline Button Login">ログイン</a>
                        @if (Route::has('register'))
                            <a href="{{ url('register', null , $is_production) }}" class="ml-4 text-sm text-gray-700 underline Button Register">新規登録</a>
                        @endif
                    </div>
                        <img  src='/images/todo.png' width='400px' height='400px'/>
                </div>
                    <img class='todo-image' src='/images/image.png' width='800px' /><br>
            </div>
        </div>
    </div>
@endsection