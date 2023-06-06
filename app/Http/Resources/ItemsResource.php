<?php

namespace App\Http\Resources;

use App\Service\ProductService;
use Illuminate\Http\Resources\Json\JsonResource;

class ItemsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
  
    public function toArray($request)
    {
        $productservice = new ProductService();
        $arrImage = $productservice->getImage($this->id);
        return [
            'productName'=>$this->product_name,
            'company' => $this->supplier_name,
            "category"=> $this->product_type_name,
            "price"=>Round($this->price,2),
            "description"=>$this->product_description,
            "itemLeft" => $this->quantity,
            "image"=> ImageResource::collection($arrImage),
            "id"=> $this->id
        ];
    }
}