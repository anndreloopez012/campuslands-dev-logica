# Logica general 052 - sistema de recomendación de paletas

## Motor de Selección de Paletas Deportivas

Este script analiza un catálogo de paletas y recomienda el modelo más adecuado según el estilo de juego del usuario (ofensivo o defensivo), optimizando la selección basándose en métricas técnicas y peso.

* **Descripción del proceso:**
* **Selección de Métrica**: Elige automáticamente la métrica principal (`control` para estilo defensivo, `velocidad` para estilo ofensivo).
* **Evaluación Comparativa**: Utiliza el método `.reduce()` para comparar las paletas y encontrar la mejor según la métrica elegida.
* **Desempate por Peso**: En caso de empate en la métrica principal, el sistema prioriza la paleta con el peso más bajo.
* **Generación de Recomendación**: Devuelve el modelo seleccionado junto con una justificación del criterio aplicado.


* **Tecnologías:**
* JavaScript (método `.reduce()`, lógica condicional ternaria).



---

### Explicación técnica

1. **Eficiencia en la Búsqueda**: La lógica utiliza `.reduce()` para procesar el catálogo en una sola pasada, manteniendo un código limpio y eficiente.
2. **Criterios de Desempate**: La implementación de una regla de desempate basada en el `peso` asegura que, ante capacidades técnicas iguales, el jugador reciba siempre la opción más ligera y manejable.

### Lógica del Código

```javascript
const recomendarPaleta = (paletas, estilo) => {
    // 1. Verificación de catálogo
    if (paletas.length === 0) return { recomendada: null, razon: "No hay paletas disponibles." };

    // 2. Reducción para encontrar la mejor paleta
    const mejorPaleta = paletas.reduce((mejor, actual) => {
        const metrica = estilo === "defensivo" ? "control" : "velocidad";
        
        // Comparar métrica principal
        if (actual[metrica] > mejor[metrica]) return actual;
        // Desempate por peso si la métrica es igual
        if (actual[metrica] === mejor[metrica]) {
            return actual.peso < mejor.peso ? actual : mejor;
        }
        return mejor;
    });

    return {
        recomendada: mejorPaleta.modelo,
        razon: `Seleccionada por tener el mejor ${estilo === "defensivo" ? "control" : "velocidad"} y peso óptimo.`
    };
};

```

### Salida Esperada

```json
{
  "recomendada": "LightAttack",
  "razon": "Seleccionada por tener el mejor velocidad y peso óptimo."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-052/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco