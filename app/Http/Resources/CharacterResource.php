<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CharacterResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function convertImage()
    {
        $name = $this->image_link;
        if ($this->image_type == '2D') 
        {
        $pathFull = '/uploads/uploads_' .$this->id_name. '/'. $name;
        return 'http://localhost:8000' . '/storage' . $pathFull;
        }
        if ($this->image_type == '3D') 
        {
            return $name;
        }
    }
    public function toArray($request)
    {
        return [
            'content'=>$this->description_ENG,
            'image'=>$this->convertImage(),
            'type'=>$this->image_type
        ];
    }
}