
# Ejercicio 013: Coordenadas y distancia en paracaidismo

## Pensamiento del problema
Para garantizar la seguridad en el paracaidismo, calculo la distancia directa entre el punto de salto y el punto de llegada usando geometría analítica. Esto determina si el paracaidista aterrizó en la zona designada.

## Reglas aplicadas
1. **Teorema:** Se aplica la fórmula de distancia euclidiana.
2. **Validación:** Si la distancia es menor a 10 unidades, se considera 'aterrizaje preciso'.

## Cómo ejecutar
Ejecuta: `node yaneh-arias.js`

## Casos de prueba
- **Normal:** `(0,0)` a `(3,4)` -> Distancia: 5.00 (Aterrizaje preciso).
- **Caso Borde:** `(5,5)` a `(5,5)` -> Distancia: 0.00 (Aterrizaje preciso).