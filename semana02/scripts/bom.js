const input = document.querySelector('#favchap');
const botao = document.querySelector('button');
const lista = document.querySelector('#list');

botao.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const botaoExcluir = document.createElement('button');
        li.textContent = input.value;
        botaoExcluir.textContent = '❌';
        li.append(botaoExcluir);
        lista.append(li);
        botaoExcluir.setAttribute('aria-label', `Excluir ${input.value}`);
        input.value = '';
        botaoExcluir.addEventListener('click', function() {
            li.remove();
            input.focus();
        });
    }
        input.focus();
});

    