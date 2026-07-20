# Lógica matemática 064 
- rangos y maximos
## Entrada:
Un arreglo con el inventario de motos que contiene la marca, modelo y cilindraje.## Proceso:Se valida que el arreglo tenga datos. Luego se filtran las motos con un cilindraje entre 200 cc y 400 cc. Después se recorre el inventario para encontrar la moto con el mayor cilindraje.
## Salida:- Lista de motos con un cilindraje entre 200 cc y 400 cc.- Información de la moto con el mayor cilindraje.

# Reglas identificadas
- El inventario debe contener al menos una moto.- Solo se muestran las motos con un cilindraje entre 200 cc y 400 cc.- Se identifica la moto con el mayor cilindraje del inventario.
# Pruebas
## Caso normal
### Entrada:
Un arreglo con varias motos y diferentes cilindrajes.### Resultado esperado:Se muestran las motos que están en el rango de 200 cc a 400 cc y la moto con el mayor cilindraje.
## Caso borde
### Entrada:
Un arreglo vacío (`[]`).
### Resultado esperado:
Se muestra el mensaje **"No hay motos registradas."**# Explicación finalLa solución funciona porque primero verifica que existan motos registradas. Después utiliza un filtro para seleccionar las motos dentro del rango establecido y un ciclo para comparar los cilindrajes hasta encontrar la moto con el valor máximo.
# Sugerencia
Cuando necesites encontrar un valor máximo, inicia la comparación con el primer elemento del arreglo y recorre los demás actualizando el máximo cuando encuentres un valor mayor.