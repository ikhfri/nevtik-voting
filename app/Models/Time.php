<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Time extends Model
{
    use HasFactory;

    protected $fillable = [
        'deadline',
        'started',
        'is_clicked'
    ];

    public static function createNewTime(string $deadline, string $started)
    {
        $time = new Time();
        $time->deadline = $deadline;
        $time->started = $started;
        return $time;
    }
}
