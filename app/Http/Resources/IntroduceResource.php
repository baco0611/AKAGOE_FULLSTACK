<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class IntroduceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function convertImage()
    {
        $name = $this->imageLogo;
        $pathFull = '/uploads/'.$name;
        return 'http://localhost:8000' . '/storage' . $pathFull;
    }
    public function toArray($request)
    {
        return [
            'name'=> $this->titleName_ENG,
            'content'=> $this->contentDetails_ENG,
            'mainColor'=>$this->mainColor,
            'logo'=> $this->convertImage()
        ];
    }
}