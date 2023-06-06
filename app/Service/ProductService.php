<?php

namespace App\Service;

use App\Http\Resources\CategoryResource;
use App\Models\Product;
use App\Models\Supplier;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ProductService
{
    public function getBestSeller()
    {
        $result= DB::table('product')
        ->select('product.id', 'product_name', 'sale_quantity', 'price', 'url_image', 'supplier_name', 
        'istitle', 'product_type_name')
        ->join('supplier', 'id_supplier', '=', 'supplier.id')
        ->join('product_image', 'product.id', '=', 'product_image.id_product')
        ->join('product_type', 'product.id_product_type', '=', 'product_type.id')
        ->where('istitle', 1)
        ->orderBy('product.sale_quantity', 'desc')
        ->take(3)
        ->get();
        return $result;
    }
    public function getItem ($id_item) 
    {
        $result= DB::table('product')
        ->select ('product.id', 'product_name', 'sale_quantity', 'price', 'supplier_name',
         'product_type_name', 'quantity', 'product_description')
        ->join('supplier', 'id_supplier', '=', 'supplier.id')
        ->join('product_type', 'product.id_product_type', '=', 'product_type.id')
        ->where('product.id', $id_item)
        ->get();
        return $result;
    }
    public function getImage ($id_item) 
    {
        $image = DB::table('product')
        ->select ('url_image', 'product_type_name')
        ->join('product_image', 'product.id', '=', 'product_image.id_product')
        ->join('product_type', 'product.id_product_type', '=', 'product_type.id')
        ->where('product.id', $id_item)
        ->get();
        return  $image;
    }
    public function getItemOther($id_item) 
    {
        $subquery = DB::table('product')
        ->select('product.id_product_type')
        ->where('product.id', $id_item)
        ->get();
        $data= json_decode(json_encode($subquery), true);
        $result = DB::table('product')
        ->select('product.id', 'product_name', 'sale_quantity', 'price', 'url_image', 'supplier_name', 'istitle','product_type_name')
        ->join('product_type', 'product.id_product_type', '=', 'product_type.id')
        ->join('supplier', 'id_supplier', '=', 'supplier.id')
        ->join('product_image', 'product.id', '=', 'product_image.id_product')
        ->where('product.id', '!=', $id_item)
        ->where('istitle', 1)
        ->whereIn('id_product_type', $data)
        ->get();
        return $result;
    }
    public function getProductPopular ($category) 
    {
        $result = DB::table('product')
        ->select('product.id', 'product_name', 'sale_quantity', 'price', 'url_image', 'supplier_name', 'istitle','product_type_name')
        ->join('product_type', 'product.id_product_type', '=', 'product_type.id')
        ->join('supplier', 'id_supplier', '=', 'supplier.id')
        ->join('product_image', 'product.id', '=', 'product_image.id_product')
        ->where('product_name', 'like', '%'.$category.'%')
        ->where('istitle', 1)
        ->orderBy('product.sale_quantity', 'desc')
        ->get();
        return $result;
    }
    public function getProductPriceAsc ($category) 
    {
        $result = DB::table('product')
        ->select('product.id', 'product_name', 'sale_quantity', 'price', 'url_image', 'supplier_name', 'istitle','product_type_name')
        ->join('product_type', 'product.id_product_type', '=', 'product_type.id')
        ->join('supplier', 'id_supplier', '=', 'supplier.id')
        ->join('product_image', 'product.id', '=', 'product_image.id_product')
        ->where('product_name', 'like', '%'.$category.'%')
        ->where('istitle', 1)
        ->orderBy('price', 'asc')
        ->get();
        return $result;
    }
    public function getProductPriceDesc ($category) 
    {
        $result = DB::table('product')
        ->select('product.id', 'product_name', 'sale_quantity', 'price', 'url_image', 'supplier_name', 'istitle','product_type_name')
        ->join('product_type', 'product.id_product_type', '=', 'product_type.id')
        ->join('supplier', 'id_supplier', '=', 'supplier.id')
        ->join('product_image', 'product.id', '=', 'product_image.id_product')
        ->where('product_name', 'like', '%'.$category.'%')
        ->where('istitle', 1)
        ->orderBy('price', 'desc')
        ->get();
        return $result;
    }
}