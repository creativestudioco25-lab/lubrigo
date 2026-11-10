/* Componentes compartidos, navegación y pequeñas interacciones de LubriGo. */
(function () {
  'use strict';

  const icons = {
    grid: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/></svg>',
    menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6"/><path d="m16 16 5 5"/></svg>',
    cart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 3h3l2.4 11.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 1.9-1.4L22 7H6"/><circle cx="10" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>',
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.4a5.5 5.5 0 0 0-.1-7.8Z"/></svg>',
    oil: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 10h12l2 8H4l2-8Z"/><path d="M8 10V7h5l2 3M5 18v2h14v-2M17 7l2-2M19 11h2"/><path d="M12 3s-2 2.5-2 4a2 2 0 0 0 4 0c0-1.5-2-4-2-4Z"/></svg>',
    filter: '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5" rx="6" ry="2.5"/><path d="M6 5v14c0 1.4 12 1.4 12 0V5M9 8v9M12 8v9M15 8v9"/></svg>',
    auto: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 16-1.2-1.2 1.7-5.1A3 3 0 0 1 8.3 8h7.4a3 3 0 0 1 2.8 1.7l1.7 5.1L19 16v3h-2v-1H7v1H5v-3Z"/><path d="M5 14h14M8 12h.01M16 12h.01"/><circle cx="7" cy="17" r="1"/><circle cx="17" cy="17" r="1"/></svg>',
    moto: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17h5l2-6h3l2 3h3M10 17l3-6-3-3H7M15 8h2"/></svg>',
    truck: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',
    headset: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14h3v5H5a1 1 0 0 1-1-1v-4ZM20 14h-3v5h2a1 1 0 0 0 1-1v-4ZM17 20c0 1-2 2-5 2"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M8 15l2 2 5-5"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4C10 4 4 8 4 15c0 3 2 5 5 5 7 0 11-6 11-16Z"/><path d="M4 20c2-5 6-8 12-11"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>',
    info: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
    plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
    minus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/></svg>',
    trash: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
    down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9Z"/><path d="M9 21v-6h6v6"/></svg>',
    tag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 13 13 20 3 10V4h6l11 9Z"/><circle cx="7" cy="8" r="1"/></svg>',
    book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4.5A3.5 3.5 0 0 1 7.5 4H12v16H7.5A3.5 3.5 0 0 0 4 23V4.5ZM20 4.5A3.5 3.5 0 0 0 16.5 4H12v16h4.5A3.5 3.5 0 0 1 20 23V4.5Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    location: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11s-8-6-8-11a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-1.2-1.5 1.5a13 13 0 0 1-8.7-8.7L8.2 7 7 3Z"/></svg>',
    share: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.2 10.8 7.6-4.6M8.2 13.2l7.6 4.6"/></svg>',
    cookie: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 1 1-8-8c.4 0 .8 0 1.2.1A3.5 3.5 0 0 0 18 8.8c.1.4.1.8.1 1.2A2 2 0 0 0 20 12Z"/><circle cx="8" cy="11" r="1"/><circle cx="12" cy="16" r="1"/><circle cx="15" cy="12" r="1"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4.5 4.5L19 7"/></svg>',
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/></svg>',
    document: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v5h5M8 13h8M8 17h6"/></svg>',
    target: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 2v3M22 12h-3M12 22v-3M2 12h3"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.8a8 8 0 0 1-11.8 7L4 20l1.3-4.1A8 8 0 1 1 20 11.8Z"/><path d="M9 8.2c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.5.6c.5 1 1.3 1.7 2.3 2.2l.6-.6c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.5v.5c0 .3-.2.6-.5.7-.4.2-.9.3-1.3.2-3-.6-5.4-2.9-6-5.9-.1-.5 0-1 .2-1.3Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12c0 4-1 6-1 6s-1.8 1-8 1-8-1-8-1-1-2-1-6 1-6 1-6 1.8-1 8-1 8 1 8 1 1 2 1 6Z"/><path d="m10 9 5 3-5 3V9Z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4v10.5a4.5 4.5 0 1 1-3.5-4.4V13a1.5 1.5 0 1 0 1 1.4V4h2.5c.5 2.4 2.2 3.9 4.5 4v2.5A7.1 7.1 0 0 1 14 8.8"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4l16 16M20 4 4 20"/></svg>',
    sliders: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
    card: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/></svg>',
    bank: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 9 9-5 9 5M5 10v7M9 10v7M15 10v7M19 10v7M3 20h18"/></svg>',
    store: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 10 2-5h12l2 5"/><path d="M5 10v9h14v-9M9 19v-5h6v5M4 10c0 1.5 3 1.5 3 0 0 1.5 3 1.5 3 0 0 1.5 3 1.5 3 0 0 1.5 3 1.5 3 0 0 1.5 3 1.5 3 0"/></svg>',
    external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9"/><path d="M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6"/></svg>'
  };

  function icon(name, className) {
    return '<span class="icon ' + (className || '') + '">' + (icons[name] || icons.info) + '</span>';
  }

  function formatCOP(value) {
    return '$' + Number(value || 0).toLocaleString('es-CO') + ' COP';
  }

  function productUrl(product) {
    return 'producto.html?id=' + encodeURIComponent(product.id);
  }

  function logo() {
    return '<a class="brand" href="index.html" aria-label="LubriGo, inicio"><span class="brand-drop"><i></i></span><span>Lubri<span>Go</span></span></a>';
  }

  function productArt(product, size) {
    const label = product.viscosity === 'N/A' ? 'Filtro' : product.viscosity;
    if (product.tone === 'filter') {
      return '<div class="product-art product-art--filter ' + (size || '') + '" role="img" aria-label="' + product.name + '"><span class="filter-top"></span><span class="filter-pleats"></span><span class="filter-base"></span><span class="filter-label">LubriGo</span></div>';
    }
    return '<div class="product-art product-art--bottle product-art--' + product.tone + ' ' + (size || '') + '" role="img" aria-label="' + product.name + '"><span class="bottle-cap"></span><span class="bottle-neck"></span><span class="bottle-handle"></span><span class="bottle-glint"></span><span class="bottle-label"><b>Lubri<span>Go</span></b><em>' + label + '</em><small>' + product.type.replace('Semi Sintético', 'Semi') + '</small></span><span class="bottle-volume">1L</span></div>';
  }

  function categoryCard(name, iconName, href, selected) {
    return '<a class="category-card ' + (selected ? 'is-selected' : '') + '" href="' + (href || ('catalogo.html?categoria=' + encodeURIComponent(name))) + '">' + icon(iconName, 'category-icon') + '<strong>' + name + '</strong></a>';
  }

  function productCard(product, options) {
    options = options || {};
    const layout = options.featured ? 'product-card product-card--featured' : 'product-card';
    const favorite = isFavorite(product.id);
    return '<article class="' + layout + '">'
      + '<a class="product-card__image" href="' + productUrl(product) + '">' + productArt(product) + '</a>'
      + '<div class="product-card__body">'
      + (product.badge ? '<span class="product-badge">' + product.badge + '</span>' : '')
      + '<a class="product-card__name" href="' + productUrl(product) + '">' + product.name + '</a>'
      + '<p>' + (options.compact ? product.description.slice(0, 58) + '…' : product.description.slice(0, 74) + '…') + '</p>'
      + (options.showRating ? '<div class="rating">' + icon('star') + ' ' + product.rating.toFixed(1) + ' <small>(' + product.reviews + ')</small></div>' : '')
      + '<strong class="price">' + formatCOP(product.price) + '</strong>'
      + '<div class="product-card__actions"><button class="btn btn--green btn--small" type="button" data-add="' + product.id + '">' + icon('cart') + 'Agregar</button><button class="icon-button heart-button ' + (favorite ? 'is-favorite' : '') + '" type="button" data-favorite="' + product.id + '" aria-label="Guardar ' + product.name + '">' + icon('heart') + '</button></div>'
      + '</div></article>';
  }

  function serviceBand() {
    return '<section class="services-band section"><h2 class="section-title">Nuestros servicios</h2><div class="services-row">'
      + '<div class="service"><span>' + icon('headset') + '</span><div><strong>Asesoría</strong><p>Te ayudamos a elegir el aceite ideal.</p></div></div>'
      + '<div class="service"><span>' + icon('calendar') + '</span><div><strong>Cambio recomendado</strong><p>Conoce cada cuánto cambiar tu aceite.</p></div></div>'
      + '<div class="service"><span>' + icon('truck') + '</span><div><strong>Entrega simulada</strong><p>Proceso académico con entrega de ejemplo.</p></div></div>'
      + '</div></section>';
  }

  function promoBanner(text, emphasis) {
    return '<aside class="promo-banner"><div>' + icon('leaf') + '<strong>' + text.replace(emphasis, '<em>' + emphasis + '</em>') + '</strong></div><span></span></aside>';
  }

  function header() {
    return '<div class="topbar"><div class="shell"><span>' + icon('grid') + '</span><span>Nuestros productos</span>' + icon('down') + '</div></div>'
      + '<header class="site-header"><div class="shell site-header__inner">' + logo()
      + '<nav class="desktop-nav" aria-label="Navegación principal"><a href="index.html">Inicio</a><a href="catalogo.html">Catálogo</a><a href="nosotros.html">Proyecto</a><a href="contacto.html">Contacto</a></nav>'
      + '<div class="header-actions"><button class="icon-button js-menu" type="button" aria-label="Abrir menú">' + icon('menu') + '</button><span class="header-divider"></span><button class="icon-button js-search" type="button" aria-label="Buscar">' + icon('search') + '</button><a class="icon-button cart-link" href="carrito.html" aria-label="Ver carrito">' + icon('cart') + '<b class="cart-count">0</b></a></div></div></header>';
  }

  const menuItems = [
    ['Inicio', 'home', 'index.html'], ['Catálogo', 'grid', 'catalogo.html'], ['Marcas', 'tag', 'catalogo.html'], ['Promociones', 'star', 'catalogo.html'],
    ['Guía de cambio', 'book', 'nosotros.html#guia'], ['Sobre el proyecto', 'info', 'nosotros.html'], ['Contacto', 'mail', 'contacto.html'],
    ['Preguntas frecuentes', 'info', 'nosotros.html#preguntas'], ['Términos y Condiciones', 'document', 'contacto.html#terminos'], ['Política de Privacidad', 'shield', 'contacto.html#privacidad']
  ];

  function mobileMenu() {
    return '<aside class="mobile-menu" id="mobileMenu" aria-hidden="true"><div class="mobile-menu__top">' + logo() + '<button class="icon-button js-close-menu" type="button" aria-label="Cerrar menú">' + icon('close') + '</button></div>'
      + '<div class="menu-intro"><h2>Menú de navegación</h2><i></i><p>Explora nuestro catálogo, conoce las marcas, promociones y más sobre LubriGo.</p></div>'
      + '<nav class="mobile-menu__links" aria-label="Menú móvil">' + menuItems.map(function (item) { return '<a href="' + item[2] + '">' + icon(item[1]) + '<span>' + item[0] + '</span>' + icon('chevron') + '</a>'; }).join('') + '</nav>'
      + '<div class="menu-categories"><h3 class="section-title">Categorías destacadas</h3><div class="categories categories--four">' + categoryCard('Sintético', 'oil') + categoryCard('Semi Sintético', 'oil') + categoryCard('Mineral', 'oil') + categoryCard('Filtros', 'filter') + '</div></div>'
      + promoBanner('Cuida tu motor y optimiza su rendimiento', 'optimiza') + '</aside><div class="menu-backdrop" id="menuBackdrop"></div>';
  }

  function footer() {
    return '<footer class="site-footer"><div class="shell"><div class="footer-grid"><div class="footer-brand">' + logo() + '<p>Aceites y soluciones de<br>lubricación para vehículos.</p></div><div><h3>Enlaces</h3><a href="nosotros.html">Sobre el proyecto</a><a href="contacto.html#terminos">Términos y Condiciones</a><a href="contacto.html#privacidad">Política de Privacidad</a><a href="contacto.html#cookies">Uso de Cookies</a></div><div><h3>Contáctanos</h3><a href="mailto:demo@lubrigo.edu.co">' + icon('mail') + 'demo@lubrigo.edu.co</a><span>' + icon('location') + 'Colombia</span></div></div><div class="footer-bottom"><div class="socials"><a href="#" aria-label="Instagram">' + icon('instagram') + '</a><a href="#" aria-label="YouTube">' + icon('youtube') + '</a><a href="#" aria-label="TikTok">' + icon('tiktok') + '</a><a href="#" aria-label="X">' + icon('x') + '</a></div><p>Proyecto académico – Demo Universitario<br>© <span class="js-year">2026</span> LubriGo. Todos los derechos reservados.</p></div></div></footer>';
  }

  function cookieBanner() {
    return '<div class="cookie-banner" id="cookieBanner" role="dialog" aria-label="Preferencias de cookies"><span class="cookie-banner__icon">' + icon('cookie') + '</span><div><strong>Uso de Cookies</strong><p>Usamos cookies para mejorar tu experiencia en este sitio académico. Puedes aceptarlas o configurarlas.</p></div><div class="cookie-banner__actions"><a class="btn btn--outline btn--small" href="contacto.html#cookies">Configurar</a><button class="btn btn--amber btn--small js-accept-cookies" type="button">Aceptar</button></div></div>';
  }

  function mountChrome() {
    const headerTarget = document.getElementById('site-header');
    const footerTarget = document.getElementById('site-footer');
    if (headerTarget) headerTarget.innerHTML = header();
    if (footerTarget) footerTarget.innerHTML = footer();
    document.body.insertAdjacentHTML('beforeend', mobileMenu());
    document.body.insertAdjacentHTML('beforeend', '<a class="whatsapp-float" href="https://wa.me/573016054109?text=Hola%2C%20quiero%20recibir%20asesor%C3%ADa%20sobre%20los%20aceites%20LubriGo." target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">' + icon('whatsapp') + '</a>');
    if (!localStorage.getItem('lubrigo-cookies-v1')) document.body.insertAdjacentHTML('beforeend', cookieBanner());
    updateCartCount();
    document.querySelectorAll('.js-year').forEach(function (node) { node.textContent = new Date().getFullYear(); });
  }

  function updateCartCount() {
    const count = window.LubriGoCart ? window.LubriGoCart.count() : 0;
    document.querySelectorAll('.cart-count').forEach(function (node) { node.textContent = count; node.classList.toggle('is-empty', !count); });
  }

  function getFavorites() {
    try { return JSON.parse(localStorage.getItem('lubrigo-favorites-v1') || '[]'); } catch (error) { return []; }
  }

  function isFavorite(id) { return getFavorites().indexOf(id) > -1; }

  function toggleFavorite(id) {
    const favorites = getFavorites();
    const index = favorites.indexOf(id);
    if (index > -1) favorites.splice(index, 1); else favorites.push(id);
    localStorage.setItem('lubrigo-favorites-v1', JSON.stringify(favorites));
    document.querySelectorAll('[data-favorite="' + id + '"]').forEach(function (button) { button.classList.toggle('is-favorite', index === -1); });
    toast(index === -1 ? 'Producto guardado en favoritos.' : 'Producto eliminado de favoritos.');
  }

  function toast(message) {
    let element = document.getElementById('toast');
    if (!element) { element = document.createElement('div'); element.id = 'toast'; element.className = 'toast'; document.body.appendChild(element); }
    element.textContent = message;
    element.classList.add('is-visible');
    clearTimeout(window.__lubriToastTimer);
    window.__lubriToastTimer = setTimeout(function () { element.classList.remove('is-visible'); }, 2800);
  }

  function openMenu() {
    const menu = document.getElementById('mobileMenu');
    const backdrop = document.getElementById('menuBackdrop');
    if (!menu) return;
    menu.classList.add('is-open'); backdrop.classList.add('is-open'); menu.setAttribute('aria-hidden', 'false'); document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    const menu = document.getElementById('mobileMenu');
    const backdrop = document.getElementById('menuBackdrop');
    if (!menu) return;
    menu.classList.remove('is-open'); backdrop.classList.remove('is-open'); menu.setAttribute('aria-hidden', 'true'); document.body.classList.remove('no-scroll');
  }

  function globalEvents() {
    document.addEventListener('click', function (event) {
      const menuButton = event.target.closest('.js-menu');
      const closeButton = event.target.closest('.js-close-menu, .menu-backdrop');
      const addButton = event.target.closest('[data-add]');
      const favoriteButton = event.target.closest('[data-favorite]');
      const acceptCookies = event.target.closest('.js-accept-cookies');
      const searchButton = event.target.closest('.js-search');
      if (menuButton) openMenu();
      if (closeButton) closeMenu();
      if (addButton) {
        const product = window.LubriGoProductById(addButton.dataset.add);
        if (product && window.LubriGoCart) { window.LubriGoCart.add(product.id, 1); toast(product.shortName + ' se agregó al carrito.'); }
      }
      if (favoriteButton) toggleFavorite(favoriteButton.dataset.favorite);
      if (acceptCookies) { localStorage.setItem('lubrigo-cookies-v1', 'accepted'); document.getElementById('cookieBanner')?.remove(); toast('Preferencias de cookies guardadas.'); }
      if (searchButton) {
        if (location.pathname.toLowerCase().endsWith('catalogo.html')) document.getElementById('catalogSearch')?.focus();
        else location.href = 'catalogo.html?buscar=';
      }
    });
    window.addEventListener('lubrigo:cart-changed', updateCartCount);
  }

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name) || '';
  }

  window.LubriGoUI = { icon: icon, formatCOP: formatCOP, productUrl: productUrl, productArt: productArt, productCard: productCard, categoryCard: categoryCard, serviceBand: serviceBand, promoBanner: promoBanner, toast: toast, getParam: getParam, isFavorite: isFavorite, toggleFavorite: toggleFavorite, updateCartCount: updateCartCount };

  document.addEventListener('DOMContentLoaded', function () { mountChrome(); globalEvents(); });
}());
