window.Asteroids = (function(Asteroids) {
  var Ship = Asteroids.Ship = function(attr) {
    Asteroids.MovingObject.apply(this, [attr]);

    this.color = "red";
    this.radius = 10;
    this.vel = [0,0];
    this.pos = attr['pos'];

  };
  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function () {
    var bullet = new Asteroids.Bullet({ship: this, game: this.game});
    this.game.bullets.push(bullet);
  };


  return Asteroids;
})(window.Asteroids || {});
