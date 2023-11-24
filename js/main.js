var figura = document.getElementById("figura");



function circulo(){
    figura.classList.toggle("circulo");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Circulo";
  

}

function moveTop(){
    figura.classList.toggle("moveTop");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Move Top";
}

function rectangulo(){
    figura.classList.toggle("rectangulo");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Rectangulo";
}

function rombo(){
    figura.classList.toggle("rombo");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Rombo";
}

function imagen(){
    figura.classList.toggle("imagen");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Image";
}

function gif(){
    figura.classList.toggle("gif");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Gif";
}
function triangulo(){
    figura.classList.toggle("triangulo");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Triangulo";
}


function hoja(){
    figura.classList.toggle("hoja");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Hoja";
}
function pacMan(){
    figura.classList.toggle("pacMan");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Pac Man";
}



function luna(){
    figura.classList.toggle("luna");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Luna";
}

function propuesta(){
    figura.classList.toggle("propuesta");
    let circulos = document.querySelector(".title");
    circulos.innerText = "propuesta";
}






function huevo(){
    figura.classList.toggle("huevo");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Huevo";
}

function trapecio(){
    figura.classList.toggle("trapecio");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Trapecio";
}

function moveLeft(){
    figura.classList.toggle("moveLeft");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Move Left";
}
function moveButtom(){
    figura.classList.toggle("moveButtom");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Move Button";
}
function moverigth(){
    figura.classList.toggle("moverigth");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Move Right";
}






// panel lateral
function panelLATERAL(){
    const panel = document.querySelector(".panel-lateral");

    panel.classList.toggle("active");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Panel Lateral";
}


// panel superior
function panelSuperior(){
    const panel = document.querySelector(".panel-superior");

    panel.classList.toggle("active");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Panel Superior";
}


function fondo(){
    const body = document.querySelector(".body");
    body.classList.toggle("active");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Cambio de Fondo";
} 


function boton(){

    const buton = document.querySelector(".left");
    const buton1 = document.querySelector(".rigth");
    buton.classList.toggle("active2");
    buton1.classList.toggle("active2");
    let circulos = document.querySelector(".title");
    circulos.innerText = "Cambio color principal";
    
    
} 



