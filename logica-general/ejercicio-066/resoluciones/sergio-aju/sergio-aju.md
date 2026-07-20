# Analisis del reto: Búsqueda de Elementos en Autos Hiperdeportivos

## Analisis

- **Entrada:** Un arreglo de objetos `autos` (marca, modelo, velocidad_maxima) y un `valor_busqueda` (velocidad objetivo).
- **Proceso:** Localizar todos los autos que alcancen o superen la velocidad objetivo proporcionada.
- **Salida:** Una lista de los `autos_encontrados` y un mensaje de `resultado` sobre la disponibilidad de vehículos según la búsqueda.

## Reglas identificadas

1. **Filtro de Rendimiento:** Comparar la `velocidad_maxima` de cada auto contra el `valor_busqueda`.
2. **Criterio de Inclusión:** El auto debe tener una `velocidad_maxima` >= `valor_busqueda`.
3. **Reporte:** Si no se encuentran resultados, el sistema debe notificar la ausencia de vehículos que cumplan el criterio.

## Pruebas

### Caso normal

**Entrada:**
```javascript
autos: [
  {modelo: "Bugatti Chiron", velocidad_maxima: 490}, 
  {modelo: "Koenigsegg Jesko", velocidad_maxima: 480}
],
valor_busqueda: 485