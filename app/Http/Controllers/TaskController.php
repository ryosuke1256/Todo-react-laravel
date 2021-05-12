<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * api/tasks
     * GET
     */
    public function index(User $user)
    {
        //全レコードを降順で取得する
        // return Task::orderByDesc('id')->get();
    }

    /**
     * Store a newly created resource in storage.
     * api/tasks
     * POST
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        //Modelクラス::create fillable書く必要がある！
        $task = Task::create($request->all());
        return $task 
        ? response()->json($task,201)
        : response()->json(['エラーです'],500);
    }

    /**
     * Display the specified resource.
     * api/tasks/{user_id}
     * GET
     * 
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        // use Illuminate\Database\Eloquent\Collection::latest;
        //パターン１、user_id毎のデータを取得
        // return Task::where('user_id',$task->id)->orderByDesc('id')->get();


        // パターン２、データベースのリレーションを使ったやり方、
        // App\Models\Userのtask()にorderByDesc('id')つけてね
        $user = User::find($task->id);
        $task = $user->task;
        return $task;
    }

    /**
     * Update the specified resource in storage.
     *
     * api/tasks/{id}
     * PUT PATCH
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Task $task)
    {
        $task->title = $request->title;
        $task->is_done = $request->is_done;
        return $task->update() 
        ? response()->json($task)
        : response()->json(['エラーです'],500);
    }

    /**
     * Remove the specified resource from storage.
     * 
     * api/tasks/{id}
     * DELETE
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Task $task)
    {
        return $task->delete() 
        ? response()->json($task)
        : response()->json(['エラーです'],500);
    }
}
