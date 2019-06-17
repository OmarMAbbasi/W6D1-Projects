Function.prototype.inherits = function(Child) {
  function Surrogate() { }
  Surrogate.prototype = this.prototype;
  Child.prototype = new Surrogate();
  Child.prototype.constructor = Child;
}

function MovingObject(x) {
  this.x = x;
 }

function Ship() { 
  MovingObject.call(this, "some string")
}
Ship.inherits(MovingObject);

function Asteroid() { 
  MovingObject.call(this, "some string")
}
Asteroid.inherits(MovingObject);

const asteroidStuff = new Asteroid();
console.log(asteroidStuff.x)

Ship.prototype = Object.create(MovingObject.prototype);
Ship.prototype.constructor = Ship;

const shipStuff = new Ship();
console.log(`${shipStuff.x}: stuff`)
