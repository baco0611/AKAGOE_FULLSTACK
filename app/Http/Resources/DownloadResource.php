<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DownloadResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'laptopURL'=> $this->laptopURL,
            'appStoreURL'=>$this->appStoreURL,
            'ggPlayURL'=>$this->ggPlayURL
        ];
    }
}