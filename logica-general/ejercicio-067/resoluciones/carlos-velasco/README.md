# Logica general 067 - sistema de detección de inconsistencias (playlist)

## Motor de Validación de Integridad de Datos

Este script actúa como un validador de calidad para listas de reproducción musicales. Su función principal es inspeccionar cada objeto dentro de un arreglo (`playlist`) y reportar cualquier anomalía o dato faltante que impida que la información sea considerada válida para un sistema de gestión musical.

* **Descripción del proceso:**
* **Validación de Títulos**: Verifica que el campo `titulo` exista y que no esté compuesto únicamente por espacios en blanco.
* **Validación de Duración**: Asegura que la duración sea un valor numérico positivo (`> 0`).
* **Validación de Temporalidad**: Comprueba que el `anio` de lanzamiento se encuentre dentro de un rango lógico (entre 1900 y 2026).
* **Generación de Informe**: Devuelve un objeto que resume si la playlist es `valido` (booleano) y proporciona una lista detallada de los errores encontrados, si los hubiere.


* **Tecnologías:**
* JavaScript (método `.forEach()`, validación de tipos, manipulación de cadenas).



---

### Explicación técnica

1. **Detección Escalonada**: El código utiliza múltiples condiciones independientes dentro del bucle, lo que permite detectar múltiples errores por cada canción en una sola pasada.
2. **Reporte de Errores**: Al utilizar un arreglo `errores` para acumular fallos, el sistema proporciona una trazabilidad clara de qué propiedad específica es la que viola las reglas de negocio.

### Lógica del Código

```javascript
const detectarInconsistencias = (playlist) => {
    let errores = [];

    // 1. Recorrer la playlist y validar cada canción
    playlist.forEach((cancion, index) => {
        if (!cancion.titulo || cancion.titulo.trim() === "") {
            errores.push(`Cancion en indice ${index}: Falta titulo.`);
        }
        if (typeof cancion.duracion !== 'number' || cancion.duracion <= 0) {
            errores.push(`Cancion '${cancion.titulo}': Duracion invalida.`);
        }
        if (cancion.anio < 1900 || cancion.anio > 2026) {
            errores.push(`Cancion '${cancion.titulo}': Anio fuera de rango.`);
        }
    });

    // 2. Retornar resumen del análisis
    return {
        valido: errores.length === 0,
        detalles: errores.length > 0 ? errores : "Playlist correcta."
    };
};

```

### Salida Esperada

```json
{
  "valido": false,
  "detalles": [
    "Cancion en indice 1: Falta titulo.",
    "Cancion 'undefined': Duracion invalida.",
    "Cancion 'Song X': Duracion invalida."
  ]
}
{
  "valido": true,
  "detalles": "Playlist correcta."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-067/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco