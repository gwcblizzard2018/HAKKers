document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
  var instance = M.Carousel.init({
    fullWidth: true,
  });
});

var first_click = true;
var stuff;
function glow(myid) {
    if (first_click) {

        var i = 0;
        //var act = document.getElementById('myGlower').getElementsByClassName('carousel-item active');
        //console.log(act);
        var glow = document.getElementById(myid);


                glow.setAttribute('class','active');

        first_click = false;
    } else {

      var glow = document.getElementById(myid);
      glow.removeAttribute('class');      //clearInterval(stuff);
      first_click = true;

      return;
  }
}
