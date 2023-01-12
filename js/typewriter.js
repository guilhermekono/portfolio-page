const nomeTypewriter = document.querySelector('.nome-typewriter');
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

const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const barraNav = document.querySelector(".barra-navegacao");
const logo = document.querySelector(".logo");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
    barraNav.classList.toggle("active");
    logo.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
    barraNav.classList.remove("active");
    logo.classList.remove("active");

}))

const botaoVerMais = document.querySelector('.botao-ver-mais');
const habilidades = document.querySelectorAll('.adicional');

function cliqueVer (e) {
    habilidades.forEach( (elemento) => {
        if (elemento.classList.contains('adicional')) {
            elemento.classList.remove('adicional');
            elemento.classList.add('visivel');
            botaoVerMais.innerHTML = 'Ver menos';
        } else {
            elemento.classList.add('adicional');
            elemento.classList.remove('visivel');
            botaoVerMais.innerHTML = 'Ver mais';
        }
    } )
}

function maisHabilidades (elemento) {
    elemento.addEventListener('click', cliqueVer)
}

maisHabilidades(botaoVerMais);

