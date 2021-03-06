window.Asteroids = (function (Asteroids) {
  "use strict";

  var MovingObject = Asteroids.MovingObject = function(attr) {
    this.pos = attr.pos;
    this.vel = attr.vel;
    this.radius = attr.radius;
    this.color = attr.color;
    this.game = attr.game;
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

    if (this.isWrappable() && this.game.isOutOfBounds(this.pos)) {
      this.pos = this.game.wrap(this.pos);
    } else if (this.game.isOutOfBounds(this.pos)) {
      this.game.removeBullet(this);
    }
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var distance = Math.sqrt(Math.pow(this.pos[0] - otherObject.pos[0], 2) +
                             Math.pow(this.pos[1] - otherObject.pos[1], 2));
    return distance < this.radius + otherObject.radius;
  };

  MovingObject.prototype.isWrappable = function () {
    return true;
  };

  MovingObject.prototype.spriteCoords = function () {
    var sx = this.tickCount % this.SPRITECOLUMNS * this.SPRITEWIDTH;
    var sy = Math.floor(this.tickCount / this.SPRITEROWS) * this.SPRITEHEIGHT;
    return [sx, sy];
  };

  return Asteroids;

})(window.Asteroids || {});
