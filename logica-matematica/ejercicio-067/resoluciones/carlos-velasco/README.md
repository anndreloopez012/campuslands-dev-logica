# Logica matematica 067 - sistema de análisis de acumulación de tiempo (playlist)

## Motor de Cálculo de Reproducción por Metas

Este script permite determinar cuántas canciones de una lista de reproducción son necesarias para alcanzar un tiempo de escucha objetivo (meta). El sistema acumula secuencialmente las duraciones de las pistas hasta cumplir con la meta o hasta que se agote el inventario disponible.

* **Descripción del proceso:**
* **Acumulación Selectiva**: Itera a través del arreglo `duraciones` sumando el tiempo de cada canción a un total acumulado (`total`).
* **Control de Corte (Break)**: Utiliza una sentencia de ruptura (`break`) para detener el proceso en el instante en que el tiempo acumulado alcanza o supera la `meta` definida.
* **Contador de Pistas**: Lleva un registro de cuántas canciones fueron necesarias para llegar al tiempo total.
* **Diagnóstico de Estado**: Evalúa si el esfuerzo acumulado fue suficiente para cumplir el objetivo solicitado.


* **Tecnologías:**
* JavaScript (ciclo `for`, control de flujo, operadores de acumulación).



---

### Explicación técnica

1. **Eficiencia en la Ejecución**: Al integrar un `break` dentro del bucle, el script evita iterar innecesariamente sobre el resto de las canciones una vez alcanzada la meta, optimizando el procesamiento en listas largas.
2. **Interpretación de Datos**: La estructura de retorno devuelve un objeto que diferencia claramente entre el conteo físico de canciones y el tiempo cronológico real, facilitando métricas de rendimiento.

### Lógica del Código

```javascript
const analizarPlaylist = (duraciones, meta) => {
    let total = 0;
    let contador = 0;

    // 1. Acumular tiempo hasta alcanzar la meta
    for (let i = 0; i < duraciones.length; i++) {
        total += duraciones[i];
        contador++;
        // 2. Salir del bucle si se alcanza el objetivo
        if (total >= meta) break;
    }

    // 3. Retornar el resumen del análisis
    return {
        canciones_reproducidas: contador,
        tiempo_total: total,
        estado: total >= meta ? "Meta alcanzada" : "Meta no alcanzada",
        explicacion: `Se acumularon ${total} minutos usando ${contador} canciones.`
    };
};

```

### Salida Esperada

```json
{
  "canciones_reproducidas": 3,
  "tiempo_total": 10,
  "estado": "Meta alcanzada",
  "explicacion": "Se acumularon 10 minutos usando 3 canciones."
}
{
  "canciones_reproducidas": 2,
  "tiempo_total": 3,
  "estado": "Meta no alcanzada",
  "explicacion": "Se acumularon 3 minutos usando 2 canciones."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-067/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco