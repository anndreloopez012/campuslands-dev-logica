# Logica general 057 - sistema de diagnóstico de renderizado

## Motor de Configuración para Renderizado de Materiales

Este script determina la configuración óptima de renderizado para diferentes materiales (Metal, Vidrio, Madera) en función de las condiciones de iluminación del entorno.

* **Descripción del proceso:**
* **Priorización de Materiales**: Se utiliza una regla especial para la "Madera", que actúa como una excepción predeterminada, simplificando el procesamiento al responder positivamente a cualquier tipo de iluminación.
* **Tabla de Decisión**: Para materiales complejos como "Metal" o "Vidrio", se emplea un objeto de mapeo (`tabla`) que actúa como una matriz de decisiones, asignando una acción específica según el nivel de iluminación ("Alta", "Media", "Baja").
* **Manejo de Errores**: Implementa encadenamiento opcional (`?.`) para asegurar que, si una combinación de material e iluminación no existe en la tabla, el sistema retorne un estado de error controlado en lugar de fallar.


* **Tecnologías:**
* JavaScript (objetos de mapeo, condicionales, encadenamiento opcional).



---

### Explicación técnica

1. **Eficiencia en la búsqueda**: El uso de una estructura de objeto (`tabla`) permite una complejidad algorítmica de tiempo constante $O(1)$ para localizar la configuración necesaria, superando en legibilidad y rendimiento a una serie de sentencias `if-else` anidadas.
2. **Encadenamiento Opcional**: La sintaxis `tabla[material]?.[iluminacion]` es una práctica moderna de seguridad que previene errores al intentar acceder a propiedades de un objeto que podría estar indefinido.

### Lógica del Código

```javascript
const diagnosticarRender = (material, iluminacion) => {
    // 1. Regla especial: Madera (prioridad alta)
    if (material === "Madera") {
        return { accion: "Renderizado Natural", motivo: "La madera responde bien a cualquier condición de luz." };
    }

    // 2. Tabla de decisiones para materiales complejos
    const tabla = {
        "Metal": {
            "Alta": "Renderizado Épico",
            "Media": "Renderizado Estándar",
            "Baja": "Requiere ajuste de reflejos"
        },
        "Vidrio": {
            "Alta": "Renderizado de Alta Claridad",
            "Media": "Renderizado Estándar",
            "Baja": "Requiere ajuste de transparencia"
        }
    };

    // 3. Consulta y validación de resultados
    const resultado = tabla[material]?.[iluminacion];

    return resultado 
        ? { accion: resultado, motivo: `Configuración aplicada para ${material} con luz ${iluminacion}.` }
        : { accion: "Error", motivo: "Combinación de material/luz no reconocida." };
};

```

### Salida Esperada

```json
{
  "accion": "Renderizado Épico",
  "motivo": "Configuración aplicada para Metal con luz Alta."
}
{
  "accion": "Renderizado Natural",
  "motivo": "La madera responde bien a cualquier condición de luz."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-057/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco