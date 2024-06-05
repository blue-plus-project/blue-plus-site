let imagens=['/src/assets/sensores/eletrodo de pH.jpg', '/src/assets/sensores/sensor baseado em luz dispersa.jpg', '/src/assets/sensores/sensor de condutividade elétrica.jpg', '/src/assets/sensores/sensor de metais pesados.jpg', '/src/assets/sensores/sensor de temperatura digital.jpg', '/src/assets/sensores/sensor optico.jpg'];
let index = 0;
let time = 3000;

function slideShow(){
    document.getElementById('sensores').src = imagens[index];
    index++;

    if(index == imagens.length){
        index = 0;
    }
    setTimeout('slideShow()', time);
}
slideShow();
