// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("header-2");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// $(document).ready(function() {
//   $('#close-btn').click(function() {
//     $('#search-overlay').fadeOut();
//     $('#search-btn').show();
//   });
//   $('#search-btn').click(function() {
//     $(this).hide();
//     $('#search-overlay').fadeIn();
//   });
// });
