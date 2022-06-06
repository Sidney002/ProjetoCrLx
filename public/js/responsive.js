const mb_link = document.querySelector('.mobile-link');

mb_link.addEventListener('click',()=>{
    const h_list = document.querySelector('.header-list');
    const mb_ico = document.querySelector('.material-symbols-outlined');
    mb_ico.textContent = "cancel"
    if(h_list.style.display == "flex"){
        h_list.style.display = "";
        mb_ico.textContent = "menu";
    }else{
        h_list.style.display = "flex";
        mb_ico.textContent = "cancel";        
    }
})

const l = document.querySelector('.seta-l');
const r = document.querySelector('.seta-r');

l.addEventListener('click',()=>{
    const si = document.querySelector(".slide-img");
    si.scrollLeft = si.scrollLeft - 914
})
r.addEventListener('click',()=>{
    const si = document.querySelector(".slide-img");
    si.scrollLeft = si.scrollLeft + 914

})