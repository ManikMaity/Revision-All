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


// console.log(getItemWithTwoOrMore(countries3));


// function 

// with unlimited peramiters

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++){
    sum+= arguments[i];
  }

  return sum;
}
//anonomus with unlimeited args and expresion function
const multiply = function (...args){
  return args.reduce((a, b) => a*b);
}


// console.log(sum(5, 10, 25)); //40
// console.log(multiply(5, 10, 2)); //100


// IIFE
/*
(()=>{

  // inside IIFE there is function scope that why same name variable can be made 

  function sum(a, b) {
    return a + b;
  }

  console.log(sum(5, 10)) //15
  for(let i = 0; i < 10; i++){
    console.log(i);
  }
})()

*/
// Write a function generateColors which can generate any number of hexa or rgb colors.

const makeRandomRGBColor = () =>{
  let colorArr = [];
  for (let i = 0; i < 3; i++){
    colorArr.push(Math.floor(Math.random()*256));
  }

  return `rgb(${colorArr.join(", ")})`
}

const makeRandomHEXColor = () => {
  let hexColor = "";
  const chars = "123456789abcdef";
  for (let i = 0; i < 6; i++){
    hexColor += chars[Math.floor(Math.random()*15)];
  }

  return `#${hexColor}`;
}

const genarateColor = (colorType, num) => {
  const resultArr = [];
  if (colorType.toLowerCase() == "rgb"){
    for (let i = 0; i < num; i++){
      resultArr.push(makeRandomRGBColor());
    }
  }
  else if (colorType.toLowerCase() == "hex"){
    for (let i = 0; i < num; i++){
      resultArr.push(makeRandomHEXColor());
    }
  }

  return resultArr.length < 2 ? resultArr[0] : resultArr;
}

console.log(genarateColor("hex", 3));


const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

// copy the object 

const person2 = Object.assign(person, {});
console.log(person2)

console.log(Object.keys(person2));
console.log(Object.values(person2));
// console.log(Object.values(person2));

console.log(person2.hasOwnProperty("firstName"));



const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: "asab@asab.com",
    skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: "paul@paul.com",
    skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}


const findMERNDev = (obj = {}) => {
  const keys = Object.keys(obj);
  const resultArr = [];
  keys.forEach(key => {
    const skill = obj[key]?.skills;
    if (skill.includes("MongoDB") && skill.includes("Express") && skill.includes("React") && skill.includes("Node")){
      resultArr.push(key);
    }
  })

  return resultArr? "Not Found" : resultArr;
}

// console.log(findMERNDev(users));
/**
 {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
 */


require("./data.js")
const usersData = global.users.slice(0);
const productData = global.products.slice(0);
const newUser = {
  _id: 'ghderc',
  username: 'Thomas',
  email: 'thomas@thomas.com',
  password: '123333',
  createdAt:'08/01/2020 10:00 AM',
  isLoggedIn: false
};

const signUp = (userInfo = {}, data =[]) => {
  const isExit = data.findIndex(users => users.email == userInfo.email);
  if (isExit == -1){
    data.push(userInfo);
    return "Added to database"
  }
  else{
    return `${data[isExit]?.username} already exit`
  }
}

function signIn(email = "", pass = "") {
  for (let i = 0; i < usersData.length; i++){
    if (usersData[i].email == email && usersData[i].password == pass){
      usersData[i].isLoggedIn = true;
      console.log("Your are loged in")
      return;
    }
  }
  return "User Not Found";
}

// console.log(signUp(newUser, usersData));

console.log(signIn("martha@martha.com", "123222"));


/*
 {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
*/
const rateTheProduct = (userID = "", rating, productID = "") => {
  const product = productData.find(product => product["_id"] == productID);
  const isRated = product?.ratings.findIndex(rating => rating.userId == userID);
  if (isRated == -1){
    product.ratings.push({userId : userID, rate: rating});
    console.log("Rating is added")
    return;
  }
  else{
    console.log("Already Rated");
    return;
  }
}

// rateTheProduct("mnaik2003", 4.5, "eedfcf");
// rateTheProduct("mnaik2003", 4.5, "eedfcf");
// console.log(productData[0].ratings);



// callback 
//foreach in callback

const webTechs3 = webTechs.slice(0);


function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++){
    cb(arr[i]);
  }
}

// forEach(webTechs, (tech) => {
//   console.log(tech.toUpperCase());
// })

// setInterval and setTimeout
const sayHello = (name) => {
  console.log(`Hello ${name}.`);
}

// setInterval(() => {
//   sayHello("Manik");
// }, 2000);

const countries5 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
countries5.forEach((country, ind) => {
  console.log(country.toUpperCase(), ind);
})

/**
 * FINLAND 0
DENMARK 1
SWEDEN 2
NORWAY 3
ICELAND 4
 */


const upperCaseCountry = countries5.map(country => country.toUpperCase());
console.log(upperCaseCountry);

const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]


const enghtyAndGreaterScore = scores.filter(player => player.score >= 80);
console.log(enghtyAndGreaterScore)


const users4 = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]


const sortedUserByAge = users4.sort((user1, user2) => {
  return user1.age > user2.age ? -1 : 1;
})

console.log(sortedUserByAge);


const products2 = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


const totalPricOfProduct = products2.filter(product => typeof product.price == "number").reduce((p1, p2) => p1 + p2.price, 0);
// console.log(totalPricOfProduct); //27


