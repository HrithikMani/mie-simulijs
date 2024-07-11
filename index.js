window.simulijs = (function() {
  function simulateClick(element) {
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  }

  function simulateKeyPress(element, key) {
    const event = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      key: key
    });
    element.dispatchEvent(event);
  }

  function simulateMouseEnter(element) {
    const event = new MouseEvent('mouseenter', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  }

  return {
    simulateClick,
    simulateKeyPress,
    simulateMouseEnter
  };
})();
