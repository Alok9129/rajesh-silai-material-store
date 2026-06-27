# 🏪 Rajesh Silai Material Store - E-Commerce Platform

A complete e-commerce solution for ladies clothing with admin panel and customer features.

## ✨ Features

### Customer Features
- Browse ladies clothing (Saree, Kurti, Salwar Kameez, Lehenga, Dupatta)
- Search and filter products by category
- Shopping cart management
- Multiple payment options (Cash, UPI, Card)
- Order tracking
- User registration and login
- Responsive mobile design

### Admin Features
- Add/Edit/Delete products
- Upload product images
- Manage inventory and stock
- View and update orders
- Dashboard with statistics (total products, orders, revenue)
- Admin authentication

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js + Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment**: Ready for Razorpay/PayU integration

## 📥 Installation

### Prerequisites
- Node.js (v14+)
- MongoDB (local or MongoDB Atlas)
- Git

### Step 1: Clone Repository
```bash
git clone https://github.com/Alok9129/rajesh-silai-material-store.git
cd rajesh-silai-material-store
```

### Step 2: Install Backend Dependencies
```bash
cd backend
npm install
cp .env.example .env
```

### Step 3: Update .env File
```
MONGODB_URI=mongodb://localhost:27017/rajesh-silai
PORT=5000
NODE_ENV=development
JWT_SECRET=rajesh-silai-secret-key-2024
```

**Or if using MongoDB Atlas:**
```
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/rajesh-silai?retryWrites=true&w=majority
```

### Step 4: Start Backend
```bash
npm start
```

You should see:
```
✅ MongoDB connected successfully
🚀 Server running on http://localhost:5000
📍 API Health: http://localhost:5000/api/health
```

### Step 5: Start Frontend (New Terminal)
```bash
cd frontend

# Using Python
python -m http.server 3000

# Or using Node
npx http-server -p 3000
```

### Step 6: Open in Browser
- Frontend: **http://localhost:3000**
- API Health: **http://localhost:5000/api/health**

## 📁 Project Structure

```
rajesh-silai-material-store/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── orders.js
│   │   ├── admin.js
│   │   └── payment.js
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── .env
├── frontend/
│   ├── admin/
│   │   └── dashboard.html
│   ├── index.html
│   ├── login.html
│   ├── cart.html
│   ├── styles.css
│   └── app.js
├── database/
│   └── schemas.md
└── README.md
```

## 🚀 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

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
- `POST /api/admin/products` - Add new product
- `PUT /api/admin/products/:id` - Update product
- `DELETE /api/admin/products/:id` - Delete product
- `GET /api/admin/stats` - Get dashboard statistics

### Payment
- `POST /api/payment/process` - Process payment
- `POST /api/payment/verify` - Verify payment

## 💳 Payment Methods

1. **Cash on Delivery** - Pay when order arrives
2. **UPI** - Quick digital payment
3. **Credit/Debit Card** - Secure card payment

## 📝 How to Use

### For Customers
1. Visit http://localhost:3000
2. Click "Login"
3. Click "Register"
4. Select "Customer"
5. Fill in details and register
6. Login with credentials
7. Browse products
8. Add items to cart
9. Proceed to checkout
10. Select payment method
11. Complete order

### For Admin
1. Go to login page
2. Register with "Admin" role
3. Login
4. Access: http://localhost:3000/frontend/admin/dashboard.html
5. Add/Edit/Delete products
6. View and manage orders
7. Check statistics

## 🔐 User Credentials (Sample)

**Customer:**
- Email: customer@example.com
- Password: password123

**Admin:**
- Email: admin@example.com
- Password: admin123

## 📊 Database Schemas

See `database/schemas.md` for detailed schema information.

## 🐛 Troubleshooting

### MongoDB Connection Error
- Check if MongoDB is running
- Verify MONGODB_URI in .env
- For MongoDB Atlas, ensure IP is whitelisted

### Port Already in Use
- Change PORT in .env to different value (e.g., 5001)

### npm Install Issues
- Delete node_modules folder
- Run `npm install` again

### CORS Errors
- Check backend is running on port 5000
- Verify API_URL in frontend/app.js

## 🚀 Deployment

### Backend Deployment (Heroku)
1. Create Heroku account
2. Install Heroku CLI
3. Run: `heroku login`
4. From project root: `heroku create your-app-name`
5. Push: `git push heroku main`

### Frontend Deployment (GitHub Pages)
1. Push code to GitHub
2. Enable GitHub Pages in Settings
3. Choose main branch
4. Your site will be live at: `https://Alok9129.github.io/rajesh-silai-material-store`

## 📞 Contact

**Rajesh Silai Material Store**
- Email: info@rajeshsilai.com
- Phone: +91-XXXXXXXXXX

## 📄 License

ISC

---

**Created with ❤️ for Rajesh Silai Material Store**

For support or issues, please create an issue on GitHub or contact us.
