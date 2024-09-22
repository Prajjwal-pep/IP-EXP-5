function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        reject('Invalid input: Both inputs must be numbers.');
        return;
      }
  
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
            reject('Error: Division by zero is not allowed.');
          } else {
            resolve(num1 / num2);
          }
          break;
        default:
          reject('Invalid operation: Use "add", "subtract", "multiply", or "divide".');
      }
    });
  }
  

  calculator(10, 5, 'add')
    .then(result => console.log(`Result: ${result}`))
    .catch(error => console.error(`Error: ${error}`));
  
  calculator(10, 0, 'divide')
    .then(result => console.log(`Result: ${result}`))
    .catch(error => console.error(`Error: ${error}`));
  
  calculator(15, 5, 'multiply')
    .then(result => console.log(`Result: ${result}`))
    .catch(error => console.error(`Error: ${error}`));
  
  calculator(20, 5, 'invalid')
    .then(result => console.log(`Result: ${result}`))
    .catch(error => console.error(`Error: ${error}`));
  