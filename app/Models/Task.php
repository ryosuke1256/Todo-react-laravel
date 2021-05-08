<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $table = 'tasks';
    //カラムを追加する、可変項目
    protected $fillable = [
        'title','is_done'
    ];
    public function dept() {
        return $this->belongsTo('App/Models/User');
    }
}
