 # Logica matematica 058 - sistema de normalización de puntajes

## Motor de Conversión y Clasificación de Calificaciones

Este script normaliza una lista de puntajes brutos hacia una escala porcentual estandarizada, aplicando un ajuste de bonificación y limitando el resultado dentro de un rango operativo de 0 a 100.

* **Descripción del proceso:**
* **Normalización Matemática**: Calcula el porcentaje relativo dividiendo el puntaje original por el valor máximo (`puntaje / max * 100`) y sumando un factor de `ajuste` opcional.
* **Control de Rango (Clamping)**: Utiliza `Math.max` y `Math.min` para asegurar que ningún puntaje final sea menor a 0 o mayor a 100, independientemente del ajuste aplicado.
* **Clasificación Cualitativa**: Asigna un estado ("Certificado", "Aprobado" o "Reprobado") basándose en umbrales de desempeño predefinidos.
* **Reporte de Transformación**: Devuelve un objeto que incluye el valor original, el valor normalizado formateado a dos decimales y la categoría final.


* **Tecnologías:**
* JavaScript (método `.map()`, funciones matemáticas `Math.max/min`, formateo de cadenas).



---

### Explicación técnica

1. **Estandarización**: El uso de `map()` permite transformar el conjunto de datos original en una nueva estructura enriquecida, manteniendo la inmutabilidad de la entrada.
2. **Seguridad de Límites**: La combinación `Math.max(0, Math.min(100, final))` es una técnica estándar para evitar valores atípicos (*outliers*) que podrían romper la lógica de clasificación de un sistema de calificaciones.

### Lógica del Código

```javascript
const normalizarPuntajes = (puntajes, max, ajuste) => {
    return puntajes.map(p => {
        // 1. Calcular y ajustar puntaje
        let final = ((p / max) * 100) + ajuste;
        
        // 2. Limitar entre 0 y 100 (Clamping)
        final = Math.max(0, Math.min(100, final));

        // 3. Clasificar según umbrales
        let clasificacion = "Reprobado";
        if (final >= 90) clasificacion = "Certificado";
        else if (final >= 70) clasificacion = "Aprobado";

        return { original: p, final: final.toFixed(2), clasificacion };
    });
};

```

### Salida Esperada

```json
[
  { "original": 80, "final": "85.00", "clasificacion": "Aprobado" },
  { "original": 45, "final": "50.00", "clasificacion": "Reprobado" },
  { "original": 95, "final": "100.00", "clasificacion": "Certificado" }
]

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-058/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco