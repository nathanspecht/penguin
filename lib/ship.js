window.Asteroids = (function(Asteroids) {
  var Ship = Asteroids.Ship = function(attr) {
    Asteroids.MovingObject.apply(this, [attr]);

    this.radius = 20;
    this.vel = [0, 0];
    this.pos = attr.pos;
    this.tickCount = 1;
    this.shootingDir = [0, 1];

    this.SPRITEWIDTH = 41;
    this.SPRITEHEIGHT = 42;
    this.SPRITECOLUMNS = 8;
    this.SPRITEROWS = 8;
    this.SPRITEFRAMES = 64;
    this.DTHETA = 2 * Math.PI / this.SPRITEFRAMES;
    this.SPRITEIMAGE = new Image();
    this.SPRITEIMAGE.src = "Fother-penguin.png";
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function(dir) {
    this.vel[0] += dir * this.shootingDir[0];
    this.vel[1] += dir * this.shootingDir[1];

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

  Ship.prototype.rotate = function(dir) {
    this.shootingDir = Asteroids.Util.rotateVec(this.shootingDir, dir * this.DTHETA);
  };

  Ship.prototype.fireBullet = function () {
    var bullet = new Asteroids.Bullet({ship: this, game: this.game});
    this.game.bullets.push(bullet);
  };

  Ship.prototype.rotateLeft = function () {
    this.tickCount += 1;
    this.rotate(1);
    if (this.tickCount === this.SPRITEFRAMES) {
      this.tickCount = 0;
    }
  };

  Ship.prototype.rotateRight = function () {
    this.tickCount -= 1;
    this.rotate(-1);
    if (this.tickCount === 0) {
      this.tickCount = this.SPRITEFRAMES - 1;
    }
  };

  Ship.prototype.draw = function(ctx) {
    ctx.drawImage(
      this.SPRITEIMAGE,
      this.spriteCoords()[0], this.spriteCoords()[1],
      this.SPRITEWIDTH, this.SPRITEHEIGHT,
      this.pos[0] - this.radius, this.pos[1] - this.radius,
      2 * this.radius, 2 * this.radius
    );
  };

  return Asteroids;
})(window.Asteroids || {});
