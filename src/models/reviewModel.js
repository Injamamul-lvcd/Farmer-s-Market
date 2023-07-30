const mongoose = require('mongoose');
const Schema = mongoose.Schema

const reviewSchema = new Schema({
      rating:{
            type: Number,
            required: true,
            min: 1,
            max: 5,
      },
      comment:{
            type: String,
            required: true,
      },
      reviewer:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
      },
      product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
      },
});

const reviewModel = mongoose.model('Review', reviewSchema);

module.exports = {
      reviewModel: reviewModel,
}
