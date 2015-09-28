var Asteroids = function() {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }
};


Asteroids.MovingObject = function(attr) {
  this.pos = attr['pos'];
  this.vel = attr['vel'];
  this.radius = attr['radius'];
  this.color = attr['color'];
};
