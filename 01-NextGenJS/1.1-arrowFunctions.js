/**
 * @tutorial Arrow-Function
 *
 * 1. Arrow functions do not have their own "this" value.
 * 2. The value of "this" inside an arrow function is always inherited from the enclosing scope.
 * 3. An arrow function expression is a syntactically compact alternative to a regular function expression,
 *      although without its own bindings to the this, arguments, super, or new.target keywords. (means we can't do something = new ArrowFunction()).
 * 4. Arrow functions do not have their own this value. The value of this inside an arrow function is always inherited from the enclosing scope.
 *
 * The new.target property lets you detect whether a function or constructor was called using the new operator.
 *
 *
 */

//  ================================================ //

function classicalArguments() {
  console.log("Classical Arguments :", arguments);
}
classicalArguments(1, 2, 3); // OUTPUT: [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

const arrowArguments = () => {
  console.log("Arrow Arguments :", arguments);
};
arrowArguments(1, 2, 3); // OUTPUT: Uncaught ReferenceError: arguments is not defined

//  ================================================ //

function Constructor1() {
  this.id = 10;
  this.print = function() {
    const array = [{ id: 100, name: "Anand" }];
    // Classical Function.
    array.forEach(function() {
      console.log("[Clasical] -> This: ", this); //OUTPUT: Its context is window object.
    });
    // Arrow Function.
    array.forEach(() => {
      console.log("[Arrow] => This: ", this); //OUTPUT: It context is Constructor object.
    });
  };
}

var c1 = new Constructor1();
c1.print();

//  ================================================ //

function Constructor3() {
  this.id = 10;
  this.inner = {
    name: "Inner",
    print: function() {
      console.log("Inner this: ", this);
    }
  };
}
var c5 = new Constructor3();
c5.inner.print(); // Inner this:  {name: "Inner", print: ƒ}

//  ================================================ //

function Constructor4() {
  this.id = 10;
  this.inner = {
    name: "Inner",
    print: () => {
      console.log("Inner this: ", this);
    }
  };
}
var c5 = new Constructor3();
c5.inner.print(); // Inner this:  Constructor3 {id: 10, inner: {…}}

//  ================================================ //

function Constructor5() {
  console.log("New Target:", new.target);
  this.id = 10;
}

Constructor5(); // New Target: undefined;
var n1 = new Constructor5(); // It will return the entire "Constructor5" function.

//  ================================================ //

/* It will throw: Uncaught SyntaxError: Malformed arrow function parameter list
  Constructor6() => {
      console.log("New Target:", new.target);  
  }
  */

//  ================================================ //

/* It will throw: Uncaught SyntaxError: new.target expression is not allowed here
  const n1 = () => {
    console.log("New Target:", new.target);
  };
  */

//  ================================================ //

class Parent {
  constructor() {
    // implicit (from the `super` call)
    //      new.target = Child;
    // implicit (because `Parent` doesn't extend anything):
    //      this = Object.create(new.target.prototype);
    console.log(new.target); // Child!
  }
}
class Child extends Parent {
  constructor() {
    // `this` is uninitialised (and would throw if accessed)
    // implicit (from the `new` call):
    //      new.target = Child
    super(); // this = Reflect.construct(Parent, [], new.target);
    console.log(this);
  }
}
new Child();

//  ================================================ //

class Animal {
  constructor() {
    this.name = "Parent";
    this.age = 40;
  }
  getName() {
    console.log("Parent getName this: ", this);
    return this.name;
  }
  /**
   * @note - It will not have its binding to the "super" keyword.
   *
   * While calling this method, It will throw Uncaught TypeError: (intermediate value).getArrowName is not a function
   */
  getArrowName = () => {
    console.log("Parent getArrowName this: ", this);
    return this.name;
  };
}

var a1 = new Animal();
a1; //OUTPUT: Animal {getArrowName: ƒ, getArrowAge: ƒ, name: "Parent", age: 40}
class Dog extends Animal {
  getParentName() {
    console.log("Child getParentName this: ", this);
    return super.getName();
  }
  getParentArrowName() {
    console.log("Child getParentArrowName this: ", this);
    return super.getArrowName();
  }
}

var d1 = new Dog();
d1; // OUTPUT: Dog {getArrowName: ƒ, getArrowAge: ƒ, name: "Parent", age: 40, getParentArrowName: ƒ}

d1.getParentName(); // OUTPUT:
// Child getParentName this:  Dog {getArrowName: ƒ, getArrowAge: ƒ, name: "Parent", age: 40, getParentArrowName: ƒ}
// Parent getName this:  Dog {getArrowName: ƒ, getArrowAge: ƒ, name: "Parent", age: 40, getParentArrowName: ƒ}

d1.getParentArrowName(); // OUTPUT: Uncaught TypeError: (intermediate value).getArrowName is not a function
