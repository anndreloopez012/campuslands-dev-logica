marca_buscada = "Koenigsegg"

lista_autos = [
    "Bugatti Chiron",
    "Koenigsegg Jesko",
    "Pagani Huayra",
    "Koenigsegg Agera RS",
    "Rimac Nevera"
]

auto1 = lista_autos[0]
auto2 = lista_autos[1]
auto3 = lista_autos[2]
auto4 = lista_autos[3]
auto5 = lista_autos[4]

es_marca1 = marca_buscada in auto1
es_marca2 = marca_buscada in auto2
es_marca3 = marca_buscada in auto3
es_marca4 = marca_buscada in auto4
es_marca5 = marca_buscada in auto5

print("¿Es", auto1, "?", es_marca1)
print("¿Es", auto2, "?", es_marca2)
print("¿Es", auto3, "?", es_marca3)
print("¿Es", auto4, "?", es_marca4)
print("¿Es", auto5, "?", es_marca5)