|     Method     |       URI        |     Name      |                   Action                    | Middleware |
| :------------: | :--------------: | :-----------: | :-----------------------------------------: | :--------: |
| GET&#124;HEAD  |    api/tasks     |  tasks.index  |  App\Http\Controllers\TaskController@index  |    api     |
|      POST      |    api/tasks     |  tasks.store  |  App\Http\Controllers\TaskController@store  |    api     |
| GET&#124;HEAD  | api/tasks/{task} |  tasks.show   |  App\Http\Controllers\TaskController@show   |    api     |
| PUT&#124;PATCH | api/tasks/{task} | tasks.update  | App\Http\Controllers\TaskController@update  |    api     |
|     DELETE     | api/tasks/{task} | tasks.destroy | App\Http\Controllers\TaskController@destroy |    api     |
| GET&#124;HEAD  |      {all}       |               |                   Closure                   |    web     |
