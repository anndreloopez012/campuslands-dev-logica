# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos `peleadores` (donde cada uno tiene `nombre`, `peso`, `nivel`).
* **Proceso**: Agrupamiento jerárquico de los peleadores por su nivel de experiencia, seguido de un ordenamiento interno por peso (ascendente) para cada grupo.
* **Salida**: Un objeto donde cada clave representa un nivel y su valor es la lista de peleadores correspondiente ordenados.

## Reglas identificadas

1. Los peleadores deben agruparse estrictamente en tres niveles definidos: "Principiante", "Intermedio" y "Profesional".
2. Dentro de cada nivel, los peleadores deben estar ordenados de menor a mayor peso.
3. Solo deben incluirse en el objeto resultante aquellos niveles que contengan al menos un peleador.

## Pruebas

### Caso normal

* **Entrada**: `listaPeleadores` (con una mezcla de niveles y pesos)
* **Resultado esperado**: `Un objeto con las claves "Principiante" e "Intermedio", cada una con sus respectivos peleadores ordenados por peso.`

### Caso borde

* **Entrada**: `[ { nombre: "Test", peso: 90, nivel: "Profesional" } ]`
* **Resultado esperado**: `{ "Profesional": [{ nombre: "Test", peso: 90, nivel: "Profesional" }] }`

## Explicacion final

La solución funciona mediante la combinación de un iterador (`forEach`) sobre los niveles predefinidos y los métodos de arreglos `filter` y `sort`. Al procesar cada nivel por separado, se garantiza una estructura limpia y categorizada. El método `sort` es fundamental, ya que al aplicar la función de comparación `(a, b) => a.peso - b.peso`, asegura que la organización de los combates sea lógica basándose en el peso de los peleadores.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Definición de grupos**: `niveles = ["Principiante", "Intermedio", "Profesional"]`
* **Filtrado**: `peleadores.filter(p => p.nivel === nivel)`
* **Ordenamiento**: `grupo.sort((a, b) => a.peso - b.peso)`