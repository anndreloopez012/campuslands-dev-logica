function simularTerror(personaje, evento) {
    const impactos = { "susto": -20, "aparicion": -40, "silencio": 10 };
    
    let nuevaCordura = personaje.nivel_cordura + (impactos[evento] || 0);
    
    // Limitar entre 0 y 100
    nuevaCordura = Math.max(0, Math.min(100, nuevaCordura));
    
    let reaccion = "";
    if (nuevaCordura === 0) reaccion = "Personaje en estado de shock";
    else if (nuevaCordura <= 50) reaccion = "Personaje aterrado";
    else reaccion = "Personaje estable";
    
    return { estado_final: nuevaCordura, reaccion_personaje: reaccion };
}