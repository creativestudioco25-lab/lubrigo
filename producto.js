(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('productMain');
    if (!root) return;
    const ui = window.LubriGoUI;
    const product = window.LubriGoProductById(ui.getParam('id')) || window.LubriGoProducts[0];
    let quantity = 1;
    const related = window.LubriGoProducts.filter(function (item) { return item.id !== product.id && (item.category === product.category || item.vehicle === product.vehicle); }).slice(0, 3);

    root.innerHTML = '<div class="breadcrumbs"><div class="shell"><a href="catalogo.html">← Volver al catálogo</a><span>/</span><span>Aceites</span><span>›</span><span>' + product.category + '</span><span>›</span><b>' + product.name + '</b></div></div>'
      + '<div class="shell"><section class="product-detail"><div class="product-gallery"><div class="product-gallery__main" id="galleryMain">' + ui.productArt(product, 'product-art--large') + '</div><div class="gallery-thumbs" id="galleryThumbs"><button class="gallery-thumb is-active" type="button" data-gallery="product" aria-label="Ver producto">' + ui.productArt(product) + '</button><button class="gallery-thumb" type="button" data-gallery="back" aria-label="Ver reverso del producto">' + ui.productArt(product) + '</button><button class="gallery-thumb gallery-oil" type="button" data-gallery="oil" aria-label="Ver aceite vertiéndose"></button><button class="gallery-thumb gallery-oil" type="button" data-gallery="drop" aria-label="Ver detalle de aceite"></button></div></div>'
      + '<div class="detail-info"><h1>' + product.name + '</h1><p class="detail-summary">' + product.description.split('. ')[0] + '.</p><p class="detail-price">' + ui.formatCOP(product.price) + '</p><div class="detail-chips"><span class="detail-chip">' + ui.icon('oil') + 'Viscosidad: ' + product.viscosity + '</span><span class="detail-chip">' + product.type + '</span></div><div class="compatibility">' + ui.icon(product.vehicle === 'Moto' ? 'moto' : product.vehicle === 'Camioneta' ? 'truck' : 'auto') + '<div><strong>Uso recomendado / Compatibilidad</strong><p>' + product.compatibility + '</p></div></div><div class="detail-actions"><div class="quantity-block"><label>Cantidad</label><div class="quantity-stepper"><button type="button" id="detailMinus" aria-label="Disminuir cantidad">' + ui.icon('minus') + '</button><output id="detailQuantity">1</output><button type="button" id="detailPlus" aria-label="Aumentar cantidad">' + ui.icon('plus') + '</button></div></div><button class="btn btn--amber" type="button" id="detailAdd">' + ui.icon('cart') + 'Agregar al carrito</button><button class="icon-button heart-button ' + (ui.isFavorite(product.id) ? 'is-favorite' : '') + '" type="button" data-favorite="' + product.id + '" aria-label="Guardar en favoritos">' + ui.icon('heart') + '</button></div></div></section>'
      + '<section class="detail-tabs" id="detailTabs"><button class="detail-tab is-active" type="button" data-tab="description">' + ui.icon('document') + 'Descripción</button><button class="detail-tab" type="button" data-tab="benefits">' + ui.icon('leaf') + 'Beneficios</button><button class="detail-tab" type="button" data-tab="specs">' + ui.icon('sliders') + 'Especificaciones</button><button class="detail-tab" type="button" data-tab="change">' + ui.icon('calendar') + 'Recomendaciones<br>de cambio</button></section><div class="detail-panel" id="detailPanel"></div>'
      + ui.promoBanner('Cuida tu motor y optimiza su rendimiento', 'optimiza')
      + '<section class="section"><div class="section-heading"><h2 class="section-title">Productos relacionados</h2><a class="link-arrow" href="catalogo.html">Ver todos ' + ui.icon('arrow') + '</a></div><div class="related-grid">' + related.map(function (item) { return ui.productCard(item, { compact: true }); }).join('') + '</div></section>'
      + ui.serviceBand() + '</div>';

    const panels = {
      description: '<h2>Descripción</h2><p>' + product.description + '</p>',
      benefits: '<h2>Beneficios</h2><p>' + product.benefits.join(' · ') + '. Lubricación pensada para brindar una experiencia de conducción más confiable.</p>',
      specs: '<h2>Especificaciones</h2><p>Viscosidad ' + product.viscosity + ' · Tipo ' + product.type + ' · Presentación 1 litro · Aplicación: ' + product.vehicle + '.</p>',
      change: '<h2>Recomendaciones de cambio</h2><p>Consulta el manual de tu vehículo y realiza el cambio de aceite con la periodicidad indicada por el fabricante. Esta información es una guía académica.</p>'
    };

    function showPanel(name) { document.getElementById('detailPanel').innerHTML = panels[name]; }
    function updateQuantity() { document.getElementById('detailQuantity').textContent = quantity; }
    showPanel('description');
    document.getElementById('detailMinus').addEventListener('click', function () { quantity = Math.max(1, quantity - 1); updateQuantity(); });
    document.getElementById('detailPlus').addEventListener('click', function () { quantity += 1; updateQuantity(); });
    document.getElementById('detailAdd').addEventListener('click', function () { window.LubriGoCart.add(product.id, quantity); ui.toast(product.shortName + ' se agregó al carrito.'); });
    document.getElementById('detailTabs').addEventListener('click', function (event) {
      const button = event.target.closest('[data-tab]'); if (!button) return;
      document.querySelectorAll('[data-tab]').forEach(function (tab) { tab.classList.toggle('is-active', tab === button); }); showPanel(button.dataset.tab);
    });
    document.getElementById('galleryThumbs').addEventListener('click', function (event) {
      const button = event.target.closest('[data-gallery]'); if (!button) return;
      document.querySelectorAll('[data-gallery]').forEach(function (thumb) { thumb.classList.toggle('is-active', thumb === button); });
      const main = document.getElementById('galleryMain');
      if (button.dataset.gallery === 'product') main.innerHTML = ui.productArt(product, 'product-art--large');
      else if (button.dataset.gallery === 'back') main.innerHTML = ui.productArt(product, 'product-art--large') + '<span class="sr-only">Vista posterior del envase</span>';
      else main.innerHTML = '<div class="gallery-oil" style="width:100%;height:100%;border-radius:10px;background-size:cover;background-position:' + (button.dataset.gallery === 'drop' ? '92%' : '78%') + ' center"></div>';
    });
  });
}());
