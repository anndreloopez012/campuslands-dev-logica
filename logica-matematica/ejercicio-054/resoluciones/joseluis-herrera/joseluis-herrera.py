def analizar_dimensiones_tatuaje(largo, ancho):
    area = largo * ancho
    perimetro = 2 * (largo + ancho)
    
    costo_base = 50
    adicional_area = area * 0.5
    total = costo_base + adicional_area
    
    return f"Area: {area}cm2, Perimetro: {perimetro}cm, Costo estimado: ${total}"

print(analizar_dimensiones_tatuaje(10, 10))
print(analizar_dimensiones_tatuaje(15, 20))
print(analizar_dimensiones_tatuaje(5, 8))