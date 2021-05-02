|     Method     |       Endpoint   |     Name      |                   Action                    | Middleware |
| :------------: | :--------------: | :-----------: | :-----------------------------------------: | :--------: |
|      GET       |    api/tasks     |  tasks.index  |  App\Http\Controllers\TaskController@index  |    api     |
|      POST      |    api/tasks     |  tasks.store  |  App\Http\Controllers\TaskController@store  |    api     |
|      PUT       | api/tasks/{task} | tasks.update  | App\Http\Controllers\TaskController@update  |    api     |
|     DELETE     | api/tasks/{task} | tasks.destroy | App\Http\Controllers\TaskController@destroy |    api     |
