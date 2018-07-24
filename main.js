
  var img = document.createElement('img')
  img.src ='';

  function none(){
    img.src = '';
  }

  function nick1(){
    img.src = 'img/img copy/nick1.png';
  }
  function nick2(){
    img.src = 'img/img copy/nick2.png';
  }
  function nick3(){
    img.src = 'img/img copy/nick3.png';
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
