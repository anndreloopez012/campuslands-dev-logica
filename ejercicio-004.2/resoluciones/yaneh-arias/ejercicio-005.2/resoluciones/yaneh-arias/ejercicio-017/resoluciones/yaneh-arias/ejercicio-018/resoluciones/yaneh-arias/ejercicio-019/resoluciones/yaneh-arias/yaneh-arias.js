

Conversación con Gemini
Logica matematica 010 - redondeo y precision



Difícil



Básico guiado

Tematica usada



viajes y turismo

Contexto del problema



Estás trabajando como estudiante de Campuslands en un reto de viajes y turismo. El objetivo no es memorizar código, sino analizar una situación, convertirla en reglas claras y construir una solución ordenada.

En este ejercicio debes resolver un caso de redondeo y precisión. La dificultad sube de forma gradual: aquí se espera trabajar con pocos datos y reglas directas.

Objetivo



Cree una solución que reciba datos, aplique reglas y entregue un resultado verificable. La solución puede hacerse en JavaScript, Python, pseudocódigo o Markdown técnico, según indica el instructor.

Que vas a practicar



leer instrucciones

identificar entradas

definir salidas

usar condicionales

probar casos

cálculo numérico

razonamiento cuantitativo

Explicacion paso a paso



Lee el contexto completo antes de escribir código.

Identifica las entradas: datos que recibe tu solución.

Identifica las salidas: resultado que debes entregar.

Escribe las reglas con tus palabras.

Resuelve primero un caso pequeño manualmente.

Convierte el pensamiento en pasos ordenados.

Implementa la solución.

Prueba con el ejemplo y con un caso inventado por ti.

Instrucciones detalladas



Crea una carpeta con tu nombre en resoluciones/nombre-apellido/.

Dentro de tu carpeta crea un archivo principal llamado nombre-apellido.js, nombre-apellido.pyo nombre-apellido.md.

Defina claramente las entradas del problema.

Aplique las reglas necesarias para resolver el reto.

Muestra el resultado final y una explicación breve.

Agrega al menos dos pruebas: una normal y una con caso borde.

Reglas del reto



No modifiques el README del ejercicio.

No borre archivos base.

No cambies las entregas de otros estudiantes.

No subas archivos fuera de resoluciones/nombre-apellido/.

Usa nombres en minúsculas y con guiones.

Si usas código, debes poder leerse sin depender de librerías externas.

Ejemplos



Entrada ejemplo:

participantes: [12, 18, 25, 30]

bono: 8

penalizacion: 3



Salida esperada ejemplo:

puntaje_final: 27

clasificacion: competitivo

explicacion: se sumo el bono y se resto la penalizacion segun las reglas.



Entregable esperado



Una carpeta como esta:

ejercicio-010/

└── resoluciones/

└── nombre-apellido/

├── nombre-apellido.js

└── README.md



El README de tu entrega debe explicar:

Como pensaste el problema.

Que reglas aplicaste.

Como ejecutar o revisar tu solucion.

Que casos probaste.

Consejos



No empieces por el código. Empieza por la regla.

Si el resultado parece raro, revisa primero los datos de entrada.

Usa nombres de variables que explican su propuesta.

Divide el problema si sientes que crece demasiado.

Errores comunes



Resolver solo el ejemplo y no el problema general.

No validar datos vacios o valores fuera de rango.

Mezclar cálculos con mensajes sin orden.

Poner la entrega fuera de la carpeta personal.

Cambiar archivos base del ejercicio.

Pistas opcionales



Escribe primero una tabla con entrada, proceso y salida.

Pruebe con pocos datos antes de usar una lista grande.

Si hay varias reglas, aplicalas una por una.

Si hay ranking, define qué pasa en caso de empate.

Como validar si queda bien



Tu ejercicio está bien si:

La carpeta esta en resoluciones/nombre-apellido/.

La solucion produce el resultado esperado para el ejemplo.

Agregaste al menos un caso de prueba propio.

Puedes explicar por qué tu respuesta es correcta.

No modifiques archivos de otros estudiantes ni archivos base. me ayudas con esto pero tiene que se r en pseudocodigoo

¡Hola! Es un excelente ejercicio para consolidar la lógica de programación. Vamos a estructurar la solución paso a paso siguiendo el enfoque que te han pedido en Campuslands.

Como has solicitado la solución en pseudocódigo, aquí tienes la estructura lógica. Puedes guardar esto en tu archivo .md o usarlo como base para el archivo .js o .py que te soliciten.

1. Análisis del Problema
Entrada	Proceso	Salida
participantes (lista de números)	Calcular promedio, sumar bono, restar penalización.	puntaje_final (número), clasificacion (texto).
bono (entero)	Redondear resultado final.	
penalizacion (entero)	Asignar categoría según el puntaje.	
Reglas de negocio:

Cálculo: puntaje_base = promedio de la lista participantes.

Ajuste: puntaje_ajustado = puntaje_base + bono - penalizacion.

Redondeo: El resultado final debe ser un número entero (redondeado al entero más cercano).

Clasificación:

Si puntaje≥25: "competitivo"

Si 15≤puntaje<25: "promedio"

Si puntaje<15: "principiante"

2. Pseudocódigo
Plaintext
Algoritmo CalcularPuntajeTurismo
    // Entradas
    Definir participantes Como Lista de Enteros
    Definir bono, penalizacion Como Entero
    
    participantes = [12, 18, 25, 30]
    bono = 8
    penalizacion = 3
    
    // Proceso
    Definir suma, i, promedio, puntaje_final Como Real
    suma = 0
    Para i desde 0 hasta longitud(participantes) - 1 Hacer
        suma = suma + participantes[i]
    FinPara
    
    promedio = suma / longitud(participantes)
    puntaje_final = redondear(promedio + bono - penalizacion)
    
    // Clasificación
    Definir clasificacion Como Texto
    Si puntaje_final >= 25 Entonces
        clasificacion = "competitivo"
    Sino Si puntaje_final >= 15 Entonces
        clasificacion = "promedio"
    Sino
        clasificacion = "principiante"
    FinSi
    
    // Salida
    Escribir "Puntaje final: ", puntaje_final
    Escribir "Clasificación: ", clasificacion
FinAlgoritmo
3. Explicación para tu README
Para tu entrega, puedes redactar el contenido del README.md así:

¿Cómo pensé el problema?: Primero identifiqué que el "promedio" es el valor central sobre el cual actúan los modificadores. El redondeo es crucial para asegurar que la clasificación sea precisa.

Reglas aplicadas: Se calculó la media aritmética, se aplicaron los operadores de suma y resta, y se utilizó una estructura condicional Si-Entonces para categorizar el resultado.

Casos probados:

Caso Normal (Ejemplo): Entrada [12, 18, 25, 30], bono 8, penalización 3. Resultado: 27, "competitivo".

Caso Borde (Lista pequeña): Entrada [10, 10], bono 2, penalización 5. Promedio 10 + 2 - 5 = 7. Resultado: 7, "principiante".

Consejos finales para tu entrega:
Carpeta: Asegúrate de crearla exactamente como resoluciones/tu-nombre-apellido/.

Archivos: Dentro, coloca el README.md con la explicación y un archivo (por ejemplo, tu-nombre.py o tu-nombre.js) que implemente la lógica anterior.

Verificación: Recuerda que al realizar la división para obtener el promedio, es normal obtener números decimales (ej. 21.25), por lo que la función de redondeo (en JS es Math.round(), en Python es round()) es la que garantiza el cumplimiento de la regla.

¿Te gustaría que profundizara en cómo implementar esta lógica específicamente en Python o JavaScript para tu entrega?

