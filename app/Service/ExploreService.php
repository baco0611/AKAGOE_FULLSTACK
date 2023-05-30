<?php

namespace App\Service;

use App\Models\Explore;

class ExploreService
{
   
    public function get($id_name)
    {
        return  Explore::where('id_name', $id_name)->get();
    }
}