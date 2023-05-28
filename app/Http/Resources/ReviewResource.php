<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
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
        $pathFull = '/uploads/uploads_' .$this->id_name. '/'. $name;
        return 'http://localhost:8000' . '/storage' . $pathFull;
    }
    public function toArray($request)
    {
        return [
            'name'=> $this->fullname,
            'content'=>$this->content_fb,
            'star'=>$this->star,
            'position'=>$this->position,
            'image'=>$this->convertImage()
        ];
    }
}