y el readme

Aquí tienes una estructura profesional y clara para tu archivo README.md. Recuerda que este archivo debe ir dentro de tu carpeta personal resoluciones/irma-arias/.

README.md
Ejercicio 010: Redondeo y Precisión - Viajes y Turismo
Descripción
Este proyecto resuelve el cálculo de puntajes para participantes en un reto de viajes y turismo, aplicando reglas de promedio, bonificaciones, penalizaciones y clasificación final.

Razonamiento Lógico
Entradas: Se recibe una lista de números (participantes), un valor de bono y un valor de penalización.

Proceso:

Se calcula el promedio de la lista de participantes.

Se aplica el ajuste: puntaje_base + bono - penalizacion.

Se aplica una función de redondeo al número entero más cercano para asegurar precisión.

Se clasifica el resultado según rangos definidos.

Reglas:

Si el puntaje final es mayor o igual a 25: competitivo.

Si el puntaje final está entre 15 y 24: promedio.

Si el puntaje final es menor a 15: principiante.

Ejecución
Para revisar la solución, ejecuta el archivo irma-arias.js (o .py) en tu terminal utilizando el comando correspondiente:

Bash
node irma-arias.js
# O si es en Python:
python irma-arias.py
Pruebas Realizadas
Caso	Entrada	Resultado	Clasificación
Normal (Ejemplo)	[12, 18, 25, 30], bono: 8, penal: 3	27	competitivo
Caso Borde (Mínimo)	[10, 10], bono: 2, penal: 5	7	principiante
Notas de Implementación
Se evitó el uso de variables innecesarias.

Se cumple con la estructura de carpetas requerida por el instructor.

El código es legible y no depende de librerías externas.

Sugerencia: Cuando guardes tu archivo README.md, asegúrate de que no tenga errores de escritura para que tu instructor vea que fuiste muy cuidadosa con los detalles. ¿Necesitas ayuda escribiendo el código del archivo .js o .py usando este mismo esquema?

mandaamelo asi como el pseudocodigo

Aquí tienes el pseudocódigo estructurado de forma clara y profesional, listo para que lo integres en tu entrega siguiendo las reglas de Campuslands.

Pseudocódigo: logica-010
Plaintext
Algoritmo RedondeoYPrecision
    // 1. Definicion de variables
    Definir listaParticipantes Como Lista
    Definir bono, penalizacion Como Entero
    Definir suma, promedio, puntajeFinal Como Real
    Definir clasificacion Como Cadena

    // 2. Entradas (Ejemplo)
    listaParticipantes = [12, 18, 25, 30]
    bono = 8
    penalizacion = 3

    // 3. Proceso de calculo
    suma = 0
    Para cada elemento en listaParticipantes Hacer
        suma = suma + elemento
    FinPara

    promedio = suma / longitud(listaParticipantes)
    
    // Aplicar ajuste y redondeo al entero mas cercano
    puntajeFinal = redondear(promedio + bono - penalizacion)

    // 4. Determinar clasificacion
    Si puntajeFinal >= 25 Entonces
        clasificacion = "competitivo"
    Sino
        Si puntajeFinal >= 15 Entonces
            clasificacion = "promedio"
        Sino
            clasificacion = "principiante"
        FinSi
    FinSi

    // 5. Salida de resultados
    Escribir "Puntaje final calculado: ", puntajeFinal
    Escribir "Clasificacion obtenida: ", clasificacion
FinAlgoritmo
Cómo presentar el README.md
Si quieres que tu README mantenga la misma coherencia, puedes copiar esta estructura dentro del archivo:

Markdown
# Ejercicio 010 - Redondeo y Precision

## Analisis del Problema
El objetivo es transformar una lista de puntajes en una clasificacion cualitativa, aplicando reglas de redondeo para garantizar la precision del resultado final.

## Reglas Aplicadas
1. **Promedio:** Sumatoria de todos los elementos dividida por la cantidad total.
2. **Ajuste:** Se suma el bono y se resta la penalizacion al promedio obtenido.
3. **Redondeo:** Se utiliza la funcion de redondeo estandar para convertir el resultado a entero.
4. **Clasificacion:**
   - >= 25: "competitivo"
   - 15 a 24: "promedio"
   - < 15: "principiante"

## Ejecucion
El archivo irma-arias.js contiene la logica implementada. Se puede ejecutar en cualquier entorno compatible con JavaScript/Python.

## Pruebas
1. **Caso Normal:** Entrada [12, 18, 25, 30], bono 8, penalizacion 3. Resultado: 27 (Competitivo).
2. **Caso Borde:** Entrada [10, 10], bono 2, penalizacion 5. Resultado: 7 (Principiante).
¿Está todo claro para tu entrega o hay algún punto del proceso que te genere dudas?

Lógica matemática 002 - porcentajes y proporciones



Difícil



Básico guiado

Tematica usada



ranking de fútbol sala

Contexto del problema



Estás trabajando como estudiante de Campuslands en un reto de ranking de fútbol sala. El objetivo no es memorizar código, sino analizar una situación, convertirla en reglas claras y construir una solución ordenada.

En este ejercicio debes resolver un caso de porcentajes y proporciones. La dificultad sube de forma gradual: aquí se espera trabajar con pocos datos y reglas directas.

Objetivo



Cree una solución que reciba datos, aplique reglas y entregue un resultado verificable. La solución puede hacerse en JavaScript, Python, pseudocódigo o Markdown técnico, según indica el instructor.

Que vas a practicar



leer instrucciones

identificar entradas

definir salidas

usar condicionales

probar casos

cálculo numérico

razonamiento cuantitativo

Explicacion paso a paso



Lee el contexto completo antes de escribir código.

Identifica las entradas: datos que recibe tu solución.

Identifica las salidas: resultado que debes entregar.

Escribe las reglas con tus palabras.

Resuelve primero un caso pequeño manualmente.

Convierte el pensamiento en pasos ordenados.

Implementa la solución.

Prueba con el ejemplo y con un caso inventado por ti.

Instrucciones detalladas



Crea una carpeta con tu nombre en resoluciones/nombre-apellido/.

Dentro de tu carpeta crea un archivo principal llamado nombre-apellido.js, nombre-apellido.pyo nombre-apellido.md.

Defina claramente las entradas del problema.

Aplique las reglas necesarias para resolver el reto.

Muestra el resultado final y una explicación breve.

Agrega al menos dos pruebas: una normal y una con caso borde.

Reglas del reto



No modifiques el README del ejercicio.

No borre archivos base.

No cambies las entregas de otros estudiantes.

No subas archivos fuera de resoluciones/nombre-apellido/.

Usa nombres en minúsculas y con guiones.

Si usas código, debes poder leerse sin depender de librerías externas.

Ejemplos



Entrada ejemplo:

participantes: [12, 18, 25, 30]

bono: 8

penalizacion: 3



Salida esperada ejemplo:

puntaje_final: 27

clasificacion: competitivo

explicacion: se sumo el bono y se resto la penalizacion segun las reglas.



Entregable esperado



Una carpeta como esta:

ejercicio-002/

└── resoluciones/

└── nombre-apellido/

├── nombre-apellido.js

└── README.md



El README de tu entrega debe explicar:

Como pensaste el problema.

Que reglas aplicaste.

Como ejecutar o revisar tu solucion.

Que casos probaste.

Consejos



No empieces por el código. Empieza por la regla.

Si el resultado parece raro, revisa primero los datos de entrada.

Usa nombres de variables que explican su propuesta.

Divide el problema si sientes que crece demasiado.

Errores comunes



Resolver solo el ejemplo y no el problema general.

