// 37. How do you destructure a nested object

// let make nested object
let obj={
    name:"aman",
    age:25,
    adress:{
        city:"chiba",
        location:"matsudo"
    }
}
// distructued nested Object
const{ name,age,adress,adress:{city,location}}=obj;

console.log(name);
console.log(age);
console.log(adress);
console.log(city);
