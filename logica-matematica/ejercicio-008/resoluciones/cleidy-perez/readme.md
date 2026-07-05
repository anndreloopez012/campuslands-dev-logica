# Solución: Flujos Paso a Paso (Películas de Ciencia Ficción)

## Leer instrucciones e Identificar entradas
Este ejercicio nos pide crear un sistema que organice las películas de ciencia ficción que entran a una plataforma de cine en línea. El sistema debe seguir un camino de dos pasos obligatorios con cada película para saber qué hacer con ella.
* **Entradas:** Una lista de películas. Cada una tiene su `titulo`, si `esParaMayores` (verdadero o falso) y sus `votosBuenos` (un número).

## Definir salidas
* **Salidas:** Una lista nueva que nos dice, película por película, qué acciones automáticas se tomaron en el Paso 1 (seguridad) y en el Paso 2 (publicidad).

## Reglas de negocio y Condicionales
Para hacer el flujo ordenado, usamos un ciclo `for` para analizar las películas una detrás de otra y les aplicamos estas reglas con condicionales `if`:
1. **Regla del Paso 1 (Seguridad):** Si la película tiene la etiqueta de mayores en verdadero (`true`), el flujo genera el paso de bloquearla para los niños. Si no, la deja libre.
2. **Regla del Paso 2 (Popularidad):** Si la película tiene más de $500$ votos buenos, el flujo decide ponerla arriba en la página principal para que todos la vean porque es muy popular. Si tiene menos, la deja guardada normalmente.

## Probar casos
* **Caso Normal:** Probamos con tres películas. "Matrix" pasa por el flujo y el código dice: Paso 1 bloquear, Paso 2 página principal. "Wall-E" dice: Paso 1 libre, Paso 2 página principal. "Astroboy" dice: Paso 1 libre, Paso 2 catálogo normal. El flujo funcionó paso a paso para cada una.
* **Caso Borde:** Si no ponemos ninguna película en la lista, el programa lo detecta al principio con un `if` y nos avisa con un mensaje de error claro en vez de romperse.