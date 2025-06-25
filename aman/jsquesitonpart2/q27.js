// 27. What does arr.slice(1, 3) return for arr = [10, 20, 30, 40]
let arr=[10,20,30,40]
// it gives 20, 30  only because start with index 1 and end with 3 but 3 doesnot inclouded
let a=arr.slice(1,3)
console.log(a);

// let fruits = ["apple", "banana", "cherry", "mango"];
// let sliced = fruits.slice(1, 3);  // from index 1 to 2 (3 is not included)
// console.log(sliced);  // ["banana", "cherry"]
