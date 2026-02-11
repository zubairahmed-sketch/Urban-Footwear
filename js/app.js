import { products, featuredProducts, reviews as seedReviews } from "./data.js";
import { addToCart, updateQuantity, removeFromCart, loadCart, saveCart, clearCart } from "./cart.js";
import {
  qs,
  renderCategories,
  renderProducts,
  renderCarousel,
  renderCart,
  updateCartSummary,
  renderReviews,
  togglePanel,
  setHidden,
  fallbackImage,
} from "./ui.js";

let cart = loadCart();
let activeCategory = "";
let productReviews = [...seedReviews];

const els = {
  navbar: qs(".navbar"),
  menuBtn: qs("#menu-btn"),
  cartBtn: qs("#cart-btn"),
  userBtn: qs("#user-btn"),
  shoppingCart: qs(".shopping-cart"),
  cartContainer: qs(".shopping-cart .container"),
  cartTotal: qs(".shopping-cart .total"),
  cartBadge: qs(".cart-item-count"),
  checkoutBtn: qs(".btn-checkout"),
  loginForm: qs(".login-form"),
  signupForm: qs(".signup-form"),
  linkSignup: qs(".link-signup"),
  linkLogin: qs(".link-login"),
  categoryNav: qs(".category-options"),
  productGrid: qs(".product-grid"),
  carouselTrack: qs(".carousel-track"),
  carouselPrev: qs(".carousel-nav.prev"),
  carouselNext: qs(".carousel-nav.next"),
  reviewsList: qs(".reviews-list"),
  checkoutOverlay: qs(".checkout"),
  checkoutInputs: {
    name: qs('.checkout-content input[name="name"]'),
    email: qs('.checkout-content input[name="email"]'),
    address: qs('.checkout-content textarea[name="address"]'),
  },
  checkoutErrors: {
    name: qs('[data-error="name"]'),
    email: qs('[data-error="email"]'),
    address: qs('[data-error="address"]'),
  },
  checkoutConfirm: qs(".btn-confirm"),
  checkoutCancel: qs(".btn-cancel"),
  thankYou: qs(".thank-you"),
  thankClose: qs(".btn-close-thanks"),
  detailOverlay: qs(".detail-overlay"),
  detailCard: qs(".detail-card"),
  detailClose: qs(".detail-close"),
  detailImage: qs(".detail-image"),
  detailInfo: qs(".detail-info"),
  detailReviews: qs(".detail-review-list"),
  detailReviewForm: qs(".detail-review-form"),
  detailAddBtn: qs(".btn-detail-add"),
};

function closeAllPanels() {
  togglePanel(els.shoppingCart, false);
  togglePanel(els.loginForm, false);
  togglePanel(els.signupForm, false);
}

function wireHeader() {
  els.menuBtn.addEventListener("click", () => {
    const isActive = els.navbar.classList.contains("active");
    togglePanel(els.navbar, !isActive);
    togglePanel(els.shoppingCart, false);
    togglePanel(els.loginForm, false);
    togglePanel(els.signupForm, false);
  });

  els.cartBtn.addEventListener("click", () => {
    const isActive = els.shoppingCart.classList.contains("active");
    togglePanel(els.shoppingCart, !isActive);
    togglePanel(els.navbar, false);
    togglePanel(els.loginForm, false);
    togglePanel(els.signupForm, false);
  });

  els.userBtn.addEventListener("click", () => {
    const isActive = els.loginForm.classList.contains("active");
    togglePanel(els.loginForm, !isActive);
    togglePanel(els.signupForm, false);
    togglePanel(els.shoppingCart, false);
    togglePanel(els.navbar, false);
  });

  els.linkSignup.addEventListener("click", (e) => {
    e.preventDefault();
    togglePanel(els.loginForm, false);
    togglePanel(els.signupForm, true);
  });

  els.linkLogin.addEventListener("click", (e) => {
    e.preventDefault();
    togglePanel(els.signupForm, false);
    togglePanel(els.loginForm, true);
  });
}

function refreshCartUI() {
  renderCart(els.cartContainer, cart, (id, delta) => {
    cart = updateQuantity(cart, id, delta);
    persistCart();
  }, (id) => {
    cart = removeFromCart(cart, id);
    persistCart();
  });
  els.checkoutBtn.disabled = cart.length === 0;
  updateCartSummary(els.cartTotal, els.cartBadge, cart);
}

