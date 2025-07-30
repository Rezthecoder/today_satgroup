// 39. How do you rename a variable while destructuring?
const user = { name: "Alice", age: 24 };

// Rename 'name' to 'username'
const { name: username, age: userAge } = user;

console.log(username); // "Alice"
console.log(userAge);  // 24
