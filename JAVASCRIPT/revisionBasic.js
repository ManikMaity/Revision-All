// 30 days of js
// const alertBtn = document.getElementById("btn-alert");
// alertBtn.addEventListener("click", (e) => {
//     e.target.innerText.toLowerCase() == "click"
//     ? e.target.innerText = "Clicked"
//     : e.target.innerText = "Click";
// })

const print = (data) => {
  console.log(data);
};

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
  print(str.charAt(2));
  print(str.toLocaleLowerCase().indexOf("a"));
  print(str.lastIndexOf("a"));
};

// stringMethod("Manik is a good boy");\

const str1 =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(str1.match(/love/gi));

const company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// print(company.split(", "));

// console.log("30 Days Of JavaScript".split(" ").filter((word) => word !== "30").join(" "));
// Days Of JavaScript

// const generateRandomNum = (num) => {
//     for (let i = 0; i < num; i++){
//         console.log(Math.floor(Math.random()*51) + 50);
//     }
// }

// generateRandomNum(5);

for (let i = 1; i <= 5; i++) {
  console.log(`${i} ${i} ${i * i} ${i ** 3}`);
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

// const countWordInSentance = (sentance = "") => {
//     console.log(sentance.match(/love/gi).length);
// }

// // countWordInSentance('Love is the best thing in this world. Some found their love and some are still looking for their love.');

// const sumNumberFromStr = (str = "") => {
//     console.log(str.match(/\d+/gi).map(str => Number(str)).reduce((a, b) => a + b));
// }

// sumNumberFromStr('He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.');

// Day 3

// Truthy value -> All string ascept "" and all array acept [], boolean true , all number acept 0
// Falsy value -> false, null, [], "", 0, NaH, undefined

const falsyValue = () => {
  console.log(!null);
  console.log(!NaN);
  console.log([] == false);
  console.log(0 == false);
  console.log(!undefined);
  console.log(false == false);
};

// falsyValue()
/*true
true
true
true
true
true */

// logical operator
const numerCompare = (a, b, c) => {
  if (a > b && a > c) {
    return `${a} is biggest`;
  } else if (b > a && b > c) {
    return `${b} is biggest`;
  } else {
    return `${c} is biggest`;
  }
};

// console.log(numerCompare(100, 20, 25)) // 100 is biggest

// let a = 10;
// console.log(a++); //post increament //10
// console.log(++a); // pre-increameb //12

// Date Object

const date = new Date();
function dateGetting() {
  console.log(date.toUTCString());
}

// dateGetting();
const startTime = () => {
  setInterval(() => {
    document.querySelector(".time").innerText = date.toLocaleTimeString();
  }, 500);
};

// startTime();

//There is no 'on' in both dragon and python

const bothWordHaveText = (text = "", word = []) => {
  if (word[0].includes(text) && word[word.length - 1].includes(text)) {
    console.log(
      `Both ${word[0]} and ${word[word.length - 1]} includes ${text}`
    );
  }
};

// bothWordHaveText("on", ["dragon", "python"]);

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
/*
function calculateY (x = 1){
    console.log((x**2) + (6*x) + 9);
}

// calculateY(0);

const calculateAge = (arr = []) => {
    let ageYear, ageMonth, ageDay;
    let bYear = Number(arr[0]), bMonth = Number(arr[1]), bDay = Number(arr[2]);
    let currentDate = date.toLocaleDateString().split("/");
    let cDay = Number(currentDate[0]), cMonth = Number(currentDate[1]), cYear = Number(currentDate[2])
    if (bDay < cDay){
        ageDay = cDay - bDay;
    }
    else{
        cMonth--;
        cDay+=30;
        ageDay = cDay - bDay;
    }

    if (bMonth < cMonth){
        ageMonth = cMonth - bMonth;
    }
    else{
        cYear--;
        cMonth+= 12;
        ageMonth = cMonth - bMonth;
    }

    ageYear = cYear - bYear;

    return `${ageYear} year, ${ageMonth} month, ${ageDay} days`;
    
}

const ageCalculateBtn = document.querySelector(".age-calculate");
const dateOfBirthEle = document.getElementById("dob");

ageCalculateBtn.addEventListener("click", () => {
    const dob  = dateOfBirthEle.value;
    if (dob){
        const dobArray = dob.split("-");
        const age = calculateAge(dobArray);
        alert(age);
    }
    else{
        alert("Plaese enter date of birth");
    }
}) */

// Day 04 conditions

const readyToDrive = (age) => {
  let message = "";

  switch (true) {
    case age >= 18:
      message = "Youre ready to drive";
      break;
    case age < 18:
      message = `Your are ${18 - age} years younger to drive`;
      break;
    default:
      message = "Dont know";
      break;
  }

  console.log(message);
};

// readyToDrive(16);

// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

const howManyDays = (month = "") => {
  const monthLower = month.toLowerCase();
  let numOfdays = 30;
  if (
    monthLower == "january" ||
    monthLower == "march" ||
    monthLower == "may" ||
    monthLower == "july" ||
    monthLower == "august" ||
    monthLower == "october" ||
    monthLower == "december"
  ) {
    numOfdays = 31;
  } else if (monthLower == "february") {
    numOfdays = 28;
  }

  return `${month} have ${numOfdays} of days.`;
};

// const month = prompt("Enter the month: ");
// console.log(howManyDays(month));

// Arrays in js - Day 05

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

// countries[countries.findIndex(country => country == "Japan")] = "India";
// console.log(countries);

// const arrayOfFourFname = new Array(4).fill("Manik");
// // console.log(arrayOfFourFname);

// const fruits = ["banana", "orange", "mango", "lemon"];
// console.log(fruits.indexOf("orange")); // 1

// const isIncludeInFruitArray = (fruit = "") => {
//   const indexOfFruit = fruits.indexOf(fruit.toLowerCase());
//   if (indexOfFruit !== -1) {
//     return `${fruit} is available in array.`;
//   }
//   return `${fruit} isn't available in fruit array`;
// };

// // console.log(isIncludeInFruitArray("apple"));

// // console.log(fruits.includes("bat")); // false


// // console.log(Array.isArray(fruits)); // true 


// // slice and splice 
// console.log(fruits.slice(0, 3)); //copy
// console.log(fruits); 

// console.log(fruits.splice(0, 2));
// console.log(fruits);

// const numbers = [101, 33, 25, 5, 32];
// console.log(numbers.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     }
//     else{
//         return -1;
//     }
// })); // sorting


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]


  const checkCountry = (item = "", arr = []) => {
    const isThere = arr.indexOf(item);

    isThere != -1 
    ? console.log("It does exit", arr[isThere].toUpperCase(), isThere)
    : arr.push("ETHIOPIA")
  }

  // checkCountry('Ethiopia',countries);

  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  /*
  const todoTextboxEle = document.getElementById("todoInput");
  const todoAddBtnEle = document.querySelector(".add-todo-btn");
  const todoListContainerEle = document.querySelector(".todo-list");


  const markTodo = (ele) => {
    ele.style.textDecoration = "line-through";
  }

  const makeUniqueID = () => {
    return `${(Math.floor(Math.random()*100000))}`;
  }

  const createHTML = (txt = "") => {
    const html = document.createElement("p");
    html.classList.add("todo-item");
    html.setAttribute("id", makeUniqueID());
    html.addEventListener("click", (e)=> {
        markTodo(e.target);
    })
    html.addEventListener("dblclick", (e) => {
        e.target.remove();
    })
    html.innerText = txt;
    return html;
  }


  todoAddBtnEle.addEventListener('click', () => {
    const inputText = todoTextboxEle.value;
    if (inputText != ""){
        todoTextboxEle.value = "";
        let tempHTML = createHTML(inputText);
        todoListContainerEle.insertAdjacentElement("beforeend", tempHTML);
    }

    
  })

*/


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const concateTwoArray = (arr1 = [], arr2 =[]) => {
  return arr1.concat(arr2);
}

