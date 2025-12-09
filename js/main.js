function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

//Get the button
var scrollUp = document.getElementById("scrollUp");

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function() {
	scrollFunction()
    };

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}