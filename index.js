(function(global) {
  function simulateClick(element) {
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  }

  function simulateKeyPress(element, key) {
     const inputEvent = new Event('input', {
      bubbles: true,
      cancelable: true,
      view: window
    });

    // Append the key to the input element's value
    element.value += key;
    element.dispatchEvent(inputEvent);
  }

  function simulateMouseEnter(element) {
    const event = new MouseEvent('mouseenter', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  }

  // Expose the functions to the global object
  global.simulijs = {
    simulateClick,
    simulateKeyPress,
    simulateMouseEnter
  };
})(window);
