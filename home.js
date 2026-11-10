(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('homeMain');
    if (!root) return;
    const ui = window.LubriGoUI;
    const products = window.LubriGoProducts;
    root.innerHTML = '<section class="page-hero"><div class="shell"><div class="hero-content"><h1>Aceites de alto<br>rendimiento para<br>tu <em>auto o moto</em></h1><p>Protección, potencia y mayor vida útil para el motor de tu vehículo.</p><a class="btn btn--amber" href="catalogo.html">' + ui.icon('cart') + 'Ver catálogo ' + ui.icon('arrow') + '</a><div class="hero-dots" aria-label="Carrusel"><i></i><i></i><i></i></div></div></div></section>'
      + '<div class="shell"><section class="section" aria-label="Categorías"><div class="categories">'
      + ui.categoryCard('Aceite Sintético', 'oil', 'catalogo.html?categoria=Sintético')
      + ui.categoryCard('Semi Sintético', 'oil', 'catalogo.html?categoria=Semi%20Sintético')
      + ui.categoryCard('Mineral', 'oil', 'catalogo.html?categoria=Mineral')
      + ui.categoryCard('Filtros', 'filter', 'catalogo.html?categoria=Filtros')
      + '</div></section>'
      + '<section class="section"><div class="section-heading"><h2 class="section-title">Productos destacados</h2><a class="link-arrow" href="catalogo.html">Ver todos ' + ui.icon('arrow') + '</a></div><div class="featured-grid" id="homeFeatured"></div></section>'
      + '<section class="stats" aria-label="Estadísticas de LubriGo"><div class="stat"><b>+25</b><span>Productos</span></div><div class="stat"><b>+8</b><span>Marcas</span></div><div class="stat"><b>+120</b><span>Simulaciones</span></div></section>'
      + ui.serviceBand()
      + ui.promoBanner('Cuida tu motor y optimiza su rendimiento', 'optimiza')
      + '</div>';

    document.getElementById('homeFeatured').innerHTML = [products[0], products[1]].map(function (product) {
      return ui.productCard(product, { featured: true, compact: true });
    }).join('');
  });
}());
