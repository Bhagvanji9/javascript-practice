### JavaScript Variable
* Global Variables − A global variable has global scope which means it can be defined anywhere in your JavaScript code.
* Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.

##### 4 Ways to Declare a JavaScript Variable:
* Using var
* Using let
* Using const
* Using nothing   

##### var
* The scope of a var variable is functional scope
* It can be updated and re-declared into the scope.
* It can be declared without initialization.	
* It can be accessed without initialization as its default value is “undefined”.

##### let
* The scope of a let variable is block scope.	
* It can be updated but cannot be re-declared into the scope.	
* It can be declared without initialization.	
* It cannot be accessed without initialization otherwise it will give ‘referenceError’.	

##### const
* The scope of a const variable is block scope.
* It cannot be updated or re-declared into the scope.
* It cannot be declared without initialization.
* It cannot be accessed without initialization, as it cannot be declared without initialization.

#### Variable Hoisting
* variables initialized with the ```var``` keyword are stored in the memory of the current Execution Context's Variable object as a property, and initialized with the value ```undefined```. This means, unlike functions, trying to access the value of the variable before it is defined will result in ```undefined```.
* Also, variable hoisting does not work for variables initialized with the ```let``` or ```const``` keyword. Trying to access a variable ahead of declaration and use the ```let``` and ``const`` keywords to declare it later will result in a `ReferenceError`.
            
