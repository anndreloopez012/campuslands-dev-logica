# Logica general 060 - sistema de selección inteligente de ingredientes

## Motor de Selección de Insumos basado en Estrategias

Este script automatiza la elección de un ingrediente dentro de un inventario dado, aplicando diferentes criterios de decisión (estrategias) según las necesidades operativas de la cocina.

* **Descripción del proceso:**
* **Validación Inicial**: Comprueba si el inventario contiene elementos antes de proceder para evitar errores de ejecución.
* **Motor de Decisión (Switch)**: Evalúa la `estrategia` solicitada ("económica", "premium", "popular") para determinar qué lógica de selección aplicar.
* **Selección Dinámica**: Utiliza el método `.reduce()` para comparar todos los elementos del inventario y extraer aquel que cumple con la condición extrema del criterio seleccionado (costo mínimo, frescura máxima o popularidad máxima).
* **Informe de Selección**: Retorna el nombre del ingrediente seleccionado junto con el motivo basado en la estrategia utilizada.


* **Tecnologías:**
* JavaScript (método `.reduce()`, control de flujo `switch`, manejo de arreglos).



---

### Explicación técnica

1. **Eficiencia en la Comparación**: El uso de `.reduce()` permite recorrer el arreglo una sola vez para encontrar el valor extremo buscado (mínimo o máximo), lo cual es más eficiente que ordenar el arreglo completo cuando solo necesitamos un único elemento.
2. **Escalabilidad**: La estructura `switch` permite añadir nuevas estrategias de selección (ej. "sostenible", "proximidad") simplemente añadiendo un nuevo `case`, facilitando el mantenimiento y la extensibilidad del código.

### Lógica del Código

```javascript
const seleccionarIngrediente = (ingredientes, estrategia) => {
    // 1. Verificar inventario vacío
    if (ingredientes.length === 0) return { ingrediente: "Ninguno", motivo: "Inventario vacío." };

    let seleccionado;

    // 2. Aplicar lógica según la estrategia
    switch (estrategia) {
        case "económica":
            seleccionado = ingredientes.reduce((min, cur) => cur.costo < min.costo ? cur : min);
            break;
        case "premium":
            seleccionado = ingredientes.reduce((max, cur) => cur.frescura > max.frescura ? cur : max);
            break;
        case "popular":
            seleccionado = ingredientes.reduce((max, cur) => cur.popularidad > max.popularidad ? cur : max);
            break;
        default:
            return { ingrediente: "Error", motivo: "Estrategia no válida." };
    }

    return { 
        ingrediente_seleccionado: seleccionado.nombre, 
        motivo: `Elegido bajo estrategia: ${estrategia}.` 
    };
};

```

### Salida Esperada

```json
{
  "ingrediente_seleccionado": "Tomate",
  "motivo": "Elegido bajo estrategia: económica."
}
{
  "ingrediente_seleccionado": "Carne",
  "motivo": "Elegido bajo estrategia: premium."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-060/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco