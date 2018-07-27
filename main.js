
  var img = document.createElement('img')
  img.src ='';

  function none(){
    img.src = '';
  }

  function mikey(){
    img.src = 'img/img copy/mikey.png';
  }

  function nick1(){
    img.src = 'img/img copy/nick1.png';
  }
  function chrisP(){
    img.src = 'img/img copy/chrisP.png';
  }
  function nick3(){
    img.src = 'img/img copy/nick3.png';
  }
  function chrisH(){
    img.src = 'img/img copy/chrisH.png';
  }
  function jeffy(){
    img.src = 'img/img copy/jeffy2.png';
  }
  function doge(){
    img.src = 'img/img copy/doge.png';
  }
function sara(){
  img.src ='img/img copy/sara2.png';
}
function mimi(){
  img.src ='img/img copy/mimi.png';
}
function faith(){
  img.src ='img/img copy/faith2.png';
}
function sandy(){
  img.src='img/img copy/sandy2.png';
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