// console.log(concateTwoArray(frontEnd, backEnd));

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(Math.max(...ages));



// Develop a small script which generate any number of characters random id:
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba

const chars = "abcdefghijklmnopqrstwxyz1234567890~*&^%$#@!_ABCDEFGHIJKLMNOPQRSTWXYZ";

const makeRandomStrig = (length = 8) => {
  let strID = "";
  for (let i = 0; i < length; i++){
    strID += chars[Math.floor(Math.random()*chars.length)];
  }

  return strID;
}

// console.log(makeRandomStrig(10)); // MCH@k^Q0oM

const charOfArrayAndLength = (arr = []) => {
  const resultArr = arr.map((item) => {
    let tempArr = [item, item.length];
    return tempArr;
  })

  return resultArr;
}


console.log(charOfArrayAndLength(webTechs));

// avoid mutation 
// const webTechs2 = webTechs.slice(0);
// webTechs2[1] = "SCSS";
// console.log(webTechs2);
// console.log(webTechs);

/*

[ 'HTML', 'SCSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB' ]
[ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB' ]

*/

require("./countries.js");
const countries2 = global.countries.slice(0);

const findTheMiddleItem = (arr = []) => {
  return arr[Math.floor(arr.length / 2)];
}

// console.log(findTheMiddleItem(countries2));


// Divide the countries array into two equal arrays if it is even. 
// If countries array is not even , one more country for the first half.

function devideInTwoEualPart(arr = []) {
  const arrLength = arr.length;
  let arrPart1 = [], arrPart2 = [];
  if (arrLength%2 != 0){
    let middle = Math.ceil(arrLength/2);
    arrPart1 = arr.slice(0, middle);
    arrPart2 = arr.slice(middle);
  }
  else{
    arrPart1 = arr.slice(0, arrLength/2);
    arrPart2 = arr.slice(arrLength/2);
  }

  return [arrPart1, arrPart2];
}


// console.log(devideInTwoEualPart(countries2));
// countries2.pop();
// console.log(devideInTwoEualPart(countries2));


// Extract all the countries containing two or more words from the countries array and print it as array
const countries3 = countries2.slice(0);

const getItemWithTwoOrMore = (countries = []) =>{
  const resultArr = [];
  for (let i = 0; i < countries.length; i++){
    if(countries[i].split(" ").length > 1){
      resultArr.push(countries[i]);
    }
  }

  return resultArr;
}


console.log(getItemWithTwoOrMore(countries3));