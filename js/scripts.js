function menuToggle() { const x = document.getElementById("mynavtoggle"); if (x.classList.contains("responsive")) { x.classList.remove("responsive"); } else { x.classList.add("responsive"); } }

$('a[href^="#"]').on('click', function (event) {
  var target = $($(this).attr('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 600);
    menuToggle(); // Close the menu on click
  }
});