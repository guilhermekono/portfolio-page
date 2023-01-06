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

/*
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/menu-fechado.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/menu-aberto.svg";
    }
}
*/

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


