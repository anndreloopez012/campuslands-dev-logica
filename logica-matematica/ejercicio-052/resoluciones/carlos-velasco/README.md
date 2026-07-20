# Logica matematica 052 - sistema de cálculo de probabilidad de saque

## Motor de Evaluación de Rendimiento en Saque

Este script evalúa la efectividad de un jugador al realizar saques, integrando un margen de confianza externo para ajustar la probabilidad real basada en datos históricos.

* **Descripción del proceso:**
* **Cálculo Base**: Determina la tasa de éxito dividiendo los saques exitosos entre los totales.
* **Aplicación de Margen**: Suma un margen de confianza al resultado obtenido, limitando el valor máximo a 1.0 (100%).
* **Clasificación**: Categoriza al jugador como "Novato", "Promedio" o "Experto" según el umbral de probabilidad alcanzado.
* **Formateo de Salida**: Presenta la probabilidad final como un porcentaje legible con dos decimales.


* **Tecnologías:**
* JavaScript (cálculos aritméticos, métodos de formateo de cadenas `.toFixed()`).



---

### Explicación técnica

1. **Gestión de Límites**: El uso de `if (prob > 1) prob = 1;` actúa como un tope lógico para asegurar que el sistema no supere la probabilidad matemática absoluta (100%).
2. **Clasificación por Umbrales**: La lógica condicional jerárquica permite una segmentación clara del nivel del jugador basándose en el resultado del cálculo.

### Lógica del Código

```javascript
const calcularProbabilidadSaque = (exitosos, totales, margen) => {
    // 1. Manejo de datos inexistentes
    if (totales === 0) return { prob: 0, clasificacion: "Novato", explicacion: "Sin datos." };

    // 2. Cálculo con margen de confianza
    let prob = (exitosos / totales) + margen;
    if (prob > 1) prob = 1;

    // 3. Clasificación según desempeño
    let clasificacion = "Novato";
    if (prob >= 0.8) clasificacion = "Experto";
    else if (prob >= 0.5) clasificacion = "Promedio";

    // 4. Retorno del informe formateado
    return {
        probabilidad_final: (prob * 100).toFixed(2) + "%",
        clasificacion: clasificacion,
        explicacion: `Probabilidad base calculada con margen de confianza de ${margen * 100}%`
    };
};

```

### Salida Esperada

```json
{
  "probabilidad_final": "85.00%",
  "clasificacion": "Experto",
  "explicacion": "Probabilidad base calculada con margen de confianza de 5%"
}
{
  "probabilidad_final": "1.00%",
  "clasificacion": "Novato",
  "explicacion": "Probabilidad base calculada con margen de confianza de 1%"
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-052/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco