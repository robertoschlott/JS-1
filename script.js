document.querySelector('.mudarTextoBotao').addEventListener('click', fuction() {
    const paragrafo = document.querySelector('.descricao');
    paragrafo.textContent = 'Texto altyerado!';
})

document.querySelector('.destacarBotao').addEventListener('click', function() {
    const titulo = document.querySelector('.titulo');
    titulo.classList.add('destaque');
})