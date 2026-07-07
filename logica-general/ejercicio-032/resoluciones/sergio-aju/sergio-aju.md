# Plantilla de solucion

## Autor

Sergio Ajú

## Analisis

- **Entrada:** Dos objetos que representan raquetas de pingpong, cada uno con sus atributos: `nombre`, `control` y `velocidad`.
- **Proceso:** Se comparan los niveles de control. Si hay un empate en control, el desempate se realiza comparando la velocidad. Si los atributos son idénticos, se reporta un empate técnico.
- **Salida:** Un objeto indicando cuál raqueta es la mejor opción y el motivo lógico de la decisión.

## Reglas identificadas

1. **Prioridad de Control:** El atributo "control" es el factor determinante principal.
2. **Desempate por Velocidad:** Si el "control" es igual en ambas opciones, la raqueta con mayor "velocidad" gana.
3. **Validación:** Si las estadísticas son exactamente iguales, se marca como una opción indefinida.

## Pruebas

### Caso normal

**Entrada:** - Raqueta A: `{ control: 8, velocidad: 7 }`
- Raqueta B: `{ control: 8, velocidad: 9 }`

**Resultado esperado:**
`{ mejor: "Raqueta B", motivo: "Empate en control, mayor velocidad." }`

### Caso borde

**Entrada:** - Raqueta A: `{ control: 9, velocidad: 5 }`
- Raqueta B: `{ control: 9, velocidad: 5 }`

**Resultado esperado:**
`{ mejor: "Indefinido", motivo: "Ambas tienen estadísticas iguales." }`

## Explicacion final

La solución utiliza una estructura jerárquica de condicionales. Primero evaluamos la condición principal (control). Al detectar un empate en el control, el código entra en una segunda capa de comparación (velocidad) para resolver el conflicto. Esto asegura una toma de decisiones precisa basada en las reglas del reto.

## Sugerencia

Cuando tengas que comparar varios elementos, siempre identifica primero cuál es el atributo más importante (el "factor decisivo") y deja los atributos secundarios solo para los casos de desempate. Esto mantiene el código limpio y fácil de leer.