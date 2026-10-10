
/* =========================
   ARRAY DE PRODUTOS
========================= */

const produtos = [
    {
        id: "fc-1888",
        nome: "capacitor de fluxo",
        classificacaomedia: 4.5
    },
    {
        id: "fc-2050",
        nome: "fios elétricos",
        classificacaomedia: 4.7
    },
    {
        id: "fs-1987",
        nome: "circuitos de tempo",
        classificacaomedia: 3.5
    },
    {
        id: "ac-2000",
        nome: "reator de baixa tensão",
        classificacaomedia: 3.9
    },
    {
        id: "jj-1969",
        nome: "equalizador de distorção",
        classificacaomedia: 5.0
    }
];

/* =========================
   CRIAR OPÇÕES DO SELECT
========================= */

const selecionarProduto = document.querySelector("#produto");

produtos.forEach((produto) => {
    const opcao = document.createElement("option");

    opcao.textContent = produto.nome;
    opcao.value = produto.id;

    selecionarProduto.appendChild(opcao);
});

/* =========================
   INFORMAÇÕES DO RODAPÉ
========================= */

document.querySelector("#anoatual").textContent =
    new Date().getFullYear();

document.querySelector("#ultimaModificacao").textContent =
    document.lastModified;
