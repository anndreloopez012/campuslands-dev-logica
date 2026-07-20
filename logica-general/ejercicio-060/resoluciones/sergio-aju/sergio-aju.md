# Analisis del reto: Estrategias de Selección de Comida Urbana

## Analisis

- **Entrada:** Un arreglo de objetos `platos` (nombre y nivel de demanda: 'baja', 'media', 'alta') y un `presupuesto_promocion`.
- **Proceso:** Identificar la estrategia de marketing a aplicar basándose en la demanda de los platos y el presupuesto disponible.
- **Salida:** Un objeto con la `estrategia` recomendada y el `motivo` de la decisión.

## Reglas identificadas

1. **Demanda Alta:** Si la mayoría de platos tienen demanda 'alta', la estrategia es "expansión de menú".
2. **Demanda Media:** Si el presupuesto es bajo, la estrategia es "ofertas flash". Si es alto, "campaña de fidelización".
3. **Demanda Baja:** La estrategia es siempre "reestructuración de oferta" para recuperar mercado.

## Pruebas

### Caso normal

**Entrada:**
```javascript
platos: [{nombre: "tacos", demanda: "alta"}, {nombre: "arepas", demanda: "alta"}],
presupuesto_promocion: 500