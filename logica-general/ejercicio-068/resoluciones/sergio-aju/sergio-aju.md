# Analisis del reto: Flujos Paso a Paso en Películas de Ciencia Ficción

## Analisis

- **Entrada:** Un objeto `pelicula` (título, año, presupuesto, recaudación) y una `fase_produccion` (desarrollo, rodaje, postproducción).
- **Proceso:** Determinar si la película puede avanzar a la siguiente etapa de producción basándose en el cumplimiento de requisitos financieros y técnicos.
- **Salida:** Un objeto con la `siguiente_fase` (o estado final) y una `explicacion_paso` detallada.

## Reglas identificadas

1. **Desarrollo -> Rodaje:** Se requiere un presupuesto aprobado.
2. **Rodaje -> Postproducción:** Se requiere haber finalizado el cronograma de grabación.
3. **Postproducción -> Estreno:** Se requiere que la recaudación proyectada sea al menos el doble del presupuesto.

## Pruebas

### Caso normal

**Entrada:**
```javascript
pelicula: {titulo: "CyberCity", presupuesto: 100, recaudacion: 300},
fase: "postproducción"