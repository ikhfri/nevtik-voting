<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'photo',
        'votes',
        'vision',
        'missions'
    ];
    // Get the users for the Candidate
    public function users(){
        return $this->hasMany(User::class);
    }
}
