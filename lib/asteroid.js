window.Asteroids = (function(Asteroids) {

  var HEX_DIGITS = "0123456789ABCDEF";

  var Asteroid = Asteroids.Asteroid = function(attr) {
    Asteroids.MovingObject.apply(this, [attr]);

    this.LENGTH = 3;
    this.color = Asteroid.randomColor();
    this.radius = attr.radius || 20;
    this.vel = Asteroids.Util.randomVec(this.LENGTH);
    this.tickCount = 1;

    this.SPRITEWIDTH = 32;
    this.SPRITEHEIGHT = 64;
    this.SPRITECOLUMNS = 4;
    this.SPRITEROWS = 4;
    this.SPRITEFRAMES = 16;
    this.SPRITEIMAGE = new Image();
    this.SPRITEIMAGE.src = "snowmen.png";
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.randomColor = function() {
    var color ="#";
    for (var i = 0; i < 6; i++) {
      color += HEX_DIGITS[Math.floor((Math.random() * 16))];
    }

    return color;
  };

  Asteroid.prototype.draw = function(ctx) {
    ctx.drawImage(
      this.SPRITEIMAGE,
      this.spriteCoords()[0], this.spriteCoords()[1],
      this.SPRITEWIDTH, this.SPRITEHEIGHT,
      this.pos[0] - this.radius, this.pos[1] - this.radius,
      this.SPRITEWIDTH, this.SPRITEHEIGHT
    );
  };


  return Asteroids;

})(window.Asteroids || {});
