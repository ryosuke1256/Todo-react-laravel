<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Task extends Model
{
    use HasFactory;

    protected $table = 'tasks';

    protected $fillable = [
        'user_id','title','is_done',
    ];
    protected $casts = [
        'is_done' => 'boolean'
    ];
    public function user() {
        return $this->belongsTo('App/Models/User');
    }
    public function tag() {
        return $this->hasOne('App/Models/Tag');
    }
}
