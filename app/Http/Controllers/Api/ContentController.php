<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ContentResource;
use App\Http\Resources\IntroduceResource;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Models\Content;
use App\Service\ContentService;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;

class ContentController extends Controller
{
    protected $content;
    public function __construct(Content $content) 
    {
        $this->content=$content;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $contents = $this->content->Paginate(4); 
        $productResource = ProductResource::collection($contents)->response()->getData(true);
        return response()->json([
            'product'=>$productResource
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
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showTitle($id_name)
    {
        $contentservice = new ContentService();
        $contents = $contentservice->get($id_name);
        $contentResource = ContentResource::collection($contents);
        return response()->json([
            'data'=> $contentResource
        ], HttpResponse::HTTP_OK);
    }

    public function showIntroduce($id_name)
    {
        $contentservice = new ContentService();
        $contents = $contentservice->get($id_name);
        $contentResource = IntroduceResource::collection($contents);
        return response()->json([
            'data'=> $contentResource
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