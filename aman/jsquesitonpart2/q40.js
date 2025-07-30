// 40. How to use default values in destructuring?
const user = { name: "Alice" };

// 'age' doesn't exist, so default to 25 and adding this value
const { name, age = 25 } = user;

console.log(name); // "Alice"
console.log(age);  // 25