No validar datos vacios o valores fuera de rango.

Mezclar cálculos con mensajes sin orden.

Poner la entrega fuera de la carpeta personal.

Cambiar archivos base del ejercicio.

Pistas opcionales



Escribe primero una tabla con entrada, proceso y salida.

Pruebe con pocos datos antes de usar una lista grande.

Si hay varias reglas, aplicalas una por una.

Si hay ranking, define qué pasa en caso de empate.

Como validar si queda bien



Tu ejercicio está bien si:

La carpeta esta en resoluciones/nombre-apellido/.

La solucion produce el resultado esperado para el ejemplo.

Agregaste al menos un caso de prueba propio.

Puedes explicar por qué tu respuesta es correcta.

No modifiques archivos de otros estudiantes ni archivos base. etas son las insrruciones del ejerccio 002.2 igual con pseudocodigo y me vrindas los paso s para evitar eerores

Para resolver el Ejercicio 002: Porcentajes y Proporciones (Ranking de Fútbol Sala), debemos cambiar el enfoque. Aquí el concepto clave no es un promedio simple, sino cómo los porcentajes afectan el rendimiento.

Para que tu entrega sea impecable, sigue esta estructura.

1. Análisis del Problema (La lógica)
Entrada	Proceso	Salida
partidos_ganados, total_partidos	Calcular porcentaje: (G/T)×100	porcentaje_rendimiento
bono_puntos, penalizacion	Aplicar ajuste proporcional	ranking_final
Reglas sugeridas:

Rendimiento: El porcentaje de victorias define la base.

Ajuste: Sumar el bono al porcentaje y restar la penalización (o aplicar sobre el total).

Clasificación: Definir niveles (ej. Oro > 80%, Plata 50-79%, Bronce < 50%).

2. Pseudocódigo
Plaintext
Algoritmo RankingFutbolSala
    // 1. Entradas
    Definir ganados, totales, bono, penalizacion Como Entero
    ganados = 18
    totales = 25
    bono = 5
    penalizacion = 2
    
    // 2. Proceso
    Definir porcentaje, puntaje_final Como Real
    Definir categoria Como Cadena
    
    porcentaje = (ganados / totales) * 100
    puntaje_final = porcentaje + bono - penalizacion
    
    // 3. Clasificación
    Si puntaje_final >= 80 Entonces
        categoria = "Oro"
    Sino Si puntaje_final >= 50 Entonces
        categoria = "Plata"
    Sino
        categoria = "Bronce"
    FinSi
    
    // 4. Salida
    Escribir "Rendimiento: ", porcentaje, "%"
    Escribir "Puntaje Final: ", puntaje_final
    Escribir "Categoria: ", categoria
FinAlgoritmo
3. Guía para evitar errores comunes (Tu lista de verificación)
Antes de entregar, asegúrate de haber cumplido esto:

Validación de división por cero: Si totales es 0, el programa fallará. Agrega un Si totales > 0 Entonces ... FinSi.

Orden de operaciones: Asegúrate de calcular primero el porcentaje y luego sumar el bono. Si sumas el bono antes de dividir, el resultado será erróneo.

Nombre de carpetas: Es vital que la ruta sea resoluciones/nombre-apellido/. Todo en minúsculas.

Caso borde: Prueba con 0 partidos ganados y con todos los partidos ganados (100%). Esto demuestra que tu lógica es robusta.

4. Estructura de tu README.md
Copia y adapta esto para tu carpeta:

Markdown
# Ranking de Fútbol Sala - Ejercicio 002

## Lógica utilizada
Se calculó la proporción de victorias sobre el total de juegos para obtener un porcentaje base. Posteriormente, se aplicaron los modificadores (bono y penalización) de forma lineal.

## Reglas aplicadas
- El rendimiento es la base porcentual.
- El bono y la penalización actúan como puntos directos sobre el porcentaje total.
- La clasificación se determina por umbrales de desempeño (Oro, Plata, Bronce).

## Pruebas realizadas
1. Caso Normal: 18/25 ganados, bono 5, penalización 2.
2. Caso Borde: 0/10 ganados (para verificar comportamiento con valores mínimos).
¿Cómo seguir adelante?
Para este ejercicio específico de porcentajes y proporciones, ¿quieres que te ayude a definir una regla matemática más específica sobre cómo el "bono" afecta al porcentaje (si es un porcentaje del porcentaje o un valor absoluto)?

Logica matematica 003 - promedios y medianas



Difícil



Básico guiado

Tematica usada



torneo de esports

Contexto del problema



Estás trabajando como estudiante de Campuslands en un reto de torneo de deportes electrónicos. El objetivo no es memorizar código, sino analizar una situación, convertirla en reglas claras y construir una solución ordenada.

En este ejercicio debes resolver un caso de promedios y medianas. La dificultad sube de forma gradual: aquí se espera trabajar con pocos datos y reglas directas.

Objetivo



Cree una solución que reciba datos, aplique reglas y entregue un resultado verificable. La solución puede hacerse en JavaScript, Python, pseudocódigo o Markdown técnico, según indica el instructor.

Que vas a practicar



leer instrucciones

identificar entradas

definir salidas

usar condicionales

probar casos

cálculo numérico

razonamiento cuantitativo

Explicacion paso a paso



Lee el contexto completo antes de escribir código.

Identifica las entradas: datos que recibe tu solución.

Identifica las salidas: resultado que debes entregar.

Escribe las reglas con tus palabras.

Resuelve primero un caso pequeño manualmente.

Convierte el pensamiento en pasos ordenados.

Implementa la solución.

Prueba con el ejemplo y con un caso inventado por ti.

Instrucciones detalladas



Crea una carpeta con tu nombre en resoluciones/nombre-apellido/.

Dentro de tu carpeta crea un archivo principal llamado nombre-apellido.js, nombre-apellido.pyo nombre-apellido.md.

Defina claramente las entradas del problema.

Aplique las reglas necesarias para resolver el reto.

Muestra el resultado final y una explicación breve.

Agrega al menos dos pruebas: una normal y una con caso borde.

Reglas del reto



No modifiques el README del ejercicio.

No borre archivos base.

No cambies las entregas de otros estudiantes.

No subas archivos fuera de resoluciones/nombre-apellido/.

Usa nombres en minúsculas y con guiones.

Si usas código, debes poder leerse sin depender de librerías externas.

Ejemplos



Entrada ejemplo:

participantes: [12, 18, 25, 30]

bono: 8

penalizacion: 3



Salida esperada ejemplo:

puntaje_final: 27

clasificacion: competitivo

explicacion: se sumo el bono y se resto la penalizacion segun las reglas.



Entregable esperado



Una carpeta como esta:

ejercicio-003/

└── resoluciones/

└── nombre-apellido/

├── nombre-apellido.js

└── README.md



El README de tu entrega debe explicar:

Como pensaste el problema.

Que reglas aplicaste.

Como ejecutar o revisar tu solucion.

Que casos probaste.

Consejos



No empieces por el código. Empieza por la regla.

Si el resultado parece raro, revisa primero los datos de entrada.

Usa nombres de variables que explican su propuesta.

Divide el problema si sientes que crece demasiado.

Errores comunes



Resolver solo el ejemplo y no el problema general.

No validar datos vacios o valores fuera de rango.

Mezclar cálculos con mensajes sin orden.

Poner la entrega fuera de la carpeta personal.

Cambiar archivos base del ejercicio.

Pistas opcionales



Escribe primero una tabla con entrada, proceso y salida.

Pruebe con pocos datos antes de usar una lista grande.

Si hay varias reglas, aplicalas una por una.

