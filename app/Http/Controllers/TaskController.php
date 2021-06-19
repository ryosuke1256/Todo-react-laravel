<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function __construct() {
        $this->middleware('auth');
    }

    /**
     * api/tasks/users/{id}
     * GET
     */
    public function index($id)
    {
        if(Auth::id() == $id) {
            $user = User::find(Auth::id());
            $task = $user->task;
            return $task;
        }
    }

    /**
     * api/tasks
     * POST
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $task = Task::create($request->all());
        return $task 
        ? response()->json($task,201)
        : response()->json(['Error'],500);
    }

    /**
     * api/tasks/{id}
     * PUT/PATCH
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
        : response()->json(['Error'],500);
    }

    /**
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
        : response()->json(['Error'],500);
    }
}
