# The Urban Footwear — Project Documentation

---

## Project Overview

**The Urban Footwear** is a fully functional e-commerce web application designed for a premium footwear retail store. Built as a single-page application using vanilla web technologies (HTML5, CSS3, and JavaScript ES6), this project demonstrates modern front-end development practices without relying on external frameworks or build tools. The application delivers a complete online shopping experience — from product browsing and filtering to cart management and checkout.

**Live Repository:** https://github.com/zubairahmed-sketch/The-Urban-Footwear.git

---

## Technical Architecture

| Layer | Technology | Purpose |
|-------|------------|---------|
| Structure | HTML5 | Semantic markup, accessibility, SEO-friendly |
| Presentation | CSS3 | Responsive design, animations, modern UI |
| Logic | JavaScript ES6 | Interactivity, state management, DOM manipulation |
| Storage | LocalStorage API | Client-side cart persistence |
| Icons | Font Awesome | UI iconography |
| Typography | Google Fonts (Poppins) | Modern, clean typography |

---

## Key Features

### 1. Product Catalog System
- 12 curated footwear products across 4 categories
- Dynamic product rendering from JavaScript data store
- High-quality local product images for fast loading
- Detailed product information (name, price, description, sizes, stock status)

### 2. Category-Based Filtering
- Four distinct categories: **Casual**, **Formal**, **Boots**, **Premium**
- Real-time filtering without page reload
- "All Products" view option
- Active category visual indicator

### 3. Featured Products Carousel
- Auto-scrolling product showcase (3-second intervals)
- Manual navigation with previous/next controls
- Smooth CSS transitions
- Pause on hover functionality

### 4. Product Detail Overlay
- Full-screen modal with product details
- Size selection options
- Customer reviews with star ratings
- Add to cart functionality
- Click-outside-to-close behavior

### 5. Shopping Cart System
- Persistent cart using browser localStorage
- Add/remove products
- Quantity adjustment controls
- Real-time price calculations
- Cart item counter in navigation

### 6. Checkout Process
- Order summary display
- Itemized product list with quantities
- Subtotal calculation
- Tax computation (5%)
- Final total display
- Shipping information form

### 7. Responsive Design
- Mobile-first approach
- Breakpoints: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)
- Flexible grid layouts
- Touch-friendly interface elements

---

## Product Categories & Pricing

| Category | Products | Price Range (PKR) |
|----------|----------|-------------------|
| **Casual** | Suede-BLK, Polperro Navy, Lunenburg Brown | Rs. 4,200 - Rs. 4,900 |
| **Formal** | Wickford-BRN, Oscar-BRN, Lucca-BLK | Rs. 4,500 - Rs. 5,200 |
| **Boots** | Mandatory-BLK, Winsor, Galore-MRN | Rs. 5,200 - Rs. 5,500 |
| **Premium** | Crossway-BRN, Double Lace Up-Brown, Monk-BLK | Rs. 5,500 - Rs. 5,900 |

---

## Project File Structure

```
The-Urban-Footwear/
├── index.html              # Main application entry point
├── README.md               # Project documentation
├── assets/
│   └── banner.jpg          # Hero section background
├── css/
│   └── style.css           # Complete application styling (700+ lines)
├── images/                 # Product images (12 JPG files)
└── js/
    ├── app.js              # Application initialization & event handlers
    ├── cart.js             # Cart state management & localStorage
    ├── data.js             # Product catalog & review data
    └── ui.js               # UI rendering utilities
```

---

## Team Contributions

### Member 1 — Frontend Structure & Layout
- Complete HTML structure and semantic markup
- Navigation bar with responsive hamburger menu
- Hero section with call-to-action button
- Product grid layout with category filter buttons
- Cart modal and checkout form structure
- Product detail overlay markup
- Responsive meta tags and viewport configuration

### Member 2 — Styling & Visual Design
- CSS architecture with custom properties (variables)
- Color scheme and visual hierarchy
- Typography system using Google Fonts
- Product card design with hover effects
- Carousel styling and transitions
- Modal and overlay animations
- Mobile and tablet responsive breakpoints
- Button states and interactive feedback

### Member 3 — JavaScript & Application Logic
- Product data structure and management (data.js)
- Shopping cart logic with localStorage persistence (cart.js)
- Dynamic UI rendering functions (ui.js)
- Main application controller and event binding (app.js)
- Category filtering functionality
- Carousel auto-scroll and navigation controls
- Add-to-cart and quantity management
- Price calculation (subtotal, tax, total)

---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/zubairahmed-sketch/The-Urban-Footwear.git
   ```

2. Navigate to project folder:
   ```bash
   cd The-Urban-Footwear
   ```

3. Start a local server:
   ```bash
   python -m http.server 8000
   ```

4. Open browser and visit: `http://localhost:8000`

---

## Browser Compatibility

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Microsoft Edge (latest)
- Safari (latest)

---

## Future Enhancements (Scope for Extension)

- User authentication and accounts
- Backend integration with database
- Payment gateway integration
- Order history and tracking
- Product search functionality
- Wishlist feature
- Product reviews submission
- Admin panel for inventory management

---

**Developed for Web Engineering Course Project — February 2026**
