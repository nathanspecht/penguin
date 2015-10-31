window.Asteroids = (function(Asteroids) {

  var Util = Asteroids.Util = {};

  Util.inherits = function(ChildClass, ParentClass) {
    var Surrogate = function() {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Util.rotateVec = function(vec, dTheta) {
    return [Math.cos(dTheta) * vec[0] + Math.sin(dTheta) * vec[1],
            -1 * Math.sin(dTheta) * vec[0] + Math.cos(dTheta) * vec[1]];
  };

  Util.randomVec = function(length) {
    var angle = Math.random() * 2 * Math.PI;
    var x = Math.cos(angle) * length;
    var y = Math.sin(angle) * length;

    return [x, y];
  };

  return Asteroids;

})(window.Asteroids || {});
