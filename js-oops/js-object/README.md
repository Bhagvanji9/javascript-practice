# Object
-> An object is a collection of related data and/or functionality. These usually consist of several variables and functions (which are called properties and methods when they are inside objects).
##### Object Syntax
```
   object={
    property1:value1,
    property2:value2,
    .....
    propertyN:valueN
}
```
#### Dot notation
* You accessed the object's properties and methods using dot notation. 
* The object name acts as the namespace — it must be entered first to access anything inside the object.
  ```
    object.key;
    object.function();
  ```  
##### Objects as object properties
* An object property can itself be an object. 
  
#### Bracket notation
* Bracket notation provides an alternative way to access object properties.
  ```
  person.age;
  person.name.first;

  You can instead use brackets:

  person["age"];
   person["name"]["first"];
  ```

* Dot notation is faster to write and clearer to read.
* Square bracket notation allows access to properties containing special characters and selection of properties using variables

* If object contains same property name and value then we can use property value shorthand.
 ```
    const fruitName = "mango";
    const fruit1 = {   
         fruitName: "fruitName"
    }
    const fruit2 = {   
         fruitName, //same as fruitName: "fruitName"
    }
```
#### Defining methods
* Methods are defined the way normal functions are defined, except that they have to be assigned as the property of an object.
* In other words, Methods are Functions in-side object.

#### terate object* Object is iterate using "for..in" loop.
```
   for(key in objectName) { 
       console.log(key);
  }
```
#### Comparing objects
* In JavaScript, objects are a reference type. Two distinct objects are never equal, even if they have the same properties. Only comparing the same object reference with itself yields true. You can see examle in [object.js](./object.js).

