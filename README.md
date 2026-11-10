# LubriGo — simulador académico de lubricantes

Aplicativo web estático para una simulación académica de venta de aceites automotrices. Está hecho con HTML5, CSS3, JavaScript nativo y LocalStorage; no usa backend, pagos reales, cuentas ni dependencias externas.

## Abrir la demo

1. Descomprime el proyecto.
2. Abre [index.html](index.html) con doble clic en cualquier navegador moderno.
3. Navega al catálogo, agrega productos, revisa el carrito y completa el checkout con datos ficticios.

También funciona servido desde cualquier hosting estático. La carga del catálogo usa `js/productos.js` como fuente disponible desde `file://`; el archivo `data/productos.json` se entrega como versión estructurada de consulta académica.

## Funcionalidades

- Catálogo con búsqueda, categorías, filtros, ordenamiento y carga progresiva.
- Ficha detallada de producto, galería, tabs y productos relacionados.
- Carrito persistente mediante LocalStorage, con cantidades, subtotales, envío y total estimado.
- Checkout validado con vehículo, entrega y pago simulados.
- Confirmación con referencia demostrativa y sin cobros reales.
- Menú móvil, FAQ, contacto, términos, privacidad y preferencias de cookies.
- Diseño responsive, iconos SVG locales/integrados y fotografía hero local.

## Estructura

```text
LubriGo/
├── index.html
├── catalogo.html
├── producto.html
├── carrito.html
├── checkout.html
├── confirmacion.html
├── nosotros.html
├── contacto.html
├── css/estilos.css
├── js/
│   ├── app.js
│   ├── productos.js
│   ├── carrito.js
│   ├── catalogo.js
│   ├── producto.js
│   ├── checkout.js
│   ├── confirmacion.js
│   ├── nosotros.js
│   ├── contacto.js
│   └── cookies.js
├── data/productos.json
├── assets/
│   ├── imagenes/hero-aceite.png
│   └── CREDITOS.md
└── docs/
    ├── arquitectura.md
    ├── casos-de-uso.puml
    └── guia-publicacion.md
```

## Publicación gratuita

Para publicar sin instalar software, crea un repositorio en GitHub, carga el contenido de esta carpeta y activa **Settings → Pages → Deploy from a branch → main / root**. GitHub mostrará la URL pública al terminar el despliegue. También puede subirse tal cual a Netlify Drop o Cloudflare Pages.

## Datos y alcance

Todos los productos, precios, correos, teléfonos y pedidos son de demostración. Los datos del formulario y el carrito solo permanecen en el navegador mediante LocalStorage. Para borrar el estado de la demo, elimina los datos del sitio desde el navegador.

## Documentación académica

`docs/arquitectura.md` describe los módulos, almacenamiento y criterios de prueba. `docs/casos-de-uso.puml` contiene casos de uso y flujos en PlantUML; puede abrirse en cualquier visor PlantUML o extensión compatible.
