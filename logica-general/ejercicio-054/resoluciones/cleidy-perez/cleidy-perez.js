const inventarioMotos = [
  { id: 1, marca: "Honda", modelo: "CBR 600", anio: 2022, kilometraje: 19000, estado: "segura" },
  { id: 2, marca: "Yamaha", modelo: "R1", anio: 2026, kilometraje: -500, estado: "segura" }, 
  { id: 3, marca: "Suzuki", modelo: "", anio: 2019, kilometraje: 3200, estado: "Falla eléctrica" }, 
  { id: 4, marca: "Navi", modelo: "Ninja 400", anio: 1850, kilometraje: 1200, estado: "segura" },
  { id: 5, marca: "Freedom", modelo: "Monster", anio: 2023, kilometraje: 9000, estado: "Falla eléctrica" } 
];

function diagnosticoErrorEstado(motos) {

  if (!motos || motos.length === 0) {
    console.log("No hay motos en el inventario para realizar el diagnostico");
    return [];
  }

  const reporteErrores = [];
  const anioActual = new Date().getFullYear(); 


  motos.forEach(moto => {
    let errores = [];

    if (!moto.marca.trim()) errores.push("La marca está vacía.");
    if (!moto.modelo.trim()) errores.push("El modelo está vacío.");

    if (moto.kilometraje < 0) errores.push(`Kilometraje inválido (${moto.kilometraje} km).`);
    if (moto.anio < 1900 || moto.anio > anioActual) errores.push(`Año incoherente (${moto.anio}).`);

    if (moto.estado.toLowerCase() === "segura" && errores.length > 0) {
      errores.push("Inconsistencia: Marcada como 'segura' pero tiene errores de datos.");
    }
    if (errores.length > 0 || moto.estado === "Falla eléctrica") {
      reporteErrores.push({
        id: moto.id,
        moto: `${moto.marca || "Desconocida"} ${moto.modelo || "Sin Modelo"}`,
        estadoActual: moto.estado,
        detallesDiagnostico: errores.length > 0 ? errores : ["Reporta falla eléctrica de fábrica."]
      });
    }
  });

  return reporteErrores;
}

const resultado = diagnosticoErrorEstado(inventarioMotos);
console.log("=== RESULTADO DEL DIAGNÓSTICO ===");
console.log(resultado);