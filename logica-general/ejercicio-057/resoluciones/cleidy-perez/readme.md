# Tabla de decisión para arquitectura 3D

## Análisis

**Entrada:**
- Arreglo con proyectos y cantidad de pisos.

**Proceso:**
- Recorrer el arreglo.
- Evaluar la cantidad de pisos.
- Mostrar la decisión para cada proyecto.

**Salida:**
- Decisión sobre el uso de elevador.

## Reglas identificadas

- Si tiene 0 pisos, no necesita elevador.
- Si tiene de 1 a 5 pisos, el elevador es opcional.
- Si tiene más de 5 pisos, necesita elevador.

## Pruebas

### Caso normal

**Entrada:**

```javascript
[
 {nombre:"Casa", pisos:1},
 {nombre:"Edificio", pisos:8}
]
```

**Resultado esperado:**

```
Casa: Elevador opcional.
Edificio: Necesita elevador.
```

### Caso borde

**Entrada:**

```javascript
[
 {nombre:"Puente", pisos:0}
]
```

**Resultado esperado:**

```
Puente: No necesita elevador.
```

## Explicación final

La solución utiliza un arreglo, una función, ciclos y condicionales para tomar una decisión según la cantidad de pisos de cada proyecto. También aplica razonamiento lógico para elegir el resultado correcto.

## Sugerencia

Convierte cada regla del problema en una condición antes de programar.