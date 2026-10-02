const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem: "imagens/templos/templo-aba-nigeria.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem: "imagens/templos/templo-manti-utah.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem: "imagens/templos/templo-payson-utah.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem: "imagens/templos/templo-yigo-guam.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem: "imagens/templos/templo-washington-dc.jpg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem: "imagens/templos/templo-lima-peru.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem: "imagens/templos/templo-cidade-do-mexico.jpg" 
  },
  {
    nomeDoTemplo: "Campinas, Brasil",
    localizacao: "Campinas, Brasil",
    consagracao: "2002, 17 de maio",
    area: 48100,
    urlDaImagem: "imagens/templos/templo-campinas-brasil.jpg"
  },
  {
    nomeDoTemplo: "Curitiba, Brasil",
    localizacao: "Curitiba, Brasil",
    consagracao: "2008, 1 de junho",
    area: 27850,
    urlDaImagem: "imagens/templos/templo-curitiba-brasil.jpg"
  },
  {
    nomeDoTemplo: "Fortaleza, Brasil",
    localizacao: "Fortaleza, Brasil",
    consagracao: "2019, 2 de junho",
    area: 36000,
    urlDaImagem: "imagens/templos/templo-fortaleza-brasil.jpg"
  }
];


// Container onde os cartões serão colocados
const galeria = document.querySelector(".galeria");


// Cria os cartões dos templos
function criarCartoes(lista) {
  galeria.innerHTML = "";

  lista.forEach((templo) => {

    const figure = document.createElement("figure");

    const titulo = document.createElement("h2");
    titulo.textContent = templo.nomeDoTemplo;

    const imagem = document.createElement("img");
    imagem.src = templo.urlDaImagem;
    imagem.alt = `Templo de ${templo.nomeDoTemplo}`;
    imagem.loading = "lazy";
    imagem.width = 400;
    imagem.height = 250;

    const figcaption = document.createElement("figcaption");

    const localizacao = document.createElement("p");
    localizacao.textContent = `Localização: ${templo.localizacao}`;

    const consagracao = document.createElement("p");
    consagracao.textContent = `Consagração: ${templo.consagracao}`;

    const area = document.createElement("p");
    area.textContent = `Área: ${templo.area.toLocaleString("pt-BR")} pés²`;

    figcaption.appendChild(localizacao);
    figcaption.appendChild(consagracao);
    figcaption.appendChild(area);

    figure.appendChild(titulo);
    figure.appendChild(imagem);
    figure.appendChild(figcaption);

    galeria.appendChild(figure);
  });
}


// Exibe todos os templos ao carregar a página
criarCartoes(templos);

const inicio = document.querySelector("#inicio");
const antigos = document.querySelector("#antigos");
const novos = document.querySelector("#novos");
const grandes = document.querySelector("#grandes");
const pequenos = document.querySelector("#pequenos");


inicio.addEventListener("click", (evento) => {
  evento.preventDefault();

  criarCartoes(templos);
});


antigos.addEventListener("click", (evento) => {
  evento.preventDefault();

  const templosAntigos = templos.filter((templo) => {
    const anoConsagracao = parseInt(templo.consagracao);

    return anoConsagracao < 1900;
  });

  criarCartoes(templosAntigos);
});


novos.addEventListener("click", (evento) => {
  evento.preventDefault();

  const templosNovos = templos.filter((templo) => {
    const anoConsagracao = parseInt(templo.consagracao);

    return anoConsagracao > 2000;
  });

  criarCartoes(templosNovos);
});


grandes.addEventListener("click", (evento) => {
  evento.preventDefault();

  const templosGrandes = templos.filter((templo) => {
    return templo.area > 90000;
  });

  criarCartoes(templosGrandes);
});


pequenos.addEventListener("click", (evento) => {
  evento.preventDefault();

  const templosPequenos = templos.filter((templo) => {
    return templo.area < 10000;
  });

  criarCartoes(templosPequenos);
});

// Menu hambúrguer responsivo
const botaoMenu = document.querySelector("#menu");
const navegacao = document.querySelector(".navegacao");

botaoMenu.addEventListener("click", () => {
  navegacao.classList.toggle("open");
  botaoMenu.classList.toggle("open");

  const aberto = navegacao.classList.contains("open");

  botaoMenu.setAttribute("aria-expanded", aberto);
  botaoMenu.setAttribute(
    "aria-label",
    aberto
      ? "Fechar menu de navegação"
      : "Abrir menu de navegação"
  );
});


// Rodapé dinâmico
const ano = new Date().getFullYear();
document.getElementById("anoatual").textContent = ano;

const ultimaModificacao = document.getElementById("ultimaModificacao");
ultimaModificacao.textContent = document.lastModified;


