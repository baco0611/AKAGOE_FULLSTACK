<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Hash;

class ProductsResource extends JsonResource
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
        return [
            'productName'=>$this->product_name,
            'company'=>$this->supplier_name,
            'price' =>Round($this->price, 2),
            'image'=> $this->convertImage(),
            'sale'=>$this->sale_quantity,
            'id'=>$this->id
        ];
    }
}