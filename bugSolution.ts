function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result1 = add(1, 2); //Correct addition
console.log(result1); // Output: 3

try {
  let result2 = addSafe(1, '2'); //This will throw an error
  console.log(result2);
} catch (error) {
  console.error(error.message); // Output: Both arguments must be numbers
}

let result3 = addSafe(1, 2); //Correct addition
console.log(result3); //Output: 3