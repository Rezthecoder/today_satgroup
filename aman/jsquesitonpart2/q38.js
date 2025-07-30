// 38. What happens if a property doesn't exist when destructuring?
// let make a object
let obj={name:"aman",
    age:25
}
let{name,age,gender}=obj
console.log(name);
console.log(age);
// it gives undifined beacuse gender not in object
console.log(gender);