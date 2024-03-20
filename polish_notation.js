function evalRPN(tokens) {
    const stack = [];

    for (const token of tokens) {
        if (isOperator(token)) {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            const result = evaluateExpression(operand1, operand2, token);
            stack.push(result);
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack.pop();
}

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

// Test the function
const tokens = ["2", "1", "+", "3", "*"];
console.log(evalRPN(tokens)); // Output: 9
