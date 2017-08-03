function createCar(model_year, make, color, speed) {
  var speed = 0;
  return {
    model_year: model_year,
    make: make,
    color: color,
    // speed: speed,
    accelerate: function() {
      if (speed < 75) {
      speed += 10;
    } else {
      return;
    }
     },
    brake: function() {
      return speed - (Math.random() * (0.5 * speed))
      ; },
    getSpeed: function() {return speed},
    sentenceCar: function() {
      return this.model_year + ' ' + this.make + ' ' + this.color
    },
    speedUp: function() {
      while (speed < 70) {
      console.log(speed);
      speed = 1 + speed;
    }
  },
    slowDown: function() {
    while (speed > 0) {
      console.log(speed);
      speed = speed - 1;
    }
  },
}
}
var newCar = createCar(2015, 'Toyota', 'Grey', 0)
