# The Urban Store

<p align="center">
  <strong>A Modern E-Commerce Footwear Store</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

---

## 📖 Overview

**The Urban Store** is a sleek, responsive e-commerce storefront specializing in premium footwear. Built with vanilla HTML, CSS, and JavaScript — no frameworks or build tools required. The store features a curated collection of casual, formal, boots, and premium footwear with an intuitive shopping experience.

---

## ✨ Features

### 🛍️ Shopping Experience
- **Product Catalog** — Browse 12 handpicked footwear products across 4 categories
- **Category Filtering** — Filter products by Casual, Formal, Boots, or Premium
- **Featured Carousel** — Smooth auto-scrolling showcase of featured products
- **Product Details** — Full product overlay with description, pricing, and reviews
- **Customer Reviews** — Real customer testimonials with star ratings

### 🛒 Cart & Checkout
- **Persistent Cart** — Shopping cart saved to localStorage across sessions
- **Quantity Controls** — Easily adjust item quantities or remove products
- **Real-time Summary** — Live subtotal, tax calculation, and order total
- **Checkout Modal** — Complete order summary with shipping form

### 🎨 Design & UX
- **Responsive Layout** — Optimized for desktop, tablet, and mobile devices
- **Modern UI** — Clean design with smooth animations and hover effects
- **Hero Banner** — Eye-catching hero section with call-to-action
- **Local Images** — Fast-loading product images stored locally

---

## 🗂️ Project Structure

```
The Urban Store/
├── index.html          # Main HTML file with all page sections
├── README.md           # Project documentation
├── assets/
│   └── banner.jpg      # Hero section background image
├── css/
│   └── style.css       # Complete styling and responsive design
├── images/             # Product images (JPG format)
│   ├── Suede-BLK.jpg
│   ├── Polperro Navy.jpg
│   ├── Lunenburg Brown.jpg
│   ├── Wickford-BRN.jpg
│   ├── Oscar-BRN.jpg
│   ├── Lucca-BLK.jpg
│   ├── Mandatory-BLK.jpg
│   ├── Winsor.jpg
│   ├── Galore-MRN.jpg
│   ├── Crossway-BRN.jpg
│   ├── Double Lace Up-Brown.jpg
│   └── Monk-BLK.jpg
└── js/
    ├── app.js          # Main application logic and event handlers
    ├── cart.js         # Cart state management and persistence
    ├── data.js         # Product catalog and review data
    └── ui.js           # UI rendering utilities and helpers
```

---

## 📦 Product Categories

| Category | Products | Price Range |
|----------|----------|-------------|
| **Casual** | Suede-BLK, Polperro Navy, Lunenburg Brown | Rs. 4,200 - Rs. 4,900 |
| **Formal** | Wickford-BRN, Oscar-BRN, Lucca-BLK | Rs. 4,500 - Rs. 5,200 |
| **Boots** | Mandatory-BLK, Winsor, Galore-MRN | Rs. 5,200 - Rs. 5,500 |
| **Premium** | Crossway-BRN, Double Lace Up-Brown, Monk-BLK | Rs. 5,500 - Rs. 5,900 |

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x (optional, for local server)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zubairahmed-sketch/The-Urban-Footwear.git
   cd "The-Urban-Footwear"
   ```

2. **Run locally** (choose one method)

   **Option A: Python HTTP Server (Recommended)**
   ```bash
   python -m http.server 8000
   ```
   Then open [http://localhost:8000](http://localhost:8000)

   **Option B: VS Code Live Server**
   - Install the "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

   **Option C: Direct File Access**
   - Simply open `index.html` in your browser

---

## ⚙️ Customization

### Adding/Editing Products
Edit `js/data.js` to modify the product catalog:
```javascript
{
  id: 13,
  name: "Your Product Name",
  price: 5000,
  category: "Casual",
  image: "images/your-image.jpg",
  description: "Product description here...",
  sizes: [6, 7, 8, 9, 10, 11],
  inStock: true
}
```

### Styling
- **Colors**: Modify CSS variables in `:root` section of `css/style.css`
- **Fonts**: Update Google Fonts import in `index.html`
- **Layout**: Adjust grid and flexbox properties in `css/style.css`

### Hero Banner
Replace `assets/banner.jpg` with your own image and adjust styling in the `.Home` section of `css/style.css`.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Styling, animations, responsive design |
| **JavaScript ES6** | Application logic and interactivity |
| **LocalStorage API** | Cart persistence |
| **Google Fonts** | Typography (Poppins) |
| **Font Awesome** | Icons |

---

## 📱 Responsive Breakpoints

| Device | Breakpoint |
|--------|------------|
| Mobile | < 768px |
| Tablet | 768px - 1024px |
| Desktop | > 1024px |

---

## 🔧 Browser Support

- ✅ Google Chrome (latest)
- ✅ Mozilla Firefox (latest)
- ✅ Microsoft Edge (latest)
- ✅ Safari (latest)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Zubair Ahmed**

- GitHub: [@zubairahmed-sketch](https://github.com/zubairahmed-sketch)

---

<p align="center">
  Made with ❤️ for Web Engineering
</p>
