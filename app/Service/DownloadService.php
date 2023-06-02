<?php

namespace App\Service;

use App\Models\Download;

class DownloadService
{
   
    public function get($id_name)
    {
        return  Download::where('id_name', $id_name)->get();
    }
}