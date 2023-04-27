# Proxy Pattern
* With a Proxy Pattern, we get more control over the interactions with certain objects.In JavaScript we have proxy object, A proxy object can determine the behavior whenever we're interacting with the object, for example when we're getting a value, or setting a value.
* Description
The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like getting, setting, and defining properties. Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs.

***You create a Proxy with two parameters:***
* **`target`**: the original object which you want to proxy
* **`handler`**: an object that defines which operations will be intercepted and how to redefine intercepted operations.
* ***Syntex:***
```
    const target = {
        // some propertie
    };

    const handler = {};

    const proxy1 = new Proxy(target, handler);
```
* Instead of interacting with the target object directly, we'll be interacting with the proxy1.

* The second argument of Proxy is the handler. In the handler object, we can define specific behavior based on the type of interaction. Although there are many methods that you can add to the Proxy handler, the two most common ones are get and set:

* **get**: Gets invoked when trying to access a property
* **set**: Gets invoked when trying to modify a property

[See Example](./main.js)
