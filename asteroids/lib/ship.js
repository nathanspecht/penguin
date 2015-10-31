window.Asteroids = (function(Asteroids) {
  var Ship = Asteroids.Ship = function(attr) {
    Asteroids.MovingObject.apply(this, [attr]);

    this.color = "red";
    this.radius = 25;
    this.vel = [0,0];
    this.pos = attr.pos;
    this.tickCount = 1;
    this.shootingDir = [0, -1];

    this.DTHETA = 2 * Math.PI / 64;
  };
  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
    if (this.vel[1] > 7) {
      this.vel[1] = 7;
    } else if (this.vel[1] < -7) {
      this.vel[1] = -7;
    }

    if (this.vel[0] > 7) {
      this.vel[0] = 7;
    } else if (this.vel[0] < -7) {
      this.vel[0] = -7;
    }
  };

  Ship.prototype.rotate = function () {
    this.shootingDir = Asteroids.Util.rotateVec(this.shootingDir, this.DTHETA);
  };

  Ship.prototype.fireBullet = function () {
    var bullet = new Asteroids.Bullet({ship: this, game: this.game});
    this.game.bullets.push(bullet);
  };

  var shipImg = new Image();
  shipImg.src = '/Users/nathan_specht/workspace/w6d1/asteroids/Fother-penguin.png';

  Ship.prototype.draw = function () {
    var sx = this.tickCount % 8 * 41;
    var sy = Math.floor(this.tickCount / 8) * 42;
    ctx.drawImage(shipImg, sx, sy, 41, 42, this.pos[0] - this.radius, this.pos[1] - this.radius, 2 * this.radius, 2 * this.radius);
    this.tickCount += 1;
    this.rotate();
    if (this.tickCount === 64) {
      this.tickCount = 0;
    }
  };


  return Asteroids;
})(window.Asteroids || {});
