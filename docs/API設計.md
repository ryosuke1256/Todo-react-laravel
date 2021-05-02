|     Method     |       Endpoint   |     Name      |                   Action                    |     Description    |
| :------------: | :--------------: | :-----------: | :-----------------------------------------: | :--------:         |
|      GET       |    api/tasks     |  tasks.index  |  App\Http\Controllers\TaskController@index  |tasksテーブルの全レコードを取得する。TopPageでタスク一覧を表示する
|      POST      |    api/tasks     |  tasks.store  |  App\Http\Controllers\TaskController@store  |tasksテーブルにレコードを新規作成する。タスクの新規追加
|      PUT       | api/tasks/{id}   | tasks.update  | App\Http\Controllers\TaskController@update  |tasksテーブルのidのレコードを更新する。タスクの編集
|     DELETE     | api/tasks/{id}   | tasks.destroy | App\Http\Controllers\TaskController@destroy |tasksテーブルのidのレコードを削除する。タスクの削除