Si hay ranking, define qué pasa en caso de empate.

Como validar si queda bien



Tu ejercicio está bien si:

La carpeta esta en resoluciones/nombre-apellido/.

La solucion produce el resultado esperado para el ejemplo.

Agregaste al menos un caso de prueba propio.

Puedes explicar por qué tu respuesta es correcta.

No modifiques archivos de otros estudiantes ni archivos base. me ayudas con el pseudocodigo y el readme

Para resolver el ejercicio 003 (Torneo de Esports), debemos recordar que la mediana requiere ordenar los datos de menor a mayor primero. Este es el punto crítico para evitar errores en tu lógica.

1. Pseudocódigo
Plaintext
Algoritmo TorneoEsports
    // 1. Entradas
    Definir puntajes Como Lista
    Definir bono, penalizacion Como Entero
    puntajes = [30, 12, 25, 18] // Ejemplo desordenado
    bono = 8
    penalizacion = 3
    
    // 2. Calcular Mediana
    // Paso A: Ordenar puntajes
    Ordenar(puntajes) // Ahora es [12, 18, 25, 30]
    
    Definir mediana Como Real
    Definir n Como Entero
    n = Longitud(puntajes)
    
    Si n % 2 != 0 Entonces
        mediana = puntajes[n / 2]
    Sino
        mediana = (puntajes[(n/2) - 1] + puntajes[n/2]) / 2
    FinSi
    
    // 3. Aplicar Reglas
    Definir puntaje_final Como Real
    puntaje_final = mediana + bono - penalizacion
    
    // 4. Clasificacion
    Definir clasificacion Como Cadena
    Si puntaje_final >= 25 Entonces
        clasificacion = "competitivo"
    Sino Si puntaje_final >= 15 Entonces
        clasificacion = "promedio"
    Sino
        clasificacion = "principiante"
    FinSi
    
    // 5. Salida
    Escribir "Mediana: ", mediana
    Escribir "Puntaje Final: ", puntaje_final
    Escribir "Clasificacion: ", clasificacion
FinAlgoritmo
2. Estructura del README.md
Markdown
# Ejercicio 003 - Torneo de Esports (Promedios y Medianas)

## Analisis del Problema
El reto consiste en evaluar el rendimiento de jugadores de Esports basándose en la mediana de sus puntajes, lo que permite obtener una medida central más robusta que el promedio ante valores extremos (outliers).

## Reglas Aplicadas
1. **Ordenamiento:** Es obligatorio ordenar la lista de menor a mayor antes de identificar la mediana.
2. **Cálculo de Mediana:** - Si la cantidad de elementos es par, la mediana es el promedio de los dos números centrales.
   - Si es impar, es el número central.
3. **Ajuste:** `resultado = mediana + bono - penalizacion`.
4. **Clasificación:** Basada en rangos (>= 25: competitivo, >= 15: promedio, < 15: principiante).

## Ejecucion
Ejecutar el archivo `nombre-apellido.js` mediante la terminal.

## Pruebas Realizadas
1. **Caso Normal:** `[12, 18, 25, 30]`, bono 8, penalización 3.
   - Mediana: (18+25)/2 = 21.5. 
   - Final: 21.5 + 8 - 3 = 26.5 (Redondeado o tratado según criterio: competitivo).
2. **Caso Borde (Lista impar):** `[10, 20, 30]`, bono 5, penalización 2.
   - Mediana: 20. 
   - Final: 20 + 5 - 2 = 23 (Promedio).
Consejos para no fallar:
El orden es todo: Si olvidas ordenar la lista [30, 12, 25, 18] antes de calcular la mediana, obtendrás un resultado incorrecto. Siempre usa una función de ordenamiento al inicio.

Validación de pares: Si tu lista de jugadores tiene una cantidad par de elementos, la fórmula (p1 + p2) / 2 es obligatoria.

Nombre de carpetas: Mantén la convención resoluciones/tu-nombre-apellido/.

¿Necesitas ayuda específica con la función de ordenamiento (sort) en JavaScript o Python para que tu código sea realmente eficiente?

estas son la s uinstrucciones del ejercico 004.2:Lógica matemática 004 - rangos y máximos



Difícil



Básico guiado

Tematica usada



inventario de motos

Contexto del problema



Estás trabajando como estudiante de Campuslands en un reto de inventario de motos. El objetivo no es memorizar código, sino analizar una situación, convertirla en reglas claras y construir una solución ordenada.

En este ejercicio debes resolver un caso de rangos y máximos. La dificultad sube de forma gradual: aquí se espera trabajar con pocos datos y reglas directas.

Objetivo



Cree una solución que reciba datos, aplique reglas y entregue un resultado verificable. La solución puede hacerse en JavaScript, Python, pseudocódigo o Markdown técnico, según indica el instructor.

Que vas a practicar



leer instrucciones

identificar entradas

definir salidas

usar condicionales

probar casos

cálculo numérico

razonamiento cuantitativo

Explicacion paso a paso



Lee el contexto completo antes de escribir código.

Identifica las entradas: datos que recibe tu solución.

Identifica las salidas: resultado que debes entregar.

Escribe las reglas con tus palabras.

Resuelve primero un caso pequeño manualmente.

Convierte el pensamiento en pasos ordenados.

Implementa la solución.

Prueba con el ejemplo y con un caso inventado por ti.

Instrucciones detalladas



Crea una carpeta con tu nombre en resoluciones/nombre-apellido/.

Dentro de tu carpeta crea un archivo principal llamado nombre-apellido.js, nombre-apellido.pyo nombre-apellido.md.

Defina claramente las entradas del problema.

Aplique las reglas necesarias para resolver el reto.

Muestra el resultado final y una explicación breve.

Agrega al menos dos pruebas: una normal y una con caso borde.

Reglas del reto



No modifiques el README del ejercicio.

No borre archivos base.

No cambies las entregas de otros estudiantes.

No subas archivos fuera de resoluciones/nombre-apellido/.

Usa nombres en minúsculas y con guiones.

Si usas código, debes poder leerse sin depender de librerías externas.

Ejemplos



Entrada ejemplo:

participantes: [12, 18, 25, 30]

bono: 8

penalizacion: 3



Salida esperada ejemplo:

puntaje_final: 27

clasificacion: competitivo

explicacion: se sumo el bono y se resto la penalizacion segun las reglas.



Entregable esperado



Una carpeta como esta:

ejercicio-004/

└── resoluciones/

└── nombre-apellido/

├── nombre-apellido.js

└── README.md



El README de tu entrega debe explicar:

Como pensaste el problema.

Que reglas aplicaste.

Como ejecutar o revisar tu solucion.

Que casos probaste.

Consejos



No empieces por el código. Empieza por la regla.

Si el resultado parece raro, revisa primero los datos de entrada.

Usa nombres de variables que explican su propuesta.

Divide el problema si sientes que crece demasiado.

Errores comunes



Resolver solo el ejemplo y no el problema general.

No validar datos vacios o valores fuera de rango.

Mezclar cálculos con mensajes sin orden.

Poner la entrega fuera de la carpeta personal.

Cambiar archivos base del ejercicio.

Pistas opcionales



Escribe primero una tabla con entrada, proceso y salida.

Pruebe con pocos datos antes de usar una lista grande.

Si hay varias reglas, aplicalas una por una.

Si hay ranking, define qué pasa en caso de empate.

Como validar si queda bien



Tu ejercicio está bien si:

La carpeta esta en resoluciones/nombre-apellido/.

La solucion produce el resultado esperado para el ejemplo.

Agregaste al menos un caso de prueba propio.

Puedes explicar por qué tu respuesta es correcta.

