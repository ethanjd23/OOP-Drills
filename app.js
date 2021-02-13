// Object Literals
let person1 = {
    name: "Mandy",
    sayHello: () => console.log(`Hello! My name is ${person1.name}`)
};
let person2 = {
    name: "Bob",
    sayHello: () => console.log(`Hello! My name is ${person2.name}`)
};
let person3 = {
    name: "Jake",
    sayHello: () => console.log(`Hello! My name is ${person3.name}`)
};
let person4 = {
    name: "John",
    sayHello: () => console.log(`Hello! My name is ${person4.name}`)
};
let person5 = {
    name: "Carol",
    sayHello: () => console.log(`Hello! My name is ${person5.name}`)
};
// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

// ES5 Pseudo Classes
function Person (name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}
Person.prototype.sayHello = function(){
    console.log(`Hello! My name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}.`);
};

let p1 = new Person("Mandy", "Birmingham", 53);
let p2 = new Person("Abbie", "McCalla", 21);
let p3 = new Person("Emily", "Helena", 22);
let p4 = new Person("Brian", "Chattanooga", 24);
let p5 = new Person("Timea", "Atlanta", 22);

// p1.sayHello();
// p2.sayHello();
// p3.sayHello();
// p4.sayHello();
// p5.sayHello();

// ES6 Classes
class Human {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello! My name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}.`);
    }
};

let human1 = new Human("Mandy", "Birmingham", 53);
let human2 = new Human("Abbie", "McCalla", 21);
let human3 = new Human("Emily", "Helena", 22);
let human4 = new Human("Brian", "Chattanooga", 24);
let human5 = new Human("Timea", "Atlanta", 22);

// human1.sayHello();
// human2.sayHello();
// human3.sayHello();
// human4.sayHello();
// human5.sayHello();