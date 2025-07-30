// 41. What is the rest operator used for in function parameters?

/* synetex
function func(...args) {
  // args is an array of all arguments passed
}
 */
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(5, 10, 15, 20)); // 50
