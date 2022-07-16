const containerEl = document.querySelector('.container');
const cardsEl= document.querySelectorAll('.card');
const cardsArray = [...cardsEl];
const prevEl = document.querySelector('.prev');
const nextEl = document.querySelector('.next');
let contador = 0;
function sliders(){
    containerEl.style.transform = `translateX(${-90}%)`;
    containerEl.style.transition = 'transform 0.5s';
    if(contador == cardsArray.length){
        containerEl.style.transform = `translateX(${0}%)`;
        containerEl.style.transition = 'transform 0.5s';
        contador = 1;
    }
};
setInterval(()=>{
    sliders();
    contador++;
}, 1000);