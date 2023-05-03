let moon2 = document.getElementById('moon2');
let montacontac = document.getElementById('montacontac'); 

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    montacontac.style.bottom = value * 0.5+ 'px' 
    moon2.style.top = value * 1.05 + 'px' 

})

AOS.init();

