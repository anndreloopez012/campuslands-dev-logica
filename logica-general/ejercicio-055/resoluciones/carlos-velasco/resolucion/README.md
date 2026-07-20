# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto `capa` que contiene las propiedades `esFondo` (booleano), `bloqueada` (booleano) y `opacidad` (número).
* **Proceso**: Evaluación secuencial de restricciones de seguridad y edición mediante una estructura de retornos tempranos (*early returns*).
* **Salida**: Un objeto que define la `accion` (Editable o Bloqueada) y un `motivo` que justifica el estado de la capa.

## Reglas identificadas

1. Si la capa es de tipo fondo (`esFondo`), se bloquea automáticamente por seguridad.
2. Si la capa ha sido bloqueada manualmente por el usuario (`bloqueada`), se impide la edición.
3. Si la capa tiene una opacidad extremadamente baja (menor al 10%), se bloquea para prevenir errores de trazado.

## Pruebas

### Caso normal

* **Entrada**: `{ nombre: "Boceto", bloqueada: false, opacidad: 50, esFondo: false }`
* **Resultado esperado**: `{ accion: "Editable", motivo: "La capa está lista para trabajar." }`

### Caso borde

* **Entrada**: `{ nombre: "Fondo", bloqueada: false, opacidad: 100, esFondo: true }`
* **Resultado esperado**: `{ accion: "Bloqueada", motivo: "Capa base protegida por seguridad." }`

## Explicacion final

La solución funciona aplicando una jerarquía de validaciones que detienen el proceso en cuanto se detecta una condición de bloqueo. Este diseño es robusto porque protege los elementos críticos del archivo (como el fondo) antes de validar aspectos operativos o estéticos (como el bloqueo manual o la opacidad). Al ser modular, permite que la lógica de edición se mantenga consistente y predecible para el usuario, asegurando que solo se autorice la interacción cuando se garantizan las condiciones óptimas de trabajo.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Condición de fondo**: `capa.esFondo`
* **Condición de bloqueo manual**: `capa.bloqueada`
* **Condición de visibilidad**: `capa.opacidad < 10`