# Solución Ejercicio 057 - Tablas de Decisión

**Autor:** Evelyn Barios

## 1. Análisis del Problema

El ejercicio 057 pide aplicar el concepto de "tablas de decisión" en un contexto de "arquitectura 3D". Para ello, he diseñado un sistema que recomienda el material de construcción más adecuado para un componente arquitectónico basándose en un conjunto de condiciones.

Una tabla de decisión es una forma estructurada de modelar la lógica que mapea un conjunto de condiciones a un conjunto de acciones o resultados. En este caso, las condiciones son las propiedades del componente (su uso, la resistencia requerida y su exposición a los elementos) y el resultado es el material sugerido.

Este enfoque permite que las reglas de negocio sean claras, fáciles de mantener y de extender en el futuro.

## 2. Reglas Aplicadas

He implementado la lógica a través de una "tabla de decisión" representada como un arreglo de objetos en JavaScript. Cada objeto contiene un conjunto de `condiciones` y un `resultado`.

-   **Entradas**: La función principal recibe un objeto `componente` con tres propiedades:
    -   `uso`: 'estructural', 'decorativo', 'cerramiento', 'cristaleria'.
    -   `resistencia`: 'alta', 'media', 'baja'.
    -   `exposicion`: 'exterior', 'interior'.

-   **Proceso**: La función busca en la tabla de decisión una regla cuyas condiciones coincidan exactamente con las propiedades del componente de entrada.
    -   Si encuentra una coincidencia, devuelve el material especificado en esa regla.
    -   Si ninguna regla coincide, devuelve un material genérico como opción por defecto, sugiriendo una revisión manual.

-   **Salidas**: La función devuelve un objeto con dos propiedades:
    -   `materialSugerido`: El nombre del material recomendado.
    -   `justificacion`: Un texto que explica por qué se eligió ese material.

### Tabla de Decisión Implementada

| Uso | Resistencia | Exposición | Material Sugerido |
| :--- | :--- | :--- | :--- |
| `estructural` | `alta` | `exterior` | `Hormigón Armado` |
| `estructural` | `alta` | `interior` | `Acero Laminado` |
| `decorativo` | `media` | `interior` | `Madera de Roble` |
| `decorativo` | `baja` | `interior` | `Yeso Cartón (Drywall)` |
| `cerramiento` | `media` | `exterior` | `Ladrillo Visto` |
| `cristaleria` | `media` | `exterior` | `Vidrio Templado Doble` |

## 3. Cómo Ejecutar la Solución

1.  Abre una terminal.
2.  Navega a la carpeta donde se encuentra el archivo `evelyn-barios.js`.
3.  Ejecuta el script usando Node.js con el siguiente comando:

    ```bash
    node evelyn-barios.js
    ```

La salida en la consola mostrará los resultados de los casos de prueba definidos en el archivo.

## 4. Casos de Prueba

### Caso de Prueba 1: Normal
-   **Entrada**: Una viga con `uso: 'estructural'`, `resistencia: 'alta'` y `exposicion: 'exterior'`.
-   **Resultado Esperado**: `Hormigón Armado`, ya que cumple las condiciones de la primera regla de la tabla.

### Caso de Prueba 2: Borde
-   **Entrada**: Un panel con `uso: 'decorativo'`, `resistencia: 'baja'` y `exposicion: 'exterior'`.
-   **Resultado Esperado**: `Material Genérico Multiuso`, porque no existe una regla exacta para esta combinación en la tabla, activando la respuesta por defecto.