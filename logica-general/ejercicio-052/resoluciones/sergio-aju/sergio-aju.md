## Autor

Sergio Ajú

# Comparador de Raquetas de Pingpong

Este script ayuda a los jugadores a elegir la raqueta ideal comparando las características técnicas con su estilo de juego.

## Análisis
- **Entrada:** Arreglo de raquetas y el estilo del jugador.
- **Proceso:** Filtrado por estilo, ordenamiento según preferencia de material y selección de la mejor opción.
- **Salida:** Recomendación final o aviso de error.

## Reglas
1. La raqueta debe ser del mismo estilo que el jugador.
2. Prioridad de materiales basada en el estilo ofensivo/defensivo.
3. Manejo de listas vacías.

## Ejecución
Ejecuta `node nombre-apellido.js`.

## Explicación
Utilizo un filtrado previo para asegurar la compatibilidad y un `sort` personalizado para aplicar la lógica de preferencia de materiales de forma escalable.