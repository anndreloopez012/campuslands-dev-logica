# Logica matemática 072 - sistema de cálculo de probabilidad de éxito

## Motor de Análisis Estadístico (Ratio de Victorias)

Este script calcula la probabilidad porcentual de victoria de un jugador o equipo basándose en su historial de juegos ganados y perdidos. El sistema normaliza los resultados para proporcionar una estadística clara, facilitando la interpretación del rendimiento deportivo.

* **Descripción del proceso:**
* **Validación de Datos**: Verifica si el total de puntos es cero para evitar errores matemáticos de división por cero.
* **Cálculo de Probabilidad**: Aplica la fórmula de proporción:

$$\text{Probabilidad} = \left( \frac{\text{Victorias}}{\text{Victorias} + \text{Derrotas}} \right) \times 100$$


* **Normalización de Salida**: Formatea el resultado a dos decimales mediante `toFixed(2)` y lo convierte a una cadena de texto con el símbolo de porcentaje (`%`).
* **Reporte**: Devuelve un objeto con el porcentaje de éxito calculado y un resumen explicativo del historial.


* **Tecnologías:**
* JavaScript (cálculo aritmético de proporciones, validación de datos, formato de cadenas).



---

### Explicación técnica

1. **Prevención de Errores**: La validación inicial `totalPuntos === 0` es crucial en entornos de datos, ya que protege la integridad de la función ante registros vacíos o nuevos.
2. **Precisión Decimal**: El uso de `toFixed(2)` garantiza que los porcentajes no contengan decimales infinitos o redundantes, cumpliendo con estándares de presentación de reportes estadísticos.

### Lógica del Código

```javascript
const calcularProbabilidadVictoria = (puntosGanados, puntosPerdidos) => {
    const totalPuntos = puntosGanados + puntosPerdidos;
    
    // 1. Validar para evitar división por cero
    if (totalPuntos === 0) {
        return {
            probabilidad: 0,
            explicacion: "No hay registro de puntos para calcular probabilidad."
        };
    }

    // 2. Calcular ratio y convertir a porcentaje
    const probabilidad = (puntosGanados / totalPuntos) * 100;

    // 3. Formatear salida con 2 decimales
    return {
        probabilidad_victoria: parseFloat(probabilidad.toFixed(2)) + "%",
        explicacion: `Se calcularon las probabilidades basándose en ${puntosGanados} juegos ganados de un total de ${totalPuntos}.`
    };
};

```

### Salida Esperada

```json
{
  "probabilidad_victoria": "75%",
  "explicacion": "Se calcularon las probabilidades basándose en 15 juegos ganados de un total de 20."
}
{
  "probabilidad_victoria": "0%",
  "explicacion": "Se calcularon las probabilidades basándose en 0 juegos ganados de un total de 10."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-072/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco