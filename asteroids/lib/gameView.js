window.Asteroids = (function(Asteroids) {

  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    var img = new Image();
    img.src = 'bluebackground.jpg';
    img.onload = function () {
      this.ctx.drawImage(img, 0, 0);
    }.bind(this);

    this.bindKeyHandlers();
    this.snowflakes = new Asteroids.Snowflakes(this.ctx, this.game.DIM_X, this.game.DIM_Y);
    this.game.showLevel();
    window.setInterval(function () {
      this.ctx.drawImage(img, 0, 0);
      this.game.step();
      this.snowflakes.draw();
      this.game.draw(this.ctx);
    }.bind(this), 20);
  };

  GameView.prototype.bindKeyHandlers = function () {
    var that = this;

    key('w', function() {that.game.ship.power([0,-1]);});
    key('a', function() {that.game.ship.power([-1,0]);});

    key('d', function() {that.game.ship.power([1,0]);});
    key('s', function() {that.game.ship.power([0,1]);});
    key('space', function() {that.game.ship.fireBullet();});
  };

  return Asteroids;
})(window.Asteroids || {});
