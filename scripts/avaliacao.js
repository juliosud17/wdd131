
/* =========================
   CONTADOR DE AVALIAÇÕES
========================= */

// Recupera o contador armazenado
let contador = Number(
    localStorage.getItem("contadorAvaliacoes")
) || 0;

// Verifica se a página recebeu dados do formulário
const parametros = new URLSearchParams(window.location.search);

const produto = parametros.get("produto");
const classificacao = parametros.get("classificacao");
const data = parametros.get("data");

// Incrementa o contador quando há dados de uma avaliação
if (produto && classificacao && data) {
    contador++;

    localStorage.setItem("contadorAvaliacoes", contador);
}

// Exibe a quantidade de avaliações
document.querySelector("#contador").textContent = contador;

/* =========================
   RODAPÉ
========================= */

document.querySelector("#anoatual").textContent =
    new Date().getFullYear();

document.querySelector("#ultimaModificacao").textContent =
    document.lastModified;
