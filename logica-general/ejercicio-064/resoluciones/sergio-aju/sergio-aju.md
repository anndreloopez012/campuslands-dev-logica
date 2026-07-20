# Analisis del reto: Filtros por Condiciones - Inventario de Motos

## Analisis

- **Entrada:** Un arreglo de objetos `motos` (marca, modelo, año, estado: 'disponible', 'vendida', 'mantenimiento') y un objeto `criterio_filtro` (ej. estado deseado).
- **Proceso:** Filtrar el inventario para obtener solo las motocicletas que cumplen con el estado especificado y organizar la salida para facilitar la gestión del stock.
- **Salida:** Una lista filtrada de `motos_encontradas` y un conteo total del resultado.

## Reglas identificadas

1. **Filtro de Estado:** Solo incluir motos cuyo `estado` coincida con el solicitado.
2. **Validación:** Si el filtro no coincide con ninguna moto o el inventario está vacío, devolver una lista vacía y un mensaje informativo.
3. **Organización:** Retornar los objetos completos de las motos que cumplen la condición para facilitar el acceso a sus detalles (marca, modelo, año).

## Pruebas

### Caso normal

**Entrada:**
```javascript
motos: [
  {marca: "Yamaha", estado: "disponible"}, 
  {marca: "Honda", estado: "vendida"}
],
filtro: "disponible"