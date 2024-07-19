<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rafistoleur extends Model
{
    use HasFactory;
    protected $table = 'rafistoleurs';
    protected $fillable = [
        'name',
        'email',
        'location',
        'tel',
    ];
}
