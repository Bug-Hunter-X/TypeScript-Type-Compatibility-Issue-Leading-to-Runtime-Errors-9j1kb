# TypeScript Type Compatibility Issue Leading to Runtime Errors
This example demonstrates a common issue in TypeScript where type compatibility doesn't guarantee runtime correctness.  Specifically, it shows how the addition of a number and a string compiles without error, but results in `NaN` during execution.

The bug is that TypeScript's type system doesn't prevent the addition of a number and a string, which leads to unexpected behavior at runtime.  The solution involves stricter type checking or runtime validation to catch these errors before they affect the program's output.
