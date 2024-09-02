const divCoracao = document.getElementsByClassName("icon-favs");
const divCorArray = Array.from(divCoracao);

let efeitos = {
    transicao: `transform 0.1s ease-in`,
    pular: `scale(2)`,
    encolher: `scale(0.8)`
};

divCorArray[0].addEventListener("click",function() {

    divCorArray[0].style.transition = "transform 0.2s ease-in-out";
    divCorArray[0].style.transform = "rotate(-7deg)";

    setTimeout(() => {
        divCorArray[0].style.transform = "rotate(7deg)"; 
    }, 200);

    setTimeout(() => {
        divCorArray[0].style.transform = null; 
    }, 400);

    const coracao = divCorArray[0].querySelector(".favcora-icon");
    
    coracao.style.transition = efeitos.transicao;

    coracao.style.transform = efeitos.encolher;
    coracao.style.fontWeight = "bolder";
    
    setTimeout(() => {
        coracao.style.transform = efeitos.pular;
        coracao.style.color = "red";
    }, 150);

    setTimeout(() => {
        coracao.style.fontWeight = null;
        coracao.style.transform = null;
        coracao.style.color = null;
    },300);
});