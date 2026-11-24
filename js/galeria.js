
/* Seleciona a imagem principal e todas as miniaturas */
const imagemDestaque = document.getElementById('imagemDestaque');
const miniaturas = document.querySelectorAll('.miniatura');

/* Adiciona evento de clique para cada miniatura */
miniaturas.forEach(miniatura => {

    miniatura.addEventListener('click', () => {

        /* Altera a imagem principal para a imagem clicada */
        const novoSrc = miniatura.getAttribute('src');

        imagemDestaque.setAttribute('src', novoSrc);

    });

});
