
## Entrega
- Nombre: Irma Yaneht Arias García
- Ejercicio: 004
- Area: logica-matematica / logica-general

## Checklist
- [x] Mi PR apunta a dev

## Pensamiento
El problema requiere filtrar una lista de objetos basándose en dos condiciones simultáneas: el estado actual del inventario y la potencia (cilindrada) de la moto.

## Reglas Aplicadas
1. La moto debe estar marcada como "disponible".
2. La cilindrada debe ser igual o superior a 200cc.

## Cómo ejecutar
Ejecuta el archivo usando la terminal con el comando: `node irma-arias.js`

## Casos de Prueba
- **Normal**: Lista con motos de diferentes estados y cilindradas (Resultado: Filtra solo las aptas).
- **Caso Borde**: Una moto disponible pero con menos de 200cc (Resultado: Excluida del filtro).