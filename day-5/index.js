// JS Variable

var name = 'Pranav Shrestha';
let addresh = 'kathmandu, Nepal';
const bloodGroup = 'O+';


console.log('Addresh:', name);


let age = 20;
let isStudent =false;
let fullName = 'pranav';
let hobbies =['Coding','Cooking', 'Gaming']

let user ={
    age : 20,
    isStudent : false,
    Name : 'pranav',
    hobbies : ['Coding','Cooking', 'Gaming']
}

function greet(name){
    console.log('welcome',Name);
}


// DOM manuplation

const headingElement = document.getElementById("heading-2")
console.log("heading element :",headingElement);

const headingElementByQuarry = document.querySelector('#heading-2')
console.log("Heading By Quarry",headingElementByQuarry);

headingElementByQuarry.textContent = 'get element by querry selector';

//Button

const buttonElement = document.querySelector('.btn');

buttonElement.addEventListener('click',function(){
    alert('BUTTON cLICKED');
    console.log('button clicked');
});