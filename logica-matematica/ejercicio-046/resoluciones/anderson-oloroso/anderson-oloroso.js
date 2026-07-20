function convertirUnidadesAutos(autos) {

  if (!Array.isArray(autos) || autos.length === 0) {
    return {
      estado: "Error",
      mensaje: "No hay autos registrados."
    };
  }

  const resultados = [];
  let velocidadPromedio = 0;

  for (const auto of autos) {

    const {
      marca,
      modelo,
      velocidadKmh,
      pesoKg
    } = auto;

    if (
      !marca ||
      !modelo ||
      velocidadKmh <= 0 ||
      pesoKg <= 0
    ) {
      resultados.push({
        marca,
        modelo,
        estado: "Datos inválidos"
      });
      continue;
    }

    // Conversión de velocidad
    const velocidadMs = velocidadKmh / 3.6;
    const velocidadMph = velocidadKmh * 0.621371;

    // Conversión de peso
    const pesoLb = pesoKg * 2.20462;

    let categoria;

    if (velocidadKmh >= 350) {
      categoria = "Hiperdeportivo extremo";
    } else if (velocidadKmh >= 300) {
      categoria = "Hiperdeportivo";
    } else {
      categoria = "Deportivo";
    }

    velocidadPromedio += velocidadKmh;

    resultados.push({
      marca,
      modelo,
      velocidadKmh,
      velocidadMs: Number(velocidadMs.toFixed(2)),
      velocidadMph: Number(velocidadMph.toFixed(2)),
      pesoKg,
      pesoLb: Number(pesoLb.toFixed(2)),
      categoria
    });
  }

  velocidadPromedio /= resultados.length;

  return {
    totalAutos: resultados.length,
    velocidadPromedio: Number(velocidadPromedio.toFixed(2)),
    autos: resultados
  };
}

const autos = [
  {
    marca: "Bugatti",
    modelo: "Chiron",
    velocidadKmh: 420,
    pesoKg: 1995
  },
  {
    marca: "Koenigsegg",
    modelo: "Jesko",
    velocidadKmh: 330,
    pesoKg: 1420
  },
  {
    marca: "Ferrari",
    modelo: "SF90",
    velocidadKmh: 340,
    pesoKg: 1570
  }
];

console.log(convertirUnidadesAutos(autos));