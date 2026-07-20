# Logica matematica 064 - sistema de análisis de rendimiento técnico (motos)

## Motor de Diagnóstico de Desempeño Mecánico

Este script evalúa los resultados de múltiples pruebas técnicas de una motocicleta, comparando el rendimiento máximo alcanzado contra umbrales predefinidos. El sistema determina si la unidad se encuentra en un estado óptimo, sufre de desgaste o presenta un rendimiento insuficiente.

* **Descripción del proceso:**
* **Validación de Datos**: Verifica que el arreglo `pruebas` no esté vacío para prevenir errores de cálculo.
* **Cálculo de Métricas**:
* **Máximo**: Identifica el pico de rendimiento registrado (`Math.max`).
* **Promedio**: Determina el rendimiento medio de todas las pruebas realizadas (`reduce`).


* **Clasificación de Estado**:
* **Desgaste Excesivo**: Si el máximo supera el límite superior (`max`).
* **Bajo Rendimiento**: Si el máximo no alcanza el límite inferior (`min`).
* **Certificada**: Si el rendimiento se mantiene dentro del rango establecido.


* **Reporte**: Devuelve los valores calculados junto con un resumen explicativo.


* **Tecnologías:**
* JavaScript (métodos de arreglos, operaciones matemáticas de conjunto, formateo de números).



---

### Explicación técnica

1. **Eficiencia en Cálculos**: El uso de `Math.max(...pruebas)` con el operador spread permite obtener el valor crítico de forma directa y legible.
2. **Normalización**: El promedio es formateado a dos decimales con `.toFixed(2)` para asegurar que el informe técnico sea limpio y estandarizado, facilitando la interpretación humana.

### Lógica del Código

```javascript
const analizarRendimientoMoto = (pruebas, min, max) => {
    // 1. Validar existencia de datos
    if (!pruebas.length) return { error: "Sin pruebas registradas." };

    // 2. Calcular métricas clave
    const maximo = Math.max(...pruebas);
    const promedio = pruebas.reduce((a, b) => a + b, 0) / pruebas.length;

    // 3. Determinar estado de la unidad
    let clasificacion = "Certificada";
    if (maximo > max) clasificacion = "Desgaste Excesivo";
    else if (maximo < min) clasificacion = "Bajo Rendimiento";

    return {
        maximo,
        promedio: promedio.toFixed(2),
        clasificacion,
        explicacion: `Moto con prueba máxima de ${maximo}km frente a límites ${min}-${max}.`
    };
};

```

### Salida Esperada

```json
{
  "maximo": 200,
  "promedio": "150.00",
  "clasificacion": "Certificada",
  "explicacion": "Moto con prueba máxima de 200km frente a límites 100-250."
}
{
  "maximo": 60,
  "promedio": "55.00",
  "clasificacion": "Bajo Rendimiento",
  "explicacion": "Moto con prueba máxima de 60km frente a límites 100-250."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-064/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco