window.Asteroids = (function(Asteroids) {
  var Ship = Asteroids.Ship = function(attr) {
    Asteroids.MovingObject.apply(this, [attr]);

    this.radius = 20;
    this.vel = [0, 0];
    this.pos = attr.pos;
    this.tickCount = 1;
    this.shootingDir = [0, -1];

    this.SPRITEWIDTH = 41;
    this.SPRITEHEIGHT = 42;
    this.SPRITECOLUMNS = 8;
    this.SPRITEROWS = 8;
    this.SPRITEFRAMES = 64;
    this.DTHETA = 2 * Math.PI / this.SPRITEFRAMES;
    this.SHIPIMAGE = new Image();
    this.SHIPIMAGE.src = "/Users/nathan_specht/workspace/w6d1/asteroids/Fother-penguin.png";
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

  Ship.prototype.tick = function () {
    this.tickCount += 1;
    this.rotate();
    if (this.tickCount === 64) {
      this.tickCount = 0;
    }
  };

  Ship.prototype.spriteCoords = function () {
    var sx = this.tickCount % this.SPRITECOLUMNS * this.SPRITEWIDTH;
    var sy = Math.floor(this.tickCount / this.SPRITEROWS) * this.SPRITEHEIGHT;
    return [sx, sy];
  };

  Ship.prototype.draw = function () {
    ctx.drawImage(
      this.SHIPIMAGE,
      this.spriteCoords()[0], this.spriteCoords()[1],
      this.SPRITEWIDTH, this.SPRITEHEIGHT,
      this.pos[0] - this.radius, this.pos[1] - this.radius,
      2 * this.radius, 2 * this.radius
    );

    this.tick();
  };

  return Asteroids;
})(window.Asteroids || {});
