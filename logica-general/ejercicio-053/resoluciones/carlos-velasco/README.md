# Logica general 053 - sistema de evaluación de seguridad para saltos

## Motor de Validación de Condiciones para Salto

Este script evalúa si las condiciones meteorológicas y ambientales actuales son seguras para realizar un salto, basándose en parámetros críticos como la velocidad del viento, la visibilidad y el estado general del clima.

* **Descripción del proceso:**
* **Validación de Viento**: Verifica que la velocidad del viento no supere el umbral máximo de seguridad (40 km/h).
* **Validación de Visibilidad**: Confirma que la visibilidad mínima sea igual o superior a 1000 metros.
* **Validación de Fenómenos**: Comprueba que el estado del clima no incluya eventos peligrosos como "Tormenta" o "Lluvia".
* **Dictamen Final**: Retorna un estado de "Aprobado" solo si se cumplen todas las condiciones de seguridad; de lo contrario, cancela el salto detallando el motivo.


* **Tecnologías:**
* JavaScript (estructuras condicionales, validación de arreglos).



---

### Explicación técnica

1. **Prioridad de Validación**: El código utiliza una estructura de retorno temprano (*early return*), lo que permite detener la evaluación inmediatamente al detectar cualquier condición insegura, optimizando el rendimiento.
2. **Evaluación de Listas**: El uso de `[].includes()` facilita la expansión de las condiciones climáticas adversas sin necesidad de anidar múltiples sentencias `if`.

### Lógica del Código

```javascript
const evaluarSalto = (condiciones) => {
    // 1. Validar velocidad del viento
    if (condiciones.velocidadViento > 40) {
        return { estado: "Cancelado", motivo: "Exceso de velocidad del viento." };
    }
    // 2. Validar visibilidad
    if (condiciones.visibilidadMetros < 1000) {
        return { estado: "Cancelado", motivo: "Visibilidad insuficiente." };
    }
    // 3. Validar clima adverso
    if (["Tormenta", "Lluvia"].includes(condiciones.estadoClima)) {
        return { estado: "Cancelado", motivo: "Condiciones climáticas adversas." };
    }

    // 4. Salto aprobado
    return { estado: "Aprobado", motivo: "Condiciones óptimas para el salto." };
};

```

### Salida Esperada

```json
{
  "estado": "Aprobado",
  "motivo": "Condiciones óptimas para el salto."
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