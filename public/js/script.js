const surgir = document.querySelectorAll('.surgir');
    surgir.forEach(e =>{
        e.style.opacity = "0";
    })
let w = 0
//efeito de aparecer
window.addEventListener('scroll',()=>{
    w = window.pageYOffset + ((window.innerHeight * 3) / 4)
        
        surgir.forEach(element => {
            if(w > element.offsetTop ){
                element.style.opacity = "10";
            }
        });
        
    }
)
//maquina de escrever
const txt = document.querySelector('.about-p')
function typeWrite(txt){
    const textoArray = txt.innerHTML.split('');
        txt.innerHTML = ' ';
        textoArray.forEach(function(letra, i){   
      
        setTimeout(function(){
            txt.innerHTML += letra;
        }, 25 * i)});
}

typeWrite(txt)