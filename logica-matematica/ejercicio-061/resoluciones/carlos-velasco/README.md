# Logica matematica 061 - sistema de cálculo de MMR (Matchmaking Rating)

## Motor de Ajuste de Calificación Competitiva

Este script determina la variación del *Matchmaking Rating* (MMR) de un jugador tras finalizar una partida, considerando factores como el resultado, rachas de juego y penalizaciones por desconexiones, asignando automáticamente un rango basado en el nuevo puntaje.

* **Descripción del proceso:**
* **Cálculo de Ajuste**: Aplica una lógica jerárquica para determinar el impacto en el MMR:
* **Desconexión**: Penalización fija severa (-50).
* **Victoria**: Recompensa base más un bono escalable por racha (`20 + racha * 5`).
* **Derrota**: Penalización reducida si el jugador tiene una racha activa (`racha > 2`), de lo contrario, una penalización estándar (-15).


* **Protección de Datos (Clamping)**: Asegura que el MMR nunca sea menor a 0 usando `Math.max(0, mmrBase + ajuste)`.
* **Clasificación Automática**: Determina el rango del jugador ("Oro", "Plata" o "Bronce") basado en umbrales de puntuación definidos.


* **Tecnologías:**
* JavaScript (lógica condicional avanzada, funciones matemáticas).



---

### Explicación técnica

1. **Jerarquía de Reglas**: La estructura condicional asegura que la desconexión siempre prevalezca sobre cualquier otro resultado, manteniendo la integridad del sistema competitivo ante comportamientos antideportivos.
2. **Escalabilidad de Racha**: El uso del multiplicador en la victoria (`racha * 5`) incentiva la consistencia, mientras que la lógica en la derrota suaviza el golpe para jugadores en rachas positivas, evitando frustración excesiva.

### Lógica del Código

```javascript
const calcularMMR = (mmrBase, resultado, racha, desconexion) => {
    let ajuste = 0;

    // 1. Determinar ajuste basado en eventos
    if (desconexion) {
        ajuste = -50;
    } else if (resultado === "victoria") {
        ajuste = 20 + (racha * 5);
    } else {
        ajuste = (racha > 2) ? -5 : -15;
    }

    // 2. Calcular nuevo MMR (mínimo 0) y clasificar rango
    let nuevoMMR = Math.max(0, mmrBase + ajuste);
    
    let rango = "Bronce";
    if (nuevoMMR >= 2000) rango = "Oro";
    else if (nuevoMMR >= 1000) rango = "Plata";

    return {
        mmr_final: nuevoMMR,
        clasificacion: rango,
        explicacion: `Ajuste aplicado: ${ajuste}. ${desconexion ? 'Penalización por desconexión.' : ''}`
    };
};

```

### Salida Esperada

```json
{
  "mmr_final": 1035,
  "clasificacion": "Plata",
  "explicacion": "Ajuste aplicado: 35. "
}
{
  "mmr_final": 50,
  "clasificacion": "Bronce",
  "explicacion": "Ajuste aplicado: -50. Penalización por desconexión."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-061/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco