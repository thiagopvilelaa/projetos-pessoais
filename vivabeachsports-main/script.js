function scrollToPlanos() {
    document.getElementById('planos').scrollIntoView({ behavior: 'smooth' });
}

let planoArrow1 = document.getElementById("planoArrowBtn1")
let planoArrow2 = document.getElementById("planoArrowBtn2")
let planoArrow3 = document.getElementById("planoArrowBtn3")
let planoArrow4 = document.getElementById("planoArrowBtn4")
let planoArrow5 = document.getElementById("planoArrowBtn5")
let planoArrow6 = document.getElementById("planoArrowBtn6")
let planoWrapper1 = document.getElementById("planoContainerWrapper1")
let planoWrapper2 = document.getElementById("planoContainerWrapper2")
let planoWrapper3 = document.getElementById("planoContainerWrapper3")
let planoBtn1 = document.getElementById("planoBtn1")
let planoBtn2 = document.getElementById("planoBtn2")
let planoBtn3 = document.getElementById("planoBtn3")
let planoContainerWrapper1 = document.getElementById("planoContainerWrapper1")
let planoContainerWrapper2 = document.getElementById("planoContainerWrapper2")
let planoContainerWrapper3 = document.getElementById("planoContainerWrapper3")
let planoBtn1Responsive = document.getElementById("planoBtn1Responsive")
let planoBtn2Responsive = document.getElementById("planoBtn2Responsive")
let planoBtn3Responsive = document.getElementById("planoBtn3Responsive")
let planoContainerContainerResponsive1 = document.getElementById("planoContainerContainerResponsive1")
let planoContainerContainerResponsive2 = document.getElementById("planoContainerContainerResponsive2")
let planoContainerContainerResponsive3 = document.getElementById("planoContainerContainerResponsive3")
let contadorArrow1 = 0;
let contadorArrow2 = 0;
let deslocamento = 0;


//EVENTOS DE CLICK NAS SETAS NA SESSÃO PLANOS
//EVENTOS DE CLICK NAS SETAS NA SESSÃO PLANOS
//EVENTOS DE CLICK NAS SETAS NA SESSÃO PLANOS
//EVENTOS DE CLICK NAS SETAS NA SESSÃO PLANOS


planoArrow4.addEventListener("click", function(){
    planoWrapper1.style.transform = "translateX(-81.5rem)"
    planoArrow4.disabled = true;
    planoArrow4.style.opacity = 0;
    planoArrow4.style.cursor = "auto";
});

planoArrow1.addEventListener("click", function(){
    planoWrapper1.style.transform = "translateX(0)"
    planoArrow4.disabled = false;
    planoArrow4.style.opacity = 1;
    planoArrow4.style.cursor = "pointer";
});



function atualizarTranslateX() {
    // Defina o ponto de quebra (por exemplo, 768px)
    const mediaQuery = window.matchMedia("(min-width: 1500px)");

    // Se a largura da tela for menor que 768px, use 60.5rem, senão use -81.5rem
    const novoTranslateX = mediaQuery.matches ? "-81.5rem" : "-60.5rem";

    planoArrow5.addEventListener("click", function () {
        planoWrapper2.style.transform = `translateX(${novoTranslateX})`;
        planoArrow5.disabled = true;
        planoArrow5.style.opacity = 0;
        planoArrow5.style.cursor = "auto";
    });

    planoArrow2.addEventListener("click", function () {
        planoWrapper2.style.transform = "translateX(0)";
        planoArrow5.disabled = false;
        planoArrow5.style.opacity = 1;
        planoArrow5.style.cursor = "pointer";
    });
}

// Chama a função ao carregar a página
atualizarTranslateX();

// Atualiza a configuração ao mudar o tamanho da tela
window.addEventListener("resize", atualizarTranslateX);




planoArrow6.addEventListener("click", function () {
    let deslocamentoAtual = window.innerWidth >= 1500 ? 80.5 : 60.5;

    if (contadorArrow2 < 2) {
        deslocamento += deslocamentoAtual;
        contadorArrow2 += 1;
        planoWrapper3.style.transform = `translateX(${-deslocamento}rem)`;
    }
});

planoArrow3.addEventListener("click", function () {
    let deslocamentoAtual = window.innerWidth >= 1500 ? 80.5 : 60.5;
    if (contadorArrow2 >= 1) {
        deslocamento -= deslocamentoAtual;
        contadorArrow2 -= 1;
        planoWrapper3.style.transform = `translateX(${-deslocamento}rem)`;
    }
});

const mediaQueryPlano1 = window.matchMedia('(max-width: 1500px)');

