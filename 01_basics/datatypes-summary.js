const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id == anotherId);

//const bigNumber = 12334567899123334432n

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name:"romit",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

//console.log(typeof heros);



//********************STACK HEAP***************************//


let myYoutubename = "romitmukherjeedotcom "

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "7985223007@paytm"
}

let userTwo = userOne

userTwo.email = "romit@gmaikl.com"

console.log(userOne.email);
console.log(userTwo.email);

 