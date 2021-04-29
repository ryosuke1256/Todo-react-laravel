<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

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

}
