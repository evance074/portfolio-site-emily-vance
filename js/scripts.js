console.log("hello world");

function menuToggle() {
    var x = document.getElementById('mynavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
      } else {
        x.className = 'navtoggle';4
      }
}