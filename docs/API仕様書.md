|  Method   |      Endpoint       |     Name      |                   Action                    |                                          Description                                          |
| :-------: | :-----------------: | :-----------: | :-----------------------------------------: | :-------------------------------------------------------------------------------------------: |
|   POST    |      api/tasks      |  tasks.store  |  App\Http\Controllers\TaskController@store  |                tasks テーブルにレコードを新規作成する。タスクの新規追加をする                 |
|    GET    | api/tasks/{user_id} |  tasks.show   |  App\Http\Controllers\TaskController@show   | tasks テーブルの user_id に一致するレコードを全て取得する。トップページでユーザー毎のタスク一覧を表示する |
| PUT/PATCH |   api/tasks/{id}    | tasks.update  | App\Http\Controllers\TaskController@update  |                 tasks テーブルの id のレコードを更新する。タスクの編集をする                  |
|  DELETE   |   api/tasks/{id}    | tasks.destroy | App\Http\Controllers\TaskController@destroy |                 tasks テーブルの id のレコードを削除する。タスクの削除をする                  |
|    GET    |      api/users      |               |  App\Http\Controllers\UserController@index  |                   users テーブルからログインされたユーザーの id を取得する                    |
