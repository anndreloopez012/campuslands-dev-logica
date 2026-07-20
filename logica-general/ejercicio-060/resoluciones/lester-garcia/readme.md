# Plantilla de solucion

## Analisis

- Entrada:
  - menu:
    - { nombre: "Hamburguesa", disponible: true, vegetariano: false }
    - { nombre: "Wrap Vegetal", disponible: false, vegetariano: true }
    - { nombre: "Taco Vegano", disponible: true, vegetariano: true }
    - { nombre: "Hot Dog", disponible: true, vegetariano: false }

- Proceso:
  - Recorrer el menú de comida urbana.
  - Verificar que el alimento esté disponible.
  - Comprobar que sea una opción vegetariana.
  - Seleccionar el primer alimento que cumpla ambas condiciones.

- Salida:
  - opcion: Taco Vegano
  - motivo: Es la primera opción vegetariana disponible.

## Reglas identificadas

1. El alimento debe estar disponible.
2. El alimento debe ser vegetariano.
3. Se selecciona la primera opción que cumpla ambas condiciones.
4. Si ninguna opción cumple las reglas, se informa que no existen resultados.

## Pruebas

### Caso normal

Entrada:

menu:
- { nombre: "Hamburguesa", disponible: true, vegetariano: false }
- { nombre: "Wrap Vegetal", disponible: false, vegetariano: true }
- { nombre: "Taco Vegano", disponible: true, vegetariano: true }
- { nombre: "Hot Dog", disponible: true, vegetariano: false }

Resultado esperado:

opcion: Taco Vegano
motivo: Es la primera opción vegetariana disponible.

### Caso borde

Entrada:

menu:
- { nombre: "Hamburguesa", disponible: false, vegetariano: false }
- { nombre: "Hot Dog", disponible: true, vegetariano: false }

Resultado esperado:

opcion: Sin opciones
motivo: No existe un alimento que cumpla todas las condiciones.

## Explicacion final

La solución funciona porque recorre el menú y aplica dos criterios de selección al mismo tiempo: que el alimento esté disponible y que sea vegetariano. El primer elemento que cumple ambas condiciones se devuelve como resultado. Si ningún alimento satisface las reglas, el programa informa que no existen opciones válidas, generando una respuesta clara y verificable.