#  **Debouncing**
***
* Debouncing is removing unwanted input noise from buttons, switches or other user input. Debouncing prevents extra activations or slow functions from triggering too often. Debouncing is used in hardware switches, programs and websites.
* Debouncing is technique to restrict the calling of a time-consuming function frequently.
***
* **HTML:**
```
     <input type="text" onkeyup="optimizedFunc()">
```
***
* **Script:**
```
    let debounceFunc = (fn, limit) => {
    let time;
    return function () {
        let context = this;
        let arg = arguments;
        clearTimeout(time);
        time = setTimeout(() => {
        getdata.apply(context, arg);
        }, limit);
    };
    };

    let counter = 1;
    let getdata = () => {
         console.log("Data fetched....!", counter++);
    };

    const optimizedFunc = debounceFunc(getdata, 500);
```
* Let's take above example.
* A `debounceFunc()`is a higher-order function that returns another function, to create closure around the function parameters (fn, limit) and the timer variable.
* **`fn`**: is a function that you want to execute after some delay.
* **`limit`**: The amount of time you want to wait for function call.
* **`clearTimeout()`**:The global clearTimeout() method cancels a timeout previously established by calling `setTimeout()`.
***
# **Throttling**
* Throttling is used to call a function after every millisecond or a particular interval of time only the first click is executed immediately.
* Example, If there one function invoking when screen resize and we don't want that our function invoke every time when screen reside. But we want that our function invoke after particular interval of time then we can use Throttling.

```
    const mainFunc = () => {
     console.count("Throttled Function");
    };

    const throttle = (fn, limit) => {
    let flag = true;
    return function () {
        let context = this;
        let args = arguments;
        if (flag) {
        fn.apply(context, args);
        flag = false;
        setTimeout(() => {
            flag = true;
        }, limit);
        }
    };
    };

    const bettermainfunc = throttle(mainFunc, 1000);

    window.addEventListener("resize", bettermainfunc);

    const normalFunc = () => {
    console.count("Normal Function");
    };

    window.addEventListener("resize", normalFunc);
```
* Here throttle() function is invoked each and every time when screen reside. 
* Every time normalFunc() function is invoke when screen resize but here we have variable `flag`.Here if value of `flag`  is true then and then function `mainFunc()` will called.
* after that we set value of `flag`= false and then we have `setTimeout`. In this setTimeout value of flag will reassing to true after 1 sec, so manFunc() will call after 1 sec even if user resize screen again and again.

## Difference between debounce and throttle
**Debounce** monitors the time delay between user actions and only executes the callback function if the delay exceeds the time delay defined by the developer. So, continuous user actions can significantly delay the callback function’s execution if we use debounce.<br>
On the other hand, **throttle** uses the time delay to execute the callback function at regular intervals until the event trigger is active. So, it does not delay the callback function execution for a significant period like debounce.<br>
**Debounce** is most suitable for control events like typing or button clicks.<br>
**Throttle** is most suitable for continuous user events like resizing and scroll.