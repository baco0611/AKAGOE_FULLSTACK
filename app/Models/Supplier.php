<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;
    protected $table = 'supplier';
    
    protected $with = ['product'];
    public function product () 
    {
        return $this->hasMany(Product::class, 'id_product', 'id_product');
    }
    
}