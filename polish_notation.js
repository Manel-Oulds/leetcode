

function isOperator(token) {
    return token === '+' || token === '-' || token === '*' || token === '/';
}

function evaluateExpression(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            // In JavaScript, division truncates towards zero, so we need to handle negative numbers carefully
            return operand1 / operand2 > 0 ? Math.floor(operand1 / operand2) : Math.ceil(operand1 / operand2);
    }
}

