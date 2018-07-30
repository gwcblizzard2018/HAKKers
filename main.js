document.body.style.zoom="100%"

var img = document.createElement('img')
img.src ='';

function none(){
  img.src = '';
}

var first_click = true;
var stuff;

function glow(myid, image_url) {

  img.src= "img/img copy/" + image_url;
    if (first_click) {
        var i = 0;
        //var act = document.getElementById('myGlower').getElementsByClassName('carousel-item active');
        //console.log(act);
        var glow = document.getElementById(myid);
        glow.setAttribute('class','active');
        first_click = false;
    } else {
      var glow = document.getElementById(myid);
      glow.removeAttribute('class');
      //clearInterval(stuff);
      first_click = true;
      return;
  }
}

window.onload = function() {
  var video = document.getElementById('video');
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var tracker = new tracking.ObjectTracker('face');
  tracker.setInitialScale(4);
  tracker.setStepSize(2);
  tracker.setEdgesDensity(0.1);
  tracking.track('#video', tracker, { camera: true });
  tracker.on('track', function(event) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    event.data.forEach(function(rect) {

    context.drawImage(img, rect.x, rect.y/4, rect.width + 11, rect.height * 1.9);
    });
  });
  var gui = new dat.GUI();
  gui.add(tracker, 'edgesDensity', 0.1, 0.5).step(0.01);
  gui.add(tracker, 'initialScale', 1.0, 10.0).step(0.1);
  gui.add(tracker, 'stepSize', 1, 5).step(0.1);
};

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
  var instance = M.Carousel.init({
  fullWidth: true,
  });
});
