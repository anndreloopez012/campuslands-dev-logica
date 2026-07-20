# Logica matematica 053 - sistema de evaluación de aterrizaje

## Motor de Cálculo de Precisión de Aterrizaje

Este script determina la precisión con la que un objeto o paracaidista ha aterrizado en relación con un punto objetivo, utilizando coordenadas cartesianas para calcular la distancia euclidiana.

* **Descripción del proceso:**
* **Cálculo de Distancia**: Aplica la fórmula de la distancia entre dos puntos $(p, z)$ en un plano 2D mediante el teorema de Pitágoras: $d = \sqrt{(z_x - p_x)^2 + (z_y - p_y)^2}$.
* **Clasificación por Rangos**: Evalúa la distancia calculada frente a un margen de error permitido para asignar una categoría ("Precisión Perfecta", "Zona Segura" o "Fuera de Zona").
* **Generación de Informe**: Devuelve un objeto detallado con la distancia exacta, el nivel de clasificación y una breve explicación.


* **Tecnologías:**
* JavaScript (objetos, funciones matemáticas `Math.sqrt`, `Math.pow`, y formateo `toFixed`).



---

### Explicación técnica

1. **Geometría Analítica**: El cálculo utiliza la raíz cuadrada de la suma de los cuadrados de las diferencias de las coordenadas, permitiendo obtener la distancia en línea recta independientemente de la dirección.
2. **Lógica de Umbrales**: La clasificación se divide en tres niveles, donde el margen de tolerancia define la dificultad para obtener una "Precisión Perfecta" o estar en una "Zona Segura".

### Lógica del Código

```javascript
const calcularAterrizaje = (p, z, margen) => {
    // 1. Calcular distancia euclidiana
    const distancia = Math.sqrt(Math.pow(z.x - p.x, 2) + Math.pow(z.y - p.y, 2));
    
    // 2. Clasificar según el margen
    let clasificacion = "Fuera de Zona";
    if (distancia <= margen) clasificacion = "Precisión Perfecta";
    else if (distancia <= (margen * 3)) clasificacion = "Zona Segura";

    // 3. Retornar informe
    return {
        distancia: distancia.toFixed(2),
        clasificacion: clasificacion,
        explicacion: `Aterrizaje a ${distancia.toFixed(2)} unidades del centro.`
    };
};

```

### Salida Esperada

```json
{
  "distancia": "1.41",
  "clasificacion": "Precisión Perfecta",
  "explicacion": "Aterrizaje a 1.41 unidades del centro."
}
{
  "distancia": "14.14",
  "clasificacion": "Fuera de Zona",
  "explicacion": "Aterrizaje a 14.14 unidades del centro."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-053/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco