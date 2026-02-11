import { cartCount, cartTotal } from "./cart.js";

export const fallbackImage = "images/fallback-image.svg";

export function qs(sel, root = document) { return root.querySelector(sel); }
export function qsa(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

export function renderCategories(container, data, activeCategory, onSelect) {
  container.innerHTML = data.map((cat) => `
    <button class="${cat === activeCategory ? "active" : ""}" data-category="${cat}">${cat}</button>
  `).join("");
  container.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => onSelect(btn.dataset.category));
  });
}

export function renderProducts(container, products, onCardClick, onAdd) {
  if (!products.length) {
    container.innerHTML = '<p class="empty-state">No products found for this category.</p>';
    return;
  }
  container.innerHTML = products.map((p) => `
    <article class="product-card" data-id="${p.id}">
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImage}'" />
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <p class="price">Rs. ${p.price.toLocaleString()}</p>
      <button class="add-to-cart-btn" data-id="${p.id}">Add to Cart</button>
    </article>
  `).join("");

  container.querySelectorAll(".product-card").forEach((card) => {
    const id = Number(card.dataset.id);
    card.addEventListener("click", () => onCardClick(id));
    const btn = card.querySelector(".add-to-cart-btn");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      onAdd(id);
    });
  });
}

export function renderCarousel(track, data, onAdd, onShowDetail) {
  const slide = document.createElement("div");
  slide.className = "carousel-slide";
  slide.innerHTML = data.map((p) => `
    <div class="product-content" data-id="${p.id}">
      <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImage}'" /></div>
      <div class="product-details">
        <h3>${p.name}</h3>
        <p class="product-category">${p.category}</p>
        <p class="product-description">${p.description}</p>
        <p class="product-price">Rs. ${p.price.toLocaleString()}</p>
        <button class="add-to-cart-btn" data-id="${p.id}">Add to Cart</button>
      </div>
    </div>
  `).join("");
  track.innerHTML = "";
  track.appendChild(slide);

  slide.querySelectorAll(".product-content").forEach((el) => {
    const id = Number(el.dataset.id);
    el.addEventListener("click", () => onShowDetail(id));
    el.querySelector(".add-to-cart-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      onAdd(id);
    });
  });
}

export function renderCart(container, cart, onUpdate, onRemove) {
  container.innerHTML = cart.map((item) => `
    <div class="box" data-id="${item.id}">
      <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='${fallbackImage}'" />
      <div class="content">
        <h3>${item.name}</h3>
        <span class="price">Rs. ${item.price.toLocaleString()}</span>
        <div class="quantity-control">
          <button class="decrease">-</button>
          <span class="quantity">${item.quantity}</span>
          <button class="increase">+</button>
        </div>
      </div>
      <i class="fas fa-trash"></i>
    </div>
  `).join("");

  container.querySelectorAll(".box").forEach((box) => {
    const id = Number(box.dataset.id);
    box.querySelector(".decrease").addEventListener("click", () => onUpdate(id, -1));
    box.querySelector(".increase").addEventListener("click", () => onUpdate(id, 1));
    box.querySelector(".fa-trash").addEventListener("click", () => onRemove(id));
  });
}

export function updateCartSummary(totalEl, countEl, cart) {
  totalEl.textContent = `Total: Rs. ${cartTotal(cart).toLocaleString()}`;
  const count = cartCount(cart);
  if (count > 0) {
    countEl.textContent = count;
    countEl.hidden = false;
  } else {
    countEl.hidden = true;
  }
}

export function renderReviews(container, data) {
  container.innerHTML = data.map((r) => `
    <article class="review-card">
      <div class="review-header">
        <div class="reviewer-name">${r.name}</div>
        <div class="review-rating">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
      </div>
      <p class="review-text">${r.review}</p>
    </article>
  `).join("");
}

export function togglePanel(el, active) {
  if (active) el.classList.add("active");
  else el.classList.remove("active");
}

export function setHidden(el, hidden) {
  el.hidden = hidden;
}
