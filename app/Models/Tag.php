<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    protected $table = 'tags';
    
    protected $fillable = [
        'task_id','checked_red','checked_blue','checked_yellow','checked_green',
    ];
}
