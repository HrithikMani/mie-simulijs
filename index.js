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

  function simulateKeyPress(element, key, callback) {
    const inputEvent = new Event('input', {
      bubbles: true,
      cancelable: true,
      view: window
    });

    element.value += key;
    element.dispatchEvent(inputEvent);

    if (typeof callback === 'function') {
      callback();
    }
  }

  function simulateKeyDown(keyCode, callback) {
    const event = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      view: window,
      keyCode: keyCode
    });
    document.dispatchEvent(event);

    if (typeof callback === 'function') {
      callback();
    }
  }

  function simulateKeyUp(keyCode, callback) {
    const event = new KeyboardEvent('keyup', {
      bubbles: true,
      cancelable: true,
      view: window,
      keyCode: keyCode
    });
    document.dispatchEvent(event);

    if (typeof callback === 'function') {
      callback();
    }
  }

  function simulateMouseEnter(element, callback) {
    const event = new MouseEvent('mouseenter', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);

    if (typeof callback === 'function') {
      callback();
    }
  }

  function simulateMouseLeave(element, callback) {
    const event = new MouseEvent('mouseleave', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);

    if (typeof callback === 'function') {
      callback();
    }
  }

  function simulateFocus(element, callback) {
    const event = new FocusEvent('focus', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);

    if (typeof callback === 'function') {
      callback();
    }
  }

  function simulateChange(element, callback) {
    const event = new Event('change', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);

    if (typeof callback === 'function') {
      callback();
    }
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
