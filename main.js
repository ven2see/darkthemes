window.addEventListener('scroll', function(){
  let animacionb1 = document.getElementById('animadob1');
  let animacionb2 = document.getElementById('animadob2');
  let positionb1 = animacionb1.getBoundingClientRect().top;
  let positionb2 = animacionb2.getBoundingClientRect().top;

  console.log(positionb1, positionb2);

  let tamañoDePantalla2 = window.innerHeight/3.0;

  if(positionb1, positionb2 < tamañoDePantalla2){
    animacionb2.style.animation = 'moverb2 0.5s ease-out';
    animacionb1.style.animation = 'moverb1 2.5s ease-out';
    animacionb1.style.opacity = 1;
    animacionb2.style.opacity = 1;
  }

  let animacionc1 = document.getElementById('animadoc1');
  let animacionc2 = document.getElementById('animadoc2');
  let positionc1 = animacionc1.getBoundingClientRect().top;
  let positionc2 = animacionc2.getBoundingClientRect().top;

  console.log(positionc1, positionc2);

  let tamañoDePantalla3 = window.innerHeight/2.0;

  if(positionc1, positionc2 < tamañoDePantalla3){
    animacionc1.style.animation = 'moverc1 3.0s ease-out';
    animacionc2.style.animation = 'moverc2 2.0s ease-out';
    animacionc1.style.opacity = 1;
    animacionc2.style.opacity = 1;
  }

});


let animadoe = document.querySelectorAll(".animadoe");
let animadoe2 = document.querySelectorAll(".animadoe2");

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i=0; i < animadoe.length; i++ ) {
    let alturaAnimado = animadoe[i].offsetTop;
    if(alturaAnimado - 500 < scrollTop) {
      animadoe[i].style.opacity = 1;
      animadoe[i].classList.add("movere");
    }
  }

  for (var i=0; i < animadoe2.length; i++ ) {
    let alturaAnimado = animadoe2[i].offsetTop;
    if(alturaAnimado - 500 < scrollTop) {
      animadoe2[i].style.opacity = 1;
      animadoe2[i].classList.add("movere2");
    }
}
}
window.addEventListener('scroll', mostrarScroll);

