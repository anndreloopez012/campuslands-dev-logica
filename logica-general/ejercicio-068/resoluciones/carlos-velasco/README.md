# Logica general 068 - sistema de gestión de experiencia cinematográfica

## Motor de Configuración de Flujo de Reproducción

Este script automatiza la generación de un "plan de acción" personalizado para disfrutar de una película. Basándose en las características del filme (ubicación, duración y temática), el sistema construye un flujo secuencial de pasos necesarios para optimizar la experiencia del espectador.

* **Descripción del proceso:**
* **Determinación de Ubicación**: Decide si el inicio es en sala de cine o plataforma digital.
* **Gestión de Suministros**: Si la película supera los 120 minutos, añade automáticamente una recomendación de snacks adicionales.
* **Ajuste Cognitivo**: Alterna entre "modo análisis lógico" (para temáticas complejas como viajes en el tiempo) y "modo inmersión" (para otros géneros).
* **Ejecución**: Finaliza siempre con el paso obligatorio de "Inicio de reproducción".


* **Tecnologías:**
* JavaScript (objetos, estructuras condicionales, manipulación de arreglos mediante `.push()`).



---

### Explicación técnica

1. **Flujo Dinámico**: La estructura basada en condicionales independientes permite que el arreglo `flujo` crezca de forma personalizada según cada propiedad del objeto `pelicula`.
2. **Modularidad**: El sistema es altamente escalable; nuevos requisitos (como edad mínima o subtítulos) pueden añadirse simplemente insertando un nuevo bloque `if` sin romper la lógica existente.

### Lógica del Código

```javascript
const procesarPelicula = (pelicula) => {
    let flujo = [];

    // 1. Determinar contexto de visualización
    if (pelicula.esCine) {
        flujo.push("Entrada al cine");
    } else {
        flujo.push("Selección en plataforma");
    }

    // 2. Ajuste según duración
    if (pelicula.duracion > 120) {
        flujo.push("Preparación de snacks extra");
    }

    // 3. Ajuste según temática
    if (pelicula.tematica === "viajes en el tiempo") {
        flujo.push("Activación modo análisis lógico");
    } else {
        flujo.push("Activación modo inmersión");
    }

    // 4. Paso final constante
    flujo.push("Inicio de reproducción");

    return {
        pelicula: pelicula.titulo,
        pasos: flujo
    };
};

```

### Salida Esperada

```json
{
  "pelicula": "Interstellar",
  "pasos": [
    "Entrada al cine",
    "Preparación de snacks extra",
    "Activación modo análisis lógico",
    "Inicio de reproducción"
  ]
}
{
  "pelicula": "Arrival",
  "pasos": [
    "Selección en plataforma",
    "Activación modo inmersión",
    "Inicio de reproducción"
  ]
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-068/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco