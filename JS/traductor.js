var check = document.querySelector('.lenguaje__check');

check.addEventListener('click', idioma);

function idioma(){
   let estado=(check.checked);
    if(estado==true){
        location.href="idioma/index.html";
        
    }else{
        location.href="../index.html";
    }
}
