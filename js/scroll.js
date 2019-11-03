$(document).ready(function(){

  // Create a controller
  var controller = new ScrollMagic.Controller();

  var scene1 = new ScrollMagic.Scene({
            duration: 250
  })
  .setPin('#chickGraphic')
  .addTo(controller)
  //.addIndicators({name: "1 (duration: 250)"});

  var scene2 = new ScrollMagic.Scene({
            triggerElement: '#cowGraphic',
            duration: 300
  })
  .setPin('#cowGraphic')
  .addTo(controller)
  //.addIndicators({name: "2 (duration: 300)"});

  var scene3 = new ScrollMagic.Scene({
            triggerElement: '#chickenGraphic',
            duration: 400
  })
  .setPin('#chickenGraphic')
  .addTo(controller)
  //.addIndicators({name: "3 (duration: 400)"});
});
