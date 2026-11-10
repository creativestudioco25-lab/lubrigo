/* Persistencia y cálculos del carrito. No hay pagos ni comunicación con servicios externos. */
(function () {
  'use strict';

  const STORAGE_KEY = 'lubrigo-cart-v1';

  function read() {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(value) ? value.filter(function (item) {
        return item && window.LubriGoProductById(item.id) && Number(item.quantity) > 0;
      }) : [];
    } catch (error) {
      return [];
    }
  }

  function write(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('lubrigo:cart-changed', { detail: { items: items } }));
  }

  function add(id, quantity) {
    const amount = Math.max(1, Number(quantity) || 1);
    const items = read();
    const existing = items.find(function (item) { return item.id === id; });
    if (existing) existing.quantity += amount;
    else items.push({ id: id, quantity: amount });
    write(items);
  }

  function update(id, quantity) {
    const items = read();
    const item = items.find(function (entry) { return entry.id === id; });
    if (!item) return;
    item.quantity = Math.max(0, Number(quantity) || 0);
    write(items.filter(function (entry) { return entry.quantity > 0; }));
  }

  function remove(id) {
    write(read().filter(function (item) { return item.id !== id; }));
  }

  function clear() {
    write([]);
  }

  function items() {
    return read().map(function (item) {
      const product = window.LubriGoProductById(item.id);
      return Object.assign({}, product, { quantity: item.quantity, lineTotal: product.price * item.quantity });
    });
  }

  function count() {
    return read().reduce(function (sum, item) { return sum + item.quantity; }, 0);
  }

  function subtotal() {
    return items().reduce(function (sum, item) { return sum + item.lineTotal; }, 0);
  }

  function shipping() {
    return subtotal() > 0 ? 12000 : 0;
  }

  window.LubriGoCart = {
    add: add,
    update: update,
    remove: remove,
    clear: clear,
    items: items,
    count: count,
    subtotal: subtotal,
    shipping: shipping,
    total: function () { return subtotal() + shipping(); }
  };
}());

/* Vista del carrito: se mantiene en este archivo para concentrar estado y operaciones. */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('cartMain');
    if (!root) return;
    const cart = window.LubriGoCart;
    const ui = window.LubriGoUI;

    function cartItem(item) {
      return '<article class="cart-item"><div class="cart-item__visual">' + ui.productArt(item) + '</div><div class="cart-item__info"><h2>' + item.name + '</h2><p>' + item.description.split('. ')[0] + '.</p><strong class="cart-item__price">' + ui.formatCOP(item.price) + '</strong></div><div class="cart-item__controls"><button type="button" class="remove-item" data-cart-action="remove" data-id="' + item.id + '">' + ui.icon('trash') + 'Eliminar</button><div class="quantity-stepper"><button type="button" data-cart-action="decrease" data-id="' + item.id + '" aria-label="Disminuir cantidad">' + ui.icon('minus') + '</button><output>' + item.quantity + '</output><button type="button" data-cart-action="increase" data-id="' + item.id + '" aria-label="Aumentar cantidad">' + ui.icon('plus') + '</button></div></div><div class="cart-line-total"><span>Subtotal</span><b>' + ui.formatCOP(item.lineTotal) + '</b></div></article>';
    }

    function render() {
      const items = cart.items();
      const totalProducts = cart.count();
      if (!items.length) {
        root.innerHTML = '<section class="page-hero hero--short"><div class="shell"><div class="hero-content"><h1>' + ui.icon('cart') + ' Carrito de compras</h1><p>Revisa tus productos y continúa con la simulación.</p></div></div></section><div class="shell"><section class="section empty-cart">' + ui.icon('cart') + '<h2>Tu carrito está vacío</h2><p>Explora el catálogo y agrega los productos que quieres simular.</p><a class="btn btn--amber" href="catalogo.html">Ver catálogo ' + ui.icon('arrow') + '</a></section>' + ui.serviceBand() + '</div>';
        return;
      }
      root.innerHTML = '<section class="page-hero hero--short"><div class="shell"><div class="hero-content"><h1>' + ui.icon('cart') + ' Carrito de compras</h1><p>Revisa tus productos, ajusta cantidades y continúa con la simulación.</p></div></div></section><div class="shell"><section class="section"><h1 class="section-title">Productos en tu carrito (' + totalProducts + ')</h1><div class="cart-list">' + items.map(cartItem).join('') + '</div><aside class="order-summary"><h2 class="section-title">Resumen de la simulación</h2><div class="summary-line"><span>Subtotal (' + totalProducts + ' productos)</span><b>' + ui.formatCOP(cart.subtotal()) + '</b></div><div class="summary-line"><span>Envío simulado ' + ui.icon('info') + '</span><b>' + ui.formatCOP(cart.shipping()) + '</b></div><div class="summary-line summary-total"><span>Total estimado</span><b>' + ui.formatCOP(cart.total()) + '</b></div></aside><a class="btn btn--amber btn--wide cart-cta" href="checkout.html">' + ui.icon('cart') + 'Continuar simulación ' + ui.icon('arrow') + '</a><div class="academic-notice">' + ui.icon('info') + '<span><b>Simulación académica:</b> este es un proyecto universitario. No es una compra real y no se realizará ningún cobro.</span></div></section>' + ui.serviceBand() + '</div>';
    }

    root.addEventListener('click', function (event) {
      const button = event.target.closest('[data-cart-action]');
      if (!button) return;
      const id = button.dataset.id;
      const item = cart.items().find(function (entry) { return entry.id === id; });
      if (!item) return;
      if (button.dataset.cartAction === 'increase') cart.update(id, item.quantity + 1);
      if (button.dataset.cartAction === 'decrease') cart.update(id, item.quantity - 1);
      if (button.dataset.cartAction === 'remove') cart.remove(id);
      render();
    });
    window.addEventListener('lubrigo:cart-changed', render);
    render();
  });
}());
