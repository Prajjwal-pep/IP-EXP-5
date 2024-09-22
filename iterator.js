function* squareGenerator(numbers) {
    for (let num of numbers) {
      yield num ** 2;  
    }
  }
  
  // Usage example:
  const numbers = [1, 2, 3, 4, 5];
  const squares = squareGenerator(numbers);
  
  for (const square of squares) {
    console.log(square);  
  }
  