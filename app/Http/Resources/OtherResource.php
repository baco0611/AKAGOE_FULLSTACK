<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OtherResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function convertImage()
    {
        $name = $this->urlImage;
        $pathFull = '/uploads/uploads_' .$this->id_name. '/'. $name;
        return 'http://localhost:8000' . '/storage' . $pathFull;
    }
    public function toArray($request)
    {
        return [
            'name'=>$this->name,
            'image'=>$this->convertImage(),
            'slug'=>$this->id_name
        ];
    }
}