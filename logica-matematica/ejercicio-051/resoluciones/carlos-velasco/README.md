# Logica matematica 051 - sistema de calculo de enfrentamientos

## Motor de Combinatoria de Combates

Este script calcula la cantidad total de enfrentamientos únicos (1vs1) posibles dentro de diferentes categorías de peleadores, basándose en el número de participantes registrados en cada nivel.

* **Descripción del proceso:**
* **Iteración por Niveles**: Recorre cada categoría proporcionada en el objeto de entrada.
* **Cálculo Combinatorio**: Utiliza la fórmula matemática de combinaciones para determinar cuántos pares únicos pueden formarse con $n$ peleadores: $C = \frac{n(n-1)}{2}$.
* **Acumulación de Resultados**: Suma las combinaciones de todos los niveles para obtener un total global y mantiene un detalle por categoría.
* **Generación de Informe**: Devuelve un objeto estructurado con el total acumulado y el desglose detallado.


* **Tecnologías:**
* JavaScript (objetos, bucles `for...in`, aritmética básica).



---

### Explicación técnica

1. **Fórmula Matemática**: El código implementa la fórmula de combinaciones simples ($n$ sobre 2), que es la forma estándar de calcular cuántos enfrentamientos 1vs1 se pueden realizar sin repeticiones en un grupo dado.
2. **Estructura de Retorno**: Proporciona un formato de salida claro, separando el resultado global del análisis granular, lo que facilita la auditoría de los datos calculados.

### Lógica del Código

```javascript
const calcularTotalPeleas = (peleadoresPorNivel) => {
    let totalPeleas = 0;
    let detalle = {};

    for (let nivel in peleadoresPorNivel) {
        const n = peleadoresPorNivel[nivel];
        // Aplicación de la fórmula nC2
        const combinaciones = (n * (n - 1)) / 2;
        
        detalle[nivel] = combinaciones;
        totalPeleas += combinaciones;
    }

    return {
        total_peleas: totalPeleas,
        detalle_por_nivel: detalle,
        explicacion: "Se calculó el total de enfrentamientos posibles (1vs1) por cada categoría usando combinatoria básica."
    };
};

```

### Salida Esperada

```json
{
  "total_peleas": 9,
  "detalle_por_nivel": {
    "Principiante": 6,
    "Intermedio": 3
  },
  "explicacion": "Se calculó el total de enfrentamientos posibles (1vs1) por cada categoría usando combinatoria básica."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-051/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco