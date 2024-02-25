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

    protected $appends = [
        'photo_url',
    ];

    public function getPhotoUrlAttribute()
    {
        return $this->photo ? url($this->photo) : asset('img/placeholder-profile.png');
    }
    // Get the users for the Candidate
    public function users(){
        return $this->hasMany(User::class);
    }
}
