window.Asteroids = (function(Asteroids) {
  var Game = Asteroids.Game = function(dimX, dimY) {
    this.level = 1;
    this.DIM_X = dimX;
    this.DIM_Y = dimY;
    this.asteroids = [];
    this.bullets = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship({pos: this.randomPosition(), game: this});
  };

  Game.NUM_ASTEROIDS = 5;

  Game.prototype.randomPosition = function() {
    var randX = Math.random() * this.DIM_X;
    var randY = Math.random() * this.DIM_Y;
    return [randX, randY];
  };

  Game.prototype.addAsteroids = function() {
    for (var i=1; i<= Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(new Asteroids.Asteroid({pos: this.randomPosition(), game: this}));
    }
  };

  Game.prototype.draw = function(ctx) {
    this.allObjects().forEach(function(object) {
      object.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.allObjects().forEach(function(object) {
      object.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    var x = pos[0] % this.DIM_X;
    var y = pos[1] % this.DIM_Y;

    if (x < 0){
      x += this.DIM_X;
    }

    if (y < 0){
      y += this.DIM_Y;
    }

    return [x,y];
  };

  Game.prototype.isOutOfBounds = function (pos) {
    return pos[0] > this.DIM_X || pos[0] < 0 ||
           pos[1] > this.DIM_Y || pos[1] < 0;
  };

  Game.prototype.checkCollisions = function() {
    var that = this;
    this.asteroids.forEach(function(asteroid) {
      that.bullets.forEach(function(bullet) {
        if (bullet.isCollidedWith(asteroid)) {
          that.remove(asteroid, bullet);
        }
      });

    if(asteroid.isCollidedWith(that.ship)) {
      that.ship.relocate();
    }
    });
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function(asteroid, bullet) {
    if (asteroid) {
      var aIdx = this.asteroids.indexOf(asteroid);
      this.asteroids = this.asteroids.slice(0,aIdx)
                       .concat(this.asteroids.slice(aIdx + 1));
      if (this.asteroids.length === 0) {
        this.levelUp();
      }
    }

    var bIdx = this.bullets.indexOf(bullet);
    this.bullets = this.bullets.slice(0,bIdx)
                   .concat(this.bullets.slice(bIdx+1));
  };

  Game.prototype.levelUp = function () {
    for (var i = 0; i < this.level; i++) {
      this.addAsteroids();
    }
  };

  Game.prototype.allObjects = function() {
    return [this.ship].concat(this.asteroids).concat(this.bullets);
  };

  return Asteroids;

})(window.Asteroids || {});
