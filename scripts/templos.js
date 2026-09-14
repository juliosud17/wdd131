// Menu hambúrguer responsivo
const botaoMenu = document.querySelector('#menu');
const navegacao = document.querySelector('.navegacao');

botaoMenu.addEventListener('click', () => {
    navegacao.classList.toggle('open');
    botaoMenu.classList.toggle('open');

    const aberto = navegacao.classList.contains('open');
    botaoMenu.setAttribute('aria-expanded', aberto);
    botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
});

// Rodapé dinâmico: ano de direitos autorais e última modificação
const ano = new Date().getFullYear();
document.getElementById('anoatual').textContent = ano;

const ultimaModificacao = document.getElementById('ultimaModificacao');
ultimaModificacao.textContent = document.lastModified;
