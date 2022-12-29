const nomeTypewriter = document.querySelector('.nome_typewriter');
const nome = nomeTypewriter.innerHTML;

function typeWriter(nome) {
    setTimeout( () => {
        const meuNomeF = nome.split('');
        nomeTypewriter.innerHTML='';
        meuNomeF.forEach( (letra, index) => {
            setTimeout(function (){
                nomeTypewriter.innerHTML += letra;
            }, 150 * index)
        })}, 1500)
}

console.log(nome);

typeWriter(nome);