function persistCart() {
  saveCart(cart);
  refreshCartUI();
}

function initCategories() {
  const categories = [...new Set(products.map((p) => p.category))];
  activeCategory = categories[0] || "";
  renderCategories(els.categoryNav, categories, activeCategory, (cat) => {
    activeCategory = cat;
    renderProducts(els.productGrid, products.filter((p) => p.category === activeCategory), showDetail, (id) => addProduct(id));
  });
  renderProducts(els.productGrid, products.filter((p) => p.category === activeCategory), showDetail, (id) => addProduct(id));
}

function initCarousel() {
  let index = 0;
  const slides = chunkArray(featuredProducts, 2);
  const show = (i) => {
    index = (i + slides.length) % slides.length;
    renderCarousel(els.carouselTrack, slides[index], (id) => addProduct(id), (id) => showDetail(id));
  };
  els.carouselPrev.addEventListener("click", () => show(index - 1));
  els.carouselNext.addEventListener("click", () => show(index + 1));
  show(0);
}

function initReviews() {
  renderReviews(els.reviewsList, seedReviews);
}

function chunkArray(arr, size) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
  return res.length ? res : [arr];
}

function addProduct(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;
  cart = addToCart(cart, product);
  persistCart();
}

function showDetail(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;
  els.detailImage.innerHTML = `<img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImage}'" />`;
  els.detailInfo.querySelector("h1").textContent = product.name;
  els.detailInfo.querySelector(".detail-description").textContent = product.description;
  els.detailInfo.querySelector(".detail-price").textContent = `Rs. ${product.price.toLocaleString()}`;
  els.detailAddBtn.onclick = () => addProduct(id);
  renderDetailReviews(id);
  setHidden(els.detailOverlay, false);
}

function renderDetailReviews(productId) {
  const list = els.detailReviews;
  const filtered = productReviews.filter((r) => r.productId === productId);
  list.innerHTML = filtered.map((r) => `
    <div class="detail-review-card">
      <div class="review-header"><strong>${r.name}</strong> <span>${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</span></div>
      <p class="review-text">${r.review}</p>
    </div>
  `).join("");
  els.detailReviewForm.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(els.detailReviewForm);
    const name = formData.get("name").trim();
    const review = formData.get("review").trim();
    const rating = Number(formData.get("rating")) || 5;
    if (!name || !review) return;
    productReviews = [...productReviews, { id: Date.now(), name, review, rating, productId }];
    els.detailReviewForm.reset();
    renderDetailReviews(productId);
  };
}

function wireDetailOverlay() {
  els.detailClose.addEventListener("click", () => setHidden(els.detailOverlay, true));
  els.detailOverlay.addEventListener("click", (e) => {
    if (e.target === els.detailOverlay) setHidden(els.detailOverlay, true);
  });
}

function wireCheckout() {
  els.checkoutBtn.addEventListener("click", () => {
    if (!cart.length) return;
    setHidden(els.checkoutOverlay, false);
  });

  els.checkoutCancel.addEventListener("click", () => setHidden(els.checkoutOverlay, true));

  els.checkoutConfirm.addEventListener("click", () => {
    const fields = els.checkoutInputs;
    const errors = els.checkoutErrors;
    let valid = true;
    ["name", "email", "address"].forEach((key) => {
      if (!fields[key].value.trim()) {
        errors[key].hidden = false;
        valid = false;
      } else {
        errors[key].hidden = true;
      }
    });
    if (!valid) return;
    cart = clearCart();
    persistCart();
    setHidden(els.checkoutOverlay, true);
    setHidden(els.thankYou, false);
  });

  els.thankClose.addEventListener("click", () => setHidden(els.thankYou, true));
}

function wireOutsideClicks() {
  document.addEventListener("click", (e) => {
    const withinHeader = e.target.closest("header, .shopping-cart, .login-form, .signup-form");
    if (!withinHeader) closeAllPanels();
  });
}

function init() {
  wireHeader();
  wireCheckout();
  wireDetailOverlay();
  wireOutsideClicks();
  // Ensure overlays start closed
  setHidden(els.detailOverlay, true);
  setHidden(els.checkoutOverlay, true);
  setHidden(els.thankYou, true);
  initCategories();
  initCarousel();
  initReviews();
  refreshCartUI();
}

document.addEventListener("DOMContentLoaded", init);
