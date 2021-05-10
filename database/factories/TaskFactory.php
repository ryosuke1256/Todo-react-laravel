<?php

namespace Database\Factories;

use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Task::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //10〜30文字
            'title' => $this->faker->realText(rand(10,30)),
            'user_id'=> 1,
            //40％でtrue
            'is_done' => $this->faker->boolean(40),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
