# Logica general 055 - sistema de diagnóstico de capas

## Motor de Validación de Edición de Capas

Este script evalúa la disponibilidad de una capa de trabajo en un entorno de diseño o edición gráfica. Aplica un conjunto de reglas de seguridad y operatividad para determinar si una capa es editable o debe permanecer bloqueada.

* **Descripción del proceso:**
* **Validación de Capa Base**: Protege la capa fondo para evitar alteraciones accidentales en la estructura principal del proyecto.
* **Validación de Estado**: Verifica si el usuario ha bloqueado manualmente la capa en la interfaz.
* **Validación de Visibilidad**: Implementa una medida de seguridad basada en la opacidad; si la capa es casi invisible (menor al 10%), se bloquea para evitar trazados accidentales sobre elementos no visibles.
* **Dictamen de Edición**: Si supera todas las validaciones, marca la capa como "Editable".


* **Tecnologías:**
* JavaScript (estructuras de control condicional, validación de propiedades booleanas y numéricas).



---

### Explicación técnica

1. **Jerarquía de Seguridad**: Al igual que en sistemas de diagnóstico anteriores, se utiliza un flujo de *early returns* para priorizar bloqueos críticos sobre estados operativos.
2. **Prevención de Errores**: La lógica sobre la `opacidad` actúa como un asistente inteligente, evitando que el usuario trabaje sobre elementos que no son perceptibles, lo que reduce la carga de trabajo correctiva.

### Lógica del Código

```javascript
const diagnosticarCapa = (capa) => {
    // 1. Prioridad: Protección de fondo
    if (capa.esFondo) {
        return { accion: "Bloqueada", motivo: "Capa base protegida por seguridad." };
    }
    // 2. Prioridad: Bloqueo manual
    if (capa.bloqueada) {
        return { accion: "Bloqueada", motivo: "Capa bloqueada manualmente por el usuario." };
    }
    // 3. Prioridad: Visibilidad operativa
    if (capa.opacidad < 10) {
        return { accion: "Bloqueada", motivo: "Capa casi invisible, riesgo de error de trazado." };
    }
    
    // 4. Autorización final
    return { accion: "Editable", motivo: "La capa está lista para trabajar." };
};

```

### Salida Esperada

```json
{
  "accion": "Editable",
  "motivo": "La capa está lista para trabajar."
}
{
  "accion": "Bloqueada",
  "motivo": "Capa base protegida por seguridad."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-055/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco