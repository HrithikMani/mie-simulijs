
# mie-simulijs

**mie-simulijs** is a JavaScript library that helps simulate events on a webpage. It can simulate mouse and keyboard events programmatically.

## Usage
Here is how you can use the mie-simulijs library to simulate click and keypress events.

## Using CDN
Include the following script tag in your HTML file:

```html
<script src="https://unpkg.com/mie-simulijs"></script>
```

### Simulating Click Event
Create an HTML file (e.g., click-test.html) with the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simulijs Click Test</title>
    <script src="https://unpkg.com/mie-simulijs"></script>
</head>
<body>
    <h1>Simulijs Click Test</h1>

    <button id="testButton">Click me</button>
    <div id="clickResult"></div>

    <script>
        // Ensure simulijs is accessible
        const { simulateClick } = window.simulijs;

        // Select the element
        const testButton = document.getElementById('testButton');
        const clickResult = document.getElementById('clickResult');

        // Add event listener to log event
        testButton.addEventListener('click', () => {
            clickResult.textContent = 'Button was clicked!';
            console.log('Button was clicked!');
        });

        // Simulate events using simulijs
        window.onload = () => {
            // Simulate a button click
            simulateClick(testButton);
        };
    </script>
</body>
</html>
```

### Simulating Keypress Event
Create an HTML file (e.g., keypress-test.html) with the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simulijs Keypress Test</title>
    <script src="https://unpkg.com/mie-simulijs"></script>
</head>
<body>
    <h1>Simulijs Keypress Test</h1>

    <input type="text" id="testInput" placeholder="Type something here">
    <div id="keypressResult"></div>

    <script>
        // Ensure simulijs is accessible
        const { simulateKeyPress } = window.simulijs;

        // Select the element
        const testInput = document.getElementById('testInput');
        const keypressResult = document.getElementById('keypressResult');

        // Add event listener to log event
        testInput.addEventListener('keydown', (event) => {
            keypressResult.textContent = `Key "${event.key}" was pressed!`;
            console.log(`Key "${event.key}" was pressed!`);
        });

        // Simulate events using simulijs
        window.onload = () => {
            // Simulate a key press
            simulateKeyPress(testInput, 'a');
        };
    </script>
</body>
</html>
```

## Using npm
If you prefer to use npm, you can install the package and include it in your project:

```sh
npm install mie-simulijs
```

Then, you can require it in your JavaScript files:

```javascript
const simulijs = require('mie-simulijs');
```

## Functions

### simulateClick

Simulates a mouse click on a given element.

#### Parameters
- `element` (HTMLElement): The element to click.
- `options` (Object): Optional settings.
  - `button` (String): The mouse button to use for the click. Default is `'left'`. Possible values are `'left'`, `'middle'`, and `'right'`.
  - `callback` (Function): A function to call after the click event is dispatched.
  - `delay` (Number): The delay before the click event is dispatched, in milliseconds. Default is `100`.

#### Example

```javascript
simulijs.simulateClick(document.getElementById('myButton'), {
  button: 'right',
  callback: () => console.log('Right click simulated!'),
  delay: 200
});
```

### simulateKeyPress

Simulates a key press on a given element.

#### Parameters
- `element` (HTMLElement): The element to type into.
- `key` (String): The key to simulate.
- `callback` (Function): A function to call after the key press event is dispatched.
- `delay` (Number): The delay before the key press event is dispatched, in milliseconds. Default is `100`.

#### Example

```javascript
simulijs.simulateKeyPress(document.getElementById('myInput'), 'a', () => console.log('Key press simulated!'));
```

### simulateKeyDown

Simulates a key down event on the document.

#### Parameters
- `keyCode` (Number): The key code of the key to simulate.
- `callback` (Function): A function to call after the key down event is dispatched.
- `delay` (Number): The delay before the key down event is dispatched, in milliseconds. Default is `100`.

#### Example

```javascript
simulijs.simulateKeyDown(13, () => console.log('Enter key down simulated!'));
```

### simulateKeyUp

Simulates a key up event on the document.

#### Parameters
- `keyCode` (Number): The key code of the key to simulate.
- `callback` (Function): A function to call after the key up event is dispatched.
- `delay` (Number): The delay before the key up event is dispatched, in milliseconds. Default is `100`.

#### Example

```javascript
simulijs.simulateKeyUp(13, () => console.log('Enter key up simulated!'));
```

### simulateMouseEnter

Simulates a mouse enter event on a given element.

#### Parameters
- `element` (HTMLElement): The element to simulate the event on.
- `callback` (Function): A function to call after the mouse enter event is dispatched.
- `delay` (Number): The delay before the mouse enter event is dispatched, in milliseconds. Default is `100`.

#### Example

```javascript
simulijs.simulateMouseEnter(document.getElementById('myDiv'), () => console.log('Mouse enter simulated!'));
```

### simulateMouseLeave

Simulates a mouse leave event on a given element.

#### Parameters
- `element` (HTMLElement): The element to simulate the event on.
- `callback` (Function): A function to call after the mouse leave event is dispatched.
- `delay` (Number): The delay before the mouse leave event is dispatched, in milliseconds. Default is `100`.

#### Example

```javascript
simulijs.simulateMouseLeave(document.getElementById('myDiv'), () => console.log('Mouse leave simulated!'));
```

### simulateFocus

Simulates a focus event on a given element.

#### Parameters
- `element` (HTMLElement): The element to simulate the event on.
- `callback` (Function): A function to call after the focus event is dispatched.
- `delay` (Number): The delay before the focus event is dispatched, in milliseconds. Default is `100`.

#### Example

```javascript
simulijs.simulateFocus(document.getElementById('myInput'), () => console.log('Focus simulated!'));
```

### simulateChange

Simulates a change event on a given element.

#### Parameters
- `element` (HTMLElement): The element to simulate the event on.
- `callback` (Function): A function to call after the change event is dispatched.
- `delay` (Number): The delay before the change event is dispatched, in milliseconds. Default is `100`.

#### Example

```javascript
simulijs.simulateChange(document.getElementById('mySelect'), () => console.log('Change simulated!'));
```

### simulationSelector

Selects an element based on various criteria (ID, class, XPath, etc.) and returns the element if found.

#### Parameters
- `value` (String): The value used to select the element. It can be an ID, class, CSS selector, or XPath.

#### Example

```javascript
const element = simulijs.simulationSelector('#myId');
if (element) {
  console.log('Element found!', element);
} else {
  console.log('Element not found!');
}
```

## Usage

Include the SimuliJS library in your project and use the provided functions to simulate user interactions.

```html
<script src="path/to/simulijs.js"></script>
<script>
  // Example usage
  simulijs.simulateClick(document.getElementById('myButton'));
</script>
```

SimuliJS makes it easy to automate and test user interactions on your web pages.
