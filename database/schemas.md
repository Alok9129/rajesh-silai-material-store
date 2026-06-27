# Database Schemas - Rajesh Silai Material Store

## User Schema

```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique),
  phone: String (required),
  password: String (required, hashed),
  role: String (enum: ['customer', 'admin'], default: 'customer'),
  address: {
    street: String,
    city: String,
    state: String,
    pincode: String
  },
  orders: [ObjectId (ref: Order)],
  createdAt: Date (default: Date.now)
}
```

## Product Schema

```javascript
{
  _id: ObjectId,
  name: String (required),
  description: String (required),
  category: String (enum: ['Saree', 'Kurti', 'Salwar Kameez', 'Lehenga', 'Dupatta', 'Other'], required),
  price: Number (required),
  discountPrice: Number,
  size: [String],
  color: [String],
  stock: Number (required, default: 0),
  images: [
    {
      url: String,
      public_id: String
    }
  ],
  ratings: Number (default: 0),
  numOfReviews: Number (default: 0),
  reviews: [
    {
      user: String,
      rating: Number,
      comment: String,
      createdAt: Date (default: Date.now)
    }
  ],
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

## Order Schema

```javascript
{
  _id: ObjectId,
  orderNumber: String (unique, required),
  customer: {
    name: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    pincode: String
  },
  items: [
    {
      product: ObjectId (ref: Product, required),
      quantity: Number (required),
      price: Number (required),
      size: String,
      color: String
    }
  ],
  totalAmount: Number (required),
  paymentMethod: String (enum: ['Cash', 'UPI', 'Card'], required),
  paymentStatus: String (enum: ['Pending', 'Completed', 'Failed'], default: 'Pending'),
  orderStatus: String (enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'], default: 'Pending'),
  paymentId: String,
  transactionId: String,
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/search/query?q=keyword&category=name` - Search products

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get order by ID
- `PATCH /api/orders/:id` - Update order status

### Admin
- `POST /api/admin/products` - Create product
- `PUT /api/admin/products/:id` - Update product
- `DELETE /api/admin/products/:id` - Delete product
- `GET /api/admin/stats` - Get dashboard statistics

### Payment
- `POST /api/payment/process` - Process payment
- `POST /api/payment/verify` - Verify payment
