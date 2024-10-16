const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Basic Calculator Using Promises
function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        // Validate inputs
        if (isNaN(num1) || isNaN(num2)) {
            return reject("Invalid numbers provided");
        }
        
        // Perform the calculation based on the operation
        switch (operation) {
            case 'add':
                resolve(num1 + num2);
                break;
            case 'subtract':
                resolve(num1 - num2);
                break;
            case 'multiply':
                resolve(num1 * num2);
                break;
            case 'divide':
                if (num2 === 0) {
                    reject("Error: Division by zero");
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject("Invalid operation");
        }
    });
}

// Function to get user input and perform the calculation
function getUserInput() {
    rl.question('Enter the first number: ', (input1) => {
        const num1 = parseFloat(input1);
        rl.question('Enter the second number: ', (input2) => {
            const num2 = parseFloat(input2);
            rl.question('Enter the operation (add, subtract, multiply, divide): ', (operation) => {
                calculator(num1, num2, operation)
                    .then(result => console.log("Result: " + result))
                    .catch(error => console.error("Error: " + error))
                    .finally(() => rl.close()); // Close the input interface
            });
        });
    });
}

// Start the input process
getUserInput();
