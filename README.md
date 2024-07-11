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
</html> <script src="path/to/your/index.js"></script>
```

## Using npm
If you prefer to use npm, you can install the package and include it in your project:

```sh
npm install mie-simulijs
```
Then, you can require it in your JavaScript files:

```html
 <script src="path/to/your/index.js"></script>
```