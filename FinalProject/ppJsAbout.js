var slideIndexStories = 0;
showSlidesStories();

function showSlidesStories() {
  var i;
  var slidesStories = document.getElementsByClassName("mySlidesStories");
  var dots = document.getElementsByClassName("dot3");
  for (i = 0; i < slidesStories.length; i++) {
    slidesStories[i].style.display = "none";  
  }
  slideIndexStories++;
  if (slideIndexStories > slidesStories.length) {slideIndexStories = 1}    

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesStories[slideIndexStories-1].style.display = "block";  
  dots[slideIndexStories-1].className += " active";
  setTimeout(showSlidesStories, 3000); 
}

// FOR NAV/HEADER TO STAY ON TOP


window.onscroll = function() {myFunction()};

let navbar = document.getElementById("header") ;
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
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