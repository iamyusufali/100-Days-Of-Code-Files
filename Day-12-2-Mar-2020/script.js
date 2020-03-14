/******* METHODS call(), apply() & bind() *****/

const object = {
  userName: 'Yusuf',
  userId: 456,
  userLevel: 10,
  intro() {
    return `I am ${this.userName} & my level is ${this.userLevel}`;
  }
}

const newObject = {
  userName: 'Yusuf',
  userId: 456,
  userLevel: 10
}

// call
object.intro.call(newObject);
object.getScore.call(newObject, 123, 256);

// apply
object.getScore.apply(newObject, [123, 256]);

// bind
const bindedIntro = object.intro.bind(newObject);
const bindedGetScore = object.getScore.bind(newObject);




/******* CONSTRUCTOR FUNCTIONS  & FACTORY FUNCTIONS *****/

function User(user, id, level) {
  this.userName = user;
  this.userId = id;
  this.userLevel = level;
}

User.prototype.intoduce = function () {
  return `I am ${this.userName} & my level is ${this.userLevel}`;
}

const userOne = new User('Yusuf', 786, 10);
const userTwo = new User('Brad', 356, 15);


// Factory function
function user(userName, id, level) {
  return {
    userName: userName,
    userId: id,
    userLevel: level,
    introduce() {
      return `I am ${this.userName} & my level is ${this.userLevel}`
    }
  }
}

const userOne = user('Ali', 786, 10);




/******* CLASSES and INHERITANCE *****/

// Super or Base class
class Vehicle {
  constructor(brand, model, price) {
    this.type = null;
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  start() {
    console.log(`Starting your ${this.type}`);
  }
}

// classes Inheriting from super or base class

// Example: 1
class Car extends Vehicle {
  constructor(brand, model, price, origin) {
    super(brand, model, price);
    this.type = 'Car';
    this.origin = origin;
  }
}

const mercedes = new Car('Mercedes', 'S-class', '$950k', 'Germany');


// Example: 2
class Bus extends Vehicle {
  constructor(brand, model, price, system) {
    super(brand, model, price);
    this.type = 'Bus';
    this.system = system;
  }
}

const volvo = new Bus('Volvo', 'E-350', '$180k', 'Private');
