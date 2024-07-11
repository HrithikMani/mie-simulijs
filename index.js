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

    element.value += key;
    element.dispatchEvent(inputEvent);
  }

  function simulateKeyDown(keyCode) {
    const event = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      view: window,
      keyCode: keyCode
    });
    document.dispatchEvent(event);
  }

  function simulateKeyUp(keyCode) {
    const event = new KeyboardEvent('keyup', {
      bubbles: true,
      cancelable: true,
      view: window,
      keyCode: keyCode
    });
    document.dispatchEvent(event);
  }

  function simulateMouseEnter(element) {
    const event = new MouseEvent('mouseenter', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  }

  function simulateMouseLeave(element) {
    const event = new MouseEvent('mouseleave', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  }

  function simulateFocus(element) {
    const event = new FocusEvent('focus', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  }

  function simulateChange(element) {
    const event = new Event('change', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  }

  global.simulijs = {
    simulateClick,
    simulateKeyPress,
    simulateKeyDown,
    simulateKeyUp,
    simulateMouseEnter,
    simulateMouseLeave,
    simulateFocus,
    simulateChange
  };
})(window);
