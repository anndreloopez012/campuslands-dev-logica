
# Ejercicio 022 - Ranking de Fútbol Sala (Porcentajes y Proporciones)

## Análisis del Problema
El rendimiento de un equipo no se mide solo en puntos, sino en la proporción de sus victorias. Se requiere normalizar este desempeño a una escala porcentual y ajustar según bonificaciones de rendimiento excepcional.

## Reglas Aplicadas
1. **Cálculo de Proporción:** $(Ganados / Total) \times 100$.
2. **Bonificación de Rendimiento:** Si el índice supera el 75%, se aplica un incremento del 10% sobre el índice.
3. **Ajuste Final:** Se suman puntos por bono y se restan por penalizaciones (de forma absoluta).
4. **Categorización:** Oro (>= 80), Plata (50-79), Bronce (< 50).

## Ejecución
`node nombre-apellido.js`

## Pruebas Realizadas
1. **Caso Normal:** Equipo con 15 victorias de 20 partidos. 
2. **Caso Borde:** Equipo con 0 victorias (verificación de efectividad mínima y categoría bronce).