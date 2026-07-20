# Analisis del reto: Rangos y Máximos en Inventario de Motos

## Analisis

- **Entrada:** Un arreglo de objetos `motos` (con atributo `precio`) y un `limite_presupuesto`.
- **Proceso:** Identificar la moto más costosa dentro de un rango de precio definido por el presupuesto máximo y categorizar su segmento.
- **Salida:** Un objeto con la `moto_maxima` encontrada y la `clasificacion_segmento`.

## Reglas identificadas

1. **Filtro de Rango:** Solo considerar motos cuyo `precio` sea menor o igual al `limite_presupuesto`.
2. **Identificación:** Encontrar el precio máximo entre las motos filtradas.
3. **Clasificación:**
   - Si precio > 5000: "gama alta".
   - Si precio entre 2000 y 5000: "gama media".
   - Si precio < 2000: "gama económica".

## Pruebas

### Caso normal

**Entrada:**
```javascript
motos: [{modelo: "A", precio: 1500}, {modelo: "B", precio: 3000}],
limite_presupuesto: 4000