|  Method   |       Endpoint       |                   Action                    |                                                        Description                                                        |
| :-------: | :------------------: | :-----------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: |
|    GET    |      api/users       |  App\Http\Controllers\UserController@index  |                                          ログインされたユーザーの id を取得する                                           |
|    GET    | api/tasks/users/{id} |  App\Http\Controllers\TaskController@index  | ログインしている user の id に一致する tasks テーブルのレコードを取得する、トップページでユーザー毎のタスク一覧を表示する |
|   POST    |      api/tasks       |  App\Http\Controllers\TaskController@store  |                              tasks テーブルのレコードを新規作成する。タスクの新規作成をする                               |
| PUT/PATCH |    api/tasks/{id}    | App\Http\Controllers\TaskController@update  |                               tasks テーブルの id のレコードを更新する。タスクの編集をする                                |
|  DELETE   |    api/tasks/{id}    | App\Http\Controllers\TaskController@destroy |                               tasks テーブルの id のレコードを削除する。タスクの削除をする                                |
|    GET    | api/tags/tasks/{id}  |  App\Http\Controllers\TagController@index   |                    タスクの id に一致する tags テーブルのレコードを取得する。タスク毎のタグを表示する                     |
|   POST    |       api/tags       |  App\Http\Controllers\TagController@store   |                                tags テーブルのレコードを新規作成する。タグの新規作成をする                                |
| PUT/PATCH |    api/tags/{id}     |  App\Http\Controllers\TagController@update  |                                  tags テーブルの id のレコードを更新する。タグの編集をす                                  |
