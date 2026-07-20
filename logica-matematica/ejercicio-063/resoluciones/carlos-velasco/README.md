# Logica matematica 063 - sistema de análisis de rendimiento estadístico

## Motor de Análisis de Tendencia Central en Jugadores

Este script procesa una serie de puntajes individuales para evaluar el perfil estadístico de un jugador. Utiliza medidas de tendencia central (promedio y mediana) para determinar si el rendimiento es consistente, irregular o equilibrado.

* **Descripción del proceso:**
* **Validación de Datos**: Comprueba si el arreglo de puntajes está vacío para evitar errores de cálculo.
* **Cálculo de Promedio**: Suma todos los elementos y los divide por la cantidad total, proporcionando una visión general de la puntuación media.
* **Cálculo de Mediana**: Ordena los puntajes de menor a mayor y encuentra el valor central. Si el conjunto es par, promedia los dos valores centrales.
* **Clasificación Estadísticamente Basada**:
* **Jugador Consistente**: Cuando el promedio es mayor a la mediana (indica una tendencia hacia puntajes altos).
* **Jugador Irregular**: Cuando el promedio es menor a la mediana (indica presencia de valores atípicos bajos o una distribución sesgada).
* **Jugador Equilibrado**: Cuando el promedio es igual a la mediana.




* **Tecnologías:**
* JavaScript (método `.reduce()`, ordenamiento de arreglos, operaciones aritméticas).



---

### Explicación técnica

1. **Inmutabilidad**: Se utiliza el operador spread `[...scores]` para crear una copia del arreglo antes de ordenar, evitando la mutación de los datos originales.
2. **Lógica de Comparación**: La clasificación permite identificar rápidamente si el rendimiento del jugador está sesgado hacia arriba o hacia abajo respecto al punto medio real de sus actuaciones.

### Lógica del Código

```javascript
const analizarRendimiento = (scores) => {
    // 1. Validar existencia de datos
    if (!scores.length) return { error: "Sin datos" };

    // 2. Calcular promedio
    const suma = scores.reduce((a, b) => a + b, 0);
    const promedio = suma / scores.length;

    // 3. Calcular mediana
    const sorted = [...scores].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const mediana = sorted.length % 2 !== 0 
        ? sorted[mid] 
        : (sorted[mid - 1] + sorted[mid]) / 2;

    // 4. Clasificar tendencia
    let clasif = "Jugador Equilibrado";
    if (promedio > mediana) clasif = "Jugador Consistente";
    else if (promedio < mediana) clasif = "Jugador Irregular";

    return { promedio, mediana, clasificacion: clasif, explicacion: "Análisis basado en tendencia central." };
};

```

### Salida Esperada

```json
{
  "promedio": 30,
  "mediana": 30,
  "clasificacion": "Jugador Equilibrado",
  "explicacion": "Análisis basado en tendencia central."
}
{
  "promedio": 32.5,
  "mediana": 10,
  "clasificacion": "Jugador Consistente",
  "explicacion": "Análisis basado en tendencia central."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-063/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco