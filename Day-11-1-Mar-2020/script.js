/******** Constructor Functions ********/

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}

let circle = new Circle(5);

// Creating prototype
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log(this.radius);
  console.log('drawing');
}

let smallCircle = new Circle(2);
let mediumCircle = new Circle(2);
let largeCircle = new Circle(20);

console.log(smallCircle.draw());
console.log(mediumCircle.draw());
console.log(largeCircle.draw());


// Extending prototype (We can create our own customized methods on built-in objects using prototype property)
String.prototype.introduce = function (name, place) {
  return `Hello myself ${name} & I'm from ${place}`;
}


Function call() method 

/*
The call() allows for a function/method belonging to one object to be assigned and called for a different object.
 */

let object = {
  carId: 123,
  getId() {
    return this.carId;
  }
}

let newCar = { carId: 456 };

object.getId.call(newCar); // 456

// Function apply() method

/*
Similar to the call(), difference is that we can pass arguments
 */

let object = {
  carId: 123,
  getId(prefix) {
    return prefix + this.carId;
  }
}

let newCar = { carId: 456 };

object.getId.apply(newCar, ['ID: ']); // ID: 456


// Function bind() method

/*
Makes a copy of the function and inherits it to the passed object
 */

let object = {
  carId: 123,
  getId() {
    return this.carId;
  }
}

let newCar = { carId: 456 };

let newFunction = object.getId.bind(newCar);

console.log(newFunction()); // 456