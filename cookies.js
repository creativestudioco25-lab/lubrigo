(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    const panel = document.getElementById('cookiePreferences');
    if (!panel) return;
    const ui = window.LubriGoUI;
    let preferences;
    try { preferences = JSON.parse(localStorage.getItem('lubrigo-cookie-settings-v1') || '{}'); } catch (error) { preferences = {}; }
    ['Performance', 'Marketing', 'Personalization'].forEach(function (name) {
      const input = document.getElementById('cookie' + name);
      if (input && typeof preferences[name.toLowerCase()] === 'boolean') input.checked = preferences[name.toLowerCase()];
    });
    function save(all) {
      const settings = { performance: all || document.getElementById('cookiePerformance').checked, marketing: all || document.getElementById('cookieMarketing').checked, personalization: all || document.getElementById('cookiePersonalization').checked };
      localStorage.setItem('lubrigo-cookie-settings-v1', JSON.stringify(settings));
      localStorage.setItem('lubrigo-cookies-v1', 'saved');
      document.getElementById('cookieBanner')?.remove();
      ui.toast(all ? 'Todas las cookies fueron aceptadas.' : 'Tus preferencias fueron guardadas.');
    }
    document.getElementById('saveCookiePreferences').addEventListener('click', function () { save(false); });
    document.getElementById('acceptAllCookies').addEventListener('click', function () { ['cookiePerformance','cookieMarketing','cookiePersonalization'].forEach(function (id) { document.getElementById(id).checked = true; }); save(true); });
  });
}());
