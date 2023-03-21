function Person(fName, age) {
  this.fName = fName;
  this.age = age;
  console.log(`I am ${this.fName} and i'm ${this.age} years old.`);
}

const bhagvanji = new Person("bhagvanji", 22);
const dhara = new Person("dhara", 23);

javascript.info Tasks

// Task 1
// Is it possible to create functions A and B so that new A() == new B()?
const C = { value: "a" };
function A() {
  return C;
}

function B() {
  return C;
}

const a = new A();
const b = new B();

console.log(a);
console.log(b);

alert(new A() === new B());

// Task2
function Calculator() {
  this.read = function () {
    this.c = +prompt("enter c");
    this.d = +prompt("enter d");
  };
  this.sum = function () {
    return this.c + this.d;
  };
  this.mul = function () {
    return this.c * this.d;
  };
}
const calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

//Task 3
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    for (i = 0; i < 10; i++) {
      this.value += +prompt("enter number");
    }
  };
}

let accumulator = new Accumulator(0);

accumulator.read();

console.log("🚀 ~ file: constructor.js:58 ~ accumulator:", accumulator);
alert(accumulator.value);

