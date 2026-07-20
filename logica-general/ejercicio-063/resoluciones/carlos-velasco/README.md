# Logica general 063 - sistema de gestión de estado de torneos

## Motor de Supervisión de Conectividad en Tiempo Real

Este script evalúa las condiciones técnicas de una partida en curso basándose en la latencia del jugador (`ping`) y el estado general de su conexión (`estado`). Su objetivo es garantizar la equidad y fluidez competitiva tomando decisiones automatizadas.

* **Descripción del proceso:**
* **Validación Crítica**: Prioriza la verificación de una desconexión total. Si el estado es "caido", se suspende inmediatamente la partida.
* **Monitoreo de Latencia (Ping)**: Analiza si la conexión es "inestable" o si el ping excede el umbral de seguridad de 150ms. Ante cualquiera de estos casos, se activa una pausa técnica.
* **Estado de Juego**: Si ninguna de las condiciones anteriores se cumple, se autoriza la continuación de la partida.
* **Reporte de Decisión**: Retorna un objeto con la acción a realizar y una justificación técnica.


* **Tecnologías:**
* JavaScript (lógica condicional `if` jerárquica).



---

### Explicación técnica

1. **Priorización de Fallos**: El código sigue una estructura de *fail-fast*. La interrupción del servicio ("caido") se evalúa primero, asegurando que el sistema no intente pausar una partida que ya ha terminado por error de red.
2. **Umbral de Calidad**: El valor 150ms actúa como una "barrera de integridad", asegurando que la experiencia del usuario sea óptima para la competición.

### Lógica del Código

```javascript
const decidirEstadoTorneo = (ping, estado) => {
    // 1. Prioridad: Desconexión total
    if (estado === "caido") {
        return { accion: "Suspender Partida", motivo: "Conexión interrumpida." };
    }

    // 2. Prioridad: Inestabilidad o latencia elevada
    if (estado === "inestable" || ping > 150) {
        return { accion: "Activar Pausa Técnica", motivo: "Latencia alta detectada." };
    }

    // 3. Condición por defecto: Juego fluido
    return { accion: "Continuar Partida", motivo: "Condiciones óptimas para competir." };
};

```

### Salida Esperada

```json
{
  "accion": "Continuar Partida",
  "motivo": "Condiciones óptimas para competir."
}
{
  "accion": "Activar Pausa Técnica",
  "motivo": "Latencia alta detectada."
}
{
  "accion": "Suspender Partida",
  "motivo": "Conexión interrumpida."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-063/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco