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
            if ($this->istitle) {
                $image=$this->url_image;
            }
            $pathFull = '/uploads/product/'. $image;
            return 'http://localhost:8000' . '/storage' . $pathFull;
        }
    public function toArray($request)
    {
        return [
            'productName'=>$this->product_name,
            'company'=>$this->supplier->supplier_name,
            'price' =>$this->price,
            //'image'=> $this->convertImage(),
            'sale'=>$this->sale_quantity,
            'id'=>Hash::make($this->id_product),
        ];
    }
    // public function toArray($request)
    // {
    //     return parent::toArray($request);
    // }
}