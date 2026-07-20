# Analisis del reto: Secuencias Numéricas en Playlist Musical

## Analisis

- **Entrada:** Un arreglo de `duraciones_canciones` (en segundos) y un `factor_transicion` (segundos extra entre canciones).
- **Proceso:** Calcular la duración total de la playlist sumando todas las canciones más el `factor_transicion` aplicado entre cada canción, y determinar la categoría de la sesión.
- **Salida:** El `tiempo_total_sesion` y la `clasificacion_playlist`.

## Reglas identificadas

1. **Cálculo:** Sumar los elementos del arreglo `duraciones_canciones`.
2. **Aplicación de Transición:** Sumar el `factor_transicion` tantas veces como espacios existan entre canciones (cantidad de canciones - 1).
3. **Clasificación:**
   - Si tiempo_total >= 3600 segundos: "sesión maratónica".
   - Si tiempo_total entre 1800 y 3599 segundos: "sesión estándar".
   - Si tiempo_total < 1800 segundos: "sesión rápida".

## Pruebas

### Caso normal

**Entrada:**
```text
duraciones_canciones: [300, 300, 300]
factor_transicion: 10