const person = {
  Name: "Bhagvanji",
  age: 21,
  role: "developer",
};

const handler = {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(`Oooops..This property doesn't exist!!!!`);
    } else {
      console.log(`My name is ${obj[prop]}`);
    }
  },
  set: (obj, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      console.log(`Please enter valid age.....`);
    } else if (!obj[prop]) {
      console.log(`Oooops..This property doesn't exist!!!!`);
    } else if (prop === "Name" && value.length < 2) {
      console.log(`Your nane is too short please enter valid name.`);
    } else {
      console.log(`Person's ${prop} is ${value}`);
      obj[prop] = value;
    }
  },
};
const person1 = new Proxy(person, handler);

console.log(person1); // object
person1.Name; // My name is Bhagvanji
person1.age = 22; //Person's age is 22
console.log(person1); // object
person1.lName; // Oooops..This property doesn't exist!!!!
person1.age = "nine"; // Please enter valid age.....
person1.Name = "D"; // Your nane is too short please enter valid name.
person1.Name = "Dhara"; // Person's Name is Dhara
person1.age = 23; // Person's age is 23
person1.xyz = 10; // Oooops..This property doesn't exist!!!!
console.log(person1); // object
person1.Name; // My name is Dhara
