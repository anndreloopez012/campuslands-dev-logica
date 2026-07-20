# Logica matematica 057 - sistema de ranking de proyectos

## Motor de Ajuste de Puntajes y Clasificación de Proyectos

Este script procesa una lista de proyectos, ajustando sus puntajes iniciales mediante bonificaciones o penalizaciones basadas en el rendimiento, para finalmente generar un ranking ordenado por desempeño.

* **Descripción del proceso:**
* **Aplicación de Ajustes**: Recorre cada proyecto para determinar si merece un incentivo (si el puntaje es mayor a 80) o una sanción (si el puntaje es menor a 50).
* **Clasificación Automática**: Asigna un nivel cualitativo ("Excelente", "Aceptable" o "Crítico") según el nuevo puntaje calculado.
* **Ordenamiento de Ranking**: Utiliza el método `.sort()` para presentar los proyectos del de mayor al de menor `puntaje_final`, facilitando la lectura de resultados.


* **Tecnologías:**
* JavaScript (método `.map()` para transformación, método `.sort()` para ordenamiento, lógica condicional).



---

### Explicación técnica

1. **Inmutabilidad y Transformación**: Mediante `.map()`, se crea un nuevo arreglo con los objetos procesados sin modificar la lista original de proyectos, manteniendo la integridad de los datos.
2. **Algoritmo de Ordenamiento**: La función `.sort((a, b) => b.puntaje_final - a.puntaje_final)` implementa un orden descendente basado en el puntaje resultante, siendo una forma eficiente de clasificar elementos en JavaScript.

### Lógica del Código

```javascript
const generarRankingProyectos = (proyectos, bono, penalizacion) => {
    return proyectos.map(p => {
        // 1. Calcular el puntaje final con ajustes
        let final = p.puntaje;
        if (p.puntaje > 80) final += bono;
        else if (p.puntaje < 50) final -= penalizacion;

        // 2. Determinar la categoría
        let clasif = "Crítico";
        if (final > 85) clasif = "Excelente";
        else if (final > 60) clasif = "Aceptable";

        return { nombre: p.nombre, puntaje_final: final, clasificacion: clasif };
    }).sort((a, b) => b.puntaje_final - a.puntaje_final); // 3. Ordenar por puntaje
};

```

### Salida Esperada

```json
[
  {
    "nombre": "Edificio A",
    "puntaje_final": 95,
    "clasificacion": "Excelente"
  },
  {
    "nombre": "Casa B",
    "puntaje_final": 35,
    "clasificacion": "Crítico"
  }
]

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-057/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco