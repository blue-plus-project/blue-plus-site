let imagens=['/src/assets/sensores/eletrodo de pH.jpg', '/src/assets/sensores/sensor baseado em luz dispersa.jpg', '/src/assets/sensores/sensor de condutividade elétrica.jpg', '/src/assets/sensores/sensor de metais pesados.jpg', '/src/assets/sensores/sensor de temperatura digital.jpg', '/src/assets/sensores/sensor optico.jpg'];
let index = 0;
let time = 1500;

function slideShow(){
    document.getElementById('sensores').src = imagens[index];
    index++;

    if(index == imagens.length){
        index = 0;
    }
    setTimeout('slideShow()', time);
}
slideShow();

document.addEventListener("DOMContentLoaded", function(){

    let email = document.querySelector(".info-email");
    let msg = document.querySelector(".mensagem");

    msg.classList.add("hidden");

    email.addEventListener("keyup", function(event){
        if(event.keyCode === 13) {
            event.preventDefault();
            msg.classList.remove("hidden")
            email.style.display="none";
            email.value = "";
            alert("Seu e-mail foi cadastrado com sucesso.");
        }
    })
})