const ano = new Date().getFullYear();

const elemento = document.getElementById("anoatual");

elemento.textContent = ano;


const elementoModificacao  = document.getElementById("ultimaModificacao");

elementoModificacao.textContent = document.lastModified;
