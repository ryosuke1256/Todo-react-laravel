<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Task;

class ReportTest extends TestCase
{
    /**
     * api/tasks
     * GETメソッド
     *
     * @return void
     */
    public function testGET()
    {
        $response = $this->get('api/tasks');
        $response->assertStatus(200);
    }
    public function testPOST()
    {
        $data = [
            'title' => 'テストデータ'
        ];
        $response = $this->post('api/tasks',$data);
        $response->assertStatus(201);
    }
    public function testPUT()
    {
        // App\Models\Taskインスタンスを一つ作成
        $task = Task::factory()->create();
        $task->title='テストデータ変更しました';
        
        //変更したいidを指定してください
        $task->id=7;

        //↓残ってるとデータが変更されなかった、テストを実行するときはコメントアウト
        // dd($task);
        $response = $this->patchJson("api/tasks/{$task->id}",$task->toArray());
        $response->assertStatus(200);
    }
    public function testDELETE()
    {
        // App\Models\Taskインスタンスを一つ作成
        $task = Task::factory()->create();
        
        //変更したいidを指定してください
        $task->id=8;

        //↓残ってるとデータが変更されなかった、テストを実行するときはコメントアウト
        // dd($task);
        $response = $this->deleteJson("api/tasks/{$task->id}");
        $response->assertStatus(200);
    }
}
