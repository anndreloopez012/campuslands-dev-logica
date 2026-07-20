# Logica general - sistema de búsqueda de hiperdeportivos

## Motor de Selección y Exclusividad Automotriz

Este script implementa un sistema de búsqueda avanzada para un concesionario de vehículos de superlujo. Su objetivo es encontrar el hiperdeportivo ideal para un cliente basándose en sus preferencias de marca y rendimiento mínimo, aplicando además un criterio de desempate basado en la exclusividad (menor volumen de producción).

* **Descripción del proceso:**
* **Desestructuración de Datos**: Extrae de forma limpia los criterios de búsqueda (`marcaDeseada` y `velocidadMinima`) para facilitar su uso.
* **Filtrado Inteligente**: Utiliza `.filter()` para evaluar el inventario. Se aplica `.toLowerCase()` para hacer la búsqueda insensible a mayúsculas/minúsculas y se verifica que la velocidad máxima cumpla con el requisito.
* **Gestión de Casos Vacíos**: Si la búsqueda inicial no arroja ningún resultado, el sistema alerta de inmediato que no hay coincidencias bajo esos parámetros.
* **Algoritmo de Exclusividad**: Si hay más de un candidato, utiliza el método `.reduce()` para iterar sobre los resultados filtrados y quedarse únicamente con el vehículo que tenga el menor número de `unidadesProducidas`.
* **Reporte de Asignación**: Devuelve un objeto detallado con la acción a tomar, el modelo definitivo encontrado y la justificación técnica de la elección.


* **Tecnologías:**
* JavaScript (métodos de arreglos `.filter()` y `.reduce()`, manipulación de strings `.toLowerCase()`, asignación por desestructuración).



---

### Explicación técnica

1. **Búsqueda Insensible a Mayúsculas**: Al normalizar el texto de entrada (`toLowerCase()`), el sistema previene fallos comunes de entrada de usuario (por ejemplo, buscar "bugatti" vs "Bugatti").
2. **Optimización con Reduce**: En lugar de ordenar todo el arreglo de candidatos (`sort`) y tomar el primero (lo cual tomaría $O(n \log n)$), el sistema utiliza `.reduce()` para encontrar el mínimo en una sola pasada, logrando una complejidad de tiempo óptima de $O(n)$.

### Lógica del Código

```javascript
const buscarHiperdeportivo = (inventario, criterio) => {
    const { marcaDeseada, velocidadMinima } = criterio;

    // 1. Filtrar los elementos que cumplen con las condiciones iniciales
    const candidatos = inventario.filter(auto => 
        auto.marca.toLowerCase() === marcaDeseada.toLowerCase() && 
        auto.velocidadMax >= velocidadMinima
    );

    // 2. Validar si la búsqueda arrojó resultados
    if (candidatos.length === 0) {
        return {
            accion: "Continuar búsqueda",
            modelo_encontrado: "Ninguno",
            motivo: `No se encontraron autos de la marca ${marcaDeseada} que alcancen los ${velocidadMinima} km/h.`
        };
    }

    // 3. Aplicar regla de desempate por exclusividad (menor número de unidades producidas)
    const autoOptimo = candidatos.reduce((exclusivo, actual) => 
        actual.unidadesProducidas < exclusivo.unidadesProducidas ? actual : exclusivo
    );

    return {
        accion: "Asignar vehículo al cliente",
        modelo_encontrado: `${autoOptimo.marca} ${autoOptimo.modelo}`,
        motivo: `Cumple con la velocidad de ${autoOptimo.velocidadMax} km/h y es el espécimen más exclusivo con solo ${autoOptimo.unidadesProducidas} unidades.`
    };
};

```

### Salida Esperada

```json
{
  "accion": "Asignar vehículo al cliente",
  "modelo_encontrado": "Bugatti Bolide",
  "motivo": "Cumple con la velocidad de 501 km/h y es el espécimen más exclusivo con solo 40 unidades."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-066/  <-- (Asignado conceptualmente por secuencia)
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco