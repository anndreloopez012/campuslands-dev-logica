# Logica general 051 - sistema de organizacion de cartelera

## Motor de Clasificación de Peleadores

Este script organiza una lista de peleadores en una estructura jerárquica basada en su nivel de experiencia y peso, facilitando la gestión de eventos deportivos.

* **Descripción del proceso:**
* **Definición de Categorías**: Establece un orden predefinido ("Principiante", "Intermedio", "Profesional").
* **Filtrado y Clasificación**: Itera sobre cada nivel, filtrando a los peleadores correspondientes y ordenándolos de menor a mayor peso mediante el método `.sort()`.
* **Generación de Estructura**: Construye un objeto donde cada clave es el nivel y su valor es la lista de peleadores ordenados.
* **Validación**: Solo incluye en la cartelera final aquellos niveles que contengan al menos un peleador.


* **Tecnologías:**
* JavaScript (métodos de arreglos `.filter()`, `.sort()`, `.forEach()`).



---

### Explicación técnica

1. **Ordenamiento Predictivo**: El uso de `sort((a, b) => a.peso - b.peso)` garantiza que dentro de cada categoría los peleadores estén organizados de forma ascendente por su peso, optimizando la creación de posibles combates.
2. **Estructura Dinámica**: La función construye el objeto `cartelera` de manera dinámica, asegurando que no queden categorías vacías en el resultado final.

### Lógica del Código

```javascript
const organizarCartelera = (peleadores) => {
    const niveles = ["Principiante", "Intermedio", "Profesional"];
    let cartelera = {};

    niveles.forEach(nivel => {
        // 1. Filtrar por nivel y ordenar por peso
        const grupo = peleadores.filter(p => p.nivel === nivel)
                                .sort((a, b) => a.peso - b.peso);
        
        // 2. Asignar al objeto si hay peleadores encontrados
        if (grupo.length > 0) {
            cartelera[nivel] = grupo;
        }
    });

    return cartelera;
};

```

### Salida Esperada

```json
{
  "Principiante": [
    { "nombre": "Ana", "peso": 60, "nivel": "Principiante" },
    { "nombre": "Pedro", "peso": 65, "nivel": "Principiante" }
  ],
  "Intermedio": [
    { "nombre": "Juan", "peso": 70, "nivel": "Intermedio" },
    { "nombre": "Luis", "peso": 80, "nivel": "Intermedio" }
  ]
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-051/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco