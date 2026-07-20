# Logica general 056 - sistema de validación de posicionamiento espacial

## Motor de Validación de Coordenadas en Entornos Bidimensionales

Este script analiza la validez de una coordenada dentro de un entorno representado por una matriz, asegurando que cualquier intento de colocar un objeto respete los límites físicos y las reglas de ocupación del espacio.

* **Descripción del proceso:**
* **Validación de Límites**: Comprueba que la coordenada solicitada (`fila`, `columna`) se encuentre dentro de las dimensiones reales de la matriz.
* **Validación de Ocupación**: Verifica si la celda destino contiene un obstáculo (representado por el valor `1`); si es así, impide la acción.
* **Dictamen de Éxito**: Si las coordenadas son válidas y la celda está libre (valor `0`), la posición es aprobada.


* **Tecnologías:**
* JavaScript (acceso a índices de arreglos bidimensionales, validación lógica).



---

### Explicación técnica

1. **Protección de Índices**: La primera comprobación evita errores de tiempo de ejecución (*Runtime Errors*) al intentar acceder a una posición inexistente en la matriz.
2. **Representación Binaria**: El sistema utiliza una lógica simple de "Libre/Ocupado" (`0`/`1`), lo cual permite una validación instantánea y eficiente del estado de cualquier coordenada.

### Lógica del Código

```javascript
const validarPosicion = (matriz, pos) => {
    // 1. Validación de límites: Fuera de la matriz
    if (pos.fila < 0 || pos.fila >= matriz.length || pos.columna < 0 || pos.columna >= matriz[0].length) {
        return { accion: "Error", motivo: "Posición fuera de los límites del entorno 3D." };
    }

    // 2. Validación de colisión: Celda ocupada
    if (matriz[pos.fila][pos.columna] === 1) {
        return { accion: "Bloqueado", motivo: "La celda ya está ocupada por otro objeto." };
    }

    // 3. Validación exitosa
    return { accion: "Permitido", motivo: "Posición libre, objeto colocado con éxito." };
};

```

### Salida Esperada

```json
{
  "accion": "Bloqueado",
  "motivo": "La celda ya está ocupada por otro objeto."
}
{
  "accion": "Permitido",
  "motivo": "Posición libre, objeto colocado con éxito."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-056/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco