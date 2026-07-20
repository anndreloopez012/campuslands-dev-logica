# Analisis del reto: Clasificador de Renderizado 3D

## Analisis

- **Entrada:** Una matriz (arreglo de objetos) donde cada objeto representa una capa de animación con las propiedades `nombre` y `estado` ('renderizado', 'espera', 'error').
- **Proceso:** Se recorre la lista priorizando la búsqueda de estados críticos ('error') sobre los de 'espera'. Si no se encuentran estados pendientes, se marca como completado.
- **Salida:** Un objeto con la `accion` sugerida y el `motivo` de la decisión.

## Reglas identificadas

1. **Prioridad crítica:** Si existe alguna capa con estado `error`, esta debe ser la primera en atenderse.
2. **Prioridad de flujo:** Si no hay errores, se debe seleccionar la primera capa disponible con estado `espera`.
3. **Estado completado:** Si todas las capas están en `renderizado`, se indica que no hay tareas pendientes.

## Pruebas

### Caso normal

**Entrada:**
```javascript
[
  { nombre: "fondo", estado: "renderizado" },
  { nombre: "personaje", estado: "espera" },
  { nombre: "iluminacion", estado: "error" }
]