# Logica general 071 - sistema de categorización de peleadores

## Motor de Clasificación por Experiencia

Este script organiza una lista de peleadores en categorías específicas según su nivel de experiencia, medido por el número de peleas registradas. El sistema es ideal para bases de datos deportivas que requieren segmentar atletas de manera automática.

* **Descripción del proceso:**
* **Inicialización**: Crea un objeto contenedor (`clasificados`) con tres arreglos vacíos predefinidos: `profesional`, `amateur` y `novato`.
* **Iteración**: Recorre el arreglo de entrada utilizando `.forEach()`.
* **Lógica de Clasificación**:
* **Profesional**: Peleadores con $\ge 20$ peleas.
* **Amateur**: Peleadores con entre 5 y 19 peleas.
* **Novato**: Peleadores con menos de 5 peleas.


* **Agrupación**: Inserta únicamente el `nombre` del peleador en el arreglo correspondiente de su categoría.


* **Tecnologías:**
* JavaScript (objetos, arreglos, `.forEach()`, lógica condicional `if-else`).



---

### Explicación técnica

1. **Eficiencia en la Organización**: Al usar un objeto de salida con llaves pre-configuradas, el sistema evita realizar múltiples búsquedas o filtros sobre la misma lista, organizando a todos los peleadores en una única pasada (complejidad $O(n)$).
2. **Robustez ante Listas Vacías**: Debido a la naturaleza de `.forEach()`, si se proporciona un arreglo vacío, el sistema devolverá correctamente el objeto con todas las categorías inicializadas como arreglos vacíos, evitando errores de referencia.

### Lógica del Código

```javascript
const organizarCategorias = (peleadores) => {
    // 1. Definir contenedor de resultados
    const clasificados = {
        profesional: [],
        amateur: [],
        novato: []
    };

    // 2. Clasificar mediante jerarquía de experiencia
    peleadores.forEach(p => {
        if (p.peleas >= 20) clasificados.profesional.push(p.nombre);
        else if (p.peleas >= 5) clasificados.amateur.push(p.nombre);
        else clasificados.novato.push(p.nombre);
    });

    return clasificados;
};

```

### Salida Esperada

```json
{
  "profesional": ["Alex"],
  "amateur": ["Beto"],
  "novato": ["Carlos"]
}
{
  "profesional": [],
  "amateur": [],
  "novato": []
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-071/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco