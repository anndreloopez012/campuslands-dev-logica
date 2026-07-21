const tablaDecisionMateriales = [
  { condiciones: { uso: 'estructural', resistencia: 'alta', exposicion: 'exterior' }, resultado: 'Hormigón Armado' },
  { condiciones: { uso: 'estructural', resistencia: 'alta', exposicion: 'interior' }, resultado: 'Acero Laminado' },
  { condiciones: { uso: 'decorativo', resistencia: 'media', exposicion: 'interior' }, resultado: 'Madera de Roble' },
  { condiciones: { uso: 'decorativo', resistencia: 'baja', exposicion: 'interior' }, resultado: 'Yeso Cartón (Drywall)' },
  { condiciones: { uso: 'cerramiento', resistencia: 'media', exposicion: 'exterior' }, resultado: 'Ladrillo Visto' },
  { condiciones: { uso: 'cristaleria', resistencia: 'media', exposicion: 'exterior' }, resultado: 'Vidrio Templado Doble' },
];

function seleccionarMaterial(componente) {
  const reglaEncontrada = tablaDecisionMateriales.find(regla =>
    regla.condiciones.uso === componente.uso &&
    regla.condiciones.resistencia === componente.resistencia &&
    regla.condiciones.exposicion === componente.exposicion
  );

  if (reglaEncontrada) {
    return {
      materialSugerido: reglaEncontrada.resultado,
      justificacion: `Se seleccionó ${reglaEncontrada.resultado} porque es ideal para uso ${componente.uso} con resistencia ${componente.resistencia} en un ambiente ${componente.exposicion}.`
    };
  }

  return {
    materialSugerido: 'Material Genérico Multiuso',
    justificacion: 'No se encontró una regla específica para la combinación de propiedades. Se recomienda una revisión manual.'
  };
}

const vigaExterior = { uso: 'estructural', resistencia: 'alta', exposicion: 'exterior' };
console.log("--- Caso Normal: Viga Estructural Exterior ---");
console.log(seleccionarMaterial(vigaExterior));

const panelDecorativoExterior = { uso: 'decorativo', resistencia: 'baja', exposicion: 'exterior' };
console.log("\n--- Caso Borde: Combinación no existente ---");
console.log(seleccionarMaterial(panelDecorativoExterior));

const tabiqueInterior = { uso: 'decorativo', resistencia: 'baja', exposicion: 'interior' };
console.log("\n--- Otro Caso: Tabique Interior ---");
console.log(seleccionarMaterial(tabiqueInterior));