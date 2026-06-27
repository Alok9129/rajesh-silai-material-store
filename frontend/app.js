// Configuration
const API_URL = 'http://localhost:5000/api';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let allProducts = [];

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    document.getElementById('searchInput')?.addEventListener('input', filterProducts);
    document.getElementById('categoryFilter')?.addEventListener('change', filterProducts);
    document.getElementById('contactForm')?.addEventListener('submit', handleContactSubmit);
}

// Load products from API
async function loadProducts() {
    try {
        const response = await fetch(`${API_URL}/products`);
        const data = await response.json();
        allProducts = data.data || data;
        displayProducts(allProducts);
    } catch (error) {
        console.error('Error loading products:', error);
        // Load sample data if API fails
        allProducts = getSampleProducts();
        displayProducts(allProducts);
    }
}

// Display products
function displayProducts(products) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    if (products.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No products found</p>';
        return;
    }

    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.images?.[0]?.url || 'https://via.placeholder.com/250x200?text=No+Image'}" 
                 alt="${product.name}" class="product-image">
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <span class="price">₹${product.discountPrice || product.price}</span>
                    ${product.discountPrice ? `<span class="original-price">₹${product.price}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="product-actions btn-add-cart" onclick="addToCart('${product._id}', '${product.name}', ${product.price})">Add to Cart</button>
                    <button class="product-actions btn-view">View</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter products
function filterProducts() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    const filtered = allProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(search) || 
                            product.description.toLowerCase().includes(search);
        const matchesCategory = !category || product.category === category;
        return matchesSearch && matchesCategory;
    });

    displayProducts(filtered);
}

// Add to cart
function addToCart(productId, name, price) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: productId, name, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`✅ ${name} added to cart!`);
}

// Handle contact form submission
async function handleContactSubmit(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    e.target.reset();
}

// Scroll to products
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Sample products data
function getSampleProducts() {
    return [
        {
            _id: '1',
            name: 'Traditional Saree',
            category: 'Saree',
            price: 2500,
            discountPrice: 1999,
            description: 'Beautiful traditional silk saree with golden borders',
            images: [{ url: 'https://via.placeholder.com/250x200?text=Saree' }]
        },
        {
            _id: '2',
            name: 'Cotton Kurti',
            category: 'Kurti',
            price: 899,
            discountPrice: 599,
            description: 'Comfortable everyday cotton kurti',
            images: [{ url: 'https://via.placeholder.com/250x200?text=Kurti' }]
        },
        {
            _id: '3',
            name: 'Salwar Kameez Set',
            category: 'Salwar Kameez',
            price: 1599,
            discountPrice: 1199,
            description: 'Elegant salwar kameez with dupatta',
            images: [{ url: 'https://via.placeholder.com/250x200?text=Salwar' }]
        },
        {
            _id: '4',
            name: 'Silk Lehenga',
            category: 'Lehenga',
            price: 4999,
            discountPrice: 3499,
            description: 'Premium silk lehenga for special occasions',
            images: [{ url: 'https://via.placeholder.com/250x200?text=Lehenga' }]
        }
    ];
}
