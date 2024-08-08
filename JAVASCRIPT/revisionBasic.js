// 30 days of js
// const alertBtn = document.getElementById("btn-alert");
// alertBtn.addEventListener("click", (e) => {
//     e.target.innerText.toLowerCase() == "click"
//     ? e.target.innerText = "Clicked"
//     : e.target.innerText = "Click";
// })

const print = (data) => {
    console.log(data);
}


// Day 01

// multiline comment in js

/* comments can make code readable, 
easy to reuse and informative */


// const num = 12;
// const name = "Manik";
// const isTrue = false;
// const what = null;
// let title;


// console.log(typeof num);
// console.log(typeof name);
// console.log(typeof isTrue);
// console.log(typeof what);
// console.log(typeof title);
// Output
// number
// string
// boolean
// object
// undefined


// storing variables in single line 
// const fName = "Manik", lNmae = "Maity", age = 21, isMarried = false, country = "India";
// print([fName, lNmae, age, isMarried, country]);
// // [ 'Manik', 'Maity', 21, false, 'India' ]

// const yourAge = 20;
// console.log(`My age is ${age}.\nYour age is ${yourAge}.`);
/*
My age is 21.
Your age is 20.
*/




// DAY 02 EXERCISE
console.log("Manik".length); // 5

const stringMethod = (str = "") => {
    str = str.trim();
    console.log(str.toUpperCase());
    print(str.toLocaleLowerCase());
    print(str.substring(0, 5));
    print(str.substr(0, 4));
    console.log(str.toLocaleLowerCase().includes("script")); 
    print(str.replace("JavaScript", "Phython"));  
    print(str.charAt(2));;
    print(str.toLocaleLowerCase().indexOf("a"));
    print(str.lastIndexOf("a"))

}

// stringMethod("Manik is a good boy");\

const str1 = "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(str1.match(/love/gi));

const company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' ;
// print(company.split(", "));

// console.log("30 Days Of JavaScript".split(" ").filter((word) => word !== "30").join(" "));
// Days Of JavaScript

// const generateRandomNum = (num) => {
//     for (let i = 0; i < num; i++){
//         console.log(Math.floor(Math.random()*51) + 50);
//     }
// }

// generateRandomNum(5);

for (let i = 1; i <= 5; i++){
    console.log(`${i} ${i} ${i*i} ${i**3}`);
}

/*
1 1 1 1
2 2 4 8
3 3 9 27
4 4 16 64
5 5 25 125
*/

/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/



const countWordInSentance = (sentance = "") => {
    console.log(sentance.match(/love/gi).length);
}

// countWordInSentance('Love is the best thing in this world. Some found their love and some are still looking for their love.');


const sumNumberFromStr = (str = "") => {
    console.log(str.match(/\d+/gi).map(str => Number(str)).reduce((a, b) => a + b));
}

sumNumberFromStr('He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.');





// Day 3 