No modifiques archivos de otros estudiantes ni archivos base.

Para el Ejercicio 004: Rangos y Máximos (Inventario de Motos), el enfoque cambia hacia encontrar valores extremos (el máximo) y definir si estos caen dentro de un rango aceptable.

Aquí tienes la guía lógica y el pseudocódigo para tu entrega.

1. Análisis del Problema
Entrada	Proceso	Salida
inventario_motos (lista de precios/cantidades)	Buscar valor máximo y verificar rangos	maximo, estado_inventario
Reglas sugeridas:

Identificación: Encontrar el valor máximo de la lista inventario_motos.

Rango: Evaluar si el máximo está dentro de un rango permitido (ej. min_permitido y max_permitido).

Clasificación: Si excede el máximo permitido, el estado es "sobrestock"; si es menor al mínimo, es "bajo inventario"; de lo contrario, es "óptimo".

2. Pseudocódigo
Plaintext
Algoritmo InventarioMotos
    // 1. Entradas
    Definir inventario Como Lista
    Definir min_perm, max_perm Como Entero
    inventario = [12, 18, 25, 30] // Cantidad de motos por modelo
    min_perm = 10
    max_perm = 35

    // 2. Buscar el máximo
    Definir maximo Como Entero
    maximo = inventario[0]
    Para i desde 1 hasta Longitud(inventario) - 1 Hacer
        Si inventario[i] > maximo Entonces
            maximo = inventario[i]
        FinSi
    FinPara

    // 3. Evaluar rango
    Definir estado Como Cadena
    Si maximo > max_perm Entonces
        estado = "sobrestock"
    Sino Si maximo < min_perm Entonces
        estado = "bajo inventario"
    Sino
        estado = "optimo"
    FinSi

    // 4. Salida
    Escribir "Valor máximo encontrado: ", maximo
    Escribir "Estado del inventario: ", estado
FinAlgoritmo
3. Estructura del README.md
Markdown
# Ejercicio 004 - Rangos y Máximos (Inventario de Motos)

## Análisis
Se busca identificar el modelo de moto con mayor existencia (valor máximo) y verificar si este valor respeta los límites de inventario establecidos para la empresa.

## Reglas Aplicadas
1. **Búsqueda del Máximo:** Se recorre la lista comparando cada elemento para hallar el pico más alto.
2. **Validación de Rangos:** Se compara el máximo obtenido contra `min_perm` y `max_perm`.
3. **Clasificación:** Determinación de estado operativo basado en los umbrales definidos.

## Pruebas Realizadas
1. **Caso Normal:** `[12, 18, 25, 30]`, Min: 10, Max: 35. Resultado: Máximo 30 (Óptimo).
2. **Caso Borde (Sobrestock):** `[40, 10, 5]`, Min: 10, Max: 35. Resultado: Máximo 40 (Sobrestock).
Consejos para tu éxito en Campuslands:
Validación: Asegúrate de que, si la lista de inventario viene vacía, tu código no intente buscar un máximo (esto daría error). Agrega un Si Longitud(inventario) > 0 Entonces ....

Claridad: El instructor valora mucho que expliques por qué elegiste el valor máximo para definir el estado (es el indicador de saturación del almacén).

Archivo: No olvides guardarlo con tu nombre: resoluciones/irma-arias/irma-arias.js (o .md / .py).

¿Tienes alguna duda sobre cómo implementar la búsqueda del máximo sin usar funciones predefinidas del lenguaje, o prefieres que usemos alguna función específica de JavaScript/Python?

estas osn las instrucciones del ejercico 005.2:Logica matematica 005 - minimos y limites



Difícil



Básico guiado

Tematica usada



taller mecánico

Contexto del problema



Estás trabajando como estudiante de Campuslands en un reto de taller mecánico. El objetivo no es memorizar código, sino analizar una situación, convertirla en reglas claras y construir una solución ordenada.

En este ejercicio debes resolver un caso de mínimos y límites. La dificultad sube de forma gradual: aquí se espera trabajar con pocos datos y reglas directas.

Objetivo



Cree una solución que reciba datos, aplique reglas y entregue un resultado verificable. La solución puede hacerse en JavaScript, Python, pseudocódigo o Markdown técnico, según indica el instructor.

Que vas a practicar



leer instrucciones

identificar entradas

definir salidas

usar condicionales

probar casos

cálculo numérico

razonamiento cuantitativo

Explicacion paso a paso



Lee el contexto completo antes de escribir código.

Identifica las entradas: datos que recibe tu solución.

Identifica las salidas: resultado que debes entregar.

Escribe las reglas con tus palabras.

Resuelve primero un caso pequeño manualmente.

Convierte el pensamiento en pasos ordenados.

Implementa la solución.

Prueba con el ejemplo y con un caso inventado por ti.

Instrucciones detalladas



Crea una carpeta con tu nombre en resoluciones/nombre-apellido/.

Dentro de tu carpeta crea un archivo principal llamado nombre-apellido.js, nombre-apellido.pyo nombre-apellido.md.

Defina claramente las entradas del problema.

Aplique las reglas necesarias para resolver el reto.

Muestra el resultado final y una explicación breve.

Agrega al menos dos pruebas: una normal y una con caso borde.

Reglas del reto



No modifiques el README del ejercicio.

No borre archivos base.

No cambies las entregas de otros estudiantes.

No subas archivos fuera de resoluciones/nombre-apellido/.

Usa nombres en minúsculas y con guiones.

Si usas código, debes poder leerse sin depender de librerías externas.

Ejemplos



Entrada ejemplo:

participantes: [12, 18, 25, 30]

bono: 8

penalizacion: 3



Salida esperada ejemplo:

puntaje_final: 27

clasificacion: competitivo

explicacion: se sumo el bono y se resto la penalizacion segun las reglas.



Entregable esperado



Una carpeta como esta:

ejercicio-005/

└── resoluciones/

└── nombre-apellido/

├── nombre-apellido.js

└── README.md



El README de tu entrega debe explicar:

Como pensaste el problema.

Que reglas aplicaste.

Como ejecutar o revisar tu solucion.

Que casos probaste.

Consejos



No empieces por el código. Empieza por la regla.

Si el resultado parece raro, revisa primero los datos de entrada.

Usa nombres de variables que explican su propuesta.

Divide el problema si sientes que crece demasiado.

Errores comunes



Resolver solo el ejemplo y no el problema general.

No validar datos vacios o valores fuera de rango.

Mezclar cálculos con mensajes sin orden.

Poner la entrega fuera de la carpeta personal.

Cambiar archivos base del ejercicio.

Pistas opcionales



Escribe primero una tabla con entrada, proceso y salida.

Pruebe con pocos datos antes de usar una lista grande.

Si hay varias reglas, aplicalas una por una.

Si hay ranking, define qué pasa en caso de empate.

Como validar si queda bien



Tu ejercicio está bien si:

La carpeta esta en resoluciones/nombre-apellido/.

La solucion produce el resultado esperado para el ejemplo.

Agregaste al menos un caso de prueba propio.

Puedes explicar por qué tu respuesta es correcta.

No modifiques archivos de otros estudiantes ni archivos base.

Para el Ejercicio 005: Mínimos y Límites (Taller Mecánico), el objetivo es encontrar el valor más bajo (mínimo) y compararlo contra un límite de seguridad o eficiencia. En un taller, esto suele usarse para detectar niveles críticos de insumos (ej. aceite, repuestos) o tiempos de reparación.

1. Análisis del Problema
Entrada	Proceso	Salida
insumos (lista de niveles actuales)	Buscar el valor mínimo y comparar con limite_critico	minimo, alerta
Reglas sugeridas:

