function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, '2'); // This will compile but will run into error at runtime
console.log(result); // NaN