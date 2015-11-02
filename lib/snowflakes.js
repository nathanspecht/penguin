window.Asteroids = (function(Asteroids) {
  var Snowflakes = Asteroids.Snowflakes = function(ctx, width, height) {

    this.MAXPARTICLES = 25;
    this.WIDTH = width;
    this.HEIGHT = height;
    this.CTX = ctx;

    this.angle = 0;
    this.particles = [];

    for(var i = 0; i < this.MAXPARTICLES; i++)
    {
      this.particles.push({
        x: Math.random() * this.WIDTH, //x-coordinate
        y: Math.random() * this.HEIGHT, //y-coordinate
        r: Math.random() * 4 + 1, //radius
        d: Math.random() * this.MAXPARTICLES //density
      });
    }
  };

  Snowflakes.prototype.draw = function () {
    this.CTX.clearRect(0, 0, this.WIDTH, this.HEIGHT);

		this.CTX.fillStyle = "rgba(255, 255, 255, 0.8)";
		this.CTX.beginPath();
		for(var i = 0; i < this.MAXPARTICLES; i++) {
			var p = this.particles[i];
			this.CTX.moveTo(p.x, p.y);
			this.CTX.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
		}
		this.CTX.fill();
		this.update();
  };

  Snowflakes.prototype.update = function () {
    {
		this.angle += 0.01;
		for (var i = 0; i < this.MAXPARTICLES; i++) {
			var p = this.particles[i];
			p.y += Math.cos(this.angle + p.d) + 1 + p.r/2;
			p.x += Math.sin(this.angle) * 2;

			if (p.x > this.WIDTH + 5 || p.x < -5 || p.y > this.HEIGHT) {
				if(i % 3 > 0) {
					this.particles[i] = {x: Math.random()*this.WIDTH, y: -10, r: p.r, d: p.d};
				} else {
					if(Math.sin(this.angle) > 0) {
						this.particles[i] = {x: -5, y: Math.random() * this.HEIGHT, r: p.r, d: p.d};
					} else {
						this.particles[i] = {x: this.WIDTH + 5, y: Math.random() * this.HEIGHT, r: p.r, d: p.d};
          }
        }
      }
    }
  }
  };

  return Asteroids;
})(window.Asteroids || {});
