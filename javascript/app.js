//slider
var slideIndex = 1;
 showSlides(slideIndex);
function plusSlides(n) {
   showSlides(slideIndex += n);
 }
function currentSlide(n) {
   showSlides(slideIndex = n);
 }
function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   slides[slideIndex-1].style.display = "block";
 }

//modal login
var showBtnS = document.querySelector('.js-header__list-link')
var modal = document.querySelector('.js-modal')
var closes = document.querySelector('.btn-x')
var modalBody = document.querySelector('.js-modal__body')

function showBtn() {
  modal.classList.add('open')

}
function closeBtn() {
  modal.classList.remove('open')
}
modalBody.addEventListener('click', function(event) {
  event.stopPropagation()
})
modal.addEventListener('click',closeBtn)
showBtnS.addEventListener('click',showBtn)
closes.addEventListener('click',closeBtn)

// scrollTop
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};



const btn = document.querySelector(".btn")
console.log(btn);
btn.addEventListener("click", function(e) {
    e.preventDefault()
    e.stopPropagation()
})