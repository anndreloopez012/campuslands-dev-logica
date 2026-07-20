# Logica general 061 - sistema de clasificación de jugadores

## Motor de Clasificación de Perfil de Usuario

Este script evalúa el perfil de un jugador basándose en su conducta (reportes de toxicidad) y su desempeño competitivo (tasa de victorias). Su propósito es determinar el estatus del jugador dentro de una comunidad de juego mediante un sistema jerárquico de reglas.

* **Descripción del proceso:**
* **Validación Crítica (Filtro de Toxicidad)**: El sistema verifica primero el comportamiento del usuario. Si los reportes exceden el umbral permitido (5), el jugador es suspendido independientemente de su habilidad. Esto garantiza la integridad de la comunidad.
* **Análisis de Desempeño (Reglas de Nivel)**: Si el jugador cumple con el estándar de conducta, se analiza su `tasaVictorias`:
* **Pro**: $\ge 70\%$ de victorias.
* **Casual**: Entre $40\%$ y $69\%$.
* **Novato**: $< 40\%$.


* **Reporte de Clasificación**: Retorna un objeto con la categoría asignada y la justificación lógica del resultado.


* **Tecnologías:**
* JavaScript (lógica condicional `if-else` jerárquica).



---

### Explicación técnica

1. **Orden de Prioridad (Short-circuiting)**: Al evaluar primero la toxicidad, el código evita realizar cálculos innecesarios sobre el desempeño competitivo de jugadores que ya han sido sancionados, optimizando la ejecución.
2. **Claridad del Sistema**: Cada condición tiene un `motivo` explícito, lo que facilita el soporte técnico y la transparencia con el usuario final al explicar por qué se le asignó cierta categoría.

### Lógica del Código

```javascript
const clasificarJugador = (jugador) => {
    // 1. Regla crítica: Toxicidad (prioridad máxima)
    if (jugador.reportesToxicidad > 5) {
        return { categoria: "Suspendido", motivo: "Exceso de reportes por comportamiento tóxico." };
    }

    // 2. Reglas de nivel según tasa de victorias
    if (jugador.tasaVictorias >= 70) {
        return { categoria: "Pro", motivo: "Excelente tasa de victorias." };
    } else if (jugador.tasaVictorias >= 40) {
        return { categoria: "Casual", motivo: "Tasa de victorias estándar." };
    } else {
        return { categoria: "Novato", motivo: "Jugador en etapa de aprendizaje." };
    }
};

```

### Salida Esperada

```json
{
  "categoria": "Pro",
  "motivo": "Excelente tasa de victorias."
}
{
  "categoria": "Suspendido",
  "motivo": "Exceso de reportes por comportamiento tóxico."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-061/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco