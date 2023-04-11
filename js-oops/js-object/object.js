const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
person.bio();
person.introduceSelf();
console.log(person.name);
console.log(person.name[0]);
console.log(person.age);

// An object property can itself be an object or array
const person1 = {
  name: ["Bob", "Smith"],
};

const person2 = {
  fullname: {
    first: Bob,
    last: smith,
  },
};
// To access these items like this
person2.fullname.first;
person2.fullname.last;

const key = "name";
const getKey = () => "name";
const Obj = { name: "Michel" };

Obj["name"]; // returns "Michel"
Obj[key]; // evaluates to Obj["name"], and returns "Michel"
Obj[getKey()]; // evaluates to Obj["name"], and returns "Michel"

const user = {
  fName: "bhagvanji",
  getName: function () {
    console.log(this.fName);
  },
};
console.log(user.getName());

// example of Comparing objects
const fName1 = {
  first: "bhagvanji",
};
const fName2 = {
  first: "bhagvanji",
};
const fName3 = fName1;
console.log(fName1 == fName2);
console.log(fName1 == fName3);

// object using class
class User {
  constructor(fname, city) {
    this.fname = fname;
    this.city = city;
  }
  greet() {
    console.log("Namaste!, I'm", this.fname);
  }
  native() {
    console.log("I'm from", this.city);
  }
}
let user1 = new User("bhagvanji", "rajkot");
let user2 = new User("dhara", "rajkot");
user1.greet();
user1.native();
user2.greet();
user2.native();

// Object.create() Method
let bioData = {
  getName() {
    console.log("Hello I'm " + this.fName);
    return this;
  },
  getAge() {
    console.log("I'm " + this.age + " years old");
    return this;
  },
  getData(fName, age) {
    (this.fName = fName), (this.age = age);
    return this;
  },
};

let madhvi = Object.create(bioData);
madhvi.fName = "Madhvi";
madhvi.age = 19;
console.log(madhvi);
madhvi.getName();
madhvi.getAge();

let jatin = Object.create(bioData, {
  fName: { value: "jatin" },
  age: { value: 20 },
});
console.log(jatin);
jatin.getName();

let piyush = Object.create(bioData);
piyush.getData("Piyush", 14);
console.log(piyush);
piyush.getAge();

let dhara = Object.create(bioData);
dhara.getData("Dhara", 22).getName().getAge();
console.log(dhara);
