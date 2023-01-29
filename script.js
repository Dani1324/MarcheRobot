const width = window.innerWidth > 0 ? window.innerWidth : screen.width;

// AOS animation library
AOS.init({
  offset: 300,
  duration: 1100,
});

function textchange() {
  if (width < 1025) {
    document.querySelector("#subtitle-change").innerHTML = "Benvenuto al Contest Marchigiano di <span>Robotica</span>";
  };
};

// Add smooth scrolling to all links
$("a.smooth").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
      // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  }
});


// Effects at scroll
let header = document.getElementsByClassName('.header');
let bubble1 = document.getElementById('parallax-bg-1');
let bubble2 = document.getElementById('parallax-bg-2');
let bubble3 = document.getElementById('parallax-bg-3');
let bubble4 = document.getElementById('parallax-bg-4');

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  var iOS = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (width > 1025) {

    bubble1.style.top = value * 0.060 + 'vh';
    bubble2.style.top = value * 0.080 + 'vh';
    bubble3.style.top = value * 0.040 + 'vh';
    bubble4.style.top = value * 0.030 + 'vw';

    if(document.documentElement.scrollTop > 40){
      $(".header").css("padding", "0.7vw 8vw 1.1vw 8vw");
      $(".header").css("border-bottom", "0.07vw solid rgba(255, 255, 255, 0.1)");
      $(".header").css("background-color", "rgba(10, 3, 10, 0.6)");
      $(".header").css("backdrop-filter", "blur(10px)");
    }
    else {
      $(".header").css("padding", "1.2vw 8vw 0.5vw 8vw");
      $(".header").css("border-bottom", "0vw solid rgba(35, 36, 42, 0.05)");
      $(".header").css("background-color", "rgba(10, 3, 10, 0)");
      $(".header").css("backdrop-filter", "blur(0px)");
    }
  }
  else {

    bubble1.style.top = value * 0.050 + 'vh';
    bubble2.style.top = value * 0.028 + 'vh';
    bubble3.style.top = value * 0.045 + 'vh';
    bubble4.style.top = value * 0.030 + 'vh';

    if(document.documentElement.scrollTop > 20){
      $(".header").css("padding", "1.3vh 8vw 1.5vh 8vw");
      $(".header").css("border-bottom", "0.2vw solid rgba(255, 255, 255, 0.14)");
      $(".header").css("background-color", "rgba(10, 3, 10, 0.6)");
      $(".header").css("backdrop-filter", "blur(10px)");
    }
    else {
      $(".header").css("padding", "2.3vh 8vw 2.5vh 8vw");
      $(".header").css("border-bottom", "0vw solid rgba(255, 255, 255, 0.05)");
      $(".header").css("background-color", "rgba(10, 3, 10, 0)");
      $(".header").css("backdrop-filter", "blur(0px)");
    }
  }
});

// Remove 000webhost watermark
document.addEventListener('DOMContentLoaded', ()=>{
  var disclaimer = document.querySelector('img[alt="www.000webhost.com"]');
  if (disclaimer) {
    disclaimer.remove();
  }
});
