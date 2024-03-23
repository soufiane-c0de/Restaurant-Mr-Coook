document.addEventListener('DOMContentLoaded', function() {
    const screen = document.querySelector('#calculatorScreen');
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '';
    let result = null;
    let lastOperation = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonValue = this.getAttribute('data-num');

            if (buttonValue === '=') {
                if (currentInput && lastOperation) {
                    const num = parseFloat(currentInput);
                    switch (lastOperation) {
                        case '+':
                            result += num;
                            break;
                        case '-':
                            result -= num;
                            break;
                        case '*':
                            result *= num;
                            break;
                        case '/':
                            result /= num;
                            break;
                        default:
                            break;
                    }
                    screen.value = result;
                    currentInput = '';
                    lastOperation = null;
                }
            } else if (buttonValue === 'C') {
                currentInput = '';
                result = null;
                lastOperation = null;
                screen.value = '';
            } else if ('+-*/'.includes(buttonValue)) {
                if (currentInput !== '') {
                    lastOperation = buttonValue;
                    result = parseFloat(currentInput);
                    currentInput = '';
                }
            } else {
                currentInput += buttonValue;
                screen.value = currentInput;
            }
        });
    });
});
