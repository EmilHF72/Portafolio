const btn=document.querySelector('.btn__trailer--encrip');
const close=document.querySelector('.experiencia__video--close');
const trailer=document.querySelector('.experiencia__video--trailer');
const video=document.querySelector('.experiencia__video--encriptador');

const btnA=document.querySelector('.btn__trailer--ahorcado');
const closeA=document.querySelector('.close');
const trailerA=document.querySelector('.trailer');
const videoA=document.querySelector('.ahorcado');





btn.addEventListener('click',()=>{
    trailer.style.visibility = 'visible';
    trailer.style.opacity = 1;
});

close.addEventListener("click",()=>{
    trailer.style.visibility="hidden";
    trailer.style.opacity=0;

    video.pause();
    video.currentTime = 0;
});

btnA.addEventListener('click',()=>{
    trailerA.style.visibility = 'visible';
    trailerA.style.opacity = 1;
});

closeA.addEventListener("click",()=>{
    trailerA.style.visibility="hidden";
    trailerA.style.opacity=0;

    videoA.pause();
    videoA.currentTime = 0;
});