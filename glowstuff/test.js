document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
  var instance = M.Carousel.init({
    fullWidth: true,
  });
});

var first_click = true;
function glow() {
    if (first_click) {
      console.log("Glowing");
        var i = 0;
        var glow = document.getElementById('myGlower');
        setInterval(function(){
            if(i == 0) {
                glow.setAttribute('class','active');
                i++;
            } else {
                glow.removeAttribute('class');
                i = 0;
            }
        },500);
        first_click = false;
    } else {
      console.log("Not glowing")
//      var i = 0;
      var glow = document.getElementById('myGlower');
      glow.removeAttribute('class');
      /*
      setInterval(function(){
          if(i !== 0) {
              glow.setAttribute('class','active');
              i++;
          } else {
              glow.removeAttribute('class');
              i = 0;
          }


      },0);*/
      first_click = true;

      return;
  }
}
