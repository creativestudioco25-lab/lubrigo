(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('checkoutMain');
    if (!root) return;
    const ui = window.LubriGoUI;
    const cart = window.LubriGoCart;
    let shippingCost = cart.shipping();

    if (!cart.items().length) {
      root.innerHTML = '<section class="page-hero hero--short"><div class="shell"><div class="hero-content"><h1>Checkout<br><em>Simulación de compra</em></h1><p>Completa los datos y confirma tu simulación de pedido.</p></div></div></section><div class="shell"><section class="section empty-cart">' + ui.icon('cart') + '<h2>Necesitas productos para simular</h2><p>Tu carrito no tiene artículos por el momento.</p><a class="btn btn--amber" href="catalogo.html">Ir al catálogo ' + ui.icon('arrow') + '</a></section></div>';
      return;
    }

    root.innerHTML = '<section class="page-hero hero--short"><div class="shell"><div class="hero-content"><h1>' + ui.icon('cart') + ' Checkout<br><em>Simulación de compra</em></h1><p>Completa los datos, elige las opciones y confirma tu simulación de pedido.</p></div></div></section><div class="shell"><form id="checkoutForm" novalidate><div class="checkout-layout"><div><section class="form-section"><h2>Datos del cliente</h2><div class="form-card"><div class="form-grid"><div class="field full"><label for="customerName">Nombre completo <em>*</em></label><div class="input-wrap input-wrap--plain">' + ui.icon('home') + '<input id="customerName" name="customerName" required placeholder="Ej. Juan Pérez"></div></div><div class="field"><label for="customerEmail">Correo electrónico <em>*</em></label><div class="input-wrap input-wrap--plain">' + ui.icon('mail') + '<input id="customerEmail" name="customerEmail" type="email" required placeholder="Ej. juanperez@correo.com"></div></div><div class="field"><label for="customerPhone">Teléfono <em>*</em></label><div class="input-wrap input-wrap--plain">' + ui.icon('phone') + '<input id="customerPhone" name="customerPhone" type="tel" required placeholder="Ej. 300 123 4567"></div></div></div></div></section><section class="form-section"><h2>Ciudad o dirección referencial</h2><div class="form-card"><div class="choice-grid choice-grid--2"><label class="choice"><input type="radio" name="addressType" value="Ciudad" checked><span class="radio"></span>' + ui.icon('location') + '<strong>Ciudad</strong></label><label class="choice"><input type="radio" name="addressType" value="Dirección"><span class="radio"></span>' + ui.icon('home') + '<strong>Dirección referencial</strong></label></div><div class="field" style="margin-top:10px"><label for="customerCity">Selecciona la ciudad <em>*</em></label><div class="input-wrap">' + ui.icon('location') + '<select id="customerCity" name="customerCity" required><option value="">Selecciona una opción</option><option>Bogotá, D.C.</option><option>Medellín</option><option>Cali</option><option>Barranquilla</option><option>Otra ciudad</option></select></div></div></div></section><section class="form-section"><h2>Tipo de vehículo</h2><div class="form-card"><div class="choice-grid choice-grid--3"><label class="choice"><input type="radio" name="vehicle" value="Automóvil" checked><span class="radio"></span>' + ui.icon('auto') + '<strong>Automóvil</strong></label><label class="choice"><input type="radio" name="vehicle" value="Motocicleta"><span class="radio"></span>' + ui.icon('moto') + '<strong>Motocicleta</strong></label><label class="choice"><input type="radio" name="vehicle" value="Camioneta/SUV"><span class="radio"></span>' + ui.icon('truck') + '<strong>Camioneta / SUV</strong></label></div></div></section><section class="form-section"><h2>Método de entrega (simulado)</h2><div class="form-card"><div class="choice-grid choice-grid--2"><label class="choice"><input type="radio" name="delivery" value="Entrega a domicilio" checked><span class="radio"></span>' + ui.icon('truck') + '<div><strong>Entrega a domicilio<br>(simulada)</strong><small>Recibe tu pedido en la ciudad seleccionada.</small></div></label><label class="choice"><input type="radio" name="delivery" value="Recoger en punto LubriGo"><span class="radio"></span>' + ui.icon('store') + '<div><strong>Recoger en punto<br>LubriGo (simulado)</strong><small>Retira tu pedido en un punto de servicio.</small></div></label></div></div></section><section class="form-section"><h2>Método de pago (simulado)</h2><div class="form-card"><div class="choice-grid choice-grid--3"><label class="choice"><input type="radio" name="payment" value="Tarjeta de crédito" checked><span class="radio"></span>' + ui.icon('card') + '<strong>Tarjeta de crédito<br>(simulada)</strong></label><label class="choice"><input type="radio" name="payment" value="PSE"><span class="radio"></span>' + ui.icon('bank') + '<strong>PSE<br>(simulado)</strong></label><label class="choice"><input type="radio" name="payment" value="Efectivo"><span class="radio"></span>' + ui.icon('card') + '<strong>Efectivo<br>(simulado)</strong></label></div></div></section></div><aside class="checkout-summary" id="checkoutSummary"></aside></div></form></div>';

    function productRow(item) {
      return '<article class="checkout-product"><div class="checkout-product__visual">' + ui.productArt(item) + '</div><div><h3>' + item.name + '</h3><p>' + item.description.split('. ')[0] + '.</p><div class="quantity-stepper"><button type="button" data-checkout-action="decrease" data-id="' + item.id + '" aria-label="Disminuir cantidad">' + ui.icon('minus') + '</button><output>' + item.quantity + '</output><button type="button" data-checkout-action="increase" data-id="' + item.id + '" aria-label="Aumentar cantidad">' + ui.icon('plus') + '</button></div></div></article>';
    }

    function renderSummary() {
      const items = cart.items();
      if (!items.length) { location.href = 'carrito.html'; return; }
      const subtotal = cart.subtotal();
      document.getElementById('checkoutSummary').innerHTML = '<h2 class="section-title">Resumen del pedido</h2><div id="checkoutProducts">' + items.map(productRow).join('') + '</div><div class="summary-line"><span>Subtotal</span><b>' + ui.formatCOP(subtotal) + '</b></div><div class="summary-line"><span>Envío (simulado)</span><b>' + ui.formatCOP(shippingCost) + '</b></div><div class="summary-line summary-total"><span>Total (simulado)</span><b>' + ui.formatCOP(subtotal + shippingCost) + '</b></div><div class="academic-notice">' + ui.icon('info') + '<span><b>Importante:</b> Esta es una simulación académica. No se procesará ningún pago real ni se generará un cobro.</span></div><div class="form-error" id="checkoutError"></div><button class="btn btn--amber btn--wide" type="submit">' + ui.icon('cart') + 'Confirmar simulación</button>';
    }

    root.addEventListener('click', function (event) {
      const button = event.target.closest('[data-checkout-action]');
      if (!button) return;
      const item = cart.items().find(function (entry) { return entry.id === button.dataset.id; });
      if (!item) return;
      cart.update(item.id, button.dataset.checkoutAction === 'increase' ? item.quantity + 1 : item.quantity - 1);
      renderSummary();
    });
    root.addEventListener('change', function (event) {
      if (event.target.name === 'delivery') { shippingCost = event.target.value === 'Recoger en punto LubriGo' ? 0 : 12000; renderSummary(); }
    });
    document.getElementById('checkoutForm').addEventListener('submit', function (event) {
      event.preventDefault();
      const form = event.currentTarget;
      const error = document.getElementById('checkoutError');
      if (!form.checkValidity()) {
        error.textContent = 'Completa los campos obligatorios para confirmar la simulación.'; error.classList.add('is-visible'); form.reportValidity(); return;
      }
      const values = Object.fromEntries(new FormData(form).entries());
      const reference = 'LG-' + new Date().getFullYear() + '-' + String(Math.floor(100000 + Math.random() * 900000));
      const order = { reference: reference, date: new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'long', year: 'numeric' }), customer: values, items: cart.items(), subtotal: cart.subtotal(), shipping: shippingCost, total: cart.subtotal() + shippingCost };
      localStorage.setItem('lubrigo-last-order-v1', JSON.stringify(order));
      cart.clear();
      location.href = 'confirmacion.html';
    });
    renderSummary();
  });
}());