function handleMediaQueryChange(event) {
  if (event.matches) {
    planoArrow4.addEventListener("click", function(){
        contadorArrow1 += 1
        planoWrapper1.style.transform = "translateX(-60.5rem)"
        planoArrow4.disabled = true;
        planoArrow4.style.opacity = 0;
        planoArrow4.style.cursor = "auto";
    });
    
    planoArrow1.addEventListener("click", function(){
        contadorArrow1 -= 1
        planoWrapper1.style.transform = "translateX(0)"
        planoArrow4.disabled = false;
        planoArrow4.style.opacity = 1;
        planoArrow4.style.cursor = "pointer";
    });
  } else {
    planoArrow4.addEventListener("click", function(){
        contadorArrow1 += 1
        planoWrapper1.style.transform = "translateX(-81.5rem)"
        planoArrow4.disabled = true;
        planoArrow4.style.opacity = 0;
        planoArrow4.style.cursor = "auto";
    });
    
    planoArrow1.addEventListener("click", function(){
        contadorArrow1 -= 1
        planoWrapper1.style.transform = "translateX(0)"
        planoArrow4.disabled = false;
        planoArrow4.style.opacity = 1;
        planoArrow4.style.cursor = "pointer";
    });
  }
}

// Adiciona um listener para monitorar mudanças na media query
mediaQueryPlano1.addEventListener('change', handleMediaQueryChange);

// Chama a função uma vez para aplicar o estilo imediatamente
handleMediaQueryChange(mediaQueryPlano1);

//EVENTOS DE CLICK NOS BOTÕES DE ESCOLHA DE MODALIDADE NA SESSÃO PLANOS
//EVENTOS DE CLICK NOS BOTÕES DE ESCOLHA DE MODALIDADE NA SESSÃO PLANOS
//EVENTOS DE CLICK NOS BOTÕES DE ESCOLHA DE MODALIDADE NA SESSÃO PLANOS
//EVENTOS DE CLICK NOS BOTÕES DE ESCOLHA DE MODALIDADE NA SESSÃO PLANOS
//EVENTOS DE CLICK NOS BOTÕES DE ESCOLHA DE MODALIDADE NA SESSÃO PLANOS

planoBtn1.addEventListener("click", function(){
    planoBtn1.style.backgroundColor = "var(--roxo)"
    planoBtn1.style.color = "white"
    planoBtn2.style.backgroundColor = "transparent"
    planoBtn2.style.color = "black"
    planoBtn3.style.backgroundColor = "transparent"
    planoBtn3.style.color = "black"
    planoContainerWrapper1.style.display = "flex"
    planoContainerWrapper2.style.display = "none"
    planoContainerWrapper3.style.display = "none"
    planoArrow1.style.display = "block"
    planoArrow2.style.display = "none"
    planoArrow3.style.display = "none"
    planoArrow4.style.display = "block"
    planoArrow5.style.display = "none"
    planoArrow6.style.display = "none"
});

planoBtn2.addEventListener("click", function(){
    planoBtn1.style.backgroundColor = "transparent"
    planoBtn1.style.color = "black"
    planoBtn2.style.backgroundColor = "var(--roxo)"
    planoBtn2.style.color = "white"
    planoBtn3.style.backgroundColor = "transparent"
    planoBtn3.style.color = "black"
    planoContainerWrapper1.style.display = "none"
    planoContainerWrapper2.style.display = "flex"
    planoContainerWrapper3.style.display = "none"
    planoArrow1.style.display = "none"
    planoArrow2.style.display = "block"
    planoArrow3.style.display = "none"
    planoArrow4.style.display = "none"
    planoArrow5.style.display = "block"
    planoArrow6.style.display = "none"
});

planoBtn3.addEventListener("click", function(){
    planoBtn1.style.backgroundColor = "transparent"
    planoBtn1.style.color = "black"
    planoBtn2.style.backgroundColor = "transparent"
    planoBtn2.style.color = "black"
    planoBtn3.style.backgroundColor = "var(--roxo)"
    planoBtn3.style.color = "white"
    planoContainerWrapper1.style.display = "none"
    planoContainerWrapper2.style.display = "none"
    planoContainerWrapper3.style.display = "flex"
    planoArrow1.style.display = "none"
    planoArrow2.style.display = "none"
    planoArrow3.style.display = "block"
    planoArrow4.style.display = "none"
    planoArrow5.style.display = ""
    planoArrow6.style.display = "block"
});


planoBtn1Responsive.addEventListener("click", function(){
    planoBtn1Responsive.style.color = "white"
    planoBtn1Responsive.style.backgroundColor = "var(--roxo)"
    planoBtn2Responsive.style.color = "black"
    planoBtn2Responsive.style.backgroundColor = "transparent"
    planoBtn3Responsive.style.color = "black"
    planoBtn3Responsive.style.backgroundColor = "transparent"
    planoContainerContainerResponsive1.style.display = "flex"
    planoContainerContainerResponsive2.style.display = "none"
    planoContainerContainerResponsive3.style.display = "none"
});

planoBtn2Responsive.addEventListener("click", function(){
    planoBtn1Responsive.style.color = "black"
    planoBtn1Responsive.style.backgroundColor = "transparent"
    planoBtn2Responsive.style.color = "white"
    planoBtn2Responsive.style.backgroundColor = "var(--roxo)"
    planoBtn3Responsive.style.color = "black"
    planoBtn3Responsive.style.backgroundColor = "transparent"
    planoContainerContainerResponsive1.style.display = "none"
    planoContainerContainerResponsive2.style.display = "flex"
    planoContainerContainerResponsive3.style.display = "none"
});

planoBtn3Responsive.addEventListener("click", function(){
    planoBtn1Responsive.style.color = "black"
    planoBtn1Responsive.style.backgroundColor = "transparent"
    planoBtn2Responsive.style.color = "black"
    planoBtn2Responsive.style.backgroundColor = "transparent"
    planoBtn3Responsive.style.color = "white"
    planoBtn3Responsive.style.backgroundColor = "var(--roxo)"
    planoContainerContainerResponsive1.style.display = "none"
    planoContainerContainerResponsive2.style.display = "none"
    planoContainerContainerResponsive3.style.display = "flex"
});

//FUNÇÕES RELACIONADAS AO MENU RESPONSIVO DO HEADER
//FUNÇÕES RELACIONADAS AO MENU RESPONSIVO DO HEADER
//FUNÇÕES RELACIONADAS AO MENU RESPONSIVO DO HEADER
//FUNÇÕES RELACIONADAS AO MENU RESPONSIVO DO HEADER
//FUNÇÕES RELACIONADAS AO MENU RESPONSIVO DO HEADER

function menuBtn() {
    let menuResponsive = document.getElementById("menuResponsive")
    menuResponsive.style.transform = "translateX(0)"
}

function menuResponsiveBtn() {
    let menuResponsive = document.getElementById("menuResponsive")
    menuResponsive.style.transform = "translateX(55rem)"
}

let menuResponsiveLink1 = document.getElementById("menuResposiveLink1")

menuResponsiveLink1.addEventListener('click', function() {
    window.location.href = '#planos';
    menuResponsive.style.transform = "translateX(55rem)"
});

let menuResponsiveLink2 = document.getElementById("menuResposiveLink2")

menuResponsiveLink2.addEventListener('click', function() {
    window.location.href = '#localizacao';
    menuResponsive.style.transform = "translateX(55rem)"
});

let menuResponsiveLink3 = document.getElementById("menuResposiveLink3")

menuResponsiveLink3.addEventListener('click', function() {
    window.location.href = '#baixeAPP';
    menuResponsive.style.transform = "translateX(55rem)"
});

let menuResponsiveLink4 = document.getElementById("menuResposiveLink4")

menuResponsiveLink4.addEventListener('click', function() {
    window.location.href = '#footer';
    menuResponsive.style.transform = "translateX(55rem)"
});

let menuResponsiveLink5 = document.getElementById("menuResposiveLink5")

menuResponsiveLink5.addEventListener('click', function() {
    window.location.href = '../diretorio area do aluno/areaDoAluno.html';
    menuResponsive.style.transform = "translateX(55rem)"
});

let planosDetailsCross1 = document.getElementById("planosDetailsBtn1")
let planosDetailsHolder = document.getElementById("planosDetailsHolder")
let planoCardFooterBtn1 = document.getElementById("planoCardFooterBtn1")
let planoDetails1 = document.getElementById("planosDetails1")


planosDetailsCross1.addEventListener("click", function (){
    planosDetailsHolder.style.display = "none"
    document.body.style.overflowY = "auto"

})

planoCardFooterBtn1.addEventListener("click", function (){
    planosDetailsHolder.style.display = "flex"
    document.body.style.overflowY = "hidden"
    planoDetails1.style.display = "block"
    planoDetails2.style.display = "none"
})

function animateBox() {
    let box = document.getElementById("planosDetails1");
    box.classList.remove("animate");
    box.classList.add("animate");
}