// Iterator to square numbers in an array
function squareIterator(arr) {
  let index = 0;
  return {
    next: function() {
      if (index < arr.length) {
        const result = { value: arr[index] ** 2, done: false };
        index++;
        return result;
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const iterator = squareIterator(numbers);

let iterationResult = iterator.next();
while (!iterationResult.done) {
  console.log(iterationResult.value);  // Outputs the square of the numbers
  iterationResult = iterator.next();
}

  
