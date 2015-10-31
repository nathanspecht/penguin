window.Asteroids = (function(Asteroids) {

  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    var that = this;
    var img = new Image();
    img.src = 'clouds.jpg';
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
    };
    this.bindKeyHandlers();
    window.setInterval(function () {
      ctx.drawImage(img, 0, 0);
      that.game.step();
      that.game.draw(that.ctx);
    }, 20);
  };

  GameView.prototype.bindKeyHandlers = function () {
    var that = this;

    key('w', function() {that.game.ship.power([0,-1])});
    key('a', function() {that.game.ship.power([-1,0])});

    key('d', function() {that.game.ship.power([1,0])});
    key('s', function() {that.game.ship.power([0,1])});
    key('space', function() {that.game.ship.fireBullet()});
  };

  return Asteroids;
})(window.Asteroids || {});
