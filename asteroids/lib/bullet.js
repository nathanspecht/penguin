window.Asteroids = (function(Asteroids) {
  var Bullet = Asteroids.Bullet = function(attr) {
    Asteroids.MovingObject.apply(this, [attr]);

    this.color = "purple";
    this.radius = 2;
    this.ship = attr['ship'];
    this.vel = this.ship.vel;
    this.pos = this.ship.pos;
    this.game = attr['game'];

  };
  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);


  return Asteroids;
})(window.Asteroids || {});
