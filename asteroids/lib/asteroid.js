window.Asteroids = (function(Asteroids) {

  var HEX_DIGITS = "0123456789ABCDEF";

  var Asteroid = Asteroids.Asteroid = function(attr) {
    var LENGTH = 3;
    Asteroids.MovingObject.apply(this, [attr]);
    this.color = Asteroid.randomColor();
    this.radius = attr["radius"] || 60;
    this.vel = Asteroids.Util.randomVec(LENGTH);

  };

  Asteroid.randomColor = function() {
    var color ="#";
    for (var i = 0; i < 6; i++) {
      color += HEX_DIGITS[Math.floor((Math.random() * 16))];
    }

    return color;
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  return Asteroids;

})(window.Asteroids || {});
