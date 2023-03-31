# Synchronous Programming vs Asynchronous Programming
***
## **Synchronous Programming** 
* JavaScript is monothread at its core: when one block of code is being executed, no other block of code will be executed.<br>
  -> For Example look at this code:
  ```
    let greet = "Hello World.";
    let sum = 1 + 10;
    console.log("This is Synchronous Programming ")
    console.log(greetings);
    console.log(sum);
  ```
  **Output:**
  ```
    This is Synchronous Programming 
    Hello World.
    11
  ```
  We can see that code execute line by line and one line at a time.
***
## Asynchronous Programming
* Asynchronous programming is different. To make it simple, when JavaScript identifies asynchronous tasks, it'll simply continue the execution of the code, while waiting for these asynchronous tasks to be completed.<br>
  -> For Example:
  ```
    console.log("Hello");
    setTimeout(() => {
         console.log("This is Asynchronous Programming")
    }, 3000);
    console.log("world");
  ```
  **Output:**
  ```
    Hello
    world
    This is Asynchronous Programming
  ```
  * Here we can see `world` printed before the `This is Asynchronous Programming` because of Asynchronous Programming.
  * To make it simple, while you are waiting for someone else to do stuff for you, you can do other tasks or ask others to do more stuff for you.<br>
  ***we can do Asynchronous Programming with :***
    1. Callback
    2. Promises
    3. async/await 
***
**1. Callback**
* A callback is a function passed as an argument when calling a function that will start executing a task in the background.
And when this background task is done running, it calls the callback function to let you know about the changes.<br>
**Example:**
```
    function high(callback) {
         console.log("Start");
         setTimeout(() => callback(), 3000);
         console.log("End");
    } 
    function callback() {
        console.log("this is callback function");
    }
    high(callback);
```
**Output:**
```
    Start
    End
    this is callback function
```
***
**Problems with Callbacks**
1. **Callback Hell**
* Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code. <br>
  **Example**
```
 firstFunction(para,function(){
    secoundFunction(para,function(){
        thirdFunction(para,function(){
            forthFunction(para,function(){
            //do something
            });
        });
    });
 });
```
2. **Inversion of control issues** 
* Inversion of control is way of having code under your control in one part of the program, then handing control over to a callback in another part of the program.
* When we pass a `function a()` as argument in the other `function b()` means give the control of `function a()` to the `function b()`. So now we don't have any control on function a().

=> To solve those issues of callback function Promises come i picture.
***
**2.Promise**
* Promises are used to handle asynchronous operations in JavaScript and they simply represent the fulfillment or the failure of an asynchronous operation.
* Promises have three states :
1. **pending**: the initial state of the promise
2. **fulfilled**: the operation is a success
3. **rejected**: the operation is a failure

* general syntax to create a Promise in JavaScript.
```
    let promise = new Promise(function(resolve, reject) {
            //some code
    });
```
* `resolve` and `reject` are functions executed respectively when the operation is a `success` and when the operation is a `failure`.

**Example:**
```
    const count = true;

    let countValue = new Promise(function (resolve, reject) {
        if (count) {
            resolve("There is a count value.");
        } else {
            reject("There is no count value");
        }
    });
countValue
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });
```
**Here :** <br>
**then():** takes a callback for success case and executes when the promise is resolved.<br> 
**catch():** takes a callback, for failure and executes if the promise is rejected.                          
**finally():** takes a callback and always returns when the premise is settled. It's pretty useful when you want to perform some cleanups.
***
**3.Async/await**
* There’s a special syntax to work with promises in a more comfortable  called “async/await”. It’s easy to understand and use.
1. **Async**
   * 