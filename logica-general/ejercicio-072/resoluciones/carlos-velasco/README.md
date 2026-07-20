# Logica general 072 - sistema de comparación de rendimiento de equipos

## Motor de Análisis Comparativo (Paletas de Ping Pong)

Este script implementa una herramienta de decisión para comparar dos equipos (en este caso, paletas de ping pong) basándose en atributos técnicos específicos: **velocidad** y **control**. El sistema calcula un promedio de rendimiento para determinar qué modelo ofrece el mejor equilibrio.

* **Descripción del proceso:**
* **Normalización de Métricas**: Define una función interna `calcularScore` que promedia la velocidad y el control de cada objeto.
* **Cálculo de Rendimiento**: Obtiene el promedio individual para `opcionA` y `opcionB`.
* **Evaluación Comparativa**: Utiliza una estructura condicional `if-else` para contrastar los resultados:
* Si el `scoreA` es mayor, elige la `opcionA`.
* Si el `scoreB` es mayor, elige la `opcionB`.
* Si son iguales, declara un empate técnico.


* **Generación de Reporte**: Retorna un objeto con el modelo ganador y la justificación técnica del resultado.


* **Tecnologías:**
* JavaScript (funciones internas, manipulación de objetos, lógica condicional).



---

### Explicación técnica

1. **Abstracción de Cálculo**: Al encapsular la lógica de cálculo en la función `calcularScore`, se mantiene el código DRY (*Don't Repeat Yourself*), lo que permite que el mantenimiento de la fórmula sea sencillo: si en el futuro se desea añadir una ponderación (ej. dar más peso a la velocidad), solo se modifica una línea.
2. **Determinismo**: El sistema siempre retorna un resultado basado en datos cuantitativos, eliminando la subjetividad en la elección del equipo.

### Lógica del Código

```javascript
const compararPaletas = (opcionA, opcionB) => {
    // 1. Definir criterio de evaluación (promedio simple)
    const calcularScore = (paleta) => (paleta.velocidad + paleta.control) / 2;

    const scoreA = calcularScore(opcionA);
    const scoreB = calcularScore(opcionB);

    // 2. Comparar resultados
    if (scoreA > scoreB) {
        return { mejor: opcionA.modelo, motivo: "Superioridad en balance velocidad-control." };
    } else if (scoreB > scoreA) {
        return { mejor: opcionB.modelo, motivo: "Superioridad en balance velocidad-control." };
    } else {
        return { mejor: "Empate", motivo: "Ambas paletas ofrecen el mismo rendimiento." };
    }
};

```

### Salida Esperada

```json
{
  "mejor": "Pro-Spin",
  "motivo": "Superioridad en balance velocidad-control."
}
{
  "mejor": "Igual",
  "motivo": "Ambas paletas ofrecen el mismo rendimiento."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-072/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco