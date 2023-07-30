const { MongoBatchReExecutionError } = require('mongodb');
const mongoose=require('mongoose');

const Schema = mongoose.Schema


const productSchema = new Schema({
      name:{
            type:String,
            required:true
      },
      description:{
            type:String,
            required:true
      },
      price:{
            type:Number,
            required:true
      },
      image:{
            type:String,
            required:true
      },
      category:{
            type:String,
            enum:['mechine', 'mechanical-equipment', 'seeds', 'pestiside', 'fertilizers','farm-animal', 'cereals','vegitables', 'fruits', 'milks', 'milk-products'],
            required:true
      },
      quantity:{
            type:Number,
            required:true
      },
      owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
      }

})

const productModel=mongoose.model('Product',productSchema);

module.exports={
      productModel:productModel
}