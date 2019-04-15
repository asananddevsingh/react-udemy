/**
 * @topic - Super Keyword
 *
 * 1. The super keyword is used to call corresponding methods of super class. This is one advantage over prototype-based inheritance.
 */

class Animal {
  constructor(name, color, legs) {
    // Properties are always attached to the constructed object.
    this.name = name;
    this.color = color;
    this.legs = legs;
    // It will be added to the constructed object.
    this.details = () => {
      console.log(`${this.name} has ${this.color} color & ${this.legs} legs`);
    };
  }

  // Methods are always attached to the prototype of the object.
  speak() {
    console.log(this.name, ": Makes noise.");
  }

  /**
   * @note - weight is not any property of Animmal, but when Dog will call it, it will get the dog's object as invocation context.
   */
  getWeight() {
    console.log(`Weight of ${this.name} is ${this.weight} Kg.`);
  }
}

var a1 = new Animal("Shera", "Brown", 4); // Animal {name: "Shera", color: "Brown", legs: 4}
a1.speak(); // Shera : Makes noise.

class Dog extends Animal {
  // dogName will also be created as a property.
  dogName = "Kallu";
  constructor(name, color, legs, weight) {
    super(name, color, legs);
    this.name = this.dogName;
    this.weight = weight;
  }

  // It will be added to the prototype of dog object.
  speak() {
    console.log(this.name, ": Barks");
  }

  // It will be added to the prototype of dog object.
  talk() {
    console.log("Color of Dog is: ", super.color); // Here we can't access to the parent's properties (attached with this) using "super" keyword.
    this.speak();
    super.speak();
  }

  // It will be added to the prototype of dog object.
  details() {
    console.log(`Weight of ${this.name} is ${this.weight} Kg.`);
  }
}

var d1 = new Dog("Tommy", "Black", 4, 40); // Dog {name: "Kallu", color: "Black", legs: 4, details: ƒ, dogName: "Kallu", …}

/**
 * @note - It will invoke the parent class method because that will be present directly into the object and get preference over the Gog's prototype method.
 */
d1.details(); // Kallu has Black color & 4 legs
/**
 * @note - Though the Animal is not haivng the weight property, but while calling it from the Dog object. It will take "d1" as the invocation context for it.
 */
d1.getWeight(); // Weight of Kallu is 40 Kg.

d1.talk();
// OUTPUT: Color of Dog is: undefined
// OUTPUT: Kallu : Barks
// OUTPUT: Kallu : Makes noise.