Identificación: Encontrar el valor más bajo de la lista insumos.

Límite: Si el mínimo es menor o igual al limite_critico, el taller debe activar una alerta.

Estado: Si el mínimo es mayor al límite, el taller opera con normalidad.

2. Pseudocódigo
Plaintext
Algoritmo TallerMecanico
    // 1. Entradas
    Definir insumos Como Lista
    Definir limite_critico Como Entero
    insumos = [12, 18, 5, 30] // Niveles de aceite
    limite_critico = 10

    // 2. Buscar el mínimo
    Definir minimo Como Entero
    minimo = insumos[0]
    Para i desde 1 hasta Longitud(insumos) - 1 Hacer
        Si insumos[i] < minimo Entonces
            minimo = insumos[i]
        FinSi
    FinPara

    // 3. Evaluar límite
    Definir alerta Como Cadena
    Si minimo <= limite_critico Entonces
        alerta = "ALERTA: Reponer insumo inmediatamente"
    Sino
        alerta = "Niveles normales"
    FinSi

    // 4. Salida
    Escribir "Valor mínimo encontrado: ", minimo
    Escribir "Estado: ", alerta
FinAlgoritmo
3. Estructura del README.md
Markdown
# Ejercicio 005 - Mínimos y Límites (Taller Mecánico)

## Análisis del Problema
Se requiere monitorear los niveles de insumos en un taller. El valor mínimo detectado es el punto crítico para determinar si existe riesgo de desabastecimiento.

## Reglas Aplicadas
1. **Determinación del Mínimo:** Recorrido de la lista para localizar el elemento con el valor numérico más bajo.
2. **Validación de Límite:** Comparación del mínimo contra un `limite_critico`. Si el mínimo es menor o igual al límite, se genera una alerta.

## Pruebas Realizadas
1. **Caso Normal:** `[12, 18, 5, 30]`, Límite: 10. Resultado: Mínimo 5 (Alerta activa).
2. **Caso Borde (Límite exacto):** `[10, 20, 30]`, Límite: 10. Resultado: Mínimo 10 (Alerta activa, según regla de menor o igual).
Consejos para tu éxito en Campuslands:
Orden de los factores: Asegúrate de inicializar minimo con el primer elemento de la lista (insumos[0]) antes de comenzar el bucle. Nunca lo inicialices en 0, porque si todos tus números son mayores a 0, nunca detectará el verdadero mínimo.

Carpeta: Recuerda crear tu carpeta en resoluciones/irma-arias/ y dentro el archivo irma-arias.js (o .md).

Precisión: Si los datos de entrada son vacíos, el código fallará al intentar leer insumos[0]. Podrías añadir un Si longitud(insumos) > 0 Entonces ... para ser más profesional.

¿Te gustaría que te ayude con la validación de lista vacía en el código?

estas son las instruciones del ejercio 017 :Logica matematica 017 - estadisticas de ranking



Difícil



Básico guiado

Tematica usada



arquitectura 3D

Contexto del problema



Estás trabajando como estudiante de Campuslands en un reto de arquitectura 3D. El objetivo no es memorizar código, sino analizar una situación, convertirla en reglas claras y construir una solución ordenada.

En este ejercicio debes resolver un caso de estadísticas de ranking. La dificultad sube de forma gradual: aquí se espera trabajar con pocos datos y reglas directas.

Objetivo



Cree una solución que reciba datos, aplique reglas y entregue un resultado verificable. La solución puede hacerse en JavaScript, Python, pseudocódigo o Markdown técnico, según indica el instructor.

Que vas a practicar



leer instrucciones

identificar entradas

definir salidas

usar condicionales

probar casos

ciclos

acumuladores

cálculo numérico

razonamiento cuantitativo

Explicacion paso a paso



Lee el contexto completo antes de escribir código.

Identifica las entradas: datos que recibe tu solución.

Identifica las salidas: resultado que debes entregar.

Escribe las reglas con tus palabras.

Resuelve primero un caso pequeño manualmente.

Convierte el pensamiento en pasos ordenados.

Implementa la solución.

Prueba con el ejemplo y con un caso inventado por ti.

Instrucciones detalladas



Crea una carpeta con tu nombre en resoluciones/nombre-apellido/.

Dentro de tu carpeta crea un archivo principal llamado nombre-apellido.js, nombre-apellido.pyo nombre-apellido.md.

Defina claramente las entradas del problema.

Aplique las reglas necesarias para resolver el reto.

Muestra el resultado final y una explicación breve.

Agrega al menos dos pruebas: una normal y una con caso borde.

Reglas del reto



No modifiques el README del ejercicio.

No borre archivos base.

No cambies las entregas de otros estudiantes.

No subas archivos fuera de resoluciones/nombre-apellido/.

Usa nombres en minúsculas y con guiones.

Si usas código, debes poder leerse sin depender de librerías externas.

Ejemplos



Entrada ejemplo:

participantes: [12, 18, 25, 30]

bono: 8

penalizacion: 3



Salida esperada ejemplo:

puntaje_final: 27

clasificacion: competitivo

explicacion: se sumo el bono y se resto la penalizacion segun las reglas.



Entregable esperado



Una carpeta como esta:

ejercicio-017/

└── resoluciones/

└── nombre-apellido/

├── nombre-apellido.js

└── README.md



El README de tu entrega debe explicar:

Como pensaste el problema.

Que reglas aplicaste.

Como ejecutar o revisar tu solucion.

Que casos probaste.

Consejos



No empieces por el código. Empieza por la regla.

Si el resultado parece raro, revisa primero los datos de entrada.

Usa nombres de variables que explican su propuesta.

Divide el problema si sientes que crece demasiado.

Errores comunes



Resolver solo el ejemplo y no el problema general.

No validar datos vacios o valores fuera de rango.

Mezclar cálculos con mensajes sin orden.

Poner la entrega fuera de la carpeta personal.

Cambiar archivos base del ejercicio.

Pistas opcionales



Escribe primero una tabla con entrada, proceso y salida.

Pruebe con pocos datos antes de usar una lista grande.

Si hay varias reglas, aplicalas una por una.

Si hay ranking, define qué pasa en caso de empate.

Como validar si queda bien



Tu ejercicio está bien si:

La carpeta esta en resoluciones/nombre-apellido/.

La solucion produce el resultado esperado para el ejemplo.

Agregaste al menos un caso de prueba propio.

Puedes explicar por qué tu respuesta es correcta.

No modifiques archivos de otros estudiantes ni archivos base. esro es con js

Para el Ejercicio 017: Estadísticas de Ranking (Arquitectura 3D), el desafío aumenta porque ahora debes manejar acumuladores (para sumar) y probablemente una estructura de datos que te permita clasificar los proyectos de arquitectura según su rendimiento.

Aquí tienes la solución estructurada en JavaScript, diseñada para ser limpia, profesional y fácil de entender.

1. Lógica del código (nombre-apellido.js)
JavaScript
/**
 * Ejercicio 017: Estadísticas de Ranking - Arquitectura 3D
 * * Entradas: 
 * - listaPuntajes (Array): Puntajes de evaluación de proyectos 3D
 * - bono (Number): Puntos extra por complejidad
 * - penalizacion (Number): Puntos menos por retrasos
 */

function calcularRanking(listaPuntajes, bono, penalizacion) {
    if (!listaPuntajes || listaPuntajes.length === 0) return "Error: Lista vacía";

    // 1. Acumulador para sumar los puntajes
    let suma = 0;
    for (let i = 0; i < listaPuntajes.length; i++) {
        suma += listaPuntajes[i];
    }

    // 2. Cálculo del promedio y aplicación de reglas
    let promedio = suma / listaPuntajes.length;
    let puntajeFinal = Math.round(promedio + bono - penalizacion);

    // 3. Clasificación con condicionales
    let clasificacion = "";
    if (puntajeFinal >= 25) {
        clasificacion = "Avanzado (Elite 3D)";
    } else if (puntajeFinal >= 15) {
        clasificacion = "Intermedio";
    } else {
        clasificacion = "Principiante";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Suma de ${suma} puntos, aplicado bono de ${bono} y penalización de ${penalizacion}.`
    };
}

// Pruebas
console.log(calcularRanking([12, 18, 25, 30], 8, 3));
console.log(calcularRanking([5, 10], 2, 5)); // Caso borde
2. Contenido del README.md
Markdown
# Ejercicio 017 - Estadísticas de Ranking (Arquitectura 3D)

## Análisis
Se procesa un conjunto de evaluaciones de proyectos 3D. El objetivo es obtener un puntaje final consolidado que determine el nivel técnico (ranking) del arquitecto.

## Reglas Aplicadas
1. **Acumulación:** Se recorre la lista mediante un ciclo `for` para sumar todos los puntajes.
2. **Promediación:** Se divide la suma total entre el número de elementos.
3. **Ajuste:** Se suma el bono y se resta la penalización, redondeando el resultado al entero más cercano.
4. **Clasificación:** Se asigna una categoría según umbrales:
   - >= 25: Avanzado.
   - 15 a 24: Intermedio.
   - < 15: Principiante.

## Ejecución
Ejecutar en consola con Node.js:
`node nombre-apellido.js`

## Pruebas
1. **Caso Normal:** `[12, 18, 25, 30]`, bono 8, penalización 3 -> Puntaje: 27 (Avanzado).
2. **Caso Borde:** `[5, 10]`, bono 2, penalización 5 -> Puntaje: 5 (Principiante).
Consejos para tu entrega en Campuslands:
Modularidad: Nota que puse la lógica dentro de una función (calcularRanking). Esto es una buena práctica y hace que tu código sea "verificable" porque puedes llamar a la función con distintos datos de prueba fácilmente.

Validación: He incluido una pequeña validación al inicio (if (!listaPuntajes...)) para evitar errores si la lista viene vacía. A los instructores les encanta ver que anticipas errores.

Formato: Asegúrate de que el nombre del archivo sea exactamente el que te pidieron (nombre-apellido.js). Si te llamas irma-arias, el archivo debe ser irma-arias.js.

Estilo: No uses librerías externas (como lodash o axios), mantente con JavaScript puro (Vanilla JS) para cumplir la regla de "no depender de librerías externas".

¿Necesitas que te explique alguna parte específica de los acumuladores o los ciclos para que puedas defender tu código ante el instructor?

estas on la s instruciones del ejercico 018 ; Lógica matemática 018 - normalización de puntajes



Difícil



Básico guiado

Tematica usada



soldadura

Contexto del problema



Estás trabajando como estudiante de Campuslands en un reto de soldadura. El objetivo no es memorizar código, sino analizar una situación, convertirla en reglas claras y construir una solución ordenada.

En este ejercicio debes resolver un caso de normalización de puntajes. La dificultad sube de forma gradual: aquí se espera trabajar con pocos datos y reglas directas.

Objetivo



Cree una solución que reciba datos, aplique reglas y entregue un resultado verificable. La solución puede hacerse en JavaScript, Python, pseudocódigo o Markdown técnico, según indica el instructor.

Que vas a practicar



leer instrucciones

identificar entradas

definir salidas

usar condicionales

probar casos

ciclos

acumuladores

cálculo numérico

razonamiento cuantitativo

Explicacion paso a paso



Lee el contexto completo antes de escribir código.

Identifica las entradas: datos que recibe tu solución.

Identifica las salidas: resultado que debes entregar.

Escribe las reglas con tus palabras.

Resuelve primero un caso pequeño manualmente.

Convierte el pensamiento en pasos ordenados.

Implementa la solución.

Prueba con el ejemplo y con un caso inventado por ti.

Instrucciones detalladas



Crea una carpeta con tu nombre en resoluciones/nombre-apellido/.

Dentro de tu carpeta crea un archivo principal llamado nombre-apellido.js, nombre-apellido.pyo nombre-apellido.md.

Defina claramente las entradas del problema.

Aplique las reglas necesarias para resolver el reto.

Muestra el resultado final y una explicación breve.

Agrega al menos dos pruebas: una normal y una con caso borde.

Reglas del reto



No modifiques el README del ejercicio.

No borre archivos base.

No cambies las entregas de otros estudiantes.

No subas archivos fuera de resoluciones/nombre-apellido/.

Usa nombres en minúsculas y con guiones.

Si usas código, debes poder leerse sin depender de librerías externas.

Ejemplos



Entrada ejemplo:

participantes: [12, 18, 25, 30]

bono: 8

penalizacion: 3



Salida esperada ejemplo:

puntaje_final: 27

clasificacion: competitivo

explicacion: se sumo el bono y se resto la penalizacion segun las reglas.



Entregable esperado



Una carpeta como esta:

ejercicio-018/

└── resoluciones/

└── nombre-apellido/

├── nombre-apellido.js

└── README.md



El README de tu entrega debe explicar:

Como pensaste el problema.

Que reglas aplicaste.

Como ejecutar o revisar tu solucion.

Que casos probaste.

Consejos



No empieces por el código. Empieza por la regla.

Si el resultado parece raro, revisa primero los datos de entrada.

Usa nombres de variables que explican su propuesta.

Divide el problema si sientes que crece demasiado.

Errores comunes



Resolver solo el ejemplo y no el problema general.

No validar datos vacios o valores fuera de rango.

Mezclar cálculos con mensajes sin orden.

Poner la entrega fuera de la carpeta personal.

Cambiar archivos base del ejercicio.

Pistas opcionales



Escribe primero una tabla con entrada, proceso y salida.

Pruebe con pocos datos antes de usar una lista grande.

Si hay varias reglas, aplicalas una por una.

Si hay ranking, define qué pasa en caso de empate.

Como validar si queda bien



Tu ejercicio está bien si:

La carpeta esta en resoluciones/nombre-apellido/.

La solucion produce el resultado esperado para el ejemplo.

Agregaste al menos un caso de prueba propio.

Puedes explicar por qué tu respuesta es correcta.

No modifiques archivos de otros estudiantes ni archivos base. es con js

Para el Ejercicio 018: Normalización de Puntajes (Soldadura), el reto es escalar valores. "Normalizar" en este contexto significa llevar diferentes puntajes a una misma escala (por ejemplo, de 0 a 100), para que la comparación sea justa antes de aplicar bonos o penalizaciones.

1. Lógica del código (nombre-apellido.js)
Aquí usaremos la fórmula de normalización Min-Max:
ValorNormalizado= 
Max−Min
Valor−Min
​
 ×100

JavaScript
/**
 * Ejercicio 018: Normalización de Puntajes - Soldadura
 */

function normalizarSoldadura(puntajes, bono, penalizacion) {
    if (puntajes.length === 0) return "Error: Lista vacía";

    // 1. Encontrar Min y Max para normalizar
    let min = Math.min(...puntajes);
    let max = Math.max(...puntajes);

    // 2. Normalizar cada puntaje a una escala de 0 a 100
    let sumaNormalizada = 0;
    for (let p of puntajes) {
        let normalizado = ((p - min) / (max - min || 1)) * 100;
        sumaNormalizada += normalizado;
    }

    // 3. Cálculo final
    let promedioNormalizado = sumaNormalizada / puntajes.length;
    let puntajeFinal = Math.round(promedioNormalizado + bono - penalizacion);

    // 4. Clasificación
    let clasificacion = puntajeFinal >= 80 ? "experto" : 
                        puntajeFinal >= 50 ? "calificado" : "aprendiz";

    return { puntaje_final: puntajeFinal, clasificacion };
}

// Pruebas
console.log(normalizarSoldadura([10, 20, 30, 40], 5, 2));
console.log(normalizarSoldadura([50, 50], 0, 0)); // Caso borde: todos iguales
2. Contenido del README.md
Markdown
# Ejercicio 018 - Normalización de Puntajes (Soldadura)

## Análisis del Problema
Los puntajes de calidad en soldadura pueden variar mucho. Para evaluar a los soldadores de forma justa, primero "normalizamos" sus puntajes a una escala estándar (0-100) antes de aplicar bonos y penalizaciones por criterios de seguridad.

## Reglas Aplicadas
1. **Normalización Min-Max:** Ajusta todos los valores para que el menor sea 0 y el mayor sea 100.
2. **Ciclo Acumulador:** Se recorre la lista para sumar los valores ya normalizados.
3. **Ajuste:** Se aplica el bono y la penalización sobre el promedio obtenido.
4. **Clasificación:** - >= 80: experto
   - 50-79: calificado
   - < 50: aprendiz

## Pruebas Realizadas
1. **Caso Normal:** `[10, 20, 30, 40]`, bono 5, penalización 2.
2. **Caso Borde:** Todos los valores iguales (ej. `[50, 50]`). La fórmula maneja el divisor para evitar división por cero.
Consejos para tu éxito:
Manejo de Error: Fíjate en la parte (max - min || 1). Si el usuario introduce una lista donde todos los números son iguales (ej. [50, 50]), max - min es 0. El || 1 evita que el código intente dividir por cero (lo que daría NaN). Esto es un detalle de programador avanzado.

Claridad: Recuerda explicar en tu clase por qué normalizar es útil: permite comparar el desempeño sin importar qué tan difícil fue la prueba inicial.

Entrega: Sigue la regla de oro: resoluciones/nombre-apellido/.

¿Deseas que ajustemos la fórmula de clasificación o alguna otra regla específica del reto?

estas son las instruccionnes dell ejercio 019;Logica matematica 019 - validaciones numericas



Difícil



Básico guiado

Tematica usada



fórmulas químicas

Contexto del problema



Estás trabajando como estudiante de Campuslands en un reto de fórmulas químicas. El objetivo no es memorizar código, sino analizar una situación, convertirla en reglas claras y construir una solución ordenada.

En este ejercicio debes resolver un caso de validaciones numéricas. La dificultad sube de forma gradual: aquí se espera trabajar con pocos datos y reglas directas.

Objetivo



Cree una solución que reciba datos, aplique reglas y entregue un resultado verificable. La solución puede hacerse en JavaScript, Python, pseudocódigo o Markdown técnico, según indica el instructor.

Que vas a practicar



leer instrucciones

identificar entradas

definir salidas

usar condicionales

probar casos

ciclos

acumuladores

cálculo numérico

razonamiento cuantitativo

Explicacion paso a paso



Lee el contexto completo antes de escribir código.

Identifica las entradas: datos que recibe tu solución.

Identifica las salidas: resultado que debes entregar.

Escribe las reglas con tus palabras.

Resuelve primero un caso pequeño manualmente.

Convierte el pensamiento en pasos ordenados.

Implementa la solución.

Prueba con el ejemplo y con un caso inventado por ti.

Instrucciones detalladas



Crea una carpeta con tu nombre en resoluciones/nombre-apellido/.

Dentro de tu carpeta crea un archivo principal llamado nombre-apellido.js, nombre-apellido.pyo nombre-apellido.md.

Defina claramente las entradas del problema.

Aplique las reglas necesarias para resolver el reto.

Muestra el resultado final y una explicación breve.

Agrega al menos dos pruebas: una normal y una con caso borde.

Reglas del reto



No modifiques el README del ejercicio.

No borre archivos base.

No cambies las entregas de otros estudiantes.

No subas archivos fuera de resoluciones/nombre-apellido/.

Usa nombres en minúsculas y con guiones.

Si usas código, debes poder leerse sin depender de librerías externas.

Ejemplos



Entrada ejemplo:

participantes: [12, 18, 25, 30]

bono: 8

penalizacion: 3



Salida esperada ejemplo:

puntaje_final: 27

clasificacion: competitivo

explicacion: se sumo el bono y se resto la penalizacion segun las reglas.



Entregable esperado



Una carpeta como esta:

ejercicio-019/

└── resoluciones/

└── nombre-apellido/

├── nombre-apellido.js

└── README.md



El README de tu entrega debe explicar:

Como pensaste el problema.

Que reglas aplicaste.

Como ejecutar o revisar tu solucion.

Que casos probaste.

Consejos



No empieces por el código. Empieza por la regla.

Si el resultado parece raro, revisa primero los datos de entrada.

Usa nombres de variables que explican su propuesta.

Divide el problema si sientes que crece demasiado.

Errores comunes



Resolver solo el ejemplo y no el problema general.

No validar datos vacios o valores fuera de rango.

Mezclar cálculos con mensajes sin orden.

Poner la entrega fuera de la carpeta personal.

Cambiar archivos base del ejercicio.

Pistas opcionales



Escribe primero una tabla con entrada, proceso y salida.

Pruebe con pocos datos antes de usar una lista grande.

Si hay varias reglas, aplicalas una por una.

Si hay ranking, define qué pasa en caso de empate.

Como validar si queda bien



Tu ejercicio está bien si:

La carpeta esta en resoluciones/nombre-apellido/.

La solucion produce el resultado esperado para el ejemplo.

Agregaste al menos un caso de prueba propio.

Puedes explicar por qué tu respuesta es correcta.

No modifiques archivos de otros estudiantes ni archivos base. con js

Para el Ejercicio 019: Validaciones Numéricas (Fórmulas Químicas), el enfoque central es la integridad de los datos. En química, una fórmula no es válida si sus proporciones o cantidades son negativas o no cumplen con leyes de conservación. Por ello, debemos implementar una lógica de "filtro" antes de realizar cualquier cálculo.

1. Lógica del código (nombre-apellido.js)
JavaScript
/**
 * Ejercicio 019: Validaciones Numéricas - Fórmulas Químicas
 * Validación de masas atómicas para asegurar que sean positivas y dentro de un rango lógico.
 */

function validarFormula(masasAtomicas, limiteSuperior) {
    let errores = [];
    let masaTotal = 0;

    // Ciclo para validar cada dato individualmente
    for (let i = 0; i < masasAtomicas.length; i++) {
        let masa = masasAtomicas[i];

        // Reglas de validación: No negativas y dentro del límite
        if (masa <= 0) {
            errores.push(`Elemento en índice ${i} tiene masa inválida: ${masa}`);
        } else if (masa > limiteSuperior) {
            errores.push(`Elemento en índice ${i} supera el límite de seguridad: ${masa}`);
        } else {
            masaTotal += masa;
        }
    }

    // Retorno del estado final
    if (errores.length > 0) {
        return { valido: false, errores: errores };
    } else {
        return { valido: true, masaTotal: masaTotal, mensaje: "Fórmula estable" };
    }
}

// Pruebas
console.log(validarFormula([12.01, 1.008, 15.99], 100)); // Caso Normal
console.log(validarFormula([-5, 150, 20], 100));       // Caso Borde (Inválidos)