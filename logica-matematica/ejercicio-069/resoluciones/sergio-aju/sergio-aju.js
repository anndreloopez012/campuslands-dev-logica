function analizarSustos(tiempos, intervalo) {
    if (intervalo === 0) return { sustos_criticos: [], nivel_amenaza: "Calma Tensa" };
    
    const criticos = tiempos.filter(t => t % intervalo === 0);
    const cantidad = criticos.length;
    
    let amenaza = "";
    if (cantidad >= 3) amenaza = "Amenaza Inminente";
    else if (cantidad >= 1) amenaza = "Acecho Constante";
    else amenaza = "Calma Tensa";
    
    return { 
        sustos_criticos: criticos, 
        nivel_amenaza: amenaza 
    };
}