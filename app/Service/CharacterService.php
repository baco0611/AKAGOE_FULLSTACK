<?php

namespace App\Service;

use App\Models\Character;

class CharacterService
{
   
    public function get($id_name)
    {
        return  Character::where('id_name', $id_name)->get();
    }
}