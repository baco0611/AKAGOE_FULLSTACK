<?php

namespace App\Service;

use App\Models\Content;

class ContentService
{
   
    public function get($id_name)
    {
        return  Content::where('id_name', $id_name)->get();
    }
}