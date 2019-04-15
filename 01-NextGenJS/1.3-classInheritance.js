/**
 * @topic - Class Inheritance
 *
 * 1. The extends keyword is used in class declarations or class expressions to create a class as a child of another class.
 */

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name, " makes a noise.");
  }
}

class AnyAnimal extends Animal {}
var aa = new AnyAnimal("Siyar"); // AnyAnimal {name: "Siyar"}

// Sub-class can overwrite the implementation of inherited methods/props.
class Cat extends Animal {
  speak() {
    console.log(this.name, " says meow.");
  }
}

const c1 = new Cat("Kitty");
c1.speak(); // OUTPUT: Kitty says meow.

// If there is a constructor present in the subclass, it needs to first call super() before using "this".
class Lion extends Animal {
  constructor(name) {
    this.name = name; // It will throw error: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super(name); // call the super class constructor and pass in the name parameter
    this.food = "Meat"; // This is possible.
  }

  speak() {
    console.log(this.name + " roars.");
  }
}

var l1 = new Lion("Sher Singh");
l1.speak(); // OUTPUT: Sher Singh roars.

/**
 * @description - One may also extend traditional function-based "classes":
 */
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + " makes a noise.");
};

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks.");
  }
}

let d = new Dog("Mitzie");
d.speak(); // Mitzie barks.

/**
 * @note - Note that classes cannot extend regular (non-constructible) objects. If you want to inherit from a regular object, you can instead use Object.setPrototypeOf()
 */
const Animal = {
  speak() {
    console.log(this.name + " makes a noise.");
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

let d = new Dog("Mitzie");
d.speak(); // Uncaught TypeError: d.speak is not a function

// If you do not do this you will get a TypeError when you invoke speak. e.g. above.
Object.setPrototypeOf(Dog.prototype, Animal);

let d2 = new Dog("Kallu");
d2.speak();
