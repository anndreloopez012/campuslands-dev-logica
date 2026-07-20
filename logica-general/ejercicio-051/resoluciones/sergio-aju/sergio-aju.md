# Organizador de Peleadores de Kickboxing

Esta solución gestiona una lista de peleadores, filtrando a aquellos que están en condiciones de competir y seleccionando al mejor candidato según su nivel.

## Análisis

- **Entrada:** Un arreglo de objetos (nombre, estado, nivel).
- **Proceso:** Filtrar candidatos "apto", ordenar por nivel descendente y seleccionar el primero.
- **Salida:** Nombre del peleador elegido o aviso de vacío.

## Reglas identificadas

1. **Estado físico:** Solo los peleadores con estado "apto" participan.
2. **Jerarquía:** Mayor nivel (1-5) tiene mayor prioridad.
3. **Equidad:** En empate de nivel, prevalece el orden de llegada original.
4. **Validación:** Si no hay aptos, se notifica la falta de candidatos.

## Pruebas

### Caso normal
- **Entrada:** `[{nombre: "Ana", estado: "apto", nivel: 3}, {nombre: "Luis", estado: "apto", nivel: 5}, {nombre: "Pedro", estado: "apto", nivel: 5}]`
- **Resultado:** `"El siguiente peleador es: Luis"`

### Caso borde
- **Entrada:** `[{nombre: "Carla", estado: "suspendido", nivel: 5}]`
- **Resultado:** `"No hay peleadores aptos disponibles."`

## Explicación final
Se utilizan los métodos `.filter()` y `.sort()`. Al ser `sort` un método estable en JavaScript, garantiza que los peleadores con el mismo nivel se mantengan en el orden en que fueron ingresados, cumpliendo la regla de equidad sin código adicional.

## Instrucciones de uso
1. Instala Node.js.
2. Ejecuta `node sergio-aju.js` en tu terminal dentro de la carpeta.