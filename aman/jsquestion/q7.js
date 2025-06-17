let a=0.1
let b=0.2
console.log(a+b);
// value will be 0.30000000000000004

// This is not a JavaScript bug, but a limitation of floating-point arithmetic
//  based on the IEEE 754 standard (used by almost all programming languages).
// Numbers like 0.1 and 0.2 cannot be represented exactly in binary floating-point.
// So 0.1 + 0.2 results in a tiny rounding error, giving 0.30000000000000004 instead of exactly 0.3.