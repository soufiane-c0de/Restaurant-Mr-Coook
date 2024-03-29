function appendToScreen(value) {
    document.getElementById('calculatorScreen').value += value;
  }
  
  function calculate() {
    const screenValue = document.getElementById('calculatorScreen').value;
    try {
      const result = eval(screenValue);
      document.getElementById('calculatorScreen').value = result;
    } catch (error) {
      document.getElementById('calculatorScreen').value = 'Error';
    }
  }
  
  function clearScreen() {
    document.getElementById('calculatorScreen').value = '';
  }
  