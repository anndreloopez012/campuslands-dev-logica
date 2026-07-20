# Logica general 054 - sistema de diagnóstico de citas

## Motor de Validación de Preparación para Sesiones

Este script evalúa si una cita médica o de servicios cumple con los requisitos críticos necesarios para proceder, priorizando la seguridad y la disponibilidad de recursos antes de iniciar la atención.

* **Descripción del proceso:**
* **Validación de Seguridad**: Verifica estrictamente la esterilización del equipo; de no cumplirse, suspende la sesión inmediatamente.
* **Validación de Insumos**: Comprueba la disponibilidad de materiales; en caso de carencia, sugiere reprogramar.
* **Validación de Cliente**: Confirma si el cliente está preparado; si no lo está, solicita una espera.
* **Dictamen de Inicio**: Solo si todos los protocolos anteriores son positivos, autoriza el inicio de la sesión.


* **Tecnologías:**
* JavaScript (estructuras de control condicional, validación de objetos).



---

### Explicación técnica

1. **Protocolo de Prioridades**: El código utiliza un flujo de *retornos tempranos* (early returns) para aplicar un orden jerárquico de seguridad, asegurando que los problemas más críticos (esterilización) se detecten antes que los operativos (insumos o cliente).
2. **Sistema de Reporte**: Cada retorno proporciona tanto la `accion` sugerida como el `motivo` detallado, permitiendo una rápida toma de decisiones para el personal administrativo o médico.

### Lógica del Código

```javascript
const diagnosticarCita = (cita) => {
    // 1. Prioridad: Esterilización del equipo
    if (!cita.equipoEsterilizado) {
        return { accion: "Suspender", motivo: "Peligro: Equipo no estéril." };
    }
    // 2. Prioridad: Materiales necesarios
    if (!cita.insumosSuficientes) {
        return { accion: "Reprogramar", motivo: "Error: Falta material." };
    }
    // 3. Prioridad: Estado del cliente
    if (!cita.clientePreparado) {
        return { accion: "Esperar", motivo: "Aviso: Cliente no preparado." };
    }
    
    // 4. Autorización final
    return { accion: "Iniciar sesión", motivo: "Apta para proceder." };
};

```

### Salida Esperada

```json
{
  "accion": "Iniciar sesión",
  "motivo": "Apta para proceder."
}
{
  "accion": "Reprogramar",
  "motivo": "Error: Falta material."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-054/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco