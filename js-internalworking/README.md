# Internal Working of JavaScript

## Execution Context
* Execution context is an abstract concept used by the ECMAScript specification to track the runtime evaluation of code.
* When the JavaScript engine scans a script file, it makes an environment called the **Execution Context** that handles the entire transformation and execution of the code.
* ***There are two kinds of Execution Context in JavaScript:***
    * Global Execution Context (GEC)
    * Function Execution Context (FEC)

### Global Execution Context (GEC)
* Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC).
* The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.
* **Note:** For every JavaScript file, there can only be one GEC.

### Function Execution Context (FEC)
* Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function.
* Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.

#### How is the Execution Context created?
* The execution context is created in two phases:
    * 1) Creation Phase 
    * 2) Execution Phase

##### Let one example
    ``` 
       var number = 2;
       function Square (n) {
         var res = n * n;
         return res;
       }
       var newNumber = Square(3);    
    ```
1.  **Creation phase:** In this phase, the JavaScript engine creates the execution context and sets up the script's environment. It determines the values of variables and functions and sets up the scope chain for the execution context.
   * In above example memory allocate like this:
   ![Alt text](https://media.geeksforgeeks.org/wp-content/uploads/20210211222239/Capture-660x298.JPG)

2. **Execution phase:** In this phase, the JavaScript engine executes the code in the execution context. It processes any statements or expressions in the script and evaluates any function calls.
* In the Code Execution Phase, JavaScript being a single thread language again runs through the code line by line and updates the values of function and variables which are stored in the Memory Allocation Phase in the Memory Component.
* So in the code execution phase, whenever a new function is called, a new Execution Context is created. So, every time a function is invoked in the Code Component, a new Execution Context is created inside the previous global execution context

   ![Alt text](https://media.geeksforgeeks.org/wp-content/uploads/20210211222240/Capture1-660x301.JPG)

* So again, before the memory allocation is completed in the Memory Component of the new Execution Context. Then, in the Code Execution Phase of the newly created Execution Context, the global Execution Context will look like the following:

   ![Alt text](https://media.geeksforgeeks.org/wp-content/uploads/20210211222242/Capture2-660x276.JPG)

## Call stack
* To keep the track of all the contexts, including global and functional, the JavaScript engine uses a call stack.
* A call stack is also known as an 'Execution Context Stack', 'Runtime Stack', or 'Machine Stack'.
* This stack with a LIFO (Last in, First out) structure, which is used to store all the execution context created during the code execution.
* When scripts load in the browser, the Global context is created as the default context where the JS engine starts executing code and is placed at the bottom of the call stack.
* The JS engine then searches for function calls in the code. For each function call, a new FEC is created for that function and is placed on top of the currently executing Execution Context.
* As soon as the execution of all the code within the active Execution Context is done, the JS engine pops out that particular function's Execution Context of the execution stack, moves towards the next below it, and so on.
   
    ![Alt text](https://media.geeksforgeeks.org/wp-content/uploads/20210211223752/Capture5.JPG)

**Example:**
```
 function grandParent() {
  let value1 = "A";
  function parent() {
    let value2 = "B";
    function child() {
      let value3 = "C";
      console.log(`${value1} ${value2} ${value3}`);
    }
    return child();
  }
  return parent();
}
grandParent();
```
![Alt text](../../Pictures/Screenshots/Screenshot%20from%202023-03-24%2013-39-01.png)
![Alt text](../../Pictures/Screenshots/Screenshot%20from%202023-03-24%2013-39-27.png)
![Alt text](../../Pictures/Screenshots/Screenshot%20from%202023-03-24%2013-39-35.png)
![Alt text](../../Pictures/Screenshots/Screenshot%20from%202023-03-24%2013-40-33.png)
![Alt text](../../Pictures/Screenshots/Screenshot%20from%202023-03-24%2013-40-45.png)

* In above images you can see one by one execution contexts are push into call stack.