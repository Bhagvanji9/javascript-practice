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
![Screenshot from 2023-03-24 13-39-01](https://user-images.githubusercontent.com/124878578/227472090-d1e2130e-18fd-4ae3-9bd0-3b8d8905a721.png)
![Screenshot from 2023-03-24 13-39-27](https://user-images.githubusercontent.com/124878578/227472140-8aa1a3db-f276-4da3-bacf-142ea8dfc654.png)
![Screenshot from 2023-03-24 13-39-35](https://user-images.githubusercontent.com/124878578/227472181-7cac7b26-eeee-4150-b323-38c45828ba55.png)
![Screenshot from 2023-03-24 13-40-33](https://user-images.githubusercontent.com/124878578/227473227-330d3560-0256-490e-bd5c-7a743fb02a9e.png)
![Screenshot from 2023-03-24 13-40-45](https://user-images.githubusercontent.com/124878578/227473586-1083aa41-53b1-4792-8c37-e110f948d70a.png)

* In above images you can see one by one execution contexts are push into call stack.

## Event loop
* **What does it actually mean when we say JavaScript is single threaded?**
* It means that the main thread where JavaScript code is run, runs in one line at a time manner and there is no possibility of running code in parallel.
![Alt text](https://media.geeksforgeeks.org/wp-content/uploads/20201130202346/singlethreadedjavascript.png)
*** 
![Alt text](https://cdn.datainfinities.com/images/10-event-loop.png)
**In above diagram you can see those 4 topics.**
1. Web APIs
2. Callback Queue
3. Microtask Queue
4. Event loops

### Web APIs
* Web APIs or Browser APIs are built into your web browser and are able to expose data from the browser and surrounding computer environment and do useful complex things with it. setTimeout(), DOM APIs, fetch(), local storage, location, and console are some examples for Web APIs. They are not part of the JavaScript language, but they are built on top of the core JavaScript language, providing you with extra superpowers to use in your JavaScript code. 

### Callback Queue 
* Callback Queue or Macrotask Queue is where the callback function gets pushed to, and waits for the execution. Let us dive deep into the callback queue with an example.
```
  function Start() {
      console.log("Start");
  } ;
  Start();
  setTimeout(abc, 3000);
      function abc() {
        console.log("ABC");
      }
  
  function End() {
      console.log("End");  } ;
  End();
```
* Here, we have a callback function abc(), that is to be executed after 5 seconds of time. After 5 seconds, the callback function abc() does not get directly pushed into the call stack for execution instead it will be pushed into the callback queue. The call stack may be busy with the execution of some other functions here ( Start() & End()). The callback queue keeps all callback functions in a queue that are ready for execution and waits until the call stack gets free. When the call stack is free, the event loop pops the callback function from callback queue and pushes it to the call stack.
* The callback queue was working under the First In First Out(FIFO) principle.

### Microtask Queue
* Microtask Queue is similar to the Callback Queue(macrotask queue), but microtask queue has a higher priority than the callback queue. All the callback functions coming through promises and mutation observer will go inside the microtask queue. 
* For example, in the case of fetch(), it returns a promise and, this callback function will get pushed into the microtask queue. Promise handling always has a higher priority than setTimeout or setInterval. So the event loop gives higher priority to the microtask queue and then looks into callback queue.

### Event loops
* The event loop keeps running continuously and monitoring the call stack and callback queue. When the call stack gets empty and the event loop sees some callback functions waiting in the microtask queue or callback queue(macrotask queue) for execution. Then, the event loop pops the callback functions one by one from the microtask queue and callback queue and gets pushed into the call stack for execution. The event loop acts like a gatekeeper for the callback queue.
* The microtask queue has higher priority than the callback queue(macrotask queue).





