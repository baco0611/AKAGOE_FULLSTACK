<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    use HasFactory;
    
    protected $table = 'contents';
    protected $fillable = [
        'titleName_ENG','contentDetails_ENG','contentOverall_ENG','mainColor','imageLogo','imageDetails'
    ];
    
}