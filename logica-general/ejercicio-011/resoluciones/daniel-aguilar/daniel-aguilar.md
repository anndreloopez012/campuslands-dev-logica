# Solucion ejercicio 012 - comparacion de opciones

Area: Logica general | Tematica: pingpong | Autor: Daniel Aguilar

## Entrada

```text
opcion_a: {"nombre": "jugador 4", "precio": 185, "calidad": 6, "tiempo": 3}
opcion_b: {"nombre": "jugador 3", "precio": 147, "calidad": 1, "tiempo": 6}
```

## Reglas aplicadas

- El puntaje de cada opcion se calcula como: calidad*2 - precio/50 - tiempo*0.5.
- Gana la opcion con mayor puntaje.
- En caso de empate exacto, gana la opcion A (primer criterio de desempate por orden de entrada).

## Pseudocodigo

```text
FUNCION comparar_opciones(a, b)
  puntaje(o) <- o.calidad*2 - o.precio/50 - o.tiempo*0.5
  SI puntaje(a) >= puntaje(b) ENTONCES ganador <- a
  SINO ganador <- b
  DEVOLVER puntajes y ganador
FIN FUNCION
```

## Salida esperada

```text
puntaje_a: 6.8
puntaje_b: -3.94
ganador: jugador 4
motivo: mayor puntaje = mejor calidad, menor precio y menor tiempo
```

## Pruebas

### Prueba 1 (caso normal, el del ejemplo de entrada)

```text
entrada:
opcion_a: {"nombre": "jugador 4", "precio": 185, "calidad": 6, "tiempo": 3}
opcion_b: {"nombre": "jugador 3", "precio": 147, "calidad": 1, "tiempo": 6}

salida:
puntaje_a: 6.8
puntaje_b: -3.94
ganador: jugador 4
motivo: mayor puntaje = mejor calidad, menor precio y menor tiempo
```

### Prueba 2 (caso borde)

```text
entrada:
opcion_a: {"nombre": "jugador 4", "precio": 185, "calidad": 6, "tiempo": 3}
opcion_b: {"nombre": "empate-jugador 4", "precio": 185, "calidad": 6, "tiempo": 3}

salida:
puntaje_a: 6.8
puntaje_b: 6.8
ganador: jugador 4
motivo: mayor puntaje = mejor calidad, menor precio y menor tiempo
```
