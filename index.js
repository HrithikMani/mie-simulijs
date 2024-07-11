(function(global) {
  function simulateClick(element, options = {}) {
    const { button = 'left', callback } = options;
    let buttonCode;

    switch (button) {
      case 'middle':
        buttonCode = 1;
        break;
      case 'right':
        buttonCode = 2;
        break;
      case 'left':
      default:
        buttonCode = 0;
    }

    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
      button: buttonCode
    });
    element.dispatchEvent(event);

    if (typeof callback === 'function') {
      callback();
    }
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
