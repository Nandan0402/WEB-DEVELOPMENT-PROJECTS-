# Amazon Clone - Web Application

A responsive Amazon-inspired e-commerce website built with HTML, CSS, and JavaScript. Features include a product catalog, shopping cart, sign-in/sign-up pages, and interactive navigation.

## Features

### Pages
- **index.html** - Homepage with product carousel, promotional boxes, and product listings
- **product.html** - Product detail page with images, pricing, and purchase options
- **cart.html** - Shopping cart with item management
- **signin.html** - User sign-in page
- **signup.html** - User account registration page

### Interactive Features
- **Sidebar Navigation** - Mobile-friendly menu that slides in/out with overlay
- **Header Image Slider** - Auto-rotating carousel with manual controls (pauses on hover)
- **Product Carousel** - Scrollable product listings with navigation buttons
- **Language Switcher** - Supports English, Hindi, Tamil, Telugu, and Kannada
- **Dropdown Menus** - Account and language dropdowns with hover/focus interactions
- **Search Functionality** - Search input routes to product page with query parameter
- **Responsive Design** - Optimized for desktop (900px+), tablet (600-900px), and mobile (<600px)

## Setup & Run

### Prerequisites
- Python 3.x (or any HTTP server)
- Web browser (Chrome, Firefox, Safari, Edge)

### Start Local Server

**Option 1: Python (Recommended)**
```bash
cd c:\Users\Admin\OneDrive\Desktop\amazon_clone_img
python -m http.server 5500 --bind 127.0.0.1
```

**Option 2: Live Server Extension (VS Code)**
- Install the "Live Server" extension
- Right-click on `index.html` → "Open with Live Server"

### Access the Site
Open your browser and navigate to:
- **http://127.0.0.1:5500** (or your Live Server port)

## File Structure

```
amazon_clone_img/
├── index.html              # Homepage
├── product.html            # Product details page
├── cart.html              # Shopping cart
├── signin.html            # Sign-in page
├── signup.html            # Sign-up/registration page
├── style.css              # Main stylesheet (nav, layout, responsive)
├── product.css            # Product page styles
├── cart.css               # Cart page styles
├── signin.css             # Sign-in/sign-up page styles
├── script.js              # Interactive behaviors
├── assets/                # Images and icons folder
└── README.md              # This file
```

## Key Functionality

### JavaScript (`script.js`)
- **Sidebar toggle** with smooth slide-in animation and overlay
- **Header slider** auto-advance (5s interval, pauses on hover)
- **Product carousel scroll** with left/right navigation
- **Dropdown menus** show/hide on hover and focus
- **Search handler** captures Enter key and routes to product page
- **Language switcher** updates page text dynamically

### CSS Responsive Breakpoints
- **Desktop (≥900px)** - Full navigation, all elements visible
- **Tablet (600-900px)** - Search bar hidden, boxes 2-column grid
- **Mobile (<600px)** - Menu collapsed, nav items hidden, boxes full-width

## Customization

### Change Colors
Update color variables in `style.css`:
- Primary: `#131921` (dark header)
- Accent: `#ffc200` (yellow buttons)
- Secondary: `#232f3e` (dark blue)

### Add Products
Edit the product cards in `index.html` or `product.html` and update:
```html
<a href="product.html" class="product-card">
    <img src="./assets/your-product.jpg" alt="">
    <h4>Product Name</h4>
    <p class="product-price">₹Price</p>
    <p class="product-price-old">M.R.P.: ₹Old Price</p>
</a>
```

### Add Assets
Place images in the `assets/` folder and reference them:
```html
<img src="./assets/your-image.jpg" alt="">
```

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Notes
- All links are internal (pages route within the site)
- Images should be placed in the `assets/` folder
- Sign-in/Sign-up forms are UI-only (no backend validation)
- Mobile sidebar uses CSS transforms for smooth animation
- Language switcher updates UI text dynamically via JavaScript

## Future Enhancements
- Backend API integration for products and user accounts
- Shopping cart persistence (localStorage/IndexedDB)
- Form validation and submission handling
- Product filtering and search
- User profile and order history
- Payment gateway integration

---

**Version:** 1.0  
**Last Updated:** December 17, 2025  
**License:** Free to use and modify
