window.Asteroids = (function(Asteroids) {


  var Game = Asteroids.Game = function(dimX, dimY) {
    this.DIM_X = dimX;
    this.DIM_Y = dimY;
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship({pos: this.randomPosition()});
  };

  Game.NUM_ASTEROIDS = 5;

  Game.prototype.addAsteroids = function() {
    for(var i=1; i<= Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(new Asteroids.Asteroid({pos: this.randomPosition(), game: this}));
    }
  };

  Game.prototype.randomPosition = function() {
    var randX = Math.random() * this.DIM_X;
    var randY = Math.random() * this.DIM_Y;
    return [randX, randY];
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
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

  Game.prototype.checkCollisions = function() {
    var that = this;
    that.asteroids.forEach( function(ast1) {
      that.asteroids.forEach(function(ast2) {
        if(ast1 !== ast2 && ast1.isCollidedWith(ast2)) {
          that.remove(ast1);
          that.remove(ast2);
        }
      });
    });
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function(asteroid) {
    var idx = this.asteroids.indexOf(asteroid);
    this.asteroids = this.asteroids.slice(0,idx).concat(this.asteroids.slice(idx+1));
  };

  Game.prototype.allObjects = function() {
    return this.asteroids.concat(this.ship);
  };

  return Asteroids;

})(window.Asteroids || {});
