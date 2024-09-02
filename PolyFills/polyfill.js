const arr = [1, 2, 3, 4, 5];
const square = arr.map((num) => num*num);
console.log(square);


// map polyfill
Array.prototype.myMap = function (cb){
    let result = [];
    for (let i = 0; i < this.length; i++){
        result.push(cb(this[i], i));
    }
    return result;
}
const square2 = arr.myMap((num) => num*num);
console.log(square2);

const fArr = arr.filter(num => num < 3);
console.log(fArr);


// filter polyfill
Array.prototype.myFilter = function (cb){
    let result = [];
    for (let i = 0; i < this.length; i++){
        if (cb(this[i], i)){
            result.push(this[i]);
        }
    }

    return result;
}

const fArr2 = arr.myFilter((num) => num < 3);
console.log(fArr2);