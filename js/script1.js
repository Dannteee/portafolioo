let estrellas = document.getElementById('estrellas');
let btn = document.getElementById('btn');
let luna = document.getElementById('luna');
let monta = document.getElementById('monta');
let pasto = document.getElementById('pasto'); 

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    estrellas.style.left = value *0.25 + 'px'
    btn.style.top = value * 1.5+ 'px'  
    luna.style.top = value * 1.05+ 'px'
    monta.style.top = value * 0.5+ 'px' 
    pasto.style.bottom = value * 0 + 'px' 

})

AOS.init();