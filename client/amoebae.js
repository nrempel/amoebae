var canvas;

Deps.autorun( function () {
  Meteor.subscribe('amoebae');
});

Meteor.startup( function() {
  canvas = new Canvas();
  Deps.autorun( function() {
    var data = Amoebae.find({}).fetch();
    if (canvas) {
      canvas.draw(data);
    }
  });
});

var drawAmoebae = function() {
  var offset = $('#canvas').offset();
      Amoebae.insert({
      x: (event.pageX - offset.left),
      y: (event.pageY - offset.top)});
};

Template.canvas.events({
  'click': function (event) {
    drawAmoebae();
  },
  'mousedown': function (event) {
    Session.set('draw', true);
  },
  'mouseup': function (event) {
    Session.set('draw', false);
  },
  'mousemove': function (event) {
    if (Session.get('draw')) {
      drawAmoebae();
    }
  }
});
