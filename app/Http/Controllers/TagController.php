<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tag;

class TagController extends Controller
{
    /**
     * api/tags/tasks/{id}
     * GET
     * 
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $tag = Tag::where('task_id',$id)->first();
        return $tag;
    }

    /**
     * api/tags
     * POST
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $tag = Tag::create($request->all());
        return $tag
        ? response()->json($tag,201)
        : response()->json(['Error'],500);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
