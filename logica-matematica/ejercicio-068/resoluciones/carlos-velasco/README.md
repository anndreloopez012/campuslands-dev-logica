# Logica matematica 068 - sistema de valoración y puntuación cinematográfica

## Motor de Cálculo de Calificación Final

Este script procesa un conjunto de votos de audiencia para una película y calcula una puntuación final ajustada. Incorpora bonificaciones por crítica profesional y penalizaciones por factores externos para determinar la clasificación cualitativa del filme.

* **Descripción del proceso:**
* **Validación de Integridad**: Verifica que existan votos en el arreglo; de lo contrario, retorna un error.
* **Cálculo de Base**: Utiliza el método `.reduce()` para sumar de manera eficiente todos los valores contenidos en el arreglo de votos.
* **Ajuste de Puntuación**: Aplica la fórmula de ponderación: $\text{puntajeFinal} = \sum(\text{votos}) + \text{bono} - \text{penalizacion}$.
* **Clasificación por Rangos**:
* **Obra Maestra**: Puntuación $\ge 80$.
* **Competitivo**: Puntuación entre $50$ y $79$.
* **De culto**: Puntuación $< 50$.




* **Tecnologías:**
* JavaScript (método de reducción `.reduce()`, lógica condicional `if-else`).



---

### Explicación técnica

1. **Sumatoria Funcional**: El uso de `.reduce()` convierte un conjunto de datos iterativos en un solo valor acumulado de forma declarativa, eliminando la necesidad de bucles `for` tradicionales.
2. **Escalabilidad**: El sistema permite ajustar fácilmente los umbrales de clasificación en la estructura `if-else`, adaptándose a criterios de crítica más estrictos o flexibles según sea necesario.

### Lógica del Código

```javascript
const calcularPuntuacionPelicula = (votos, bono, penalizacion) => {
    // 1. Validación de entrada
    if (!votos || votos.length === 0) return { error: "No hay votos" };

    // 2. Cálculo de sumatoria y ajuste final
    const suma = votos.reduce((acc, voto) => acc + voto, 0);
    const puntajeFinal = suma + bono - penalizacion;
    
    // 3. Determinación de estatus cualitativo
    let clasificacion = "";
    if (puntajeFinal >= 80) clasificacion = "Obra Maestra";
    else if (puntajeFinal >= 50) clasificacion = "Competitivo";
    else clasificacion = "De culto";

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Se sumaron ${votos.length} votos, se aplicó bono de ${bono} y penalización de ${penalizacion}.`
    };
};

```

### Salida Esperada

```json
{
  "puntaje_final": 80,
  "clasificacion": "Obra Maestra",
  "explicacion": "Se sumaron 3 votos, se aplicó bono de 8 y penalización de 3."
}
{
  "puntaje_final": 7,
  "clasificacion": "De culto",
  "explicacion": "Se sumaron 2 votos, se aplicó bono de 2 y penalización de 10."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-matematica/
└── logica-general/
    └── ejercicio-068/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco