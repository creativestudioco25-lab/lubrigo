/* Catálogo local: se carga como JavaScript para que la demo funcione también con file://. */
(function () {
  'use strict';

  const productos = [
    {
      id: '5w30-sintetico',
      name: 'LubriGo 5W-30 Sintético',
      shortName: '5W-30 Sintético',
      category: 'Sintético',
      type: 'Sintético',
      viscosity: '5W-30',
      vehicle: 'Auto',
      price: 48900,
      rating: 4.8,
      reviews: 136,
      badge: 'Destacado',
      tone: 'green',
      description: 'Aceite lubricante 100% sintético de alto rendimiento, formulado para brindar protección superior, máxima limpieza del motor y mayor eficiencia de combustible.',
      compatibility: 'Ideal para motores a gasolina de última generación. Compatible con vehículos de alto rendimiento y con tecnología de control de emisiones.',
      benefits: ['Protección térmica', 'Ahorro de combustible', 'Motor más limpio']
    },
    {
      id: '10w40-semi-sintetico',
      name: 'LubriGo 10W-40 Semi Sintético',
      shortName: '10W-40 Semi Sintético',
      category: 'Semi Sintético',
      type: 'Semi Sintético',
      viscosity: '10W-40',
      vehicle: 'Auto',
      price: 34900,
      rating: 4.7,
      reviews: 219,
      badge: 'Más vendido',
      tone: 'charcoal',
      description: 'Equilibrio inteligente entre protección y rendimiento para motores de uso diario. Ayuda a conservar una lubricación estable en trayectos urbanos y carretera.',
      compatibility: 'Recomendado para automóviles de uso frecuente y motores con kilometraje medio.',
      benefits: ['Equilibrio y protección', 'Fluidez estable', 'Uso diario']
    },
    {
      id: '5w40-sintetico',
      name: 'LubriGo 5W-40 Sintético',
      shortName: '5W-40 Sintético',
      category: 'Sintético',
      type: 'Sintético',
      viscosity: '5W-40',
      vehicle: 'Auto',
      price: 56900,
      rating: 4.9,
      reviews: 87,
      badge: '',
      tone: 'charcoal',
      description: 'Protección avanzada y respuesta confiable para condiciones de conducción exigentes.',
      compatibility: 'Ideal para motores modernos que requieren alta estabilidad térmica.',
      benefits: ['Alto desempeño', 'Mayor limpieza', 'Protección superior']
    },
    {
      id: '20w50-mineral',
      name: 'LubriGo 20W-50 Mineral',
      shortName: '20W-50 Mineral',
      category: 'Mineral',
      type: 'Mineral',
      viscosity: '20W-50',
      vehicle: 'Auto',
      price: 28900,
      rating: 4.6,
      reviews: 147,
      badge: '',
      tone: 'green',
      description: 'Protección confiable para motores con mayor exigencia y uso tradicional.',
      compatibility: 'Adecuado para automóviles con motores de tecnología convencional.',
      benefits: ['Viscosidad robusta', 'Protección confiable', 'Excelente valor']
    },
    {
      id: '15w50-moto',
      name: 'LubriGo 15W-50 Moto',
      shortName: '15W-50 Moto',
      category: 'Moto',
      type: 'Mineral',
      viscosity: '15W-50',
      vehicle: 'Moto',
      price: 31900,
      rating: 4.8,
      reviews: 94,
      badge: '',
      tone: 'green',
      description: 'Desempeño y protección para tu motocicleta, incluso en trayectos exigentes.',
      compatibility: 'Formulado para motocicletas de cuatro tiempos de uso urbano y mixto.',
      benefits: ['Protección del embrague', 'Control de temperatura', 'Cambio suave']
    },
    {
      id: '10w30-moto-semi',
      name: 'LubriGo 10W-30 Moto Semi',
      shortName: '10W-30 Moto Semi',
      category: 'Moto',
      type: 'Semi Sintético',
      viscosity: '10W-30',
      vehicle: 'Moto',
      price: 36900,
      rating: 4.7,
      reviews: 63,
      badge: 'Nuevo',
      tone: 'charcoal',
      description: 'Arranque rápido y protección prolongada para motocicletas de uso cotidiano.',
      compatibility: 'Recomendado para motos urbanas y de mediana cilindrada.',
      benefits: ['Arranque confiable', 'Rendimiento continuo', 'Tecnología semi sintética']
    },
    {
      id: '0w20-sintetico',
      name: 'LubriGo 0W-20 Sintético',
      shortName: '0W-20 Sintético',
      category: 'Sintético',
      type: 'Sintético',
      viscosity: '0W-20',
      vehicle: 'Auto',
      price: 62900,
      rating: 4.9,
      reviews: 52,
      badge: 'Premium',
      tone: 'green',
      description: 'Máxima eficiencia de combustible y protección de arranque en frío.',
      compatibility: 'Para vehículos recientes que especifican viscosidad 0W-20.',
      benefits: ['Eficiencia premium', 'Arranque en frío', 'Menor fricción']
    },
    {
      id: 'filtro-aceite',
      name: 'Filtro de aceite LubriGo',
      shortName: 'Filtro de aceite',
      category: 'Filtros',
      type: 'Filtro',
      viscosity: 'N/A',
      vehicle: 'Auto',
      price: 18900,
      rating: 4.8,
      reviews: 71,
      badge: '',
      tone: 'filter',
      description: 'Filtración eficiente para ayudar a conservar la limpieza y el rendimiento del lubricante.',
      compatibility: 'Consulta la referencia de tu vehículo antes de elegir el filtro.',
      benefits: ['Filtración eficiente', 'Material resistente', 'Instalación práctica']
    },
    {
      id: '80w90-transmision',
      name: 'LubriGo 80W-90 Transmisión',
      shortName: '80W-90 Transmisión',
      category: 'Mineral',
      type: 'Mineral',
      viscosity: '80W-90',
      vehicle: 'Auto',
      price: 42900,
      rating: 4.6,
      reviews: 42,
      badge: '',
      tone: 'charcoal',
      description: 'Lubricante para componentes de transmisión que requieren una película resistente.',
      compatibility: 'Para cajas y diferenciales según especificación del fabricante.',
      benefits: ['Película resistente', 'Protección de engranajes', 'Uso especializado']
    },
    {
      id: '5w30-diesel',
      name: 'LubriGo 5W-30 Diesel',
      shortName: '5W-30 Diesel',
      category: 'Sintético',
      type: 'Sintético',
      viscosity: '5W-30',
      vehicle: 'Camioneta',
      price: 65900,
      rating: 4.8,
      reviews: 38,
      badge: '',
      tone: 'green',
      description: 'Protección de alto desempeño diseñada para motores diésel modernos.',
      compatibility: 'Para camionetas y vehículos diésel que cumplan la especificación indicada.',
      benefits: ['Protección diésel', 'Menos depósitos', 'Alta resistencia']
    },
    {
      id: '10w40-moto-mineral',
      name: 'LubriGo 10W-40 Moto',
      shortName: '10W-40 Moto',
      category: 'Moto',
      type: 'Mineral',
      viscosity: '10W-40',
      vehicle: 'Moto',
      price: 29900,
      rating: 4.5,
      reviews: 118,
      badge: '',
      tone: 'green',
      description: 'Aceite confiable para proteger el motor de tu moto en recorridos diarios.',
      compatibility: 'Compatible con motocicletas que recomiendan aceite 10W-40.',
      benefits: ['Uso urbano', 'Protección diaria', 'Buen desempeño']
    },
    {
      id: '0w40-sintetico',
      name: 'LubriGo 0W-40 Sintético', shortName: '0W-40 Sintético', category: 'Sintético', type: 'Sintético', viscosity: '0W-40', vehicle: 'Auto', price: 56900, rating: 4.8, reviews: 56, badge: '', tone: 'charcoal',
      description: 'Máxima eficiencia de combustible y respuesta confiable en motores modernos.', compatibility: 'Para motores que recomiendan un lubricante sintético 0W-40.', benefits: ['Rendimiento premium', 'Protección continua', 'Alta fluidez']
    },
    {
      id: '5w20-sintetico',
      name: 'LubriGo 5W-20 Sintético', shortName: '5W-20 Sintético', category: 'Sintético', type: 'Sintético', viscosity: '5W-20', vehicle: 'Auto', price: 53900, rating: 4.7, reviews: 44, badge: '', tone: 'green',
      description: 'Lubricación de baja fricción para una conducción ágil y eficiente.', compatibility: 'Para vehículos que especifican viscosidad 5W-20.', benefits: ['Menor fricción', 'Fluidez rápida', 'Motor protegido']
    },
    {
      id: '10w40-alto-rendimiento',
      name: 'LubriGo 10W-40 Alto Rendimiento', shortName: '10W-40 Alto Rendimiento', category: 'Semi Sintético', type: 'Semi Sintético', viscosity: '10W-40', vehicle: 'Auto', price: 41900, rating: 4.7, reviews: 91, badge: '', tone: 'charcoal',
      description: 'Protección reforzada para recorridos urbanos y trayectos de larga distancia.', compatibility: 'Ideal para automóviles de uso frecuente.', benefits: ['Desempeño constante', 'Protección reforzada', 'Uso urbano']
    },
    {
      id: '15w40-diesel',
      name: 'LubriGo 15W-40 Diesel', shortName: '15W-40 Diesel', category: 'Mineral', type: 'Mineral', viscosity: '15W-40', vehicle: 'Camioneta', price: 45900, rating: 4.6, reviews: 83, badge: '', tone: 'green',
      description: 'Aceite multigrado de protección robusta para motores diésel.', compatibility: 'Para camionetas y vehículos de trabajo según especificación.', benefits: ['Protección diésel', 'Viscosidad estable', 'Trabajo exigente']
    },
    {
      id: '5w50-sintetico',
      name: 'LubriGo 5W-50 Sintético', shortName: '5W-50 Sintético', category: 'Sintético', type: 'Sintético', viscosity: '5W-50', vehicle: 'Auto', price: 68900, rating: 4.9, reviews: 31, badge: 'Premium', tone: 'green',
      description: 'Protección de amplia viscosidad para condiciones de mayor exigencia.', compatibility: 'Para motores que requieren 5W-50 de alto desempeño.', benefits: ['Rango amplio', 'Máxima protección', 'Uso exigente']
    },
    {
      id: '0w30-sintetico',
      name: 'LubriGo 0W-30 Sintético', shortName: '0W-30 Sintético', category: 'Sintético', type: 'Sintético', viscosity: '0W-30', vehicle: 'Auto', price: 59900, rating: 4.8, reviews: 27, badge: '', tone: 'charcoal',
      description: 'Fluidez avanzada para proteger el motor desde el primer arranque.', compatibility: 'Para vehículos que recomiendan viscosidad 0W-30.', benefits: ['Arranque rápido', 'Ahorro energético', 'Tecnología sintética']
    },
    {
      id: '75w90-transmision',
      name: 'LubriGo 75W-90 Transmisión', shortName: '75W-90 Transmisión', category: 'Mineral', type: 'Mineral', viscosity: '75W-90', vehicle: 'Auto', price: 47900, rating: 4.6, reviews: 36, badge: '', tone: 'charcoal',
      description: 'Lubricante para proteger componentes de transmisión y engranajes.', compatibility: 'Para transmisiones compatibles según el manual del vehículo.', benefits: ['Protección de engranajes', 'Película durable', 'Operación suave']
    },
    {
      id: 'atf-multi',
      name: 'LubriGo ATF Multi Vehículo', shortName: 'ATF Multi', category: 'Semi Sintético', type: 'Semi Sintético', viscosity: 'ATF', vehicle: 'Auto', price: 44900, rating: 4.5, reviews: 48, badge: '', tone: 'green',
      description: 'Fluido de transmisión automática para múltiples aplicaciones de demostración.', compatibility: 'Consulta la especificación ATF indicada por el fabricante.', benefits: ['Transmisión suave', 'Protección interna', 'Uso múltiple']
    },
    {
      id: '10w50-moto-sintetico',
      name: 'LubriGo 10W-50 Moto Sintético', shortName: '10W-50 Moto', category: 'Moto', type: 'Sintético', viscosity: '10W-50', vehicle: 'Moto', price: 47900, rating: 4.8, reviews: 51, badge: '', tone: 'charcoal',
      description: 'Respuesta y protección avanzada para motocicletas de alto rendimiento.', compatibility: 'Para motos que requieren lubricante sintético 10W-50.', benefits: ['Alta protección', 'Respuesta rápida', 'Uso deportivo']
    },
    {
      id: '20w50-moto-mineral',
      name: 'LubriGo 20W-50 Moto', shortName: '20W-50 Moto', category: 'Moto', type: 'Mineral', viscosity: '20W-50', vehicle: 'Moto', price: 30900, rating: 4.6, reviews: 104, badge: '', tone: 'green',
      description: 'Protección confiable para las exigencias diarias de tu motocicleta.', compatibility: 'Adecuado para motocicletas que especifican viscosidad 20W-50.', benefits: ['Uso diario', 'Viscosidad robusta', 'Valor confiable']
    },
    {
      id: 'filtro-aire',
      name: 'Filtro de aire LubriGo', shortName: 'Filtro de aire', category: 'Filtros', type: 'Filtro', viscosity: 'N/A', vehicle: 'Auto', price: 24900, rating: 4.6, reviews: 67, badge: '', tone: 'filter',
      description: 'Filtro de demostración para apoyar la limpieza del aire que entra al motor.', compatibility: 'Verifica la referencia compatible con tu vehículo.', benefits: ['Aire más limpio', 'Material resistente', 'Fácil consulta']
    },
    {
      id: 'filtro-combustible',
      name: 'Filtro de combustible LubriGo', shortName: 'Filtro de combustible', category: 'Filtros', type: 'Filtro', viscosity: 'N/A', vehicle: 'Auto', price: 22900, rating: 4.5, reviews: 39, badge: '', tone: 'filter',
      description: 'Elemento filtrante demostrativo para el sistema de combustible.', compatibility: 'Consulta la compatibilidad por modelo de vehículo.', benefits: ['Filtración práctica', 'Cuidado del sistema', 'Repuesto esencial']
    },
    {
      id: 'filtro-moto',
      name: 'Filtro de aceite Moto LubriGo', shortName: 'Filtro Moto', category: 'Filtros', type: 'Filtro', viscosity: 'N/A', vehicle: 'Moto', price: 16900, rating: 4.7, reviews: 53, badge: '', tone: 'filter',
      description: 'Filtro de aceite de demostración para ayudar al cuidado del motor de tu moto.', compatibility: 'Confirma la referencia requerida por la motocicleta.', benefits: ['Filtración de aceite', 'Uso para moto', 'Cambio sencillo']
    }
  ];

  window.LubriGoProducts = productos;
  window.LubriGoProductById = function (id) {
    return productos.find(function (product) { return product.id === id; });
  };
}());
