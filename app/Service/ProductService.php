<?php

namespace App\Service;

use App\Models\Product;
use App\Models\Supplier;

class ProductService
{
    public function get()
    {
        $results = Product::with('supplier')->orderBy('sale_quantity', 'DESC')->take(3)->get();
        return $results;//::orderBy('sale_quantity', 'DESC')->take(3)->get(); 
    }
}