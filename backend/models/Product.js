const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide product name'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide product description']
  },
  category: {
    type: String,
    enum: ['Saree', 'Kurti', 'Salwar Kameez', 'Lehenga', 'Dupatta', 'Other'],
    required: [true, 'Please provide product category']
  },
  price: {
    type: Number,
    required: [true, 'Please provide product price']
  },
  discountPrice: {
    type: Number,
    default: null
  },
  size: [String],
  color: [String],
  stock: {
    type: Number,
    required: [true, 'Please provide stock quantity'],
    default: 0
  },
  images: [
    {
      url: String,
      public_id: String
    }
  ],
  ratings: {
    type: Number,
    default: 0
  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  reviews: [
    {
      user: String,
      rating: Number,
      comment: String,
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
