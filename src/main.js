const header = document.querySelector('header');

window.addEventListener('scroll', function(){
    header.classList.toggle("sticky", window.scrollY > 0);
    });
  
   function Toggle() {
    header.classList.toggle("active");
   } 