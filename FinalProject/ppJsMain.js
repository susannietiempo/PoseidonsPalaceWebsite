/*
    Name: Susannie Vhil Tiempo
    Last Update: March 08, 2020
    Purpose: JavScript code for the Poseidon's Palace website main websites.
*/

// FOR NAV/HEADER TO STAY ON TOP


window.onscroll = function() {myFunction()};

let navbar = document.getElementById("header");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// FOR THE IMAGE SLIDE SHOW

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); 
}

// FOR THE TESTIMONIAL SLIDE SHOW

var slideIndexQuote = 0;
showSlidesQuote();

function showSlidesQuote() {
  var i;
  var slides = document.getElementsByClassName("mySlidesQuotes");
  var dots = document.getElementsByClassName("dot2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndexQuote++;
  if (slideIndexQuote > slides.length) {slideIndexQuote = 1}    

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexQuote-1].style.display = "block";  
  dots[slideIndexQuote-1].className += " active";
  setTimeout(showSlidesQuote, 3000); 
}


function changeButton(id) {
  let button = document.getElementById(id); 
  button.style.border = "3px solid #004fac";
  button.style.background = "#fff";
  button.style.color = "#004fac";
}

function changeBackButton(id) {
  let button = document.getElementById(id); 
  button.style.border = "1px solid #004fac";
  button.style.background = "#004fac";
  button.style.color = "#fff";
}

function changeButton1(id, fontColor) {
  let myButt = document.getElementById(id); 
  myButt.style.border = `3px solid ${fontColor}`;
  myButt.style.background = "none";
  myButt.style.color = fontColor;
}

function changeBackButton1(id, fontColor) {
  let myButt = document.getElementById(id); 
  myButt.style.border = `1px solid ${fontColor}`;
  myButt.style.background = fontColor;
  myButt.style.color = "#fff";
}
function changePage(link) {
  window.location.href = link;
}

function changeBorder(id) {
  document.getElementById(id).style.border = "1px solid #000";
}

function changeBack(id) {
  document.getElementById(id).style.border = "3px solid #000";
}

function burgerMenu() {
  var element = document.getElementById("navbar");
  if (element.className === "topnav") {
      element.className += "responsive";
  }else{
      element.className = "topnav";
  }
}



/*
REFERENCES:

Code for the JS is taken from the following sources. The student did not make the code for the JS. The html and css codes for 
the following areas are also lifted from the sources:

Fixed Navigation:
https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

Picture/Testimonial Carousel:
https://www.w3schools.com/howto/howto_js_slideshow.asp

*/