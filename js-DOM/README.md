# Document Object Model (DOM)
* The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

## What is a DOM tree?
* A DOM tree is a tree structure whose nodes represent an HTML or XML document's contents. Each HTML document has a DOM tree representation.

![Alt text](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_Document_Object_Model/using_the_w3c_dom_level_1_core-doctree.jpg)

## Selecting Elements in the DOM
* DOM Selectors, as the name suggests is used to select HTML elements within a document using JavaScript. There are 5 ways in which you can select elements in a DOM using selectors.

    *   getElementsByTagName()
    *   getElementsByClassName()
    *   getElementById()
    *   querySelector()
    *   querySelectorAll()
  
## Styling an Element
* The HTML DOM allows JavaScript to change the style of HTML elements.<br>
To change the style of an HTML element, use this syntax:
```
    document.getElementById(id).style.property = new style
```
**[Reference](https://www.w3schools.com/jsref/dom_obj_style.asp)**

## Creating Elements
* In an HTML document, the ``document.createElement()`` method creates the HTML element specified by tagName.

## Remove an Element
* The ``Element.remove() ``method removes the element from the DOM.

## Adding Element
* The ``Element.append()`` method inserts a set of Node objects or string objects after the last child of the Element. String objects are inserted as equivalent Text nodes.
* The ``appendChild()`` method of the Node interface adds a node to the end of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, ``appendChild()`` moves it from its current position to the new position.

### Differences between ``.append()`` & ``.appendChild()``
* Element.append() allows you to also append string objects, whereas Node.appendChild() only accepts Node objects.
* Element.append() has no return value, whereas Node.appendChild() returns the appended Node object.
* Element.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.

## Event Listeners
* The event listeners are just like event handlers, except that you can assign as many event listeners as you like to a particular event on particular element.
* **Adding Event Listeners**
  * The ``addEventListener()`` method allows you to add event listeners to any HTML DOM elements, the document object, the window object, or any other object that support events.

* We can use the `useCapture` argument of the `addEventListener()`method to register events for capturing phase.
```
    target.addEventListener(type, listener, useCapture)

```
* **Removing Event Listeners**
  * You can use the `removeEventListener()` method to remove an event listener that have been previously attached with the `addEventListener()`.

## Event propagation
* Event propagation is a way to describe the “stack” of events that are fired in a web browser.<br>
* **There are three phases in a JavaScript event**
  * **Capture Phase:** Event propagates starting from ancestors towards the parent of the target. Propagation starts from Window object.
  * **Target Phase:** The event reaches the target element or the element which started the event.
  * **Bubble Phase:** This is the reverse of capture. Event is propagated towards ancestors until Window object.<br><br>
![Alt text](https://miro.medium.com/v2/resize%3Afit%3A640/format%3Awebp/1%2AB0k6-J5ZwfmsxZDXAOCT2Q.jpeg)

### [Event Capturing & Bubbling](./main.js)

* We can use the `stopPropagation()` method stop events from propagating further up or down along the DOM tree.

### Event Delegation
* Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.