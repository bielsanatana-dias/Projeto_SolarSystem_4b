

const imagemDestaque = document.getElementById('imagemDestaque');
const miniaturas = document.querySelectorAll('.miniatura');


miniaturas.forEach(miniatura => {

    miniatura.addEventListener('click', () => {

       
        const novoSrc = miniatura.getAttribute('src');

        imagemDestaque.setAttribute('src', novoSrc);

    });

});
