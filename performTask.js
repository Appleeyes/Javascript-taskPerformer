// generate random numbers
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generate fibonacci sequence
function generateFibSequence(terms){
    let sequence = [0, 1];
    for(let i = 2; i < terms; i++){
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}

// function to perform a task using the generated Fibonacci sequence and random numbers
function performTask(taskCount) {
  const fibonacciSequence = generateFibSequence(taskCount);

  for (let i = 0; i < fibonacciSequence.length; i++) {
    const currentTerm = fibonacciSequence[i];

    if (currentTerm % 2 === 0) {
      const randomNumber = generateRandomNumber(1, currentTerm);
      console.log(`Task ${i + 1}: Fibonacci term ${currentTerm}, Random number: ${randomNumber}`);
    } else {
      console.log(`Task ${i + 1}: Fibonacci term ${currentTerm} is odd, skipping task`);
    }
  }
}

// Example: Perform a task using the first 20 terms of the Fibonacci sequence
performTask(20);