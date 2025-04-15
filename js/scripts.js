function menuToggle() {
    var x = document.getElementById('mynavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
      } else {
        x.className = 'navtoggle';
      }
}

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