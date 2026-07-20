# Logica general 069 - sistema de simulación de estados de personaje

## Motor de Reacción Ante Eventos (Simulador de Terror)

Este script implementa un sistema de gestión de estados para un personaje en un entorno de simulación (tipo juego de terror o película interactiva). El sistema procesa eventos externos y determina instantáneamente el estado emocional, la acción lógica a seguir y el nivel de riesgo asociado.

* **Descripción del proceso:**
* **Entrada de Eventos**: El sistema recibe una cadena de texto que describe el suceso ocurrido en el entorno.
* **Máquina de Estados**: Utiliza una estructura `switch` para asignar un estado emocional (e.g., "alerta", "aterrado", "panico") y una acción específica para cada evento.
* **Evaluación de Riesgo**: Define dinámicamente si el `riesgo` es "alto" (exclusivo para situaciones de pánico) o "bajo" para cualquier otra circunstancia.
* **Respuesta**: Retorna un objeto estructurado que actúa como la decisión del personaje.


* **Tecnologías:**
* JavaScript (estructura de control `switch`, operador ternario, objetos).



---

### Explicación técnica

1. **Eficiencia en Ramificación**: Al utilizar `switch`, el código es altamente legible y eficiente para evaluar múltiples casos discretos, evitando la complejidad visual de múltiples `if-else` encadenados.
2. **Evaluación de Riesgo**: Se implementa una lógica booleana mediante un operador ternario, que simplifica la categorización del riesgo basándose únicamente en el estado resultante.

### Lógica del Código

```javascript
const simularEstadoPersonaje = (evento) => {
    let estado = "calmado";
    let accion = "";

    // 1. Determinar respuesta ante el evento
    switch (evento) {
        case "ruido_en_sotano":
            estado = "alerta";
            accion = "investigar con linterna";
            break;
        case "sombra_en_ventana":
            estado = "aterrado";
            accion = "correr y cerrar puertas";
            break;
        case "grito_lejano":
            estado = "panico";
            accion = "esconderse en armario";
            break;
        default:
            estado = "calmado";
            accion = "continuar viendo la pelicula";
    }

    // 2. Retornar el estado final con nivel de riesgo
    return {
        estado_actual: estado,
        accion_sugerida: accion,
        riesgo: estado === "panico" ? "alto" : "bajo"
    };
};

```

### Salida Esperada

```json
{
  "estado_actual": "alerta",
  "accion_sugerida": "investigar con linterna",
  "riesgo": "bajo"
}
{
  "estado_actual": "panico",
  "accion_sugerida": "esconderse en armario",
  "riesgo": "alto"
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-069/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco