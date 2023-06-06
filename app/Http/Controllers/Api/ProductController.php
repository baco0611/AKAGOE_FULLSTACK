<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ItemOtherResource;
use App\Http\Resources\ItemsResource;
use App\Http\Resources\ProductsResource;
use App\Service\ProductService;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $productservice = new ProductService();
        $product = $productservice->getBestSeller();
        $productResource = ProductsResource::collection($product);
        return response()->json([
            'data'=>$productResource
        ], HttpResponse::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $type= $request->category ;
       $method =$request->method;
       $productservice = new ProductService();
        if($method == 'popular') 
        {
            $product= $productservice->getProductPopular($type);
            $itemResource = ProductsResource::collection($product);
            return response()->json([
                'data'=> $itemResource
            ], HttpResponse::HTTP_OK);
        }
       if($method == 'priceAsc') 
        {
            $product= $productservice->getProductPriceAsc($type);
            $itemResource = ProductsResource::collection($product);
            return response()->json([
                'data'=> $itemResource
            ], HttpResponse::HTTP_OK);
        }
        if($method == 'priceDesc') 
        {
            $product= $productservice->getProductPriceDesc($type);
            $itemResource = ProductsResource::collection($product);
            return response()->json([
                'data'=> $itemResource
            ], HttpResponse::HTTP_OK);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id_item)
    {
        $productservice = new ProductService();
        $item = $productservice->getItem($id_item);
        $itemOther =  $productservice->getItemOther($id_item);
        $itemResource = ItemsResource::collection($item);
        $categoryResource =ItemOtherResource::collection($itemOther);
        
        return response()->json([
            'data'=> $itemResource,
           'otherData' =>$categoryResource
        ], HttpResponse::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}