const validarMolecula = (atomos, umbral) => {
    const cargaTotal = atomos.reduce((acc, a) => acc + (a.carga * a.cantidad), 0);
    const esEstable = Math.abs(cargaTotal) <= umbral;

    let clasificacion = "Inestable";
    if (esEstable) {
        clasificacion = (cargaTotal === 0) ? "Neutra" : "Ion";
    }

    return {
        carga_total: cargaTotal,
        clasificacion: clasificacion,
        explicacion: `La molécula presenta una carga de ${cargaTotal}.`
    };
};

console.log(validarMolecula([{ nombre: "H", carga: 1, cantidad: 2 }, { nombre: "O", carga: -2, cantidad: 1 }], 0));
console.log(validarMolecula([{ nombre: "Na", carga: 1, cantidad: 1 }, { nombre: "Cl", carga: -1, cantidad: 1 }], 0));