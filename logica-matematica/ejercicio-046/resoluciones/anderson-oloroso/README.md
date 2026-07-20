# Plantilla de solución

## Análisis

### Entrada

Un arreglo de autos hiperdeportivos.

Cada auto contiene:

- marca
- modelo
- velocidadKmh
- pesoKg

---

## Proceso

1. Validar los datos.
2. Convertir velocidad de km/h a m/s.
3. Convertir velocidad de km/h a mph.
4. Convertir peso de kilogramos a libras.
5. Clasificar el vehículo según su velocidad.
6. Calcular la velocidad promedio.

---

## Salida

El programa devuelve:

- total de autos.
- velocidad promedio.
- datos convertidos de cada automóvil.
- categoría correspondiente.

---

# Fórmulas utilizadas

## Conversión de velocidad

De km/h a m/s

\[
m/s=\frac{km/h}{3.6}
\]

Ejemplo

\[
360\div3.6=100\ m/s
\]

---

De km/h a mph

\[
mph=km/h\times0.621371
\]

Ejemplo

\[
300\times0.621371=186.41\ mph
\]

---

## Conversión de peso

\[
Libras=Kilogramos\times2.20462
\]

Ejemplo

\[
1000\times2.20462=2204.62\ lb
\]

---

# Clasificación

| Velocidad | Categoría |
|-----------|-----------|
| 350 km/h o más | Hiperdeportivo extremo |
| 300–349 km/h | Hiperdeportivo |
| Menor de 300 km/h | Deportivo |

---

# Validaciones

Los datos son válidos cuando:

- velocidad mayor que 0.
- peso mayor que 0.
- marca y modelo no están vacíos.

---

# Caso normal

Entrada

```javascript
{
 marca:"Bugatti",
 modelo:"Chiron",
 velocidadKmh:420,
 pesoKg:1995
}
```

Resultado

```text
Velocidad:
420 km/h

116.67 m/s

260.98 mph

Peso:
4398.22 lb

Categoría:
Hiperdeportivo extremo
```

---

# Caso borde

Entrada

```javascript
{
 marca:"",
 modelo:"",
 velocidadKmh:-50,
 pesoKg:0
}
```

Resultado

```text
Datos inválidos
```

---

# Explicación final

La solución organiza la información de varios autos hiperdeportivos y realiza conversiones entre diferentes unidades de medida. Posteriormente clasifica cada automóvil según su velocidad máxima y genera un resumen general. El programa emplea funciones, arreglos, objetos, ciclos, condicionales y operaciones matemáticas para resolver el problema de forma ordenada y verificable.