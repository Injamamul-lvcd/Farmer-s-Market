const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
      buyer:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
      },
      product:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
      },
      quantity:{
            type: Number,
            required: true,
      },
      totalPrice:{
            type: Number,
            required: true,
      },
      status:{
            type: String,
            enum: ['Pending', 'Processing', 'In Transit', 'Delivered', 'Cancelled'],
            default: 'Pending',
      },
      deliveryAddress:{
            type: String,
            required: true,
      }
      });

const orderModel = mongoose.model('Order', orderSchema);

module.exports ={
      orderModel: orderModel
}
