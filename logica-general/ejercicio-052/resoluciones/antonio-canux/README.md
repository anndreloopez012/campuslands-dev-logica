# Ejercicio de Lógica 052 - Temática Pingpong

**Camper:** Antonio Canux

## Análisis

- Entrada: Dos objetos (`opcionA` y `opcionB`) que representan las características de dos raquetas de pingpong (nombre, velocidad y control), y una cadena de texto (`estiloJuego`) que define la preferencia del jugador.
- Proceso: Evaluar primero el estilo de juego del participante. Dependiendo de esto, comparar una característica específica (velocidad o control) entre la opción A y la opción B para determinar cuál es mayor. 
- Salida: Un objeto que contiene el nombre de la raqueta elegida (`eleccion`) y un mensaje explicando la razón de dicha elección (`motivo`).

## Reglas identificadas

1. Si el estilo de juego es "ofensivo", la regla prioriza elegir la raqueta con el valor más alto en "velocidad".
2. Si el estilo de juego es "defensivo", la regla prioriza elegir la raqueta con el valor más alto en "control".
3. En caso de que ambas opciones tengan el mismo valor en la característica evaluada (empate), se selecciona la "opción A" por defecto para no bloquear la decisión.
4. Si se ingresa un estilo de juego no contemplado (diferente a ofensivo o defensivo), el sistema rechaza la selección.

## Pruebas

### Caso normal

Entrada:
```javascript
opcionA: { nombre: "Raqueta Halcón", velocidad: 9, control: 5 }
opcionB: { nombre: "Raqueta Escudo", velocidad: 6, control: 9 }
estiloJuego: "ofensivo"
```

Resultado esperado:

```javascript
{
  eleccion: 'Raqueta Halcón',
  motivo: 'La opción A tiene mayor velocidad, ideal para un estilo ofensivo.'
}
```

### Caso borde

Entrada (Empate de características y estilo de juego defensivo):

```javascript
opcionA: { nombre: "Raqueta Balance", velocidad: 7, control: 8 }
opcionB: { nombre: "Raqueta Clásica", velocidad: 5, control: 8 }
estiloJuego: "defensivo"
```

Resultado esperado:

```javascript
{
  eleccion: 'Raqueta Balance',
  motivo: 'Ambas tienen el mismo control. Se elige la opción A por defecto.'
}
```

## Explicación final
La solución es robusta porque aísla la toma de decisión en pasos secuenciales lógicos. Primero clasifica el contexto (el estilo de juego) para saber bajo qué criterio debe operar. Una vez definido el criterio, realiza una comparación numérica directa entre las propiedades de los objetos entregados. Además, contempla tanto el manejo de errores (estilos no válidos) como los casos de empate, garantizando que la función siempre devuelva un resultado válido y predecible.