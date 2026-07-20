# Logica general 065 - sistema de priorización de trabajos (taller)

## Motor de Gestión de Colas de Mantenimiento

Este script optimiza el flujo de trabajo en un taller mecánico ordenando las tareas pendientes. El sistema prioriza los vehículos no solo por su nivel de urgencia, sino también por el tiempo de reparación, aplicando una lógica de "trabajo más corto primero" dentro de cada nivel de urgencia.

* **Descripción del proceso:**
* **Asignación de Pesos**: Define un diccionario (`pesoUrgencia`) que traduce niveles cualitativos ("alta", "media", "baja") a valores numéricos (1, 2, 3) para facilitar la comparación matemática.
* **Ordenamiento de Doble Criterio**:
1. **Criterio Principal (Urgencia)**: Se asegura de que los trabajos de prioridad "alta" siempre se procesen antes que los de "media" o "baja".
2. **Criterio Secundario (Tiempo)**: Si dos vehículos tienen la misma urgencia, el sistema coloca primero el que requiere menos tiempo de reparación (`tiempoHoras`), mejorando la eficiencia operativa.


* **Inmutabilidad**: Utiliza el operador spread `[...taller]` para devolver un nuevo arreglo ordenado sin alterar la lista original.


* **Tecnologías:**
* JavaScript (método `.sort()`, objetos de mapeo de prioridades, lógica de comparativa múltiple).



---

### Explicación técnica

1. **Eficiencia en Comparación**: El algoritmo de ordenamiento `sort` compara el `pesoUrgencia` de los objetos. Si estos difieren, retorna la resta de sus pesos; si son iguales, recurre a la resta de los tiempos de reparación.
2. **Escalabilidad**: El diccionario `pesoUrgencia` permite añadir nuevos niveles de prioridad sin necesidad de modificar la estructura compleja de la lógica de ordenamiento.

### Lógica del Código

```javascript
const organizarCola = (taller) => {
    // 1. Mapeo de prioridades para ordenamiento lógico
    const pesoUrgencia = { "alta": 1, "media": 2, "baja": 3 };

    // 2. Ordenamiento mediante comparación de doble criterio
    return [...taller].sort((a, b) => {
        // Comparar por urgencia
        if (pesoUrgencia[a.urgencia] !== pesoUrgencia[b.urgencia]) {
            return pesoUrgencia[a.urgencia] - pesoUrgencia[b.urgencia];
        }
        // Si la urgencia es igual, comparar por tiempo
        return a.tiempoHoras - b.tiempoHoras;
    });
};

```

### Salida Esperada

```json
[
  { "vehiculo": "Auto", "urgencia": "alta", "tiempoHoras": 1 },
  { "vehiculo": "Camioneta", "urgencia": "alta", "tiempoHoras": 5 },
  { "vehiculo": "Moto", "urgencia": "media", "tiempoHoras": 2 }
]

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-065/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco