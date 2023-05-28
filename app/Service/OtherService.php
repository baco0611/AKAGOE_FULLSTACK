<?php

namespace App\Service;

use App\Models\Other;

class OtherService
{
   
    public function get($id_name)
    {
        
        return Other::where('id_name', '!=', $id_name)->get(); 
    }
}