
function MovingObject(options) {
  // this.pos = options["pos"]; 
  // this.vel = options["vel"];
  // this.radius = options["radius"];
  // this.color = options["color"];
  [this.pos, this.vel, this.radius, this.color] = Object.values(options);
}

MovingObject.prototype.draw = function (ctx) {

  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    ...this.pos, this.radius, 0, 2 * Math.PI
  );

  ctx.fill();
}

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.draw(ctx)
}

module.exports = MovingObject;