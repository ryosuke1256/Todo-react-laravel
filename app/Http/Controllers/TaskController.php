<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * api/tasks
     * 
     */
    public function index()
    {
        
        // dd('aaaaaaaa');
        // return Task::all();
        return Task::orderByDesc('id')->get();
    }

    /**
     * Store a newly created resource in storage.
     * api/tasks
     * postメソッド
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
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
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
