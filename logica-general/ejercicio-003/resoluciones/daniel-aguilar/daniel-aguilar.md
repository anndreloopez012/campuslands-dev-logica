# Solucion ejercicio 003 - toma de decisiones

Area: Logica general | Tematica: torneo de esports | Autor: Daniel Aguilar

## Entrada

```text
opciones: [{"nombre": "Equipo Titan", "valor": 87, "riesgo": "medio"}, {"nombre": "Equipo Rex", "valor": 90, "riesgo": "alto"}, {"nombre": "Equipo Onix", "valor": 18, "riesgo": "alto"}, {"nombre": "Equipo Zenit", "valor": 11, "riesgo": "medio"}]
```

## Reglas aplicadas

- Se descartan primero las opciones de riesgo alto, si existen alternativas de riesgo bajo o medio.
- Entre las opciones restantes se elige la de mayor valor.
- Si todas las opciones son de riesgo alto, se elige igualmente la de mayor valor.

## Pseudocodigo

```text
FUNCION tomar_decision(opciones)
  seguras <- FILTRAR opciones DONDE riesgo != 'alto'
  pool <- seguras SI no esta vacio, SINO opciones
  elegido <- el de mayor valor en pool
  DEVOLVER elegido
FIN FUNCION
```

## Salida esperada

```text
elegido: Equipo Titan
valor: 87
riesgo: medio
motivo: mayor valor entre las opciones de riesgo bajo o medio
```

## Pruebas

### Prueba 1 (caso normal, el del ejemplo de entrada)

```text
entrada:
opciones: [{"nombre": "Equipo Titan", "valor": 87, "riesgo": "medio"}, {"nombre": "Equipo Rex", "valor": 90, "riesgo": "alto"}, {"nombre": "Equipo Onix", "valor": 18, "riesgo": "alto"}, {"nombre": "Equipo Zenit", "valor": 11, "riesgo": "medio"}]

salida:
elegido: Equipo Titan
valor: 87
riesgo: medio
motivo: mayor valor entre las opciones de riesgo bajo o medio
```

### Prueba 2 (caso borde)

```text
entrada:
opciones: [{"nombre": "Equipo Titan", "valor": 50, "riesgo": "alto"}, {"nombre": "Equipo Rex", "valor": 50, "riesgo": "alto"}, {"nombre": "Equipo Onix", "valor": 50, "riesgo": "alto"}, {"nombre": "Equipo Zenit", "valor": 50, "riesgo": "alto"}]

salida:
elegido: Equipo Titan
valor: 50
riesgo: alto
motivo: todas las opciones eran de riesgo alto, se eligio el mayor valor
```
