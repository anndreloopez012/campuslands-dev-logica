# Solucion ejercicio 001 - clasificacion por reglas

Area: Logica general | Tematica: videojuegos competitivos | Autor: Daniel Aguilar

## Entrada

```text
items: [{"nombre": "League of Legends", "estado": "bloqueado", "prioridad": "media"}, {"nombre": "Rocket League", "estado": "pendiente", "prioridad": "media"}, {"nombre": "Valorant", "estado": "aprobado", "prioridad": "media"}, {"nombre": "Apex Legends", "estado": "bloqueado", "prioridad": "alta"}]
```

## Reglas aplicadas

- Si existe al menos un elemento en estado 'bloqueado', se elige el de mayor prioridad para revisar primero.
- Si no hay bloqueados pero hay 'pendiente', se continua con el primer pendiente de la lista.
- Si todos los elementos estan en 'aprobado', se cierra el ciclo.

## Pseudocodigo

```text
FUNCION clasificar_por_reglas(items)
  bloqueados <- FILTRAR items DONDE estado == 'bloqueado'
  SI bloqueados no esta vacio ENTONCES
    ordenar bloqueados por prioridad (alta > media > baja)
    DEVOLVER accion 'revisar bloqueado' con el primero
  SINO SI existe 'pendiente' ENTONCES
    DEVOLVER accion 'continuar pendiente' con el primero
  SINO
    DEVOLVER accion 'cerrar ciclo: todo aprobado'
FIN FUNCION
```

## Salida esperada

```text
accion: revisar bloqueado: Apex Legends
motivo: la regla prioriza los elementos bloqueados sobre pendientes o aprobados.
```

## Pruebas

### Prueba 1 (caso normal, el del ejemplo de entrada)

```text
entrada:
items: [{"nombre": "League of Legends", "estado": "bloqueado", "prioridad": "media"}, {"nombre": "Rocket League", "estado": "pendiente", "prioridad": "media"}, {"nombre": "Valorant", "estado": "aprobado", "prioridad": "media"}, {"nombre": "Apex Legends", "estado": "bloqueado", "prioridad": "alta"}]

salida:
accion: revisar bloqueado: Apex Legends
motivo: la regla prioriza los elementos bloqueados sobre pendientes o aprobados.
```

### Prueba 2 (caso borde)

```text
entrada:
items: [{"nombre": "League of Legends", "estado": "aprobado", "prioridad": "baja"}, {"nombre": "Rocket League", "estado": "aprobado", "prioridad": "baja"}, {"nombre": "Valorant", "estado": "aprobado", "prioridad": "baja"}, {"nombre": "Apex Legends", "estado": "aprobado", "prioridad": "baja"}]

salida:
accion: cerrar ciclo: todo aprobado
motivo: no hay bloqueados ni pendientes.
```
