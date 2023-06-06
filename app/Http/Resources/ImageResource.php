<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function convertImage()
    {
        $image=$this->url_image;
        $type=$this->product_type_name;
        $pathFull = '/uploads/product_'. $type .'/'. $image;
        return 'http://localhost:8000' . '/storage' . $pathFull;
    }
    public function toArray($request)
    {
        return  $this->convertImage();
    }
}