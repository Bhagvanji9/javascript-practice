# Closure
* A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, the function defined in the closure ‘remembers’ the environment in which it was created.
* **Free variable:** A free variable is simply a variable which is not declared inside a given function, but is used inside it. 
* **[Example of closure](./closure.js)**
* Before the start closure we have to knowledge about execution context and lexical environment.
  
**The lexical environment contains two components:**
1. Environment record: It is the actual place where the variable and function declarations are stored.
2. Reference to the outer environment: It means it has access to its outer (parent) lexical environment.

* You can see those topics here **[(execution context)](./../../js-internalworking/README.md)** 

### Scope Chain
* we know that an environment has access to its parent’s environment, and its parent environment has access to its parent environment, and so on. This set of identifiers that each environment has access to is called “scope.” We can nest scopes into a hierarchical chain of environments known as the “scope chain”.
```
   For example:
       function grandParent() {
           let value1 = A;
           function parent() {
               let value2 = B;
               function child() {
                  let value3 = C;
                  console.log(`${value1} ${value2} ${value3}`);
                }
             return child();
            }
         return parent();
        }
        grandParent();
```
![Screenshot from 2023-03-24 11-20-13](https://user-images.githubusercontent.com/124878578/227438696-63d32ac6-78af-4879-b3f0-71754a436637.png)
* In above example you can see there are three functions grandParent() ,parent() and child().
* Here we can see that in function ```child()```, there only one variable value3. but this function required value1 $ value2 also,therefor it look into it's parent which is ```parent()``` here it can find the value2 but still value1 is missing.
* Now function child() look into it's parent's parent which in ```grandParet()``` and there it can access value1 and then print ```(`${value1} ${value2} ${value3}`)```
  into console.
* Here, this hierarchy is known as scope chain.
