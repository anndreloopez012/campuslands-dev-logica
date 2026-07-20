nombre1 = "Bugatti Chiron"
velocidad_mph1 = 261

nombre2 = "Koenigsegg Agera RS"
velocidad_mph2 = 277

nombre3 = "Hennessey Venom F5"
velocidad_mph3 = 301

conversion = 1.60934

kmh1 = velocidad_mph1 * conversion
kmh2 = velocidad_mph2 * conversion
kmh3 = velocidad_mph3 * conversion

print(nombre1, ":", kmh1, "km/h")
print(nombre2, ":", kmh2, "km/h")
print(nombre3, ":", kmh3, "km/h")