// Arrow Function

const greet = (name) => {
    console.log(`hello ${name}`)
};

greet('Pranav');

// Array methods

const Number = [10,20,30,40,50];

// Push and Pop

Number.push(44);
Number.push(100);
console.log(Number);

Number.pop();
console.log(Number.length);

// Map Filter and reduce

const numberList = [10,30,50,65,75];

const doubleNumber = numberList.map((Number)=>{
    return Number * 2;
});

console.log(doubleNumber);

const even = numberList.filter((Number)=>{
    return Number%2 === 0;
});

console.log(even)

const  totalSum = numberList.reduce((accumulator, currentValue)=>{
    console.log(accumulator,currentValue);
},0);

console.log(totalSum);

// Slice and Splice

const fruits = ['apple', 'banana', 'orange', 'kiwi'];

const SliceFruits = fruits.slice(1,3);

// console.log(SliceFruits);

const spliceFruit = fruits.splice(1,4, 'mango', 'Grape');

console.log(spliceFruit)

// spread

const names = ['Alice','Bob','Caren'];

const newNames = [...names,'david','letto'];

console.log(newNames);

const user = {
    name : 'Pranav Shrestha',
    Address : "KAthmandu",
    age : 20
};

const updateUser = {
    ...user,
    isStudent: false,
};

// console.log(updateUser);

// Destructuring

const [firstName,SecondName] = newNames;

// console.log(firstName);
// console.log(SecondName);

const { name, Address} = updateUser;
console.log(name,Address);