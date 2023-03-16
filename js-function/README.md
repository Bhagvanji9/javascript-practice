# Function
* Functions are one of the fundamental building blocks in JavaScript. 
* A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. 

#### Function declarations
->A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

  * The name of the function.
  * A list of parameters to the function, enclosed in parentheses and separated by commas.
  * The JavaScript statements that define the function, enclosed in curly brackets, { /* … */ }.
  
-> We  can pass Object or Array as parameter of function.
   * When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function.
   * When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function.
   
#### JavaScript Scope

##### Global scope
* Variables declared Globally (outside any function) have Global Scope.
* Global variables can be accessed from anywhere in a JavaScript program.

##### Function Scope
* JavaScript has function scope: Each function creates a new scope.
* Variables defined inside a function are not accessible (visible) from outside the function.

##### Block Scope
* Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
* ES6 introduced two important new JavaScript keywords: let and const.
* These two keywords provide Block Scope in JavaScript.
* Variables declared inside a { } block cannot be accessed from outside the block.
