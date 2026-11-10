(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('catalogMain');
    if (!root) return;
    const ui = window.LubriGoUI;
    const products = window.LubriGoProducts;
    const initialCategory = ui.getParam('categoria');
    const state = { search: ui.getParam('buscar'), category: initialCategory, brand: '', viscosity: '', type: '', price: '', sort: 'relevantes', visible: 6 };

    root.innerHTML = '<section class="page-hero hero--short"><div class="shell"><div class="hero-content"><h1>Catálogo de aceites<br>para tu <em>auto o moto</em></h1><p>Explora nuestro portafolio de alto rendimiento y encuentra el ideal para tu vehículo.</p><a class="btn btn--amber btn--small" href="#catalogResults">' + ui.icon('cart') + 'Conoce más ' + ui.icon('arrow') + '</a><div class="hero-dots"><i></i><i></i><i></i></div></div></div></section>'
      + '<div class="shell"><section class="section" id="catalogResults"><h1 class="section-title">Catálogo de productos</h1><div class="catalog-toolbar"><label class="search-bar" for="catalogSearch">' + ui.icon('search') + '<input id="catalogSearch" type="search" placeholder="Buscar aceites, marcas o viscosidad (ej. 5W-30)..." autocomplete="off"><button class="btn btn--green btn--small" type="button" id="searchButton">Buscar</button></label>'
      + '<div class="categories catalog-categories" id="catalogCategories">'
      + category('Sintético', 'oil') + category('Semi Sintético', 'oil') + category('Mineral', 'oil') + category('Moto', 'moto') + category('Auto', 'auto') + '</div>'
      + '<div class="filters"><div class="filter-select">' + ui.icon('sliders') + '<select id="brandFilter"><option value="">Marca</option><option>LubriGo</option></select></div><div class="filter-select">' + ui.icon('oil') + '<select id="viscosityFilter"><option value="">Viscosidad</option>' + uniqueOptions('viscosity') + '</select></div><div class="filter-select">' + ui.icon('tag') + '<select id="typeFilter"><option value="">Tipo</option>' + uniqueOptions('type') + '</select></div><div class="filter-select">' + ui.icon('card') + '<select id="priceFilter"><option value="">Precio</option><option value="0-35000">Hasta $35.000</option><option value="35001-50000">$35.001 – $50.000</option><option value="50001-999999">Más de $50.000</option></select></div><button type="button" class="clear-filters" id="clearFilters">Limpiar filtros</button></div>'
      + '<div class="catalog-meta"><strong id="productCount">0 productos</strong><label>Ordenar por: <select id="sortProducts"><option value="relevantes">Más relevantes</option><option value="price-low">Menor precio</option><option value="price-high">Mayor precio</option><option value="rating">Mejor calificación</option></select></label></div><div class="catalog-grid" id="catalogGrid"></div><div class="pagination" aria-label="Paginación"><button type="button" aria-label="Página anterior">‹</button><button type="button" class="is-active">1</button><button type="button">2</button><button type="button">3</button><button type="button" aria-label="Página siguiente">›</button></div><button type="button" id="loadMore" class="btn btn--outline load-more">' + ui.icon('down') + 'Cargar más productos</button></section>'
      + '<div id="catalogPromo"></div>' + ui.serviceBand() + '</div>';

    function category(name, icon) {
      return '<button class="category-card ' + (state.category === name ? 'is-selected' : '') + '" type="button" data-category="' + name + '">' + ui.icon(icon, 'category-icon') + '<strong>' + name + '</strong></button>';
    }

    function uniqueOptions(key) {
      return Array.from(new Set(products.map(function (product) { return product[key]; }))).sort().map(function (item) { return '<option value="' + item + '">' + item + '</option>'; }).join('');
    }

    function filteredProducts() {
      const query = state.search.trim().toLocaleLowerCase('es');
      const selected = products.filter(function (product) {
        const haystack = [product.name, product.shortName, product.category, product.type, product.viscosity, product.vehicle].join(' ').toLocaleLowerCase('es');
        const categoryMatch = !state.category || product.category === state.category || product.vehicle === state.category;
        const typeMatch = !state.type || product.type === state.type;
        const viscosityMatch = !state.viscosity || product.viscosity === state.viscosity;
        const brandMatch = !state.brand || state.brand === 'LubriGo';
        let priceMatch = true;
        if (state.price) { const range = state.price.split('-').map(Number); priceMatch = product.price >= range[0] && product.price <= range[1]; }
        return (!query || haystack.indexOf(query) > -1) && categoryMatch && typeMatch && viscosityMatch && brandMatch && priceMatch;
      });
      if (state.sort === 'price-low') selected.sort(function (a, b) { return a.price - b.price; });
      if (state.sort === 'price-high') selected.sort(function (a, b) { return b.price - a.price; });
      if (state.sort === 'rating') selected.sort(function (a, b) { return b.rating - a.rating; });
      return selected;
    }

    function render() {
      const result = filteredProducts();
      const grid = document.getElementById('catalogGrid');
      document.getElementById('productCount').textContent = result.length + ' productos';
      grid.innerHTML = result.length ? result.slice(0, state.visible).map(function (product) { return ui.productCard(product, { compact: true, showRating: true }); }).join('') : '<div class="empty-state">' + ui.icon('search') + '<h2>No encontramos productos</h2><p>Prueba con otra búsqueda o limpia los filtros.</p></div>';
      document.getElementById('loadMore').style.display = result.length > state.visible ? 'flex' : 'none';
      document.getElementById('catalogPromo').innerHTML = result.length > 0 ? ui.promoBanner('Compra 2 o más aceites y recibe 5% de descuento', '5%') : '';
      document.querySelectorAll('[data-category]').forEach(function (button) { button.classList.toggle('is-selected', button.dataset.category === state.category); });
    }

    document.getElementById('catalogSearch').value = state.search;
    document.getElementById('catalogSearch').addEventListener('input', function (event) { state.search = event.target.value; state.visible = 6; render(); });
    document.getElementById('searchButton').addEventListener('click', render);
    document.getElementById('catalogCategories').addEventListener('click', function (event) {
      const button = event.target.closest('[data-category]');
      if (!button) return;
      state.category = state.category === button.dataset.category ? '' : button.dataset.category; state.visible = 6; render();
    });
    [['brandFilter','brand'], ['viscosityFilter','viscosity'], ['typeFilter','type'], ['priceFilter','price'], ['sortProducts','sort']].forEach(function (pair) {
      document.getElementById(pair[0]).addEventListener('change', function (event) { state[pair[1]] = event.target.value; state.visible = 6; render(); });
    });
    document.getElementById('clearFilters').addEventListener('click', function () {
      state.search = ''; state.category = ''; state.brand = ''; state.viscosity = ''; state.type = ''; state.price = ''; state.sort = 'relevantes'; state.visible = 6;
      ['catalogSearch','brandFilter','viscosityFilter','typeFilter','priceFilter','sortProducts'].forEach(function (id) { document.getElementById(id).value = id === 'sortProducts' ? 'relevantes' : ''; }); render();
    });
    document.getElementById('loadMore').addEventListener('click', function () { state.visible += 6; render(); });
    render();
  });
}());
