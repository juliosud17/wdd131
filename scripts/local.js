// Rodapé: ano atual e data da última modificação
document.getElementById("anoatual").textContent = new Date().getFullYear();
document.getElementById("ultimaModificacao").textContent = document.lastModified;


// Clima: valores estáticos (os mesmos exibidos no HTML)
const temperatura = 8;        // °C
const velocidadeVento = 12;   // km/h

// Fórmula métrica de sensação térmica (°C e km/h)
function calcularSensacaoTermica(temperatura, velocidade) {
    return 13.12 + 0.6215 * temperatura - 11.37 * velocidade ** 0.16 + 0.3965 * temperatura * velocidade ** 0.16;
}

const elementoSensacao = document.getElementById("sensacao-termica");

// Só calcula quando a fórmula é válida: temperatura <= 10 °C e vento > 4.8 km/h
if (temperatura <= 10 && velocidadeVento > 4.8) {
    elementoSensacao.textContent = `${calcularSensacaoTermica(temperatura, velocidadeVento).toFixed(1)} °C`;
} else {
    elementoSensacao.textContent = "N/A";
}
