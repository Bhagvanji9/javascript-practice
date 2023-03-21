## Factory Function
* JavaScript, a constructor function is used to create objects.
* It helps to reduce code duplication.
* The factory function pattern is similar to constructors, but instead of using new to create an object, factory functions simply set up and return the new object when you call the function.
```
  function functionFactory(value1,value2){
            return {
                name : value1;
                age : value2
                intro : function(){
                    colsole.log(`hello, i am ${name} and i'm ${age} years old`)
                }
            }
  }
    const myself = functionFactory("bhagvanji",22);
```
