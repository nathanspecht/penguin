window.Asteroids = (function(Asteroids) {
  var Ship = Asteroids.Ship = function(attr) {
    Asteroids.MovingObject.apply(this, [attr]);

    this.color = "red";
    this.radius = 10;
    this.vel = [0,0];
    this.pos = attr['pos'];
    
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);
  return Asteroids;
})(window.Asteroids);
