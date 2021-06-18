@extends('index')

@section('content')
    <div class="wallpaper">
        <img class="background-image" src='/images/background.jpg' />
        <img class="background-image2" src='/images/background2.jpg' />
        <div class='welcome'>
            <h1 class='welcome__title'>
                <div class='welcome__title--underLine'>Todoアプリ作ってみたよ！</div>
                <div class='welcome__title--underLine'>会員登録して使ってみてね！</div>
            </h1>
            <div class='welcome__content'>
                <div>
                    <div class='welcome__content--title'>タスク管理ツールを使って生産性を上げよう</div>
                    <a href="{{ url('login', null , $is_production) }}" class="text-sm text-gray-700 underline welcome__content--button welcome__content--hover">ログイン</a>
                        @if (Route::has('register'))
                            <a href="{{ url('register', null , $is_production) }}" class="ml-4 text-sm text-gray-700 underline welcome__content--button welcome__content--hover">新規登録</a>
                        @endif
                    </div>
                        <img  src='/images/todo.png' width='400px' height='400px'/>
                </div>
                    <img class='todo-image' src='/images/image.png' width='800px' /><br>
            </div>
        </div>
    </div>
@endsection 