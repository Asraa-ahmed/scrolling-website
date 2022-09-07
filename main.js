let stars =document.getElementById('stars');
let moon =document.getElementById('moon');
let mountain3 =document.getElementById('mountains3');
let mountain4 =document.getElementById('mountains4');
let river =document.getElementById('river');
let boat =document.getElementById('boat');
let nouvil =document.querySelector('.nouvil');


window.onscroll= function(){
    let value = scrollY;
    stars.style.left= value + 'px' ;
    moon.style.top= value * 3 + 'px' ;
    mountain3.style.top = value *1.5 + 'px';
    mountain4.style.top = value *1.2 + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value  + 'px';
    boat.style.left = value * 4 + 'px';
    nouvil.style.fontSize = value  + 'px';
    if(scrollY >= 80){
        nouvil.style.fontSize = 80  + 'px';
        nouvil.style.position = 'fixed';
    }

    if(scrollY >= 405){
        nouvil.style.display= 'none';
    }else{
        nouvil.style.display= 'block';
    }


    if(scrollY >= 105){
        document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)';
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(#2e0120, #140224)';
    }
}

