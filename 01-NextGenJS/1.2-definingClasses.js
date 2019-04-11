/**
 * @topic - Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.
 */

/**
 * @section - Class declarations.
 *
 * @description - One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).
 */
class Rectangle0 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

const box = new Rectangle0(10, 20);
/**
 * @note - An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not.
 */

/**
 * @section - Class expressions.
 *
 * @description - A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body.
 */

// unnamed
let Rectangle1 = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

console.log(Rectangle1.name); // OUTPUT: "Rectangle1"

// named
let rec2 = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(rec2.name); // OUTPUT: "Rectangle2"

/**
 * @section - Class body and method definitions.
 *
 * @description -The body of a class is the part that is in curly brackets {}. This is where you define class members, such as methods or constructor.
 *
 * 1. Strict mode - The body of a class is executed in strict mode, i.e., code written here is subject to stricter syntax for increased performance, some otherwise silent errors will be thrown, and certain keywords are reserved for future versions of ECMAScript.
 * 2. Constructor - The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method. A constructor can use the super keyword to call the constructor of the super class.
 */

// Prototype methods - Example below.
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // getter
  get area() {
    return this.calcArea();
  }

  // method - It will be attached to prototype object automatically.
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // OUTPUT: 100

// Static methods - Example below.
// The static keyword defines a static method for a class. Static methods are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application.
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(point1, point2) {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(Point.distance(p1, p2));
