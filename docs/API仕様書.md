| Method |    Endpoint    |     Name      |                   Action                    |                             Description                     |          |
| :----: | :------------: | :-----------: | :-----------------------------------------: | :------------------------------------------------------------------:| | --- |
|  GET   |   api/tasks    |  tasks.index  |  App\Http\Controllers\TaskController@index  | tasks テーブルの全レコードを取得する。TopPage でタスク一覧を表示する |
|  POST  |   api/tasks    |  tasks.store  |  App\Http\Controllers\TaskController@store  |    tasks テーブルにレコードを新規作成する。タスクの新規追加をする    |
|  PUT   | api/tasks/{id} | tasks.update  | App\Http\Controllers\TaskController@update  |     tasks テーブルの id のレコードを更新する。タスクの編集をする     |
| DELETE | api/tasks/{id} | tasks.destroy | App\Http\Controllers\TaskController@destroy |     tasks テーブルの id のレコードを削除する。タスクの削除をする     | 　  |
