// var slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n){
//   showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n){
//   var i;
//   var slides = document.getElementsByClassName("fade");
//   var dots = document.getElementsByClassName("dot");
//   if(n > slides.length){slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for(i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none"
//   }
//   for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//         slides[slideIndex-1].style.display = "flex";
//         dots[slideIndex-1].className += " active";
//     }
//
//     slides[slideIndex-1].style.display = "flex";
//    setTimeout(showSlides, 2000);
// }

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("fade");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
   slides[slideIndex-1].style.animation = "mover 4s ease-in-out";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
};

$(document).ready(main);

var contador = 1;

function main(){
   $('.menu_bar').click(function(){
     if(contador == 1){
      $('nav').animate({
             right: '0'
         });
         contador = 0;
    }else {
       contador = 1;
       $('nav').animate({
         right: '-100%'
      })
    }
  
     });

};

window.onscroll = function(){
  console.log(document.documentElement.scrollTop);
  if(document.documentElement.scrollTop > 400){
    document.querySelector('.go-top-container').classList.add('show');
  } else {
    document.querySelector('.go-top-container').classList.remove('show');
  }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});
window.onscroll = miFuncion;

function miFuncion(){
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scroll/ height) *100;
  document.getElementById('barra').style.width = scrolled + '%';
}