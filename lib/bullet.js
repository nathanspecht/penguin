window.Asteroids = (function(Asteroids) {
  var Bullet = Asteroids.Bullet = function(attr) {
    Asteroids.MovingObject.apply(this, [attr]);

    this.radius = 10;
    this.ship = attr.ship;
    this.DTHETA = 2 * Math.PI / 128;
    this.vel = [this.ship.shootingDir[0] * 3 + this.ship.vel[0],
                this.ship.shootingDir[1] * 3 + this.ship.vel[1]];
    this.pos = [this.ship.pos[0] + this.ship.shootingDir[0] * 10, this.ship.pos[1] + this.ship.shootingDir[1] * 6 - 15];
    this.game = attr.game;
  };
  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.isWrappable = function () {
    return false;
  };

  Bullet.prototype.rotate = function () {
    this.vel = Asteroids.Util.rotateVec(this.vel, this.DTHETA);
  };

  shitImg = new Image();
  shitImg.src = 'ice.png';

  Bullet.prototype.draw = function(ctx) {
    ctx.drawImage(shitImg, this.pos[0], this.pos[1]);
  };

  return Asteroids;
})(window.Asteroids || {});
