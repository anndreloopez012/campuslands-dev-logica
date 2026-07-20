# Resolucion - Logica general 050

## Como pensé el problema
A diferencia del ejercicio 030, aqui organizo la informacion en dos objetos separados antes de decidir: un inventario de estados presentes en items, y una instruccion con las palabras clave y el conector extraidos de la regla. La decision final solo cruza esos dos objetos ya armados.

## Reglas aplicadas
- se construye un inventarioEstados con el conteo de cada estado en items.
- se construye una instruccion con las palabras clave y el conector (y/o) extraidos de la regla.
- conector "y" con 2+ palabras -> se revisa en el inventario que todas tengan conteo mayor a 0.
- conector "o" (o sin conector) -> basta con que una de las palabras tenga conteo mayor a 0 en el inventario.
- instruccion sin palabras clave -> no reconocida.
- regla vacia -> sin accion.
- instruccion valida pero items vacio -> sin datos.


## Casos probados
1. Caso normal: regla con 1 palabra clave -> aplica sobre bloqueado, confirmado en el inventario.
2. Caso borde: regla vacia -> sin accion.
3. Caso especial: conector "y" con un estado ausente en el inventario -> instruccion incumplida.
4. Caso especial: conector "o" con un estado presente -> aplica sobre ese estado.