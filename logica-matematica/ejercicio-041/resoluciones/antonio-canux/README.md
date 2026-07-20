# Ejercicio 041: Operaciones Aritméticas Controladas - Videojuegos Competitivos

**Camper:** Antonio Canux

## Analisis

- Entrada: Tres variables numéricas y una de texto. `poderAtaque` (daño bruto de la tropa), `defensaOponente` (puntos de mitigación del enemigo), `multiplicadorCombo` (buff ofensivo, base 1.0), y `estadoObjetivo` (cadena de texto que define si hay reglas especiales activas).
- Proceso: Primero, se ejecuta una validación de seguridad de datos. Se resta la defensa del ataque, introduciendo un control lógico (`if danoBase < 0`) para evitar que el resultado caiga por debajo de cero. Luego se aplica el multiplicador numérico y una estructura condicional evalúa el estado del enemigo para reducir o potenciar el daño final. Finalmente, el resultado se redondea a un entero para simular el cambio de Puntos de Vida (HP) y se clasifica la magnitud del ataque.
- Salida: Un objeto estructurado con `dano_final` (entero), `clasificacion_golpe` (texto) y la `explicacion` de los eventos.

## Reglas identificadas

1. **Control de Límite Cero (Clamping Inferior):** En un cálculo de daño competitivo, $Ataque - Defensa$ nunca debe ser negativo, ya que eso implicaría curar al enemigo en lugar de herirlo.
2. **Escala de Operaciones:** El orden matemático es crítico. Primero se mitiga con la defensa plana, y **después** se aplican los multiplicadores sobre el daño neto resultante, no sobre el daño bruto.
3. **Modificadores de Estado (Casos Especiales):**
   - "vulnerable": Aumenta el daño neto final en un 50% ($\times 1.5$).
   - "escudo_magico": Reduce el daño neto final en un 50% ($\times 0.5$).
   - "invulnerable": Sobrescribe todas las operaciones aritméticas y fuerza el daño final a $0$.
4. **Redondeo Competitivo:** Los sistemas de barra de vida en juegos operan con enteros; se aplica la función matemática estándar de redondeo al más próximo para procesar decimales generados por los multiplicadores.

## Pruebas

### Caso normal

Entrada:
- poderAtaque: `850`
- defensaOponente: `200`
- multiplicadorCombo: `1.2`
- estadoObjetivo: `"normal"`

Resultado esperado:
- dano_final: `780` (Cálculo: (850 - 200) = 650. 650 * 1.2 = 780)
- clasificacion_golpe: `"golpe critico"`
- explicacion: `"Ataque de 850 vs Defensa de 200. Con multiplicador x1.2 y estado 'normal', el dano final es 780."`

### Caso borde

Entrada:
- poderAtaque: `150`
- defensaOponente: `300`
- multiplicadorCombo: `1.0`
- estadoObjetivo: `"normal"`

Resultado esperado:
- dano_final: `0` (Cálculo: (150 - 300) = -150. El control aritmético lo fuerza a 0. 0 * 1.0 = 0)
- clasificacion_golpe: `"golpe nulo o bloqueado"`
- explicacion: `"Ataque de 150 vs Defensa de 300. Con multiplicador x1 y estado 'normal', el dano final es 0."`

## Explicacion final

Esta solución destaca la importancia del control sobre las operaciones matemáticas puras. En programación de motores lógicos, la matemática ciega genera *bugs*; el control `if (danoBase < 0) { danoBase = 0; }` es el muro que impide que la lógica de la partida se rompa. Además, el flujo de ejecución respeta el diseño de un juego real: validación temprana, cálculo base, mitigación, escalado multiplicativo, alteraciones de estado finales y parseo de tipo (redondeo a int) para la interfaz de usuario.