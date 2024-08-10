// Classes
class Product{
    constructor(name, price){
        this.name = name,
        this.price = price
    }

    displayProduct(){
        console.log(`Name: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    calculateGST (taxRate){
        console.log(`The total GST is ${this.price*(taxRate/100)}.`);
    }
}

const product = new Product("Laptop", 12.2);
product.displayProduct();
product.calculateGST(12);

/*
Name: Laptop
Price: 12.2
The total GST is 1.464.
*/

// static 

class MathUtil {
    static PI = 3.14;
    static getDiameter (radius){
        return radius*2;
    };

    static getCirmumfrance(radius){
        return 2*this.PI*radius
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCirmumfrance(10).toFixed(2));


// 3.14 20


class User{
    static userCount = 0;
    constructor (userName){
        this.userName = userName;
        User.userCount++;
    }

    sayHallo (){
        console.log(`Hi, Its ${this.userName} here.`)
    }
}

const manik = new User("Mnaik");
const suman = new User("Sunan");

manik.sayHallo();
console.log(User.userCount);


// Inheritence

class Animal {
    alive = true;
    eat(){
        return (`${this.name} is eating`);
    };
    sleep(){
        return (`${this.name} is sleeping`);
    }
}

class Rabit extends Animal{
    name = "rabbit"

    run(){
        return `${this.name} is running.`
    }
};

class Fish extends Animal{
    name = "fish"

    sweem(){
        return `${this.name} is sweeming`;
    }
}

const rabbit = new Rabit();
console.log(rabbit.eat());
console.log(rabbit.run())

const fish = new Fish();
console.log(fish.sleep())
console.log(fish.sweem());


//Array distructuring 

// two swap two values
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b) //21
//swap in array
const colors = ["red", "green", "blue", "white"];

[colors[0], colors[3]] = [colors[3], colors[0]];
console.log(colors) // [ 'white', 'green', 'blue', 'red' ]


// Nested objects Making 

class Person {
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address)
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}


const manikObj = new Person("Manik", 20, "GM Rd", "Kolkata", "India");
console.log(manikObj);

/*
Person {
  name: 'Manik',
  age: 20,
  address: Address { street: 'GM Rd', city: 'Kolkata', country: 'India' }
}
PS
*/

const cards  = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "K"];

const suffle = (arr) => {
    for(let i = arr.length - 1; i > 0; i--){
        const randomNum = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[randomNum]] = [arr[randomNum], arr[i]];
    }

    return arr;
}

console.log(suffle(cards));


// setTimeout

const timeoutID = setTimeout(()=> {
    console.log("This will run after 4 sec");
}, 4000);

clearTimeout(timeoutID);

let timeOutID1;

const btn1 = document.querySelector(".say-hello");
const btn2 = document.querySelector(".clear-timer");
btn1.addEventListener("click", () => {
    console.log("Started");
    timeOutID1 = setTimeout(() => {
        alert("Hello there");
    }, 4000)
})

btn2.addEventListener("click", ()=> {
    console.log("Cleared")
    clearTimeout(timeOutID1);
})


const timeEle = document.getElementById("time");

const updateTime = () => {
    const timeNow = new Date();
    let hour = timeNow.getHours();
    let amOrPm  = "AM";
    if (hour > 12){
        hour-= 12;
        amOrPm = "PM";
    }
    const munites = timeNow.getMinutes().toString().padStart(2, 0);
    const seconds = timeNow.getSeconds().toString().padStart(2, 0);
    const timeString = `${hour.toString().padStart(2, 0)}:${munites}:${seconds} ${amOrPm}`;
    timeEle.innerText = timeString;
}

setInterval(updateTime, 10);



const startBtnEle = document.getElementById("start");
const pauseBtnEle = document.getElementById("pause");
const restartBtnEle = document.getElementById("restart");
const stopWatchTextEle = document.getElementById("stopWatchText");

let timer = 0; 
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
    
}



function pause(){

}

function reset(){

}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 *60));
    let munites = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 100 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);
    stopWatchTextEle.innerText = `${hours}:${munites}:${seconds}:${miliseconds}`
}

startBtnEle.addEventListener("click", start);