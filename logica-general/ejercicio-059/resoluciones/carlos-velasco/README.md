# Logica general 059 - sistema de gestión de seguridad química

## Motor de Validación de Procesos de Mezcla Química

Este script actúa como una capa de seguridad para procesos de laboratorio, validando que cualquier combinación de reactivos químicos sea segura (no reactiva) y viable (con suficiente inventario disponible) antes de autorizar la mezcla.

* **Descripción del proceso:**
* **Verificación de Seguridad**: Analiza un conjunto de pares incompatibles. Utiliza el método `.some()` para detectar si los reactivos propuestos forman parte de una combinación peligrosa.
* **Control de Inventario**: Busca en la base de datos de inventario (un arreglo de objetos) si ambos reactivos existen y si la cantidad disponible es mayor o igual a la solicitada en la mezcla.
* **Dictamen del Proceso**:
* **Peligro**: Si los reactivos son incompatibles.
* **Error**: Si no hay stock suficiente o los reactivos no existen.
* **Autorizada**: Si la mezcla es segura y cuenta con los recursos necesarios.




* **Tecnologías:**
* JavaScript (métodos de arreglos `.some()` y `.find()`, lógica de validación secuencial).



---

### Explicación técnica

1. **Detección de Incompatibilidad**: La lógica `(par.includes(reactivo1) && par.includes(reactivo2))` permite una verificación bidireccional, lo que significa que el sistema detectará el peligro independientemente del orden en que se declaren los reactivos.
2. **Validación de Integridad de Datos**: El sistema no solo verifica cantidades, sino que valida la existencia del reactivo (`!item1 || !item2`), previniendo errores de acceso a propiedades en objetos inexistentes.

### Lógica del Código

```javascript
const gestionarMezcla = (inventario, mezcla, incompatibles) => {
    // 1. Validar compatibilidad: ¿Es una combinación peligrosa?
    const esIncompatible = incompatibles.some(par => 
        (par.includes(mezcla.reactivo1) && par.includes(mezcla.reactivo2))
    );
    if (esIncompatible) return { accion: "Peligro", motivo: "Reacción química violenta detectada." };

    // 2. Validar Stock: ¿Existe y es suficiente?
    const item1 = inventario.find(i => i.nombre === mezcla.reactivo1);
    const item2 = inventario.find(i => i.nombre === mezcla.reactivo2);

    if (!item1 || item1.cantidad < mezcla.cant1 || !item2 || item2.cantidad < mezcla.cant2) {
        return { accion: "Error", motivo: "Stock insuficiente para la fórmula." };
    }

    return { accion: "Autorizada", motivo: "Mezcla segura y con stock disponible." };
};

```

### Salida Esperada

```json
{
  "accion": "Autorizada",
  "motivo": "Mezcla segura y con stock disponible."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-059/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco