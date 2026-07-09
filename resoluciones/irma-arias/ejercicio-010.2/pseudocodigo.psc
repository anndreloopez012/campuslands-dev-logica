
ALGORITMO CalcularCostoViaje
    ENTRADA: costo_base, impuesto_porcentaje

    SI costo_base < 0 ENTONCES
        RETORNAR "Error: El costo no puede ser negativo"
    FIN SI

    // Paso 1: Calcular valor con impuesto
    valor_con_impuesto = costo_base * (1 + (impuesto_porcentaje / 100))

    // Paso 2: Redondear a 2 decimales (técnica matemática)
    // Multiplicar por 100, redondear al entero más cercano, dividir entre 100
    costo_final = REDONDEAR(valor_con_impuesto * 100) / 100

    RETORNAR costo_final
FIN ALGORITMO