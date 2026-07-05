
## Entrega
- Nombre: Irma Yaneht Arias García
- Ejercicio: 011
- Area: logica-matematica / logica-general

## Checklist
- [x] Mi PR apunta a dev

## Pensamiento
Para organizar la lista, utilicé el método `.map()` para iterar sobre cada objeto y asignar una nueva propiedad llamada "categoria" basada en el valor de "peso", transformando así la entrada original en una lista organizada.

## Reglas Aplicadas
1. Menos de 65kg: Peso Pluma.
2. Entre 65kg y 84kg: Peso Medio.
3. 85kg o más: Peso Pesado.

## Cómo ejecutar
Ejecuta el archivo con: `node irma-arias.js`

## Casos de Prueba
- **Normal**: Lista con pesos variados (Resultado: Clasificación correcta por categoría).
- **Caso Borde**: Peleador con exactamente 85kg (Resultado: Peso Pesado).