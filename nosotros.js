(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('aboutMain');
    if (!root) return;
    const ui = window.LubriGoUI;
    const services = [
      ['headset', 'Asesoría', 'Te ayudamos a elegir el aceite ideal para tu vehículo.'],
      ['shield', 'Calidad', 'Productos de alto rendimiento que protegen tu motor.'],
      ['calendar', 'Guía de cambio', 'Conoce cuándo y cómo cambiar tu aceite de forma segura.'],
      ['truck', 'Entrega simulada', 'Proceso de compra académico con entrega de ejemplo.']
    ];
    const questions = [
      ['¿Qué es LubriGo?', 'Es un proyecto académico universitario que ofrece información, asesoría y herramientas sobre lubricantes automotrices.'],
      ['¿Qué tipo de aceites puedo encontrar?', 'Puedes explorar opciones sintéticas, semi sintéticas, minerales, para motos y filtros de aceite de demostración.'],
      ['¿Cómo funciona la simulación de entrega?', 'Seleccionas tus productos y completas datos ficticios o demostrativos. La plataforma genera una referencia, sin efectuar envíos ni cobros reales.'],
      ['¿Este es un sitio comercial?', 'No. LubriGo fue diseñado con fines educativos para mostrar una experiencia de comercio electrónico y logística de manera responsable.']
    ];

    root.innerHTML = '<section class="page-hero"><div class="shell"><div class="hero-content"><span class="eyebrow">Sobre el proyecto</span><h1>LubriGo: Proyecto<br>académico de<br><em>innovación automotriz</em></h1><p>Plataforma web desarrollada como proyecto académico universitario para optimizar la gestión y el conocimiento de lubricantes automotrices.</p></div></div></section><div class="shell"><section class="stats"><div class="stat"><b>+25</b><span>Productos</span></div><div class="stat"><b>+8</b><span>Marcas</span></div><div class="stat"><b>+120</b><span>Simulaciones</span></div></section><section class="section"><h2 class="section-title">Nuestros servicios</h2><div class="about-services">' + services.map(function (service) { return '<article class="about-service">' + ui.icon(service[0]) + '<div><h3>' + service[1] + '</h3><p>' + service[2] + '</p></div></article>'; }).join('') + '</div></section><section class="section" id="guia"><h2 class="section-title">Sobre nosotros</h2><div class="about-copy"><div class="about-bottle-icon" aria-hidden="true"></div><p>LubriGo es un proyecto académico universitario que integra un catálogo de lubricantes, asesoría especializada y herramientas de apoyo para el mantenimiento automotriz.<br><br>Nuestro objetivo es aplicar conocimientos de ingeniería y desarrollo web para ofrecer una experiencia de usuario moderna, educativa y centrada en el cuidado del motor.</p></div><div class="mission-vision"><div>' + ui.icon('target') + '<div><h3>Misión</h3><p>Brindar información confiable y herramientas prácticas sobre lubricantes, facilitando decisiones que prolonguen la vida útil del motor.</p></div></div><div>' + ui.icon('leaf') + '<div><h3>Visión</h3><p>Ser una plataforma de referencia académica en el ámbito automotriz, reconocida por su enfoque educativo, utilidad y calidad.</p></div></div></div></section><section class="section" id="preguntas"><h2 class="section-title">Preguntas frecuentes</h2><div class="faq" id="faqList">' + questions.map(function (question, index) { return '<article class="faq-item ' + (index === 0 ? 'is-open' : '') + '"><button class="faq-button" type="button">' + question[0] + ui.icon('chevron') + '</button><div class="faq-answer">' + question[1] + '</div></article>'; }).join('') + '</div></section></div>';

    document.getElementById('faqList').addEventListener('click', function (event) {
      const button = event.target.closest('.faq-button'); if (!button) return;
      button.parentElement.classList.toggle('is-open');
    });
  });
}());
