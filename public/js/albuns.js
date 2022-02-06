
//abrir fotos do album
const alb = document.querySelectorAll('.capa')
const fts = document.querySelector('.fotos')
alb.forEach(e =>{
    e.addEventListener('click',()=>{
        console.log(fts)
        fts.style.display = "block"
    })
})