const totalPriceOnlyReduce = products2.reduce((acc, product) => {
  return typeof product.price == "number" ? acc + product.price : acc + 0;
}, 0)

// console.log(totalPriceOnlyReduce) // 27

/*{
  "name": "Afghanistan",
  "capital": "Kabul",
  "languages": [
      "Pashto",
      "Uzbek",
      "Turkmen"
  ],
  "population": 40218234,
  "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
  "region": "Asia",
  "area": 652230
},*/


require("./countries_data.js");
const countriesData = global.countries_data.slice(0);
// console.log(countriesData[0]);

const mostSpokenLanguage = (countries = countriesData, num = 10) => {
  // filterout country without language 
  const countryWithLanguage = countries.filter(country => country.hasOwnProperty("languages"));

  // Geting all the language 
  const allLnag = countryWithLanguage.map(country => country.languages).flat()

  //geting unique value
  const uniqueLang = [...new Set(allLnag)];

  //making new arr
  const langAndCountArr = uniqueLang.map(uniLang => {
    const totalLangCount = allLnag.filter(lang => lang == uniLang).length;
    return {country: uniLang, count: totalLangCount};
  }).sort((lang1, lnag2) => {
    return lang1.count > lnag2.count ? -1 : 1
  }).slice(0, num);

  console.log(langAndCountArr);
}


const countries6 = countriesData.slice(0);

const mostPopulatedCountries = (countriesArr = countries6, numOfOutput = 3) => {

    // making and country and population arr
    const countriesAndPopulation = countriesArr.map(country => {
      const tempObj = {};
      tempObj.country = country.name;
      tempObj.population = country.population;
      return tempObj;
    }).sort((country1, country2) => {
      return country1.population > country2.population ? -1 : 1;
    }).slice(0, numOfOutput);


    return countriesAndPopulation;

} 

// console.log(mostPopulatedCountries(countries6, 3))

// console.log(mostSpokenLanguage());


// spread opertaors 
const countries7 = [['Finland', 'Helsinki'], [undefined, 'Stockholm'], ['Norway', 'Oslo']]

for (const [country1 = "India", country2] of countries7){
  console.log(country1);
}

const person3 = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
};



const makeIntro = ({firstName, lastName, age, country, job, skills, languages}) => {
  const skillsText = `${skills.slice(0, - 1).join(", ")} and ${skills[skills.length -1]}`
  const languageText = `${languages.slice(0, -1).join(", ")} and a little bit of ${languages[languages.length - 1]}`;
  const intro = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is a ${job}. He teaches ${skillsText}. He speakes ${languageText}.`;
  return intro;
}

console.log(makeIntro(person3));

// Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)


const frontEnd2 = ['HTML', 'CSS', 'JS', 'React']
const backEnd2 = ['Node', 'Express', 'MongoDB']

const fullStake = [...frontEnd2, ...backEnd2];
const [skill1, skill2, ...restskill] = frontEnd2; 
console.log(restskill); // [ 'JS', 'React' ]


// to copy and change obj value
const user5 = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}


const userWithNewName = {...user5, name:"Mnaik"};
console.log(userWithNewName);

/*
{
  name: 'Mnaik',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki'
}
*/


const students2 = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

/*
{
        name: 'David',
        skills: ['HTM','CSS','JS','React'],
        scores: [98,85,90,95]
      },
*/

const studentArrToObj = (arr = []) => {
  const newStudentObj = arr.map(([name, skills, score]) => {
    return {name: name, skills: skills, scores: score};
  })

  return newStudentObj;
}

// console.log(studentArrToObj(students2));


const student3 = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

const newStudent = {...student3};

const addToSkillSet = ({name, age, skills}, skill, level, skillset = "") => {
  const skilltoAdd = level? {skill: skill, level: level} : skill;
  skills[skillset].push(skilltoAdd);
}


addToSkillSet(student3, "Bootstrap", 8, "frontEnd");
addToSkillSet(student3, "Express", 9, "backEnd");
addToSkillSet(student3, "SQL", undefined, "dataScience");


// console.log(student3.skills.frontEnd, student3.skills.backEnd, student3.skills)


// Error Handling
// try {
//   let lastName = 'Yetayeh'
//   let fullName = fistName + ' ' + lastName
// } catch (err) {
//   console.log("Name of Error: ", err.name);
//   console.log("Description: ", err.message)
// }
// finally{
//   console.log("This will execute")
// }

// This keyword
// This keyword doesnt work with the arrow func
// This is the refrence to object 

const person4 = {
  name : "Manik Maity",
  favfood : "water",
  sayHello : function(){
    console.log(`Hi!, My name is ${this.name}`);
  },

  eat : function (){
    console.log(`${this.name}'s fav food is ${this.favfood}`)
  }
}

// person4.sayHello();
// person4.eat();

//constractot
function Car (make, model, year, color){
  this.Make = make;
  this.Model = model,
  this.Year = year,
  this.Color = color

  this.drive = function (){
    console.log(`You drive ${this.Make}`);
  }

}

const car1 = new Car("Hondai", "i20", 2024, "red");
const car2 = new Car("TVS", "Pulsure", 2024, "black");
console.log(car1);
car1.drive();
console.log(car2);

/*
Car { make: 'Hondai', model: 'i20', year: 2024, color: 'red' }
Car { make: 'TVS', model: 'Pulsure', year: 2024, color: 'black' }
*/


// Classes


