// simple function
function myfunc(a, b) {
    return a + b;
}
console.log(myfunc(2, 3))

// use Object as Parameters of function
// we can change value of an objects using function
const cars = {
    name: "abc",
    company: "xyz",
    price: "100000",

}
console.log(cars.name); // output abc

function Object(cars) {
    cars.name = "ABC";
}
Object(cars);
console.log(cars.name); //output ABC

// we ca also use an array as parameter and change array elements
let arr = [4,6,5,8];
console.log(arr[0]); //output 4


function myFunc(theArr) {
    theArr[0] = 3;
  } 
  myFunc(arr);
  console.log(arr[0]); // output 30

function fcn(n) {

    const age = 5-n
    return age
  };

  // The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // Returns 60

// A nested function example
function getScore() {
// The following variables are defined in the function scope.
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // Returns "Chamakh scored 5"
