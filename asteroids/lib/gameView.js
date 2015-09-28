window.Asteroids = (function(Asteroids) {

  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    var that = this;
    window.setInterval(function () {
      that.game.step();
      that.game.draw(that.ctx);
    }, 20);
  };

  return Asteroids;
})(window.Asteroids || {});
