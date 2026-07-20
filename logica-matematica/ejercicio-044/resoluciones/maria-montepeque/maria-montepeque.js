// Ejercicio 044 - Rangos y maximos: inventario de motos

const analizarInventarioMotos = (motos, precioMin, precioMax) => {
  if (!Array.isArray(motos) || motos.length === 0) {
    return {
      motosEnRango: [],
      cantidadEnRango: 0,
      motoMayorStock: null,
      clasificacion: 'inventario vacio',
    };
  }

  const motosEnRango = motos.filter(
    (moto) => moto.precio >= precioMin && moto.precio <= precioMax
  );

  if (motosEnRango.length === 0) {
    return {
      motosEnRango: [],
      cantidadEnRango: 0,
      motoMayorStock: null,
      clasificacion: 'sin motos en rango',
    };
  }

  const motoMayorStock = motosEnRango.reduce((mayor, actual) =>
    actual.stock > mayor.stock ? actual : mayor
  );

  return {
    motosEnRango,
    cantidadEnRango: motosEnRango.length,
    motoMayorStock,
    clasificacion: 'inventario dentro de rango',
  };
};

module.exports = { analizarInventarioMotos };

const inventario = [
  { modelo: 'Yamaha FZ', precio: 8500, stock: 12 },
  { modelo: 'Honda CB1', precio: 9200, stock: 20 },
  { modelo: 'Suzuki GN', precio: 7800, stock: 5 },
  { modelo: 'Bajaj Pulsar', precio: 10500, stock: 15 },
];

console.log('Caso normal:');
console.log(analizarInventarioMotos(inventario, 7500, 9500));

console.log('Caso borde - sin motos en rango:');
console.log(analizarInventarioMotos(inventario, 20000, 30000));

console.log('Caso borde - inventario vacio:');
console.log(analizarInventarioMotos([], 0, 10000));