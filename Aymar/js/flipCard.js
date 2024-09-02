//Retorna um objeto de elementos com classe produto
const produto = document.getElementsByClassName("produto");

//Transforma o objeto retornado em uma array
const prodFormatado = Array.from(produto);

//Variavel global para setInterval
let intervalo = null;

function flipAction(objeto) {
    const cartao = objeto.querySelector('.cartao');

    cartao.classList.toggle("flip");

    if(cartao.classList.contains("flip")){
        let zooms = document.querySelectorAll(".zoomContainer");
        setTimeout(() => { 
            if (zooms) {
                zooms.forEach(zoom => {
                    zoom.style.display = "none";
                });
            };
        },400);
    }; 
};

function hoverAction(objeto) {
    const cartao = objeto.querySelector('.cartao');
    if (!cartao.classList.contains("flip")) {
        let efeitos = {};

        efeitos = {
            rotateY: "(-180deg)",
        };

        //Definir intervalo afim de executar a partir de determinado tempo (2s)
        intervalo = setInterval(() => {
            // cartao.style.transition = `transform ${efeitos.transition}`;
            cartao.style.transform = `rotateY${efeitos.rotateY}`;
            setTimeout(() => {
                cartao.style.transform = null;
            }, 1200);
        },2000)
    };
};

function hoverOutAction() {
    clearInterval(intervalo);
};

function showDescricao(objeto,event){
    event.stopPropagation(); //Nao propagacao

    //Identifica os objetos
    const descricao = objeto.querySelector('.descricao').querySelector('p');
    const seta = objeto.querySelector('.icon-expandir');  

    //Adiciona efeito aos objetos
    descricao.classList.toggle('altura');
    descricao.classList.toggle('margem');

    //Rotaciona seta, sim/nao
    if (seta.classList.contains('rodarCima')) {
        seta.classList.remove("rodarCima");
    }else{
        seta.classList.add("rodarCima");
    };
};

function zoom(i){
    $(`#imagem${i}`).ezPlus({
        zoomType: 'lens', //Tipo de zoom: lens, inner
        cursor: "crosshair", //Tipo de cursor ao aplicar efeito
        lensShape: 'round', //Formato da lente
        lensSize: 150, // tamanho da lupa

        //tempo
        zoomWindowFadeIn: 500, //Animacao lupa FadeIn
        zoomWindowFadeOut: 100, //Animacao lupa FadeIn
        lensFadeIn: 500, //Animacao FadeIn
        lensFadeOut: 100, //Animacao fadeOut
        
        easing: true, //Suavizacao, valor pode ser aumentado. true = 12
        scrollZoom: true, //Pode ampliar zoom com roda
    });  
};

//Adiciona funcao aos produtos
prodFormatado.forEach((item,index) => {
    
    //Animacao flip
    item.querySelector(".cartao").addEventListener("click", function() {
        flipAction(item); 
    });

    //pre-animacao flip afim de avisar usuario que ela existe
    item.querySelector(".cartao").addEventListener("mouseover", function() {
        hoverAction(item);
    });
    item.querySelector(".cartao").addEventListener("mouseout", function() {
        hoverOutAction();
    });

    //Animacao de expandir descricao pedida pelo redator
    item.querySelector('.expandir').addEventListener("click", function() {
        showDescricao(item,event);
    });

    //Animacao zoom
    item.querySelector('img').addEventListener("mouseover", function() {
        zoom(index);
    });
});