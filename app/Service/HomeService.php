<?php

namespace App\Service;

use App\Models\Home;

class HomeService
{
   
    public function get($id_language)
    {
        return  Home::where('id_language', $id_language)->get();
    }
}