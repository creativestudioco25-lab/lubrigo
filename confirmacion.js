(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('confirmationMain');
    if (!root) return;
    const ui = window.LubriGoUI;
    let order;
    try { order = JSON.parse(localStorage.getItem('lubrigo-last-order-v1') || 'null'); } catch (error) { order = null; }

    if (!order) {
      root.innerHTML = '<section class="page-hero hero--short"><div class="shell"><div class="hero-content"><h1>Simulación<br><em>de compra</em></h1><p>Todo el proceso se realiza localmente en tu navegador.</p></div></div></section><div class="shell"><section class="section empty-cart">' + ui.icon('info') + '<h2>No hay una simulación reciente</h2><p>Agrega productos al carrito para crear un pedido de demostración.</p><a class="btn btn--amber" href="catalogo.html">Ver catálogo ' + ui.icon('arrow') + '</a></section></div>';
      return;
    }
    const itemCount = order.items.reduce(function (sum, item) { return sum + item.quantity; }, 0);
    root.innerHTML = '<section class="page-hero hero--short"><div class="shell"><div class="hero-content"><h1>Pedido<br><em>simulado</em></h1><p>Tu referencia de demostración fue creada correctamente.</p></div></div></section><div class="shell"><section class="confirmation"><div class="confirmation-check">' + ui.icon('check') + '</div><h1>¡Simulación confirmada!</h1><p>Gracias, ' + order.customer.customerName + '. Hemos creado un pedido de demostración para tu presentación académica. No se realizó ningún cobro.</p><div class="reference-box"><span>Número de referencia</span><strong>' + order.reference + '</strong></div><div class="confirmation-summary"><h2>Resumen de tu simulación</h2><div class="summary-line"><span>' + itemCount + ' producto' + (itemCount === 1 ? '' : 's') + '</span><b>' + ui.formatCOP(order.subtotal) + '</b></div><div class="summary-line"><span>' + order.customer.delivery + '</span><b>' + ui.formatCOP(order.shipping) + '</b></div><div class="summary-line"><span>Método: ' + order.customer.payment + '</span><b>Simulado</b></div><div class="summary-line summary-total"><span>Total estimado</span><b>' + ui.formatCOP(order.total) + '</b></div></div><p class="academic-notice">' + ui.icon('info') + '<span>Puedes conservar esta referencia como evidencia de la simulación realizada el ' + order.date + '.</span></p><div class="confirmation-actions"><a class="btn btn--outline" href="catalogo.html">' + ui.icon('search') + 'Seguir explorando</a><a class="btn btn--amber" href="index.html">Volver al inicio ' + ui.icon('arrow') + '</a></div></section></div>';
  });
}());
