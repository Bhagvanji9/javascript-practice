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
