<?php

namespace App\Service;

use App\Models\Feedback;

class ReviewService
{
    public function get($id_name)
    {
        return Feedback::where('id_name', $id_name)->get(); 
    }
}