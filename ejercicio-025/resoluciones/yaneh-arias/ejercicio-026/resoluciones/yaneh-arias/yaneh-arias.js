
/**
 * Ejercicio 026: Conversión de Unidades - Autos Hiperdeportivos
 * Regla: 1 HP = 0.7457 kW | 1 MPH = 1.60934 KM/H
 */

function convertirEspecificaciones(valores, tipo) {
    if (!valores || valores.length === 0) return "Entrada inválida";

    // Función pura para convertir según tipo
    const aplicarConversion = (valor) => {
        if (tipo === "HP_TO_KW") return valor * 0.7457;
        if (tipo === "MPH_TO_KMH") return valor * 1.60934;
        return valor;
    };

    // Usamos .map para transformar el arreglo original manteniendo el orden
    return valores.map(valor => ({
        original: valor,
        convertido: aplicarConversion(valor).toFixed(2)
    }));
}

// Pruebas
const potenciaHP = [1000, 1500, 2000];
console.log("Conversión HP a KW:", convertirEspecificaciones(potenciaHP, "HP_TO_KW"));

const velocidadMPH = [250, 300];
console.log("Conversión MPH a KM/H:", convertirEspecificaciones(velocidadMPH, "MPH_TO_KMH"));