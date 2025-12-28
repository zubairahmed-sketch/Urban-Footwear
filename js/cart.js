const STORAGE_KEY = "urban-footwear-cart";

export function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.warn("Failed to read cart", e);
    return [];
  }
}

export function saveCart(cart) {
  try {
    if (!cart || cart.length === 0) {
      localStorage.removeItem(STORAGE_KEY);
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {
    console.warn("Failed to save cart", e);
  }
}

export function addToCart(cart, product) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cart, { ...product, quantity: 1 }];
}

export function updateQuantity(cart, productId, delta) {
  return cart
    .map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(item.quantity + delta, 0) }
        : item
    )
    .filter((item) => item.quantity > 0);
}

export function removeFromCart(cart, productId) {
  return cart.filter((item) => item.id !== productId);
}

export function clearCart() {
  return [];
}

export function cartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function cartCount(cart) {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}
