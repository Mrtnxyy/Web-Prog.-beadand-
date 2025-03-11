let screen = document.getElementById('screen');

    function appendToScreen(value) {
      screen.textContent += value;
    }

    function clearScreen() {
      screen.textContent = '';
    }

    function backspace() {
      screen.textContent = screen.textContent.slice(0, -1);
    }

    function calculateResult() {
      try {
        screen.textContent = eval(screen.textContent);
      } catch (error) {
        screen.textContent = 'Error';
      }
    }