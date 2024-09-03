const arr = [1, 2, 3, 4, 5];
const square = arr.map((num) => num * num);
console.log(square);

// map polyfill
Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i));
  }
  return result;
};
const square2 = arr.myMap((num) => num * num);
console.log(square2);

const fArr = arr.filter((num) => num < 3);
console.log(fArr);

// filter polyfill
Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i)) {
      result.push(this[i]);
    }
  }

  return result;
};

// const fArr2 = arr.myFilter((num) => num < 3);
// console.log(fArr2);

const sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);

// Reduce polyfill
Array.prototype.myReduce = function (cb, initialValue) {
    let accumelator = initialValue;
    for (let i = 0; i < this.length; i++){
        accumelator = accumelator ? cb(accumelator, this[i]) : this[i];
    }
    return accumelator;

};

const sum2 = arr.myReduce((a, b) => a + b, 0);
console.log(sum2);


// call() polyfill

const objCar = {
    name : "Toyota",
    price : "30000"
}
function sayOutLoud (user){
    console.log(`Hello ${user}, This is a ${this.name} car and its price is ${this.price} dollar.`)
}

// sayOutLoud.call(objCar, "Manik");
Function.prototype.myCall = function (obj = {}, ...args) {
    if (typeof this !== "function"){
        throw new Error("This is not a function");
    }
    obj.fn = this;
    obj.fn(...args);
}

sayOutLoud.myCall(objCar, "Manik");