// Ejercicio 046 - Logica matematica: conversion de unidades (autos hiperdeportivos)

const KMH_A_MPH = 0.621371;
const KMH_A_MS = 1 / 3.6;

const CATEGORIAS = [
  { limite: 350, nombre: "hipercoche extremo" },
  { limite: 300, nombre: "hipercoche elite" },
  { limite: 250, nombre: "hipercoche estandar" },
  { limite: 0, nombre: "fuera de categoria" },
];

function clasificarVelocidad(velocidadKmh) {
  const categoria = CATEGORIAS.find(({ limite }) => velocidadKmh >= limite);
  return categoria.nombre;
}

function convertirAutos(autos) {
  if (!Array.isArray(autos) || autos.length === 0) {
    return { autos: [], resumen: {} };
  }

  const resumen = {};

  const autosConvertidos = autos.map(({ nombre, velocidadKmh }) => {
    const categoria = clasificarVelocidad(velocidadKmh);
    resumen[categoria] = (resumen[categoria] || 0) + 1;

    return {
      nombre,
      velocidadKmh,
      velocidadMph: Number((velocidadKmh * KMH_A_MPH).toFixed(2)),
      velocidadMs: Number((velocidadKmh * KMH_A_MS).toFixed(2)),
      categoria,
    };
  });

  return { autos: autosConvertidos, resumen };
}

module.exports = { convertirAutos, clasificarVelocidad };

// Pruebas manuales

const casoNormal = [
  { nombre: "Bugatti Chiron", velocidadKmh: 380 },
  { nombre: "Koenigsegg Jesko", velocidadKmh: 330 },
  { nombre: "McLaren 720S", velocidadKmh: 340 },
  { nombre: "Ferrari SF90", velocidadKmh: 340 },
  { nombre: "Corvette Z06", velocidadKmh: 315 },
];

console.log("Caso normal:", JSON.stringify(convertirAutos(casoNormal), null, 2));

const casoBorde = [];

console.log("Caso borde:", JSON.stringify(convertirAutos(casoBorde), null, 2));