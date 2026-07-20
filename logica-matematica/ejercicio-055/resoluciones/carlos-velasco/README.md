# Logica matematica 055 - sistema de cálculo de tiempo de producción

## Motor de Estimación de Tiempos en Procesos Creativos

Este script estima el tiempo total requerido para completar una obra o diseño, considerando tanto el tiempo técnico de ejecución de trazos individuales como los tiempos de descanso necesarios entre ellos.

* **Descripción del proceso:**
* **Cálculo de Ejecución**: Utiliza el método `.reduce()` para sumar el tiempo invertido en cada trazo, calculado dividiendo la longitud en píxeles por la velocidad específica del trazado.
* **Gestión de Descansos**: Aplica pausas programadas entre trazos; si existen $n$ trazos, se calculan $(n - 1)$ intervalos de descanso.
* **Clasificación del Proceso**: Categoriza el flujo de trabajo como "Rápido", "Eficiente" o "Detallado" basándose en el tiempo total resultante (en minutos).
* **Informe Final**: Devuelve un objeto con la duración total redondeada, la categoría asignada y una descripción del cálculo aplicado.


* **Tecnologías:**
* JavaScript (método `.reduce()`, manipulación de arreglos, lógica condicional).



---

### Explicación técnica

1. **Eficiencia en la Sumatoria**: La implementación de `.reduce()` permite procesar eficientemente una lista dinámica de trazos con diferentes especificaciones de velocidad.
2. **Lógica de Intervalos**: El cálculo `(trazos.length - 1) * descanso` asegura que no se añada un descanso innecesario tras completar el último trazo.

### Lógica del Código

```javascript
const calcularTiempoProduccion = (trazos, descanso) => {
    // 1. Manejo de caso vacío
    if (trazos.length === 0) return { tiempo_total: 0, clasificacion: "Rápido", explicacion: "Sin trazos." };

    // 2. Sumatoria de tiempos de dibujo
    const tiempoDibujo = trazos.reduce((acum, t) => acum + (t.longitudPx / t.velocidadTrazado), 0);
    
    // 3. Cálculo total incluyendo descansos
    const tiempoTotal = tiempoDibujo + (trazos.length - 1) * descanso;

    // 4. Clasificación según umbrales de tiempo
    let clasificacion = "Detallado";
    if (tiempoTotal < 60) clasificacion = "Rápido";
    else if (tiempoTotal < 120) clasificacion = "Eficiente";

    return {
        tiempo_total: tiempoTotal.toFixed(2),
        clasificacion: clasificacion,
        explicacion: `Producción calculada con ${trazos.length} trazos y descansos de ${descanso}min.`
    };
};

```

### Salida Esperada

```json
{
  "tiempo_total": "75.00",
  "clasificacion": "Eficiente",
  "explicacion": "Producción calculada con 2 trazos y descansos de 5min."
}
{
  "tiempo_total": "0.50",
  "clasificacion": "Rápido",
  "explicacion": "Producción calculada con 1 trazos y descansos de 5min."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-055/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco