# Prototypes
* The prototype is an object that is associated with every functions and objects by default in JavaScript, 
* Prototypes are the mechanism by which JavaScript objects inherit methods from one another.
* Every object which is created using literal syntax or constructor syntax with the new keyword, includes `__proto__` property that points to prototype object of a function that created this object.
* **see this image:**
  ![Alt text](https://www.tutorialsteacher.com/Content/images/oo-js/prototype-2.png)
```
    function student(name, age) {
        this.name = name;
        this.age = age;
    }
    let student1 = new student("bhagvanji", 21);
    console.log(student1);
    console.log(student.prototype);//OBJECT
    console.log(student1.prototype);//undefined
    console.log(student1.__proto__);//object
    console.log(student.prototype === student1.__proto__);//true
```
* The property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice all browsers use __proto__. The standard way to access an object's prototype is the Object.getPrototypeOf() method. 
```
    const Person = function(personName) {
        this.personName = personName;
        this.talk = function() {
            console.log("I'm talking");
        }
    }
    Person.prototype.eat = function() {
        console.log("I'm eating");
    }
    const p1 = new Person();
    const p2 = new Person();
```
* In above example `talk()` method is attached to this variable so when we create object using Constructor function it will always add `talk()` method into every new object.
* But `eat()` method is attached to **Person.prototype** threfore when we create object using Constructor function `eat()` method will not attached with every object instead of `eat()`method is inherited from  **Person.prototype**.

## Prototype chaining
* Prototypes are the means of inheritance in JavaScript. The prototype of an object would also have a prototype object. This continues until we reach the top level when there is no prototype object.This is called prototype chaining.
 
### 3 way to achieve prototypel inheritance

1) Using constructor function
2) Using class
3) Using Object.cerate method(
