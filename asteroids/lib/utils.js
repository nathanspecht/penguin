window.Asteroids = (function(Asteroids) {

  var Util = Asteroids.Util = {};

  Util.inherits = function(ChildClass, ParentClass) {
    var Surrogate = function() {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Util.randomVec = function(length) {
    var angle = Math.random() * 2 * Math.PI;
    var x = Math.cos(angle) * length;
    var y = Math.sin(angle) * length;

    return [x, y];
  };

  return Asteroids;

})(window.Asteroids || {});
