# Constructor in JavaScript    
**->A constructor is a special function that creates and initializes an object instance of a class.** 
* In JavaScript, a constructor gets called when an object is created using the new keyword.
* example
  
  ```
    function Contructor(value){
        this.value = value ;
    }
    const constructor = new Contructor()
  ```
* The purpose of a constructor is to create a new object and set values for any existing object properties.

**What Happens When A Constructor Gets Called?**
* A new empty object gets created.
* The this keyword begins to refer to the new object and it becomes the current instance object.
* The new object is then returned as the return value of the constructor.

