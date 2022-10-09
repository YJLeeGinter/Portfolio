// Get the button
let mybutton = document.getElementById("myBtn");
let prevScrollpos = window.pageYOffset;
let mainNavBar = document.getElementById("navbar");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

if(mainNavBar){
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
      if (currentScrollPos === 0) {
        mainNavBar.style.top = "0";
      } else {
        mainNavBar.style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
      scrollFunction();
    }
}else{
  window.onscroll = function(){
    scrollFunction();
  }
}


mybutton.addEventListener('click',topFunction );

AOS.init();
